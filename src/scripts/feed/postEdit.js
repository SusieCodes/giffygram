export const PostEdit = (postObj) => {
	return `
	<div class="new-post">

	<div class="add-post">
	<h3>Edit This Post</h3>
	</div> <!-- closes add-post-->

<div class="entry-flex">

		<div class="new-entry-title">
				<input value="${postObj.title}"
						name="postTitle"
						class="new-post__input"
						type="text"
						placeholder="Title" />
		</div> <!-- closes new-entry-title -->

		<div class="new-entry-url">
				<input value="${postObj.imageURL}"
						name="postURL"
						class="new-post__input"
						type="text"
						placeholder="URL of gif " />
		</div> <!-- closes new-entry-url -->

		<div class="new-entry-desc">
				<textarea name="postDescription"
						class="new-post__input--desc"
						placeholder="Tell us about your gif">${postObj.description}</textarea>
		</div> <!-- closes new-entry-desc -->

		<input type="hidden" value="${postObj.id}" name="postId">
		<input type="hidden" value="${postObj.timestamp}" name="postTime">

</div> <!-- closes entry-flex-->

<div class="new-entry-btns">
		<button id="updatePost__${postObj.id}" class="post-submit" type="button">UPDATE</button>
		<button id="new-post__cancel" class="post-cancel" type="button">CANCEL</button>
</div> <!-- closes new-entry-btns -->

</div>
`
}
