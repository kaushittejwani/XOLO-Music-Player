const signUp = (e) => {
  let fname = document.getElementById("newUsername").value,
    email = document.getElementById("email").value,
    pwd = document.getElementById("newPassword").value;

  let formData = JSON.parse(localStorage.getItem("formData")) || [];
  // to check if not empty
  if (fname == null) {
    alert("please enter name");
  }
  if (pwd == "") {
    alert("please enter a password");
  } else if (pwd.length < 9) {
    alert("password must be eight character");
  } else {
    // to check if name already registered
    let exist =
      formData.length &&
      JSON.parse(localStorage.getItem("formData")).some(
        (data) => data.fname == fname
      );
    // to register if name not found already
    if (!exist) {
      formData.push({ fname, email, pwd });
      localStorage.setItem("formData", JSON.stringify(formData));
      document.querySelector("form").reset();
      document.getElementById("newUsername").focus();
      alert("Account Created.\n\nPlease Sign In to access the account");
      location.href = "login.html";
    } else {
      alert("Ooopppssss... Duplicate found!!!\nYou have already sigjned up");
    }
    e.preventDefault();
  }
};
// login
const signIn = (e) => {
  let userName = document.getElementById("userName").value,
    pwd = document.getElementById("password").value;

  let formData = JSON.parse(localStorage.getItem("formData")) || [];
  //to check if details exist or correct
  let exist =
    formData.length &&
    JSON.parse(localStorage.getItem("formData")).some(
      (data) => data.fname == userName && data.pwd == pwd
    );
  if (!exist) {
    alert("Incorrect login credentials");
  } else {
    alert("login successfully");
    location.href = "../../index.html";
  }
  e.preventDefault();
};




