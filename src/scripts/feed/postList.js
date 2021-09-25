import { Post } from "./post.js";

export const postList = (allPosts) => {
	let postHTML = "";
		for (const postObject of allPosts) {
			postHTML += Post(postObject)
		}
		return postHTML;	
}

const findYear = (obj) => {
    const dateStr = new Date(obj);
    const yearOnly = dateStr.getFullYear();
    return yearOnly;
}

export const yearList = (allPosts, year) => {
	let yearHTML = "";
	if (year === 2021) {
		for (const postObject of allPosts) {
			let postYear = findYear(postObject.timestamp);
			if (postYear === 2021) {
				yearHTML += Post(postObject)
			} 
		}
		return yearHTML;
	} else if (year === 2020) {
		for (const postObject of allPosts) {
			let postYear = findYear(postObject.timestamp);
			if (postYear === 2020) {
				yearHTML += Post(postObject)
			} 
		}
		return yearHTML;
	} else if (year === 2019) {
		for (const postObject of allPosts) {
			let postYear = findYear(postObject.timestamp);
			if (postYear === 2019) {
				yearHTML += Post(postObject)
			} 
		}
		return yearHTML;
	} else if (year === 2018) {
		for (const postObject of allPosts) {
			let postYear = findYear(postObject.timestamp);
			if (postYear === 2018) {
				yearHTML += Post(postObject)
			} 
		}
		return yearHTML;
	} else if (year === 2017) {
		for (const postObject of allPosts) {
			let postYear = findYear(postObject.timestamp);
			if (postYear === 2017) {
				yearHTML += Post(postObject)
			} 
		}
		return yearHTML;
	}
}

let userCount = 0;

export const userList = (allPosts, loggedInUserId) => {
	let userHTML = "";
    userCount = 0;
	for (const postObject of allPosts) {
		if (postObject.userId === loggedInUserId) {
			userHTML += Post(postObject)
            userCount++;
		} 
	}
    document.getElementById("postCount").innerHTML = `${ userCount }`;
	return userHTML;
}
