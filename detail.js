window.onload = function () {
  let savedGameDetail = JSON.parse(localStorage.getItem("gameDetail"));

  document.getElementById("title").textContent = savedGameDetail.name;
  document.getElementById("detail").textContent = savedGameDetail.detail;
  document.getElementById("about").textContent = savedGameDetail.about;
  document.getElementById("release").textContent += savedGameDetail.release;
  document.getElementById("dev").textContent += savedGameDetail.dev;
  document.getElementById("publisher").textContent += savedGameDetail.publisher;
  document.getElementById("carouselImage1").src = savedGameDetail.images[0];
  document.getElementById("carouselImage2").src = savedGameDetail.images[1];
  document.getElementById("carouselImage3").src = savedGameDetail.images[2];
  document.getElementById("thumbnail").src = savedGameDetail.images[3];
  document.getElementById("miniCarouselImage1").src = savedGameDetail.images[0];
  document.getElementById("miniCarouselImage2").src = savedGameDetail.images[1];
  document.getElementById("miniCarouselImage3").src = savedGameDetail.images[2];
  let fixedContent = [
    "OS: ",
    "Processor: ",
    "Memory: ",
    "Graphics: ",
    "DirectX: ",
    "Network: ",
    "Storage: ",
    "Additional Notes: ",
  ];
  for (let i = 0; i < savedGameDetail.highReq.length; i++) {
    let dad = document.getElementById("highRequest");
    let text = document.createElement("p");
    text.textContent = fixedContent[i] + savedGameDetail.highReq[i];
    dad.appendChild(text);
  }
  for (let i = 0; i < savedGameDetail.lowReq.length; i++) {
    let dad = document.getElementById("lowRequest");
    let text = document.createElement("p");
    text.textContent = fixedContent[i] + savedGameDetail.lowReq[i];
    dad.appendChild(text);
  }
  for (let i = 0; i < savedGameDetail.highReq.length; i++) {
    let dad = document.getElementById("review");
    let text = document.createElement("p");
    text.textContent = savedGameDetail.review[i];
    dad.appendChild(text);
  }
};
