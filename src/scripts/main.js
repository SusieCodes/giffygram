import { getUsers, getPosts, getLoggedInUser } from "./data/dataManager.js";
import { getJokes } from "./data/dadJoke.js";
import { navBar } from "./nav/navBar.js";
import { Footer } from "./nav/footer.js";
import { postList, seventeenList, eighteenList, nineteenList, twentyList, twentyOneList } from "./feed/postList.js";

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

const showTwentyOne = () => {
	const yearElement = document.querySelector(".postList");
	getPosts().then((allPosts) => {
		yearElement.innerHTML = twentyOneList(allPosts);
	})
}

const showTwenty = () => {
	const yearElement = document.querySelector(".postList");
	getPosts().then((allPosts) => {
		yearElement.innerHTML = twentyList(allPosts);
	})
}

const showNineteen = () => {
	const yearElement = document.querySelector(".postList");
	getPosts().then((allPosts) => {
		yearElement.innerHTML = nineteenList(allPosts);
	})
}

const showEighteen = () => {
	const yearElement = document.querySelector(".postList");
	getPosts().then((allPosts) => {
		yearElement.innerHTML = eighteenList(allPosts);
	})
}

const showSeventeen = () => {
	const yearElement = document.querySelector(".postList");
	getPosts().then((allPosts) => {
		yearElement.innerHTML = seventeenList(allPosts);
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
    } else if (event.target.id === "twentyone") {
        showTwentyOne();   
    } else if (event.target.id === "twenty") {
        showTwenty();   
    } else if (event.target.id === "nineteen") {
        showNineteen();   
    } else if (event.target.id === "eighteen") {
        showEighteen();   
    } else if (event.target.id === "seventeen") {
        showSeventeen();   
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

// in the middle of rewriting this code from above
// const chooseYear = (event) => {
//     console.log("what was clicked", event)
//     if (event.target.id === "logout") {
//         console.log("You clicked on logout")
//     } else if (event.target.id === "directMessageIcon") {
//         console.log("You clicked on message icon")
//     }
// }

// rewriting showPostList from above
// const showTwentyOne = () => {
// 	const yearElement = document.querySelector(".postList");
// 	getPosts().then((yearPosts) => {
// 		yearElement.innerHTML = twentyOneList(yearPosts);
// 	})
// }

// const dropElement = document.querySelector("#twentyone");
// dropElement.addEventListener("click", showYearList);





// event => {
//     if (event.target.id === "twentyone") {
//         console.log("you clicked on twentyone")
//         const showTwentyOne = () => {
//             const yearElement = document.querySelector(".postList");
//             getPosts().then((yearPosts) => {
//                 yearElement.innerHTML = twentyOneList(yearPosts);
//             })
//         }
//     }
//   })
