let userCollection = [];

export const getUsers = () => {
    return fetch("http://localhost:8088/users")
    .then(response => response.json())
    .then(parsedResponse => {
        userCollection = parsedResponse
        return parsedResponse;
      })
}

let postCollection = [];

export const getPosts = () => {
  const userId = getLoggedInUser().id
  return fetch(`http://localhost:8088/posts?_expand=user`)
    .then(response => response.json())
    .then(parsedResponse => {
      console.log("data we fetched with user", parsedResponse)
      postCollection = parsedResponse;
      console.log("data we saved into postCollection is: ", postCollection)
      return parsedResponse;
    })
}


// this is from class lesson example but I used my own so it's never invoked on main.js -- keeping for future reference
export const usePostCollection = () => {
    return [...postCollection];
}

export const createPost = postObj => {
    console.log("createPost has been initiated");
    return fetch("http://localhost:8088/posts", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(postObj)})
        .then(response => response.json())
}

export const deletePost = postId => {
  return fetch(`http://localhost:8088/posts/${postId}`, {
      method: "DELETE",
      headers: {
          "Content-Type": "application/json"
      }

  })
      .then(response => response.json())
}

export const getSinglePost = (postId) => {
  return fetch(`http://localhost:8088/posts/${postId}`)
    .then(response => response.json())
}

export const updatePost = postObj => {
  return fetch(`http://localhost:8088/posts/${postObj.id}`, {
      method: "PUT",
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify(postObj)

  })
      .then(response => response.json())
}


let loggedInUser = {}

export const getLoggedInUser = () => {
  console.log("getLoggedInUser executed");
	return loggedInUser;
}

export const setLoggedInUser = (userObj) => {
  console.log("setLoggedInUser executed");
    loggedInUser = userObj;
  }

export const loginUser = (userObj) => {
  return fetch(`http://localhost:8088/users?name=${userObj.name}&email=${userObj.email}`)
  .then(response => response.json())
  .then(parsedUser => {
    //checks that there is a user
    console.log("parsedUser (from loginUser function) returned from fetch to see if user input name and email exists in json file", parsedUser) //data is returned as an array
    if (parsedUser.length > 0){ // checks to see if there is info in the array
      setLoggedInUser(parsedUser[0]);
      return getLoggedInUser();
    }else {
      //if no user
      return false;
    }
  })
}

export const logoutUser = (userObj) => {
  console.log("you pressed logout");
}

export const registerUser = (userObj) => {
  return fetch(`http://localhost:8088/users`, {
    method: "POST",
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify(userObj)
  })
  .then(response => response.json())
  .then(parsedUser => {
    setLoggedInUser(parsedUser);
    return getLoggedInUser();
  })
}

export const clearInfo = () => {
  document.getElementById("title").innerHTML = " ";
  document.getElementById("footer-right").innerHTML = " ";
  document.getElementById("hide-nav__search").innerHTML = " ";
  document.getElementById("hide-nav__message").innerHTML = " ";
  document.getElementById("hide-nav__logout").innerHTML = " ";
  document.getElementById("userOrAll").innerHTML = " ";
  // hide.style.display = "none";
}

export const postUserLike = likeObject => {
	return fetch(`http://localhost:8088/userLikes/`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json"
		},
		body: JSON.stringify(likeObject)
	})
		.then(response => response.json())
		
}

export const getLikes = (postId) => {
  return fetch(`http://localhost:8088/userLikes?postId=${postId}`)
    .then(response => response.json())
}
