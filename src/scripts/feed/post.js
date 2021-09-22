import { getLikes } from "./../data/dataManager.js";

const formatDate = (obj) => {
    const dateStr = new Date(obj);
    const formattedDate = dateStr.toDateString();
    return formattedDate;
}

let result = undefined;

//this needs to be located above the Post function
//this could also be imported to this module
const getNumberOfLikes = (postId) => {
  getLikes(postId)
  .then(response => {
    document.querySelector(`#my-likes--${postId}`).innerHTML = ` ❤️ &nbsp; Likes &nbsp; ${response.length}`;
    const user = JSON.parse(sessionStorage.getItem("user"));
    console.log("user is returned as: ", user.id);
    console.log("response is: ", response);
    result = response.find(({userId}) => userId === user.id);
    console.log("result is returned as: ", result);
    if (result == undefined) {
      document.getElementById(`like-btn--${postId}`).innerHTML = `<button id="like--${postId}" class="post-btn">LIKE</button>`
    }
  })
}

export const Post = (postObject) => {
    const showDate = formatDate(postObject.timestamp);
    return `
      <section class="post">

        <h3 class="post__title"> ${postObject.title} </h3>
        <div class="image-holder">
        <img class="post__image" src="${postObject.imageURL}" />
        </div> <!-- closes image-holder-->

        <div class="details">
            <div class="details__info"> ${postObject.description}</div>
        </div> <!-- closes details -->

        <div class="details">
            <div class="details__text">Posted By:</div>
            <div class="details__user"> <a href="#"> User #${postObject.userId}</a> on </div>
            <div class="details__when"> ${showDate}</div>
        </div> <!-- closes details -->

        <div class="post-actions">

          <div id="my-likes--${postObject.id}" class="my-likes"> ❤️ &nbsp; Likes &nbsp; ${getNumberOfLikes(postObject.id)} ❤️ </div>

          <div id="postBtns" class="postBtns">
            <div id="like-btn--${postObject.id}" class="">
              
            </div> <!-- closes like-btn-->

            <button id="edit--${postObject.id}" class="post-btn" type="button">EDIT</button>
            <button id="delete--${postObject.id}" class="post-btn" type="button">DELETE</button>
          </div> <!-- closes postBtns -->

    </div> <!-- closes post-actions-->

    </section>
    `
}

