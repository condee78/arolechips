let review1 = {
  clientName: "Lingga",
  reviewdesc: "Makaroni Basreng rasanya enak banget dari Arole~",
  photoClient: "assets/img/lingga.jpg",
  rating: "assets/img/star-rating-5.png",
};

let review2 = {
  clientName: "Yayat",
  reviewdesc:
    "Awalnya ketawa karena namanya TAKULAY, tapi begitu nyobain eeh ketagihan",
  photoClient: "assets/img/yayat.jpg",
  rating: "assets/img/star-rating-5.png",
};

let clickCount = 0;
let clientName = document.getElementById("clientName");
let reviewdesc = document.getElementById("reviewDesc");
let photoClient = document.getElementById("photoClient");
let rating = document.getElementById("starRating");

const nav = document.getElementById("nav");

window.onscroll = function () {
  dynamicNavbar();
};

function dynamicNavbar() {
  if (document.body.scrollTop > 75) {
    nav.style.backgroundColor = "white";
    nav.style.boxShadow = "0 1px 1px rgba(50, 50, 50, 0.1)";
  } else {
    nav.style.backgroundColor = "transparent";
    nav.style.boxShadow = "none";
  }
}

function getReview() {
  clickCount += 1;
  if (clickCount % 2 == 0) {
    clientName.innerHTML = review1.clientName;
    reviewdesc.innerHTML = review1.reviewdesc;
    photoClient.src = review1.photoClient;
    rating.src = review1.rating;
  } else {
    clientName.innerHTML = review2.clientName;
    reviewdesc.innerHTML = review2.reviewdesc;
    photoClient.src = review2.photoClient;
    rating.src = review2.rating;
  }
}

function orderWA() {
  const url =
    "https://wa.me/6287707061980?text=Saya%20mau%20order%20Snack%20dan%20drink%20dari%20arolechips";
  let win = window.open(url, "_blank");
  win.focus();
}

function orderTokopedia() {
  const url = "https://www.tokopedia.com/arole-chips";
  let win = window.open(url, "_blank");
  win.focus();
}
