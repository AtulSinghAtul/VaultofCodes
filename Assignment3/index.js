function myFunction(event) {
  event.preventDefault();

  console.log("before clicked");
  console.log(event);

  const firstName = document.getElementById("fName").value;

  const lastName = document.getElementById("lName").value;

  const password = document.getElementById("password").value;

  const confirmPassword = document.getElementById("confirmPassword").value;

  const email = document.getElementById("email").value;

  const dob = document.getElementById("dob").value;

  const gender = document.getElementById("gender").value;

  const follow = document.getElementById("email").value;

  const formData = {
    firstName: firstName,
    lastName: lastName,
    password: password,
    confirmPassword: confirmPassword,
    email: email,
    dob: dob,
    gender: gender,
    follow: follow,
  };
  console.log("after clicked");
  console.log(formData);
}

const form = document.getElementById("form");
form.addEventListener("submit", myFunction);
