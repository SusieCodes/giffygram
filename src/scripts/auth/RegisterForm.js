export const RegisterForm = () => {

	return `
      <div class="new-post">
      <div class="add-post">
      <h3>Register</h3>
      </div> <!-- closes add-post-->

			<div class="username">
				<input value=""
					name="registerName"
					class="new-post__input"
					type="text"
					placeholder="User Name" />
			</div> <!-- closes username -->

			<div class="email">
				<input value=""
					name="registerEmail"
					class="new-post__input"
					type="text"
					placeholder="name@place.com" />
			</div> <!-- closes email -->

      <div class="registration-btns">
			<button id="register__submit" class="post-submit">REGISTER</button>
			<button id="login__cancel" class="post-cancel">CANCEL</button>
      </div> <!-- closes login-btns -->

		</div>
	`
}
