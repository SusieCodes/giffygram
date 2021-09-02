import { getUsers } from "./data/dataManager.js";
import { getPosts, getLoggedInUser } from "./data/dataManager.js";
import { getJokes } from "./data/dadJoke.js";


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

const allPosts = getPosts()
.then(apiPosts => {
    console.log("now we can console the posts", apiPosts)
})
console.log("All posts: ", allPosts);


/**
 * Main logic module for what should happen on initial page load for Giffygram
 */

/*
    This function performs one, specific task.

    1. Can you explain what that task is?
    2. Are you defining the function here or invoking it?
*/


const startGiffyGram = () => {
    const postElement = document.querySelector(".postList");
	postElement.innerHTML = "Hello Cohort 51"
}
// Are you defining the function here or invoking it?
startGiffyGram();

const startJokes = () => {
    const postElement = document.querySelector(".jokes");
	getJokes().then(apiJoke => {
    postElement.innerHTML = `<h3>${apiJoke.joke}</h3>`;
    })
}

// startJokes();


var btn = document.getElementById("jokes-btn");
btn.addEventListener("click", startJokes);


