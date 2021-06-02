document.addEventListener("DOMContentLoaded", function () {
  let btn = document.createElement("button");
  btn.innerText = "Click Me";
  btn.style.margin = "1em";
  document.body.appendChild(btn);

  btn.addEventListener("click", function () {
    alert("This is a nice message for you to read.");
  });

  let submitValButton = document.getElementById("html-button");
  submitValButton.addEventListener("click", function () {
    let textVal = document.getElementById("text-box").value;
    alert(textVal);
  });

  let div = document.getElementById("div");
  div.addEventListener("mouseenter", function () {
    div.style.backgroundColor = "blue";
  });

  div.addEventListener("mouseleave", function () {
    div.style.backgroundColor = "cornsilk";
  });

  let paragraph = document.createElement("p");
  let paragraphText = document.createTextNode(
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  );

  paragraph.appendChild(paragraphText);
  paragraph.style.margin = "1em";
  document.body.appendChild(paragraph);

  let colors = [
    "brick",
    "cadetblue",
    "lightgreen",
    "coral",
    "darkorange",
    "purple",
    "lavender",
    "chocolate",
  ];

  paragraph.addEventListener("click", function (e) {
    paragraph.style.color = colors[Math.floor(Math.random() * colors.length)];
  });

  let btnThree = document.createElement("button");
  btnThree.innerText = "Click Here";
  btnThree.style.margin = "1em";
  document.body.appendChild(btnThree);
  let emptyDiv = document.createElement("div");
  document.body.appendChild(emptyDiv);

  btnThree.addEventListener("click", function () {
    let myName = document.createElement("span");
    myName.innerText = "Madison";
    myName.style.margin = "1em";
    myName.style.display = "fixed";

    emptyDiv.appendChild(myName);
  });

  let myFriends = [
    "Anna",
    "Nathan",
    "Chrystal",
    "Victoria",
    "Jose",
    "Tamara",
    "Keyona",
    "Marvelouse",
    "Mariana",
    "Brittney",
  ];

  let i = 0;
  let friendItemButton = document.getElementById("button-friend");
  let unorderedList = document.getElementById("friend-list");
  friendItemButton.addEventListener("click", newItem);
  function newItem() {
    let listItem = document.createElement("li");
    let listItemText = document.createTextNode(myFriends[i++]);
    if (i > 9) {
      friendItemButton.disabled = true;
    }
    listItem.appendChild(listItemText);
    unorderedList.appendChild(listItem);
  }
});
