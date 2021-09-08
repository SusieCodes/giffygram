import { getUsers, getPosts, getLoggedInUser } from "./data/dataManager.js";
// import { getJokes } from "./data/dadJoke.js";
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

applicationElement.addEventListener("click", (event) => {
	if (event.target.id.startsWith("edit")){
		console.log("post clicked to edit", event.target.id.split("--"))
		console.log("the id is", event.target.id.split("--")[1])
	} else if (event.target.id.startsWith("delete")){
		console.log("post clicked to delete", event.target.id.split("--"))
		console.log("the id is", event.target.id.split("--")[1])
	}
})

applicationElement.addEventListener("change", event => {
    if (event.target.id === "yearSelection") {
      const yearAsNumber = parseInt(event.target.value)
      console.log(`User wants to see posts since ${yearAsNumber}`)
      //invoke a filter function passing the year as an argument
      showFilteredPosts(yearAsNumber);
    }
  })
  
  const showFilteredPosts = (year) => {
    const epoch = Date.parse(`01/01/${year}`);
    // get a copy of the post collection and filter the data
    const filteredData = usePostCollection().filter(singlePost => {
      if (singlePost.timestamp >= epoch) {
        return singlePost
      }
    })
    const postElement = document.querySelector(".postList");
    postElement.innerHTML = PostList(filteredData);
  }