import { routes } from "../route.js";
import {modalRender} from "../Profile/modalUtils.js";
import SocketApp from "./SocketApp.js";
import { GAME_TYPE } from "./gameTemplate.js";

export function openPlayGameModal(socketApp, gameType, playerNames) {
    const modalContainer = modalRender('play-game', routes['/game'].playGameTemplate(), false);

    modalContainer.querySelector('.playgame__btn').addEventListener('click', () => {
        socketApp.gameClose();
        modalContainer.remove();
    });
    setupNameAtModal(modalContainer, gameType, playerNames);

    socketApp.setGameContainer(modalContainer);
    socketApp.setGameCanvas(modalContainer.querySelector('#game_playground'));
}

export function openMatchingModal(gameType) {
    const modalContainer = modalRender('matching-game', routes['/game'].matchModalTemplate(gameType), false);
    const socketApp = SocketApp;

    socketApp.matching(gameType);

    document.querySelector('.matching-game__btn').addEventListener('click', () => {
        closeMatchingModal(modalContainer, socketApp);
    });

    socketApp.setMatchingContainer(modalContainer);
}

export function closeMatchingModal(matchingContainer, socketApp) {
    socketApp.waitClose();
    matchingContainer.remove();
}

export function openBoardModal(socketApp, gameType, playerNames) {
    let modalName;
    let modalHtml;

    if (gameType === GAME_TYPE.TOURNAMENT) {
        modalName = "tournament";
        modalHtml = routes['/game'].tournamentModalTemplate();
    } else {
        modalName  = "versus";
        modalHtml = routes['/game'].versusModalTemplate();
    }

    const modalContainer = modalRender(modalName, modalHtml, false);

    modalContainer.querySelector('.modal__ready-btn').addEventListener('click', () => {
        const info = modalContainer.querySelector('.board-modal__info');

        info.classList.add('ingAnimation');
        info.innerHTML = "Waiting for the other one .";

        setupActiveReadyBtn(modalContainer);
        socketApp.readyToPlay();
    });

    setupNameAtModal(modalContainer, gameType, playerNames);
    socketApp.setBoardContainer(modalContainer);
}

export function setupNameAtModal(container, gameType, playerNames) {
    if (Array.isArray(playerNames)) {
        if (gameType === GAME_TYPE.RANDOM) {
            const insertNameContainer = container.querySelectorAll('.insert-playerName');

            if (playerNames[0] !== undefined) {
                insertNameContainer[0].innerHTML = playerNames[0];
            }
            if (playerNames[1] !== undefined) {
                insertNameContainer[1].innerHTML = playerNames[1];
            }
        }
    }
}

export function setupConnectPeopleAtMatchingModal(container, playerNumber) {

}

export function setupDeActiveReadyBtn(container) {
    container.querySelector('.modal__ready-btn').disabled = true;
}

export function setupActiveReadyBtn(container) {
        container.querySelector('.modal__ready-btn').disabled = false;
}

export function setupAvatorAtTournament(container, players) {
    // profile 추가
    console.log("users:", players);
}

export function handleGameModal() {
    const playBtn = document.querySelectorAll('.game__playbtn');

    playBtn[GAME_TYPE.RANDOM].addEventListener('click', () => {
        openMatchingModal(GAME_TYPE.RANDOM);
    });

    playBtn[GAME_TYPE.TOURNAMENT].addEventListener('click', () => {
        openMatchingModal(GAME_TYPE.TOURNAMENT);
    });
}

export function openErrorModal(comment) {
    const modalContainer = modalRender('matching-game', routes['/game'].errorModalTemplate(comment));

    modalContainer.querySelector('.matching-game__btn').addEventListener('click', () => {
        modalContainer.remove();
    });
}