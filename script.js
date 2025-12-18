
const form = document.getElementById("userForm");
const tree = document.getElementById("tree");
const userName = document.getElementById("userName");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const data = {
    name: form.name.value,
    phone: form.phone.value,
    email: form.email.value
  };
  userName.textContent = data.name;
  tree.classList.remove("hidden");

//  George.safwat.saadallah@gmail.com
  fetch("https://formsubmit.co/ajax/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(data)
  })
  .then(response => response.json())
  .then(data => {
    console.log("Email sent successfully", data);
  })
  .catch(error => {
    console.error("Error sending email", error);
  });
});
