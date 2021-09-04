export const Footer = () => {
    return `
            <div class="footer__left">
                <img src="./images/giffylogo.png" alt="Giffygram icon" />
            </div>

            <div class="footer__middle footer__name">
                <p class="giffy">Giffygram</p>
                <p class="copyright">&copy;2021 Susie Stanley | All Rights Reserved</p>
            </div>
            
            <div class="footer-flex">

                <div class="col1">Posts since
                </div> <!-- closes col1-->

                <div class="col2">
                    <div class="dropup-menu">
                         
                            <button class="menu-btn">Years</button>
                            <div class="menu-content">
                            <a class="links" href="#">2021</a>
                            <a class="links" href="#">2020</a>
                            <a class="links" href="#">2019</a>
                            <a class="links" href="#">2018</a>
                            <a class="links" href="#">2017</a>
                            </div> <!-- closes menu-content -->
            
                    </div> <!-- closes dropup-menu -->
                </div> <!-- closes col2-->

                <div class="col3"><div> =  &nbsp;</div><div id="postCount">0</div>
                </div> <!-- closes col3-->

            </div> <!-- closes footer-flex -->
    `
}