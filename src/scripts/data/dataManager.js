export const getUsers = () => {
    return fetch("http://localhost:8088/users")
    .then(response => response.json())
}

export const getPosts = () => {
    return fetch("http://localhost:8088/posts")
    .then(response => response.json())
    .then(parsedResponse => {
        // do something with response here
        return parsedResponse;
    })
}

// not exported because it is only called from within this file
const loggedInUser = {
    "id": "1",
    "name": "Susie",
    "dateJoined": "1630513838389",
    "email": "susie.stanley3@yahoo.com"
}

export const getLoggedInUser = () => {
	return loggedInUser;
}