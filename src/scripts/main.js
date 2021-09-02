import { getUsers } from "./data/dataManager.js";
import { getPosts } from "./data/dataManager.js";

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
