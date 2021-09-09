export const getUsers = () => {
    return fetch("http://localhost:8088/users")
    .then(response => response.json())
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

export const usePostCollection = () => {
    return [...postCollection];
}

export const createPost = postObj => {
    return fetch("http://localhost:8088/posts", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(postObj).then(response => response.json())
  })
}

// not exported because it is only called from within this file
// const loggedInUser = {
//     "id": "1",
//     "name": "Susie",
//     "dateJoined": "1630513838389",
//     "email": "susie.stanley3@yahoo.com"
// }

// export const getLoggedInUser = () => {
// 	return loggedInUser;
// }