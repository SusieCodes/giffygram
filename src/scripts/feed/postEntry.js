export const postEntry = () => {
    return `
    <div class="new-post">

        <div class="add-post">
        <h3>Add A Post</h3>
        </div> <!-- closes add-post-->

        <div class="entry-flex">

            <div class="new-entry-title">
                <input value=""
                    name="postTitle"
                    class="new-post__input"
                    type="text"
                    placeholder="Title" />
            </div> <!-- closes new-entry-title -->

            <div class="new-entry-url">
                <input value=""
                    name="postURL"
                    class="new-post__input"
                    type="text"
                    placeholder="URL of gif " />
            </div> <!-- closes new-entry-url -->
 
            <div class="new-entry-desc">
                <textarea name="postDescription"
                    class="new-post__input--desc"
                    placeholder="Tell us about your gif"></textarea>
            </div> <!-- closes new-entry-desc -->

        </div> <!-- closes entry-flex-->

        <div class="new-entry-btns">
            <button id="new-post__submit" class="post-submit">SAVE</button>
            <button id="new-post__cancel" class="post-cancel">CANCEL</button>
        </div> <!-- closes new-entry-btns -->

    </div>
    `
}