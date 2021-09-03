const formatDate = (obj) => {
    const dateStr = new Date(obj);
    const formattedDate = dateStr.toUTCString();
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
            <div class="details__text">Posted By: &nbsp;&nbsp;&nbsp;&nbsp;</div>
            <div class="details__info"> ${postObject.userId}</div>
        </div> <!-- closes details -->
        <div class="details">
            <div class="details__text">Description: &nbsp;&nbsp;</div>
            <div class="details__info"> ${postObject.descript}</div>
        </div> <!-- closes details -->
        <div class="details">
        <div class="details__text">Posted at: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
        <div class="details__info"> ${showDate}</div>
        </div> <!-- closes details -->
      </section>
    `
  }