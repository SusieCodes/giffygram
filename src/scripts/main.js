import { getUsers, getPosts, usePostCollection, createPost } from "./data/dataManager.js";
// import { getJokes } from "./data/dadJoke.js";
import { navBar } from "./nav/navBar.js";
import { Footer, changeBtn } from "./nav/footer.js";
import { postList, yearList } from "./feed/postList.js";
import { postEntry } from "./feed/postEntry.js"; 

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
		postElement.innerHTML = postList(allPosts.reverse());
	})
}

const showYearList = (yearClicked) => {
	const yearElement = document.querySelector(".postList");
	getPosts().then((allPosts) => {
		yearElement.innerHTML = yearList(allPosts.reverse(), yearClicked);
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

// const startJokes = () => {
//     const jokeElement = document.querySelector(".jokes");
// 	getJokes().then(apiJoke => {
//     jokeElement.innerHTML = `<h3>${apiJoke.joke}</h3>`;
//     })
// }

// var btn = document.getElementById("jokes-btn");
// btn.addEventListener("click", startJokes);

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
    } else if (event.target.id === "all") {
		changeBtn("All");
        showPostList();   
    }
}

const applicationElement = document.querySelector(".giffygram");

applicationElement.addEventListener("click", handleGiffyClick)


//event listener for edit and delete button
applicationElement.addEventListener("click", (event) => {
	if (event.target.id.startsWith("edit")){
		console.log("post clicked to edit", event.target.id.split("--"))
		console.log("the id is", event.target.id.split("--")[1])
	} else if (event.target.id.startsWith("delete")){
		console.log("post clicked to delete", event.target.id.split("--"))
		console.log("the id is", event.target.id.split("--")[1])
	}
})

// event listener for filtering data based on selection - lesson example


const dropSelectElement = document.querySelector(".example__menu");
dropSelectElement.addEventListener("change", event => {
    if (event.target.id === "yearSelection") {
      const yearAsNumber = parseInt(event.target.value)
      console.log(`User wants to see posts since ${yearAsNumber}`)
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


//   const formElement = document.querySelector(".newPost");

  applicationElement.addEventListener("click", event => {
    if (event.target.id === "newPost__cancel") {
        //clear the input fields
    }
  })
  
  applicationElement.addEventListener("click", event => {
    event.preventDefault();
    if (event.target.id === "newPost__submit") {
    //collect the input values into an object to post to the DB
      const title = document.querySelector("input[name='postTitle']").value
      const url = document.querySelector("input[name='postURL']").value
      const description = document.querySelector("textarea[name='postDescription']").value
      //we have not created a user yet - for now, we will hard code `1`.
      const postObject = {
          title: title,
          imageURL: url,
          description: description,
          userId: 1,
          timestamp: Date.now()
      }
  
    createPost(postObject).then(dbResponse => {
        showPostList()
    });

    }
  })

  