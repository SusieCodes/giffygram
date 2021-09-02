import { getUsers } from "./data/dataManager.js";
import { getPosts, getLoggedInUser } from "./data/dataManager.js";

const allUsers = getUsers()
.then(apiUsers => {
    console.log("now we can console the users", apiUsers)
})
console.log("All users: ", allUsers);


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

getUsers()
.then(data => {
    console.log("User Data", data)
})