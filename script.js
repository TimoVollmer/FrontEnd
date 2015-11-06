var radioButtons = document.querySelectorAll(".radio");
var project = document.getElementById("project");
var stage = document.getElementById("stage");
var submit = document.getElementById("submit");
var menu = document.getElementById("menu");
var menuItems = document.getElementsByClassName("item");

for(var i = 0; i < radioButtons.length; i++) {
radioButtons[i].onclick = function() {
var val = this.value;
if (val == 'project') {
project.classList.toggle("hide");
stage.classList.add("hide");
submit.classList.remove("hide");
} else if (val == 'stage') {
stage.classList.toggle("hide");
project.classList.add("hide");
submit.classList.remove("hide");
};
}
}

menu.onclick = function() {
    console.log("test");
  for (var i = 0; i < menuItems.length; i++) {
    menuItems[i].classList.toggle("hide");

  };
}
