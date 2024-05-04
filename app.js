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
let gameDetails = {
  "Nier Replicant": {
    name: "Nier Replicant",
    detail:
      "Nier Replicant is an updated version of Nier Replicant, previously only released in Japan. It is a one-of-a-kind prequel to the critically-acclaimed masterpiece NieR: Automata. Now with a modern upgrade, it offers masterfully revived visuals, a fascinating storyline and more.",
    release: "April 22, 2021",
    dev: "Toylogic",
    publisher: "Square Enix",
    lowReq: [
      "Windows 10 (64-bit) version 15063.0 or higher",
      "Intel i5-4460 or AMD Ryzen 3 1200",
      "8 GB RAM",
      "NVidia GTX 970 OR AMD RX 470",
      "Version 11",
      "Broadband Internet connection",
      "26 GB available space",
      "None",
    ],
    highReq: [
      "Windows 10 (64-bit) version 15063.0 or higher",
      "Intel i5-8400 or AMD Ryzen 5 1500X",
      "16 GB RAM",
      "NVidia GTX 1070 OR AMD RX 590",
      "Version 11",
      "Broadband Internet connection",
      "26 GB available space",
      "None",
    ],
    about:
      "Nier Replicant is an open-world action RPG that invites players to explore a post-apocalyptic world. Developed by Toylogic and published by Square Enix, the game features a diverse character list, dynamic combat, and breathtaking landscapes. Whether you're battling through cities or exploring ancient ruins, Nier Replicant promises an exhilarating experience.",
    images: [
      "./asset/Nier/nier1.jpg",
      "./asset/Nier/nier2.jpg",
      "./asset/Nier/nier3.jpg",
      "./asset/Nier/nier.webp",
    ],
    review: [
      "“Nier Replicant is a pitch perfect update to one of the greatest stories ever told in the medium. Combat feels fast and fluid, much like players’ tears once they finish the game. The new content feels natural, magic is more useful than ever, and the reprised music and voice over bring the world to life.” – GamingTrend",
      "“Nier Replicant is the perfect opportunity to experiment NieR Automata's prequel. An epic game with plenty of improvements.” – Atomix",
      "“NieR Replicant is a game I won't be forgetting anytime soon. Its story is fantastically dark, incredibly unique and told in such a fascinating way, while its mix of combat and exploration has just the right hints of Zelda that make it a hell of a lot of fun to play through.” – PlayStation LifeStyle",
    ],
  },
  "Planet Of Lana": {
    name: "Planet of Lana",
    detail:
      "A young girl and her loyal friend embark on a journey to save their world through a cold, mechanical landscape filled with strange creatures. Planet of Lana is a cinematic puzzle adventure set in a quirky sci-fi story spanning centuries and galaxies.",
    release: "May 23, 2023",
    dev: "Wishfully",
    publisher: "Thunderful Publishing",
    lowReq: [
      "Windows 10",
      "Intel Core i5",
      "4 GB RAM",
      "GTX 660",
      "Version 11",
      "Broadband Internet connection",
      "10 GB available space",
      "None",
    ],
    highReq: [
      "Windows 10",
      "Intel Core i7",
      "4 GB RAM",
      "GTX 1060",
      "Version 11",
      "Broadband Internet connection",
      "10 GB available space",
      "None",
    ],
    about:
      "Planet of Lana is a cinematic puzzle adventure set in a quirky sci-fi story spanning centuries and galaxies. Players follow the journey of a young girl and her loyal friend as they embark on a quest to save their world. The game features a cold, mechanical landscape filled with strange creatures, and its art style is visually captivating.",
    images: [
      "./asset/Planet/planet1.jpg",
      "./asset/Planet/planet2.jpg",
      "./asset/Planet/planet3.jpg",
      "./asset/Planet/planetoflana.jpg",
    ],
    review: [
      "- “Wishfully masterfully conducts the emotional highs and lows of a planetary odyssey...” 9/10 - EDGE",
      "- “Planet of Lana is a wonderful puzzler with visuals that will leave you in awe, along with a stunning soundtrack and plenty of challenges.” 9/10 – God Is A Geek",
      "- “With a fantastic variety of puzzle scenarios and plenty of memorable moments, Planet of Lana is a beautiful, affecting adventure I won't soon forget.” 4.5/5 - GamesRadar+",
    ],
  },
  "Overwatch 2": {
    name: "Overwatch 2",
    detail:
      "Overwatch 2 is the highly anticipated sequel to the team-based multiplayer shooter Overwatch. Developed by Blizzard Entertainment, the game promises new content, including a Story Mode and additional characters. Players can expect intense battles, strategic gameplay, and a vibrant world.",
    release: "October 4, 2022",
    dev: "Blizzard Entertainment",
    publisher: "Blizzard Entertainment",

    lowReq: [
      "Windows 10 64-bit",
      "Intel Core i3",
      "6 GB RAM",
      "GTX 600 or AMD Radeon HD 7000",
      "Version 11",
      "Broadband Internet connection",
      "50 GB available space",
      "None",
    ],
    highReq: [
      "Windows 10 64-bit",
      "Intel Core i7",
      "8 GB RAM",
      "GTX 1060 or AMD R9 380",
      "Version 11",
      "Broadband Internet connection",
      "50 GB available space",
      "None",
    ],

    images: [
      "./asset/Ow2/ow2_1.jpg",
      "./asset/Ow2/ow2_2.jpg",
      "./asset/Ow2/ow2_3.jpg",
      "./asset/Ow2/ow2.jpg",
    ],
    about:
      "Overwatch 2 is the highly anticipated sequel to the team-based multiplayer shooter Overwatch. Developed by Blizzard Entertainment, the game promises new content, including a Story Mode and additional characters. Players can expect intense battles, strategic gameplay, and a vibrant world.",
    review: [
      "“Overwatch 2 is shaping up to be an exciting evolution of the original game, with new heroes, maps, and modes to keep players engaged.” – IGN",
      "“Fans of the original Overwatch will find plenty to love in this sequel, with a fresh take on the team-based shooter genre.” – PC Gamer",
      "“Blizzard continues to deliver high-quality multiplayer experiences, and Overwatch 2 looks to be no exception.” – GamesRadar+",
    ],
  },
  "Forza Horizon 5": {
    name: "Forza Horizon 5",
    detail:
      "Forza Horizon 5 is an open-world racing game developed by Playground Games and published by Xbox Game Studios. It invites players to explore a stunning virtual Mexico, featuring a diverse car list, dynamic weather, and breathtaking landscapes. Whether racing through cities or off-road trails, Forza Horizon 5 promises an exhilarating experience.",
    release: "November 5, 2021",
    dev: "Playground Games",
    publisher: "Xbox Game Studios",
    lowReq: [
      "Windows 10 (64-bit) version 15063.0 or higher",
      "Intel i5-4460 or AMD Ryzen 3 1200",
      "8 GB RAM",
      "NVidia GTX 970 OR AMD RX 470",
      "Version 11",
      "Broadband Internet connection",
      "110 GB available space",
      "None",
    ],
    highReq: [
      "Windows 10 (64-bit) version 15063.0 or higher",
      "Intel i5-8400 or AMD Ryzen 5 1500X",
      "16 GB RAM",
      "NVidia GTX 1070 OR AMD RX 590",
      "Version 11",
      "Broadband Internet connection",
      "110 GB available space",
      "None",
    ],
    about:
      "Forza Horizon 5 is an open-world racing game that invites players to explore a stunning virtual Mexico. Developed by Playground Games and published by Xbox Game Studios, the game features a diverse car list, dynamic weather, and breathtaking landscapes. Whether you're racing through cities or off-road trails, Forza Horizon 5 promises an exhilarating experience.",
    images: [
      "./asset/forza/forza5_1.jpg",
      "./asset/forza/forza5_2.jpg",
      "./asset/forza/forza5_3.jpg",
      "./asset/forza/forza-horizon-5-sand-dunes-logo.avif",
    ],
    review: [
      "- “Forza Horizon 5 is shaping up to be the ultimate racing playground, with stunning visuals and a wide variety of cars to choose from.” – IGN",
      "- “Playground Games continues to push the boundaries of open-world racing, and Forza Horizon 5 looks like their most ambitious project yet.” – PC Gamer",
      "- “From the bustling streets of Mexico City to the serene countryside, Forza Horizon 5 captures the beauty and excitement of racing in a dynamic world.” – GamesRadar+",
    ],
  },
  "Little Nightmare": {
    name: "Little Nightmare",
    detail:
      "Immerse yourself in Little Nightmares, a dark whimsical tale that will confront you with your childhood fears! Help Six escape The Maw – a vast, mysterious vessel inhabited by corrupted souls looking for their next meal.",
    release: " 28 Apr, 2017",
    dev: " Tarsier Studios",
    publisher: " BANDAI NAMCO Entertainment",
    lowReq: [
      "Windows 7, 64-bit",
      "Intel CPU Core i3",
      "4 GB RAM",
      "Nvidia GTX 460",
      "Version 11",
      "Broadband Internet connection",
      "10 GB available space",
      "SSE4.2 required",
    ],
    highReq: [
      "Windows 7, 64-bit",
      "Intel CPU Core i7",
      "8 GB RAM",
      "Nvidia GPU GeForce GTX 660",
      "Version 12",
      "Broadband Internet connection",
      "10 GB available space",
      "SSE4.2 required",
    ],
    about: [
      "Little Nightmares is a captivating puzzle-platform horror adventure game developed by Tarsier Studios and published by Bandai Namco Entertainment. Released in April 2017 for PlayStation 4, Windows, and Xbox One, it has since made its way to other platforms, including Nintendo Switch, Google Stadia, and mobile devices1. Here’s a glimpse into the eerie world of Little Nightmares: Plot: The game unfolds in a mysterious setting known as the Maw, an enormous, submerged iron vessel inhabited by grotesque and twisted beings. Our protagonist is Six, a nine-year-old girl clad in a yellow raincoat. She awakens from a dream and finds herself trapped within the bowels of the Maw. Armed only with a lighter, Six embarks on a treacherous journey to escape her nightmarish surroundings. Along the way, she encounters peculiar creatures called Nomes, which either flee from her or curiously observe her efforts. She can even choose to hug these Nomes. The Maw is also home to carnivorous Leeches and artificial eyes that turn her to stone if caught in their gaze. Hunger plagues Six, and she experiences debilitating bouts of it. Whenever she eats, a shadowy, flickering version of herself appears1. Gameplay: The world of Little Nightmares is presented in a 2.5D format. Players navigate through platformer elements, solving puzzles to progress. Unlike typical action heroes, Six lacks combat abilities, emphasizing stealth and evasion. Occasionally, she acquires tools that allow her to fight back against her adversaries. The game’s atmosphere, graphics, and sound have received acclaim, although some critics noted its short length and checkpoint system1. Meaning and Symbolism: Little Nightmares delves into themes of despair, hopelessness, and oppression. It represents a cycle where a child becomes the very monster they once feared. The torment Six endures within the Maw leads to disengagement from all adults, creating a haunting hierarchy of suffering2. Follow-Ups: A sequel titled Little Nightmares II was released in February 2021. Additionally, a third entry in the series, Little Nightmares III, is currently in development by Supermassive Games1. So, venture forth with Six, unravel the mysteries of the Maw, and confront the darkness that lurks within this captivating nightmare world. 🌙🕯️",
    ],
    images: [
      "./asset/little/little1.jpg",
      "./asset/little/little2.jpg",
      "./asset/little/little3.jpg",
      "./asset/little/little nightmares.jpg",
    ],
    review: [
      "- “This is a horror game that genuinely has new things to show you.” 78/100 - PC Gamer",
      "- “Little Nightmares is a potent contribution to the thriving genre of philosophical platformers, a startlingly odious horror game, and an almost mocking subversion of Tarsier's previous projects.” Recommended Badge - Eurogamer",
      "- “Little Nightmares worked its way into my dreams because it's just bright enough, just safe enough to make me let my guard down.” 8.5/10 - Polygon",
    ],
  },
  Unravel: {
    name: "Unravel",
    detail:
      "Unravel is a physics-based puzzle platformer. Yarny, a character made from a single thread of yarn, must embark on a larger than life adventure.",
    release: " 9 Feb, 2016",
    dev: " Coldwood Interactive",
    publisher: " Electronic Arts",
    lowReq: [
      "Windows 7, Windows 8.1, Windows 10 64-bit",
      "Intel Core 2 Duo @ 2.4GHz",
      "4 GB RAM",
      "GeForce 450GT/Radeon HD 5750",
      "Version 11",
      "Broadband Internet connection",
      "25 GB available space",
      "SSE4.2 required",
    ],
    highReq: [
      "Windows 7, Windows 8.1, Windows 10 64-bit",
      "Intel Core 2 Duo @ 2.4GHz",
      "4 GB RAM",
      "GeForce 450GT/Radeon HD 5750",
      "Version 11",
      "Broadband Internet connection",
      "25 GB available space",
      "SSE4.2 required",
    ],
    about: [
      "Unravel introduces Yarny — a new, lovable, and endearing character made from a single thread of yarn that slowly unravels as you move. Inspired by the unique and breath-taking environments of Northern Scandinavia, Unravel is a visually stunning, physics-based puzzle platformer. Using yarn to swing from tree branch to tree branch or hitch a ride on a flying kite, no feat is too big. Yarny is brought to life as the representation of the ties that bind loved-ones together. Embark with Yarny on a seemingly larger-than-life adventure to reconnect the long-lost memories of a family. Told completely without words, experience an exciting and heartfelt story about love, hope, and the journey of life.",
    ],
    images: [
      "./asset/Unravel/unravel1.jpg",
      "./asset/Unravel/unravel2.jpg",
      "./asset/Unravel/unravel3.jpg",
      "./asset/Unravel/unravel.jpg",
    ],
    review: [
      "- IGN: “Unravel is perhaps best thought of as a pastoral platformer, where the terrain itself is of greater significance than how Yarny, its immediately loveable hero, moves through it. While there are some great physics-based puzzles to solve and plenty of fun mechanics to play around with, Unravel distinguishes itself less as a platformer and more by offering an emotionally ambitious and complex adventure set which plays out against a breathtaking and atmospheric landscape1.”",
      "- GamesRadar+: “Unravel's appeal goes far beyond pretty levels. Beautiful, poignant and with an iron grip on your heart, Yarny manages to effortlessly deliver a wonderful platformer and a bittersweet message.”",
      "- VideoGamer: “Unravel is thoroughly enjoyable, lovely game, but it falls short of being something to be truly cherished. It’s smart but not often enough, gorgeous but emotionally distant, and at times feels a tad unfair with how it dishes out frustration.”",
    ],
  },
  Stray: {
    name: "Stray",
    detail:
      "Stray is a third-person cat adventure game set amidst the detailed, neon-lit alleys of a decaying cybercity and the murky environments of its seedy underbelly.",
    release: "19 Jul, 2022",
    dev: "BlueTwelve Studio",
    publisher: "Annapurna Interactive",
    lowReq: [
      "Windows 10 64bit",
      "Intel Core i5-2300",
      "8 GB RAM",
      "NVIDIA GeForce GTX 650 Ti",
      "Version 12",
      "Broadband Internet connection",
      "10 GB available space",
      "None",
    ],
    highReq: [
      "Windows 10 64-bit",
      "Intel Core i5-8400",
      "16 GB RAM",
      "NVIDIA GeForce GTX 780, 3 GB",
      "Version 12",
      "Broadband Internet connection",
      "10 GB available space",
      "None",
    ],
    about: [
      "Lost, alone and separated from family, a stray cat must untangle an ancient mystery to escape a long-forgotten city. Stray is a third-person cat adventure game set amidst the detailed, neon-lit alleys of a decaying cybercity and the murky environments of its seedy underbelly. Roam surroundings high and low, defend against unforeseen threats and solve the mysteries of this unwelcoming place inhabited by curious droids and dangerous creatures. See the world through the eyes of a cat and interact with the environment in playful ways. Be stealthy, nimble, silly, and sometimes as annoying as possible with the strange inhabitants of this mysterious world. Along the way, the cat befriends a small flying drone, known only as B-12. With the help of this newfound companion, the duo must find a way out. Stray is developed by BlueTwelve Studio, a small team from the south of France mostly made up of cats and a handful of humans. SYSTEM REQUIREMENTS",
    ],
    images: [
      "./asset/Stray/stray1.jpg",
      "./asset/Stray/stray2.jpg",
      "./asset/Stray/stray3.jpg",
      "./asset/Stray/stray.jpg",
    ],
    review: [
      "- IGN: “Stray uses that furry vehicle to tell a genuinely compelling story with some entertaining action along the way. Not all of its ideas land on their feet, but it was impossible to shake the fuzzy feeling it gave me right from the adorable opening minutes.”",
      "- Tom's Guide: “Don't dismiss Stray as merely a cat simulator, as this adventure game will appeal to more than just feline fanatics. While the chance to play as an adorable kitty is appealing, the real star of the show is the game's richly-detailed cyberpunk world.”",
      "- Metacritic: “Stray - Metacritic PLAY! Zine If you are allergic to cats, hate mystery, exploration and a good atmosphere in video games, don't play Stray. Otherwise, you've probably already beaten it. It's a rare occasion to get a title such as this.”",
    ],
  },
  "NARAKA : Bladepoint": {
    name: "Naraka: Bladepoint",
    detail:
      "Naraka: Bladepoint is a 60-player action Battle Royale offering players insane mobility powered by parkour and grappling hook, a vast arsenal of melee and ranged weapons, and a roster of characters with powerful abilities",
    release: "23 Jun, 2022",
    dev: "24 Entertainment",
    publisher: "NetEase Games Global",
    lowReq: [
      "Windows 7 64-bit or newer",
      "Intel i5 4th generation/AMD FX 6300",
      "8 GB RAM",
      "NVIDIA GeForce GTX 750TI",
      "Version 11",
      "Broadband Internet connection",
      "35 GB available space",
      "Requires “Windows Memory integrity and VBS enablement” to be disabled",
    ],
    highReq: [
      "Windows 10 64-bit",
      "Intel i7 7th generation",
      "16 GB RAM",
      "NVIDIA GeForce GTX 1060 6G",
      "Version 11",
      "Broadband Internet connection",
      "35 GB available space",
      "Requires “Windows Memory integrity and VBS enablement” to be disabled",
    ],
    about: [
      "Dive into the legends of the Far East in NARAKA: BLADEPOINT; team up with friends in fast-paced melee fights for a Battle Royale experience unlike any other. Find your playstyle with a varied cast of heroes with unique skills. More than 20 million players have already joined the fray, play free now",
    ],
    images: [
      "./asset/Naraka/naraka1.jpg",
      "./asset/Naraka/naraka2.jpg",
      "./asset/Naraka/naraka3.jpg",
      "./asset/Naraka/naraka.jpg",
    ],
    review: [
      "- IGN: “Naraka: Bladepoint is proof that the last-fighter-standing formula still has loads of unexplored potential. This high-flying third-person brawler blends the tight sword clashes of Soul Calibur with the frantic supply gathering and ever-constricting circle of Apex Legends to glorious results.”",
      "- PC Gamer: “Naraka is a fast, aggressive battle royale game. The first thing I learned is that those basic combos are easy for good players to counter. You can be tricky and end a combo early, though, or use charge attacks, which are less predictable and can be cancelled.”",
      "- PCGamesN: “For an original take on battle royale and a truly special martial arts combat system, Naraka is worth checking out. But between stability issues, off-putting monetisation practices, and an unpalatable learning curve, there's plenty that gets in the way of the fun.”",
    ],
  },
};
let game1 = document.getElementsByClassName("item");
function details() {
  console.log("details function is running");
  for (let i = 0; i < game1.length; i++) {
    let gameName = game1[i].getElementsByTagName("p")[0].textContent;
    game1[i].addEventListener("click", function () {
      localStorage.setItem("gameDetail", JSON.stringify(gameDetails[gameName]));
      window.location.href = "detail.html";
    });
  }
}
function updateLoginStatus() {
  var check = JSON.parse(sessionStorage.getItem("isLoggedIn"));
  var accountButtons = document.getElementsByClassName("account");
  for (var i = 0; i < accountButtons.length; i++) {
    if (check) {
      accountButtons[i].style.display = "none";
    } else {
      accountButtons[i].style.display = "flex";
    }
  }
}

window.onload = function () {
  details();
  updateLoginStatus();
};
