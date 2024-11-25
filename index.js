function redirect() {
  window.location.href = "https://wa.me/2349152662695";
}

function direct() {
  window.location.href = "tel:+2348083647843";
}

document.addEventListener("DOMContentLoaded", function () {
  const chatbox = document.createElement("div");
  chatbox.innerHTML = `<div class='chat-body'> <p> Hi! How can we help you?</p> 
    <input type="text" placeholder="Type a message..." /> </div>`;

  chatbox.classList.add("chatbox");
  document.body.appendChild(chatbox);
});
