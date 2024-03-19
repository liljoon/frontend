class ProfileModal {
    profileSearchResultTemplate(nickname) {
		return `
            <div class="profile-section__friends--item">
                <div class="profile-section__friends--profile">
                    <div class="profile-section__friends--pic"></div>
                    <div class="profile-section__friends--name">${nickname}</div>
                </div>
            </div>
        `;
    }

    profileSearchTemplate() {
        return `
        <div class="modal__container modal-name__friend-profile">
            <div class="modal__background"></div>
            <div class="profile__search__modal__container">
                <form class="profile__search">
                    <input id="profile__search--input" type="text" placeholder="Profile Search"/>
                    <button class="profile__search--btn">🔍</button>
                </form>
                <div class="profile__result--list">
                </div>
            </div>
        </div>
        `;
    }

    template() {
        return `
        <div class="modal__background"></div>
        <div class="profile-modal__container">
            <div class="profile-modal__header">Edit Profile</div>
            <div class="profile-modal__body">
                <div class="profile-modal__body--header">profile</div>
                <div class="profile-modal__body--content">
                    <div data-name="avator__image-cat" class="profile-modal__avator profile-modal__big-avator"></div>
                    <div class="profile-modal__avatorlist">
                        <div data-name="avator__image-bird" class="profile-modal__avator"></div>
                        <div data-name="avator__image-gadget" class="profile-modal__avator"></div>
                        <div data-name="avator__image-crocodile" class="profile-modal__avator"></div>
                        <div data-name="avator__image-whale" class="profile-modal__avator"></div>
                    </div>
                </div>
                <div class="profile-modal__body--header">nickname</div>
                <div class="profile-modal__body--content">
                    <textarea class="profile-modal__nickname" name="profile-modal__nickname" maxlength="15"></textarea>
                    <div class="profile-modal__text--length"><span>0</span>/15</div>
                </div>
                <div class="profile-modal__body--header">status message</div>
                <div class="profile-modal__body--content">
                    <textarea class="profile-modal__status-message" name="profile-modal__status-message" maxlength="50"></textarea>
                    <div class="profile-modal__text--length"><span>0</span>/50</div>
                </div>
                <button class="profile-modal__save-btn">
                    <i class="bi bi-floppy"></i>
                    save
                </button>
            </div>
        </div>
        `
    }

    friendModalTemplate() {
        return `
        <div class="modal__background"></div>w
        <div class="friend-modal__container">
            <div class="friend-modal__wrapper">
                <div class="friend-modal__box">
                    <div class="friend-modal__avator"></div>
                    <div class="friend-modal__info">
                        <div class="friend-modal__info--nickname">friend name</div>
                        <div class="friend-modal__info--status">status_message here</div>
                    </div>
                </div>
                <div class="friend-modal__box">
                    <div class="friend-modal__game-info">
                        <div class="friend-modal__game-info--rate">Win rate<span>30%</span></div>
                        <div class="friend-modal__game-info--rank">Rank<span>3rd</span></div>
                    </div>
                    <div class="friend-modal__controll">
                        <button class="friend-modal__btn">
                            <i class="bi bi-chat-dots"></i>
                            chat
                        </button>
                        <button class="friend-modal__btn">
                            <i class="bi bi-person-plus"></i>
                            add
                        </button>
                    </div>
                </div>
            </div>
            <div class="friend-modal__wrapper">
                <div class="friend-modal__header">Match history</div>
                <div class="friend-modal__history-list">
                    <div class="friend-modal__history-item">
                        <div class="history-item__day">24/01/26</div>
                        <div class="history-item__profiles">
                            <div class="history-item__profiles--avator match-my-avator"></div>
                            <div>vs</div>
                            <div class="history-item__profiles--avator match-your-avator"></div>
                        </div>
                        <div class="history-item__score">Score 7 : 3</div>
                        <div class="history-item__status">Win</div>
                    </div>
                    <div class="friend-modal__history-item">
                        <div class="history-item__day">24/01/26</div>
                        <div class="history-item__profiles">
                            <div class="history-item__profiles--avator match-my-avator"></div>
                            <div>vs</div>
                            <div class="history-item__profiles--avator match-your-avator"></div>
                        </div>
                        <div class="history-item__score">Score 7 : 3</div>
                        <div class="history-item__status">Win</div>
                    </div>
                </div>
            </div>
        </div>
        `;
    }
}

export default new ProfileModal();