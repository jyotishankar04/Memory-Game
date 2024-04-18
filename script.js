let cardContainer = document.querySelector("#cardContainer");

let id1;
let id2;
let cardArray = [
  {
    name: "emoji1",
    img: "./assets/emoji-1.jpg",
  },
  {
    name: "emoji2",
    img: "./assets/emoji-2.jpg",
  },
  {
    name: "emoji3",
    img: "./assets/emoji-3.jpg",
  },
  {
    name: "emoji4",
    img: "./assets/emoji-4.jpg",
  },
  {
    name: "emoji5",
    img: "./assets/emoji-5.jpg",
  },
  {
    name: "emoji6",
    img: "./assets/emoji-6.jpg",
  },
  {
    name: "emoji1",
    img: "./assets/emoji-1.jpg",
  },
  {
    name: "emoji2",
    img: "./assets/emoji-2.jpg",
  },
  {
    name: "emoji3",
    img: "./assets/emoji-3.jpg",
  },
  {
    name: "emoji4",
    img: "./assets/emoji-4.jpg",
  },
  {
    name: "emoji5",
    img: "./assets/emoji-5.jpg",
  },
  {
    name: "emoji6",
    img: "./assets/emoji-6.jpg",
  },
];

let clickedArr = [];
let openedArr = [];

//!Randomise the oorder of the cards
let randomiseFun = () => {
  cardArray.sort(() => 0.5 - Math.random() * 12);
};

let createCard = () => {
  randomiseFun();
  for (let i = 0; i < cardArray.length; i++) {
    let cardEl = document.createElement("img");
    cardEl.setAttribute("id", i);
    cardEl.setAttribute("src", "assets/background2.jpg");
    cardContainer.appendChild(cardEl);
  }
};

createCard();

cardContainer.addEventListener("click", (el) => {
  let elId = el.target.getAttribute("id");
  el.target.setAttribute("src", cardArray[elId].img);
  // console.log(cardArray[elId].name);
  clickedArr.push(cardArray[elId].name);
  if (clickedArr.length === 2) {
    checkMatch(elId, el);
    clickedArr = [];
  }
  // console.log(clickedArr);
});

let checkMatch = (elId, el) => {
  if (clickedArr[0] === clickedArr[1]) {
    console.log("Match");
    openedArr.push(cardArray[elId].name, cardArray[elId].img);
    console.log(openedArr);
  } else if (clickedArr.length === 2) {
    console.log("Not a Match");

    // setTimeout(() => {
    //   resetFun(elId);
    // }, 1000);
  }
};

let resetFun = (elId) => {};
