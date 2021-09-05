import { getUsers, getPosts, getLoggedInUser } from "./data/dataManager.js";
import { getJokes } from "./data/dadJoke.js";
import { navBar } from "./nav/navBar.js";
import { Footer } from "./nav/footer.js";
import { postList } from "./feed/postList.js";


const allUsers = getUsers()
.then(apiUsers => {
    console.log("now we can console the users", apiUsers)
})
console.log("All users: ", allUsers);

// this does same as above - it just tests if its working ok for now

// getUsers()
// .then(data => {
//     console.log("User Data", data)
// })

// const allPosts = getPosts()
// .then(apiPosts => {
//     console.log("now we can console the posts", apiPosts)
// })
// console.log("All posts: ", allPosts);

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


// listens for click anywhere in main (.giffygram)

const handleGiffyClick = (event) => {
    console.log("what was clicked", event)
    if (event.target.id === "logout") {
        console.log("You clicked on logout")
    } else if (event.target.id === "directMessageIcon") {
        console.log("You clicked on message icon")
    }
}

const applicationElement = document.querySelector(".giffygram");
applicationElement.addEventListener("click", handleGiffyClick)

// applicationElement.addEventListener("click", event => {
// 	if (event.target.id === "logout"){
// 		console.log("You clicked on logout")
// 	} else if (event.target.id === "directMessageIcon") {
//         console.log("You clicked on message icon")
//     }
// })

const chooseYear = (event) => {
    console.log("what was clicked", event)
    if (event.target.id === "logout") {
        console.log("You clicked on logout")
    } else if (event.target.id === "directMessageIcon") {
        console.log("You clicked on message icon")
    }
}

const showPostByYear = () => {
	const yearElement = document.querySelector(".postList");
	getPosts().then((yearPosts) => {
		yearElement.innerHTML = postList(yearPosts);
	})
}


dropElement.addEventListener("click", event => {
    if (event.target.id === "seventeen") {
      const yearAsNumber = parseInt(event.target.value)
  
      console.log(`User wants to see posts since ${yearAsNumber}`)
    }
  })