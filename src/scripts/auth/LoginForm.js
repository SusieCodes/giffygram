export const LoginForm = () => {

	return `
		<div class="new-post">
			<div class="add-post">
			<h3>Login</h3>
			</div> <!-- closes add-post-->

			<div class="username">
				<input value=""
					name="name"
					class="new-post__input"
					type="text"
					placeholder="User Name" />
			</div> <!-- closes username-->

			<div class="email">
				<input value=""
					name="email"
					class="new-post__input"
					type="text"
					placeholder="name@place.com" />
			</div>

			<div class="login-btns">
				<button id="login__submit" class="post-submit" type="button">LOGIN</button>
				<button id="login__cancel" class="post-cancel" type="button">CANCEL</button>
			</div> <!-- closes login-btns -->

		</div> <!-- closes new-post -->
	`
}
