export class Requests {
  static create(request) {
    return fetch("https://catenergy-9ff12.firebaseio.com/requests.json", {
      method: "POST",
      body: JSON.stringify(request),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(response => response.json())
      .then(response => {
        request.id = response.name
        return request
      })
  }
}

function addToLocalStorage(request) {
  const all = getRequestsFromLocalStorage();
  all.push(request);
  localStorage.setItem("requests", JSON.stringify(all));
}

function getRequestsFromLocalStorage() {
  return JSON.parse(localStorage.getItem("requests") || "[]")
}

function toCard(request) {
  return "11";
}