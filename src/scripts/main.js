import { getUsers, getPosts, usePostCollection, createPost, deletePost, getSinglePost, getLoggedInUser, setLoggedInUser, updatePost, loginUser, logoutUser, registerUser, clearInfo, postUserLike, getLikes } from "./data/dataManager.js";
import { navBar } from "./nav/navBar.js";
import { Footer, changeBtn } from "./nav/footer.js";
import { postList, yearList, userList } from "./feed/postList.js";
import { postEntry } from "./feed/postEntry.js";
import { PostEdit } from "./feed/postEdit.js"; 
import { RegisterForm } from "./auth/RegisterForm.js"
import { LoginForm } from "./auth/LoginForm.js"

const allUsers = getUsers()
.then(apiUsers => {
    console.log("now we can console the users", apiUsers)
})

const showNavBar = () => {
    const navElement = document.querySelector("header");
	navElement.innerHTML = navBar();
}

const showPostEntry = () => { 
    const entryElement = document.querySelector(".entry-form");
    entryElement.innerHTML = postEntry();
}

const showPostList = () => {
	const postElement = document.querySelector(".postList");
	getPosts().then((allPosts) => {
		postElement.innerHTML = postList(allPosts.reverse());
        document.getElementById("title").innerHTML = `<h3 class="center">All Giffys</h3>`;
        document.getElementById("postCount").innerHTML = 0;
	})
}

const showYearList = (yearClicked) => {
	const yearElement = document.querySelector(".postList");
	getPosts().then((allPosts) => {
		yearElement.innerHTML = yearList(allPosts.reverse(), yearClicked);
	})
}

const showUserList = (loggedInUserId) => {
	const userElement = document.querySelector(".postList");
	getPosts().then((allPosts) => {
		userElement.innerHTML = userList(allPosts.reverse(), loggedInUserId);
	})
}

const showFooter = () => {
    const navElement = document.querySelector("footer");
	navElement.innerHTML = Footer();
}

const showEdit = (postObj) => {
    const entryElement = document.querySelector(".entry-form");
    entryElement.innerHTML = PostEdit(postObj);
}

const startGiffyGram = () => {
    showNavBar();
    showPostEntry();
    showPostList();
    showFooter();
}
  
const checkForUser = () => {
    if (sessionStorage.getItem("user")){
        setLoggedInUser(JSON.parse(sessionStorage.getItem("user")));
      startGiffyGram();
    } else {
        showLoginRegister();
    }
}

const showLoginRegister = () => {
    showNavBar();
    showFooter();
    clearInfo();
    const entryElement = document.querySelector(".entry-form");
    //template strings can be used here too
    entryElement.innerHTML = `${LoginForm()}${RegisterForm()}`;
    //make sure the post list is cleared out
  const postElement = document.querySelector(".postList");
  postElement.innerHTML = "";
}
  
// startGiffyGram();
checkForUser();

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
        window.scrollTo({ top: 0, behavior: "smooth" })   
    } else if (event.target.id === "twenty") {
		changeBtn(2020);
        showYearList(2020);
        window.scrollTo({ top: 0, behavior: "smooth" })   
    } else if (event.target.id === "nineteen") {
		changeBtn(2019);
        showYearList(2019);
        window.scrollTo({ top: 0, behavior: "smooth" })   
    } else if (event.target.id === "eighteen") {
		changeBtn(2018);
        showYearList(2018); 
        window.scrollTo({ top: 0, behavior: "smooth" })  
    } else if (event.target.id === "seventeen") {
		changeBtn(2017);
        showYearList(2017); 
        window.scrollTo({ top: 0, behavior: "smooth" })  
    } else if (event.target.id === "All") {
		changeBtn("All");
        showYearList(All);
        window.scrollTo({ top: 0, behavior: "smooth" })   
    }
}

// saves info for the event listeners to access
const applicationElement = document.querySelector(".giffygram");

//event listener for post message and logout in header and year selection in footer 
applicationElement.addEventListener("click", handleGiffyClick)

//event listener for edit and delete button
applicationElement.addEventListener("click", (event) => {
	if (event.target.id.startsWith("edit")){
		console.log("post clicked to edit", event.target.id.split("--"))
		console.log("the id is", event.target.id.split("--")[1])
        const postId = event.target.id.split("--")[1];
        getSinglePost(postId)
        .then(response => {
        showEdit(response);
        window.scrollTo({ top: 0, behavior: "smooth" })
	})
    }
    if (event.target.id.startsWith("delete")) {
        const postId = event.target.id.split("--")[1];
        deletePost(postId)
        .then(response => {
        showPostList();
        window.scrollTo({ top: 0, behavior: "smooth" })
        })
		console.log("post clicked to delete", event.target.id.split("--"))
		console.log("the id is", event.target.id.split("--")[1])
  }
})

// event listener for new post submit and cancel (new and edit)
applicationElement.addEventListener("click", event => {
// event.preventDefault();
if (event.target.id === "new-post__submit") {
    console.log("you clicked new-post-submit button")
    const title = document.querySelector("input[name='postTitle']").value
    const url = document.querySelector("input[name='postURL']").value
    const description = document.querySelector("textarea[name='postDescription']").value
    const postObject = {
        title: title,
        imageURL: url,
        description: description,
        userId: getLoggedInUser().id, // userId.id,
        timestamp: Date.now()
    }
createPost(postObject).then(dbResponse => {
    showPostList();
    showPostEntry();
});
} else if (event.target.id === "new-post__cancel") {
    console.log("you clicked new-post-cancel button")
    showPostEntry();
}
})
 
