$("<button> click me </button>").attr("id", "message-button").prependTo("body");
$("#message-button").click(function () {
  alert("This is a nice message for you.");
});

$("button#submit-button").click(function () {
  let $inputVal = $("#text-box").val();
  alert($inputVal);
});

$("div#hover-div").mouseenter(function () {
  $("div#hover-div").css("background-color", "blue");
});
$("div#hover-div").mouseleave(function () {
  $("div#hover-div").css("background-color", "blanchedalmond");
});

let textParagraph =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
$("<p>" + textParagraph + "</p>").appendTo("body");

let colors = ["red", "blue", "darkgreen", "purple", "orange"];

$("p").click(function () {
  let rand = colors[Math.floor(Math.random() * colors.length)];
  $("p").css("color", rand);
});

$("<button> Click the button</button>")
  .attr("id", "name-button")
  .appendTo("body");
$("<div></div>").attr("id", "name-div").appendTo("body");

$("button#name-button").click(function () {
  $("<span> Madison </span>").appendTo("#name-div");
});

let myFriends = [
  "Nathan",
  "Anna",
  "Chrystal",
  "Jose",
  "Victoria",
  "Tamara",
  "Marvelouse",
  "Keyona",
  "Brittney",
  "Mariana",
];

let i = 0;
$("button#friend-button").click(function () {
  $("<li>" + myFriends[i++] + "</li>").appendTo("ul");
  if (i > 9) {
    $("button#friend-button").prop("disabled", true);
  }
});
