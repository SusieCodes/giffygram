export const navBar = () => {
    return `
        <nav class="navigation">
            <div class="navigation__left navigation__icon">
                <img id="jar" src="./images/giffylogo.png" alt="Giffygram logo" />
            </div>
            <div class="navigation__left navigation__name">
                Giffygram
            </div>
            <div id="hide-nav__search" class="navigation__left navigation__search">
                <input type="text" id="postSearch" placeholder=" Search posts..." />
            </div>
            <div id="hide-nav__message" class="navigation__message"><p>Post Message ⇨</p>
                <img id="pen" src="./images/fountain-pen.svg" alt="Direct message" />
            </div>
            <div id="hide-nav__logout" class="navigation__logout">
                <button id="logout" class="fakeLink" type="button">Logout</button>
            </div>
        </nav>
    `
}