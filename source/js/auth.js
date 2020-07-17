let authForm = document.getElementById("authForm");

authForm.addEventListener("submit", getFormInputs);

function getFormInputs(event) {
  event.preventDefault();

  let email = document.getElementById("loginEmail").value;
  let password = document.getElementById("loginPassword").value;

  authWithEmailAndPassword(email,password);
  window.location = "../requests.html";
}

function authWithEmailAndPassword(email,password) {
  const apiKey = "AIzaSyBKEuMvY8ixQ2LFW9TC-b45udySFcpthjY";
  return fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${apiKey}`, {
    method: "POST",
    body: JSON.stringify({
      email, password,
      returnSecureToken: true
    }),
    header: {
      "Content-Type": "application/json"
    }
  })
    .then(response => response.json())
    .then(data => console.log(data))
}


