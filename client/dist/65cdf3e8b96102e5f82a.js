const email = document.querySelector("#email");
const username = document.querySelector("#username");
const password = document.querySelector("#password");
const signupSubmitBtn = document.querySelector(".signup-submit-btn");
const createUserHandler = async function (e) {
  e.preventDefault();
  const emailInput = email.value.trim();
  const usernameInput = username.value.trim();
  const passwordInput = password.value.trim();
  if (usernameInput === "") {
    // // CODE TO WARN USER
    // const signupEmailErrMsg = document.querySelector("#signup-err-no-email");
    // signupEmailErrMsg.setAttribute("style", "display: block;");
    // const timeoutAmt = 1000 * 3;
    // setTimeout(() => {
    // 	signupEmailErrMsg.setAttribute("style", "display: none;");
    // }, timeoutAmt);
  }
  if (password) {
    const newUser = {
      emailInput,
      usernameInput,
      passwordInput
    };
    const response = await fetch("/api/users", {
      method: "POST",
      body: JSON.stringify(newUser),
      headers: {
        "Content-Type": "application/json"
      }
    });
    if (response.ok) {
      document.location.replace("/");
    } else {
      alert("Failed to sign up.");
    }

    // const userData = postData("/api/users", newUser);
    // setBookReadTotals();
    // renderBooks();
  }

  // const response = postData("/api/users");

  // // old logic
  // currentBooks.push(newUser);
  // setCurrentBooks(currentUsers);
  // console.log(currentUsers);
  // localStorage.setItem("books", JSON.stringify(currentBooks));
  // addBookSection.setAttribute("style", "display: none;");
  // setBookReadTotals();
  // renderBooks();
};

signupSubmitBtn.addEventListener("submit", createUserHandler);