// event listener for new post update
applicationElement.addEventListener("click", event => {
    // event.preventDefault();
    if (event.target.id.startsWith("updatePost")) {
        console.log("you clicked updatePost button")
      const postId = event.target.id.split("--")[1];
      //collecting all the details into an object
      const title = document.querySelector("input[name='postTitle']").value
      const url = document.querySelector("input[name='postURL']").value
      const description = document.querySelector("textarea[name='postDescription']").value
      const timestamp = document.querySelector("input[name='postTime']").value
      
      const postObject = {
        title: title,
        imageURL: url,
        description: description,
        userId: getLoggedInUser().id,
        timestamp: parseInt(timestamp),
        id: parseInt(postId)
      }
      
      updatePost(postObject)
        .then(response => {
          showPostList();
          showPostEntry();
        })
    }
  })
  
  applicationElement.addEventListener("click", event => {
    // event.preventDefault();
    if (event.target.id === "login__submit") {
      //collect user input into an object
      const userObject = {
        name: document.querySelector("input[name='name']").value,
        email: document.querySelector("input[name='email']").value
      }
      loginUser(userObject)
      .then(dbUserObj => {
        if(dbUserObj){
          sessionStorage.setItem("user", JSON.stringify(dbUserObj));
          startGiffyGram();
        }else {
          //got a false value - no user
          const entryElement = document.querySelector(".entry-form");
          entryElement.innerHTML = `<div class="userNotExist"><p>That user does not exist. Please try again or register for your free account.</p></div><!-- closes class="userNotExist"--> ${LoginForm()} ${RegisterForm()}`;
        }
      })
    }
    else if (event.target.id === "login__cancel") {
        showLoginRegister();   
    }
  }) 

  applicationElement.addEventListener("click", event => {
    // event.preventDefault();
    if (event.target.id === "register__submit") {
      //collect all the details into an object
      const userObject = {
        name: document.querySelector("input[name='registerName']").value,
        email: document.querySelector("input[name='registerEmail']").value
      }
      registerUser(userObject)
      .then(dbUserObj => {
        sessionStorage.setItem("user", JSON.stringify(dbUserObj));
        startGiffyGram();
      })
    }
     else if (event.target.id === "login__cancel") {
        showLoginRegister();   
    }
  })

  applicationElement.addEventListener("click", event => {
    if (event.target.id === "logout") {        
        logoutUser();
        console.log(getLoggedInUser());
        sessionStorage.clear();
        clearInfo();
        checkForUser();
    }
  })
  
  applicationElement.addEventListener("click", event => {
	// event.preventDefault();
	if (event.target.id.startsWith("like")) {
	  const likeObject = {
		 postId: parseInt(event.target.id.split("--")[1]),
		 userId: getLoggedInUser().id
	  }
	  postUserLike(likeObject)
		.then(response => {
		  showPostList();
		})
	}
  })

  const userListElement = document.getElementById("footer");

  userListElement.addEventListener("click", event => {
    if (event.target.id === "userList") {
        const userId = getLoggedInUser().id
        showUserList(userId);
        changeBtn("user");
        document.getElementById("title").innerHTML = `<h3 class="center">All My Giffys</h3>`
        window.scrollTo({ top: 0, behavior: "smooth" })
    }
    else if (event.target.id === "allUserList") {
        showPostList();
        changeBtn("user");
        document.getElementById("title").innerHTML = `<h3 class="center">All Giffys</h3>`
        window.scrollTo({ top: 0, behavior: "smooth" })
    }
  })

// import { getJokes } from "./data/dadJoke.js";

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

// applicationElement.addEventListener("click", event => {
// event.preventDefault();
// if (event.target.id.startsWith("delete")) {
//     const postId = event.target.id.split("--")[1];
//     deletePost(postId)
//     .then(response => {
//         showPostList();
//     })
// }
// })

// applicationElement.addEventListener("click", event => {
// event.preventDefault();
// if (event.target.id.startsWith("edit")) {
//     const postId = event.target.id.split("--")[1];
//     getSinglePost(postId)
//     .then(response => {
//         showEdit(response);
//     })
// }
// })

// event listener for filtering data based on selection - lesson example

// const dropSelectElement = document.querySelector(".example__menu");
// dropSelectElement.addEventListener("change", event => {
//     if (event.target.id === "yearSelection") {
//       const yearAsNumber = parseInt(event.target.value)
//       console.log(`User wants to see posts since ${yearAsNumber}`)
//       showFilteredPosts(yearAsNumber);
//     }
//   })
  
//   const showFilteredPosts = (year) => {
//     const epoch = Date.parse(`01/01/${year}`);
//     console.log("epoch is saved as: ", epoch)
//     // get a copy of the post collection and filter the data
//     const filteredData = usePostCollection().filter(singlePost => {
//       if (singlePost.timestamp >= epoch) {
//         return singlePost
//       }
//     })
//     const postElement = document.querySelector(".postList");
//     console.log("filterData is saved as: ", filteredData)
//     postElement.innerHTML = postList(filteredData);
//   }
// end of school example

//   const formElement = document.querySelector(".newPost");

// applicationElement.addEventListener("click", event => {
// if (event.target.id === "newPost__cancel") {
//     //clear the input fields
// }
// })