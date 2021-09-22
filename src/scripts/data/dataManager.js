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
    return fetch("http://localhost:8088/posts")
      .then(response => response.json())
      .then(parsedResponse => {
        postCollection = parsedResponse
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


// not exported because it is only called from within this file
// let loggedInUser = {
//     "id": "1",
//     "name": "Susie",
//     "dateJoined": "1630513838389",
//     "email": "susie.stanley3@yahoo.com"
// }


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
      //is there a user?
      console.log("parsedUser", parsedUser) //data is returned as an array
      if (parsedUser.length > 0){
        setLoggedInUser(parsedUser[0]);
        return getLoggedInUser();
      }else {
        //no user
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
  // const titleReset = document.getElementById("title");
  // document.getElementById("title").innerHTML = `<h3 class="center"></h3>`;
  document.getElementById("title").innerHTML = " ";
  document.getElementById("footer-right").innerHTML = " ";
  // hide.style.display = "none";
}