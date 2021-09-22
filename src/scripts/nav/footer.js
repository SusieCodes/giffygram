export const Footer = () => {
    return `
            <div class="footer__left">
                <img id="jar" src="./images/giffylogo.png" alt="Giffygram icon" />
            </div>

            <div class="footer__middle">
                <p class="giffy">Giffygram</p>
                <p class="copyright">&copy;2021 Susie Stanley</p>
            </div>
           
            
 <!--  this was class example but I used mine instead --         
            <div id="example" class="example__menu">

                <div class="dropmenu__holder">
                    <span class="drop-text">Posts since </span><select id="yearSelection">
                        <option>2021</option>
                        <option>2020</option>
                        <option>2019</option>
                        <option>2018</option>
                        <option>2017</option>
                        <option>All</option>
                    </select>

                    <span id="postCount" class="post-count"> = 0</span>
                </div>

            </div> 
closing of class example -->           

            <div id="footer-right" class="footer__right">

                <div class="col1">Posts from
                </div> <!-- closes col1-->

                <div class="col2">
                    <div id="yearChoice" class="dropup-menu">
                         
                            <button class="menu-btn">Choose</button>
                            <div class="menu-content">
                            <div id="twentyone" class="links">2021</div>
                            <div id="twenty" class="links">2020</div>
                            <div id="nineteen" class="links">2019</div>
                            <div id="eighteen" class="links">2018</div>
                            <div id="seventeen" class="links">2017</div>
                            <div id="all" class="links">All</div>
                            </div> <!-- closes menu-content -->
            
                    </div> <!-- closes yearChoice dropup-menu -->
                </div> <!-- closes col2-->

                <div class="col3"><div> =  &nbsp;</div><div id="postCount" class="post-count">0</div>
                </div> <!-- closes col3-->

            </div> <!-- closes footer__right -->
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
        <div id="all" class="links">All</div>
        </div> <!-- closes menu-content -->
        `;
        if (year === "All") {
        document.getElementById("title").innerHTML = `<h3 class="center">All My Giffys</h3>`    
        } else {
        document.getElementById("title").innerHTML = `<h3 class="center">Giffys from ${year}</h3>`;
        }
}
