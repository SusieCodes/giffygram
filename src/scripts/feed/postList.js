import { Post } from "./post.js";


export const postList = (allPosts) => {
	let postHTML = "";
		for (const postObject of allPosts) {
			postHTML += Post(postObject)
		}
		return postHTML;
	
}
