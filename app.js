let list = document.querySelector(".slide .list");
let dots = document.querySelectorAll(".slide .dots li");
let item = document.querySelectorAll(".slide .list .item");
let back = document.getElementById("back");
let next = document.getElementById("next");
let active = 0;
let lengthItems = item.length - 1;
next.onclick = () => {
  active + 1 > lengthItems ? (active = 0) : (active += 1);
  reloadslide();
};
back.onclick = () => {
  active - 1 < 0 ? (active = lengthItems) : (active -= 1);
  reloadslide();
};
let refreshSlide = setInterval(() => {
  next.click();
}, 5000);
const reloadslide = () => {
  let checkLeft = item[active].offsetLeft;
  list.style.left = -checkLeft + "px";
  let lastActive = document.querySelector(".slide .dots li.active");
  lastActive.classList.remove("active");
  dots[active].classList.add("active");
  clearInterval(refreshSlide);
  refreshSlide = setInterval(() => {
    next.click();
  }, 5000);
};
dots.forEach((li, key) => {
  li.addEventListener("click", function () {
    active = key;
    reloadslide();
  });
});

// Search
let keywords = [
  "Forza Horizon 5",
  "Overwatch 2",
  "Nier Replicant",
  "Litte Nightmares",
  "Naraka Bladepoint",
  "Spiderman Miles Morales",
  "Stray",
  "Unravel",
];
const resultsBox = document.querySelector(".result-box");
const inputBox = document.getElementById("input-box");
inputBox.onkeyup = function () {
  let result = [];
  let input = inputBox.value;
  if (input.length) {
    result = keywords.filter((keyword) => {
      return keyword.toLowerCase().includes(input.toLowerCase());
    });
  }
  display(result);
};
const display = (result) => {
  const content = result.map((list) => {
    return "<li>" + list + "</li>";
  });
  resultsBox.innerHTML = "<ul>" + content.join("") + "</ul>";
};
