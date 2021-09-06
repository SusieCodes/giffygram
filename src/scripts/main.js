import { getUsers, getPosts, getLoggedInUser } from "./data/dataManager.js";
import { getJokes } from "./data/dadJoke.js";
import { navBar } from "./nav/navBar.js";
import { Footer, changeBtn } from "./nav/footer.js";
import { postList, yearList } from "./feed/postList.js";

const allUsers = getUsers()
.then(apiUsers => {
    console.log("now we can console the users", apiUsers)
})
console.log("All users: ", allUsers);

const showNavBar = () => {
    const navElement = document.querySelector("header");
	navElement.innerHTML = navBar();
}

const showPostList = () => {
	const postElement = document.querySelector(".postList");
	getPosts().then((allPosts) => {
		postElement.innerHTML = postList(allPosts);
	})
}

const showYearList = (yearClicked) => {
	const yearElement = document.querySelector(".postList");
	getPosts().then((allPosts) => {
		yearElement.innerHTML = yearList(allPosts, yearClicked);
	})
}

const showFooter = () => {
    const navElement = document.querySelector("footer");
	navElement.innerHTML = Footer();
}

const startGiffyGram = () => {
    showNavBar();
    showPostList();
    showFooter();
}

startGiffyGram();


// start dadjokes section *******************

const startJokes = () => {
    const jokeElement = document.querySelector(".jokes");
	getJokes().then(apiJoke => {
    jokeElement.innerHTML = `<h3>${apiJoke.joke}</h3>`;
    })
}

var btn = document.getElementById("jokes-btn");
btn.addEventListener("click", startJokes);

// end dadjokes section *********************

const handleGiffyClick = (event) => {
    console.log("what was clicked", event)
    if (event.target.id === "logout") {
        console.log("You clicked on logout")
    } else if (event.target.id === "pen") {
        alert("You clicked on the pen")
    } else if (event.target.id === "jar") {
        alert("You clicked on the pb jar")
    } else if (event.target.id === "twentyone") {
		changeBtn(2021);
        showYearList(2021);   
    } else if (event.target.id === "twenty") {
		changeBtn(2020);
        showYearList(2020);   
    } else if (event.target.id === "nineteen") {
		changeBtn(2019);
        showYearList(2019);   
    } else if (event.target.id === "eighteen") {
		changeBtn(2018);
        showYearList(2018);   
    } else if (event.target.id === "seventeen") {
		changeBtn(2017);
        showYearList(2017);   
    }
}

const applicationElement = document.querySelector(".giffygram");
applicationElement.addEventListener("click", handleGiffyClick)

const editElement = document.getElementById("postBtns");
editElement.addEventListener("click", (event) => {
	if (event.target.id.startsWith("edit")){
		console.log("post clicked", event.target.id.split("--"))
		console.log("the id is", event.target.id.split("--")[1])
	}
})