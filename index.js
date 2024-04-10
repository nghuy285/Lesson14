const btnNext = document.querySelector("button.next");
const btnBack = document.querySelector("button.back");
const $container1 = document.querySelector(".content-box");
btnNext.onclick = () => {
  const content2 = `<h1>IDC STORE</h1>
  <div><h2>day la noi dung</h2>
  <p>Rat la Noi Dung</p></div>`;
  $container1.innerHTML = content2;
  console.log($container1);
};
btnBack.onclick = () => {
  const content3 = `<h1>IDC STORE</h1>
  <p>
    We are a specialized store that provides electronic games and online
    movies. Here, you can find exciting games, from the latest releases to
    beloved classics. Additionally, we offer a diverse selection of films
    to satisfy your passion for entertainment.
  </p>
  <h2 class="title">Our Services</h2>
  <p>
    Game Sales: From PC and console games to mobile devices, we offer a
    wide variety of games for you to choose from.
  </p>
  <p>
    Online Movies: Enjoy movies at home with our extensive list of genres,
    including action, comedy, and science fiction.
  </p>
  <h2 class="title">Our Commitments</h2>
  <p>
    Quality: We pledge to provide high-quality products that meet your
    entertainment needs.
  </p>
  <p>
    Customer Service: Our support team is always ready to address any
    inquiries you may have.
  </p>`;
  $container1.innerHTML = content3;
};
