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

export const seventeenList = (allPosts) => {
	let yearHTML = "";
		for (const postObject of allPosts) {
			let postYear = findYear(postObject.timestamp);
			if (postYear === 2017) {
				yearHTML += Post(postObject)
		    } 
		}
		return yearHTML;
}

export const eighteenList = (allPosts) => {
	let yearHTML = "";
		for (const postObject of allPosts) {
			let postYear = findYear(postObject.timestamp);
			if (postYear === 2018) {
				yearHTML += Post(postObject)
		    } 
		}
		return yearHTML;
}

export const nineteenList = (allPosts) => {
	let yearHTML = "";
		for (const postObject of allPosts) {
			let postYear = findYear(postObject.timestamp);
			if (postYear === 2019) {
				yearHTML += Post(postObject)
		    } 
		}
		return yearHTML;
}

export const twentyList = (allPosts) => {
	let yearHTML = "";
		for (const postObject of allPosts) {
			let postYear = findYear(postObject.timestamp);
			if (postYear === 2020) {
				yearHTML += Post(postObject)
		    } 
		}
		return yearHTML;
}

export const twentyOneList = (allPosts) => {
	let yearHTML = "";
		for (const postObject of allPosts) {
			let postYear = findYear(postObject.timestamp);
			if (postYear === 2021) {
				yearHTML += Post(postObject)
		    } 
		}
		return yearHTML;	
}
