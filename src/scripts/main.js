import { getUsers, getPosts, getLoggedInUser } from "./data/dataManager.js";
import { getJokes } from "./data/dadJoke.js";
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

const allPosts = getPosts()
.then(apiPosts => {
    console.log("now we can console the posts", apiPosts)
})
console.log("All posts: ", allPosts);

const showPostList = () => {
	const postElement = document.querySelector(".postList");
	getPosts().then((allPosts) => {
		postElement.innerHTML = postList(allPosts);
	})
}

const startGiffyGram = () => showPostList();

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


