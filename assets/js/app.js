const form = document.querySelector("form");
const userName = document.querySelector("#user-name");
const userEmail = document.querySelector("#user-email");
const userPassword = document.querySelector("#user-password");
const userNameMessage = document.querySelector("#user-name-message");
const userEmailMessage = document.querySelector("#user-email-message");
const userPasswordMessage = document.querySelector("#user-password-message");

const modal = document.querySelector(".modal");
const openModalBtn = document.querySelector(".open-modal");
// const closeModalBtn = document.querySelector(".modal-close");

// openModalBtn.addEventListener("click", () => {
// 	modal.classList.add("open");
// });

// closeModalBtn.addEventListener("click", () => {
// 	modal.classList.remove("open");
// });

function dynamicModalActions(selector) {
	const modal = document.querySelector(selector);
	if (modal) {
		modal.classList.add("open");

		const closeBtn = modal.querySelector(".modal-close");

		closeBtn.addEventListener("click", () => {
			modal.classList.remove("open");
		});
	}
}

openModalBtn.addEventListener("click", () => {
	dynamicModalActions("#button-modal");
});

function checkUserName() {
	if (userName.value === "") {
		userNameMessage.textContent = "enter user name";
		userName.classList.remove("success");
		userName.classList.add("error");
		return false;
	} else if (userName.value.length < 5) {
		userNameMessage.textContent = "enter min 5 char";
		userName.classList.remove("success");
		userName.classList.add("error");
		return false;
	} else {
		userNameMessage.textContent = "";
		userName.classList.remove("error");
		userName.classList.add("success");
		return true;
	}
}

function checkUserEmail() {
	if (!userEmail.validity.valid) {
		userEmailMessage.textContent = "enter email";
		if (userEmail.validity.typeMismatch) {
			userEmailMessage.textContent = "enter valid email";
		}
		userEmail.classList.remove("success");
		userEmail.classList.add("error");
		return false;
	} else {
		userEmailMessage.textContent = "";
		userEmail.classList.remove("error");
		userEmail.classList.add("success");
		return true;
	}
}

function checkPassword() {
	if (!userPassword.validity.valid) {
		userPasswordMessage.textContent = "enter password";
		if (userPassword.validity.tooShort) {
			userPasswordMessage.textContent = "password must be min 8 char";
		}
		userPassword.classList.remove("success");
		userPassword.classList.add("error");
		return false;
	} else {
		// console.log("valid");
		userPasswordMessage.textContent = "";
		userPassword.classList.remove("error");
		userPassword.classList.add("success");
		return true;
	}
}

userName.addEventListener("input", checkUserName);
userEmail.addEventListener("input", checkUserEmail);
userPassword.addEventListener("input", checkPassword);

form.addEventListener("submit", (e) => {
	e.preventDefault();

	const isValidUserName = checkUserName();
	const isUserEmailValid = checkUserEmail();
	const isUserPasswordValid = checkPassword();

	// console.log(isValidUserName, isUserEmailValid, isUserPasswordValid);

	if (isValidUserName && isUserEmailValid && isUserPasswordValid) {
		console.log("submit form");
		// form.submit();
		form.reset();

		dynamicModalActions("#form-modal");
	}
});

// errors

const someElement = document.querySelector(".some-element");

console.log(someElement);

// someElement.addEventListener("click", () => {
// 	console.log("click");
// });

try {
	someElement.addEventListener("click", () => {
		console.log("click");
	});
	console.log("try");
} catch (error) {
	console.log("error", error);
} finally {
	console.log("finally");
}

console.log("code after error");
