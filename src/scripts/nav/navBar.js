export const navBar = () => {
    return `
        <nav class="navigation">
            <div class="navigation__left navigation__icon">
                <img src="./images/giffylogo.png" alt="Giffygram logo" />
            </div>
            <div class="navigation__left navigation__name">
                Giffygram
            </div>
            <div class="navigation__left navigation__search">
                <input type="text" id="postSearch" placeholder=" Search posts..." />
            </div>
            <div class="navigation__right navigation__message"><p>Post Message ⇨</p>
                <img id="directMessageIcon" src="./images/fountain-pen.svg" alt="Direct message" />
            </div>
            <div class="navigation__right navigation__logout">
                <button id="logout" class="fakeLink">Logout</button>
            </div>
        </nav>
    `
}