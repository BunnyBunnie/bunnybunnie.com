// script.js

$(document).ready(function () {
  $(".tron").height($(window).height());
});

let d = new Date();
document.body.innerHTML = "<h3>Today's date is " + d + "</h3>"

if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $name = $_POST["name"];
  $last_name = $_POST["last_name"];
  $email = $_POST["email"];
  $question = $_POST["question"];

  $to = "48c0f5998d21d70f87031958dd7df70b";
  $subject = "New Form Submission";
  $message = "Name: $name $last_name\n";
  $message .= "Email: $email\n";
  $message .= "Question:\n$question";

  // Use additional headers as needed, such as for sending HTML emails
  $headers = "From: $email";

  mail($to, $subject, $message, $headers);
}


let text = document.getElementById("text");
let initialX = 0,
  initialY = 0;
let moveElement = false;
//Events Object
let events = {
  mouse: {
    down: "mousedown",
    move: "mousemove",
    up: "mouseup",
  },
  touch: {
    down: "touchstart",
    move: "touchmove",
    up: "touchend",
  },
};
let deviceType = "";
//Detech touch device
const isTouchDevice = () => {
  try {
    //We try to create TouchEvent (it would fail for desktops and throw error)
    document.createEvent("TouchEvent");
    deviceType = "touch";
    return true;
  } catch (e) {
    deviceType = "mouse";
    return false;
  }
};
isTouchDevice();
//Start (mouse down / touch start)
text.addEventListener(events[deviceType].down, (e) => {
  e.preventDefault();
  //initial x and y points
  initialX = !isTouchDevice() ? e.clientX : e.touches[0].clientX;
  initialY = !isTouchDevice() ? e.clientY : e.touches[0].clientY;
  //Start movement
  moveElement = true;
});
//Move
text.addEventListener(events[deviceType].move, (e) => {
  //if movement == true then set top and left to new X andY while removing any offset
  if (moveElement) {
    e.preventDefault();
    let newX = !isTouchDevice() ? e.clientX : e.touches[0].clientX;
    let newY = !isTouchDevice() ? e.clientY : e.touches[0].clientY;
    text.style.top =
      text.offsetTop - (initialY - newY) + "px";
    text.style.left =
      text.offsetLeft - (initialX - newX) + "px";
    initialX = newX;
    initialY = newY;
  }
});
//mouse up / touch end
text.addEventListener(
  events[deviceType].up,
  (stopMovement = (e) => {
    moveElement = false;
  })
);
text.addEventListener("mouseleave", stopMovement);
text.addEventListener(events[deviceType].up, (e) => {
  moveElement = false;
});

