export const Footer = () => {
    return `
            <div class="footer__left">
                <img id="jar" src="./images/giffylogo.png" alt="Giffygram icon" />
            </div>

            <div class="footer__middle footer__name">
                <p class="giffy">Giffygram</p>
                <p class="copyright">&copy;2021 Susie Stanley | All Rights Reserved</p>
            </div>
            
            <div class="footer-flex">

                <div class="col1">Posts since
                </div> <!-- closes col1-->

                <div class="col2">
                    <div id="yearChoice" class="dropup-menu">
                         
                            <button class="menu-btn">Choose</button>
                            <div class="menu-content">
                            <div id="twentyone" class="links">2021</div>
                            <a id="twenty" class="links">2020</a>
                            <a id="nineteen" class="links">2019</a>
                            <a id="eighteen" class="links">2018</a>
                            <a id="seventeen" class="links">2017</a>
                            <div id="all" class="links">Show All</div>
                            </div> <!-- closes menu-content -->
            
                    </div> <!-- closes yearChoice dropup-menu -->
                </div> <!-- closes col2-->

                <div class="col3"><div> =  &nbsp;</div><div id="postCount">0</div>
                </div> <!-- closes col3-->

            </div> <!-- closes footer-flex -->
    `
}

export const changeBtn = (year) => {
	document.getElementById("yearChoice").innerHTML = `
        <button class="menu-btn">${year}</button>
        <div class="menu-content">
        <div id="twentyone" class="links">2021</div>
        <div id="twenty" class="links">2020</div>
        <div id="nineteen" class="links">2019</div>
        <div id="eighteen" class="links">2018</div>
        <div id="seventeen" class="links">2017</div>
        <div id="all" class="links">Show All</div>
        </div> <!-- closes menu-content -->
        `;
        document.getElementById("title").innerHTML = `<h3 class="center">Giffys from ${year}</h3>`;
}
