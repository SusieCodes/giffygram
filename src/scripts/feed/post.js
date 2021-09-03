const formatDate = (obj) => {
    const dateStr = new Date(obj);
    const formattedDate = dateStr.toDateString();
    return formattedDate;
}

export const Post = (postObject) => {
    const showDate = formatDate(postObject.timestamp);
    return `
      <section class="post">
        <header>
            <h2 class="post__title"> ${postObject.title} </h2>
        </header>
        <img class="post__image" src="${postObject.imageURL}" />

        <div class="details">
            <div class="details__info"> ${postObject.descript}</div>
        </div> <!-- closes details -->

        <div class="details">
            <div class="details__text">Posted By:</div>
            <div class="details__user"> <a href="#"> User #${postObject.userId}</a> on </div>
            <div class="details__when"> ${showDate}</div>
        </div> <!-- closes details -->
      </section>
    `
  }