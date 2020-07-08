const siteContent = {
  nav: {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png",
  },
  cta: {
    h1: "DOM Is Awesome",
    button: "Get Started",
    "img-src": "img/header-img.png",
  },
  "main-content": {
    "features-h4": "Features",
    "features-content":
      "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content":
      "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content":
      "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content":
      "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content":
      "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  contact: {
    "contact-h4": "Contact",
    address: "123 Way 456 Street Somewhere, USA",
    phone: "1 (888) 888-8888",
    email: "sales@greatidea.io",
  },
  footer: {
    copyright: "Copyright Great Idea! 2018",
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute("src", siteContent["nav"]["img-src"]);

const aTags = document.querySelectorAll("a");
// aTags[0].textContent = siteContent.nav["nav-item-1"];
// aTags[1].textContent = siteContent["nav"]["nav-item-2"];
// aTags[2].textContent = siteContent["nav"]["nav-item-3"];
// aTags[3].textContent = siteContent["nav"]["nav-item-4"];
// aTags[4].textContent = siteContent["nav"]["nav-item-5"];
// aTags[5].textContent = siteContent["nav"]["nav-item-6"];

// aTags.forEach((item, index) => {
//   item.textContent = siteContent["nav"][`nav-item-${index + 1}`];
// });

for (let i = 0; i < aTags.length; i++) {
  aTags[i].textContent = siteContent["nav"][`nav-item-${i + 1}`];
  aTags[i].style.color = "green";
}

const nav = document.querySelector("nav");
const tag1 = document.createElement("a");
tag1.textContent = "Photos";
tag1.style.color = "green";
nav.appendChild(tag1);

const tag2 = document.createElement("a");
tag2.textContent = "Directory";
tag2.style.color = "green";
nav.prepend(tag2);

const heading = document.querySelector("h1");
const headWords = siteContent.cta.h1.split(" ");
const br1 = document.createElement("br");
const br2 = document.createElement("br");
heading.append(headWords[0]);
heading.append(br1);
heading.append(headWords[1]);
heading.append(br2);
heading.append(headWords[2]);

const button = document.querySelector("button");
button.textContent = siteContent.cta.button;

const ctaImage = document.querySelector("#cta-img");
ctaImage.src = siteContent.cta["img-src"];

const topContentH = document.querySelectorAll(".top-content h4");

const topContentP = document.querySelectorAll(".top-content p");

topContentH[0].textContent = siteContent["main-content"]["features-h4"];
topContentH[1].textContent = siteContent["main-content"]["about-h4"];

topContentP[0].textContent = siteContent["main-content"]["features-content"];
topContentP[1].textContent = siteContent["main-content"]["about-content"];

const middleImg = document.querySelector("#middle-img");
middleImg.src = siteContent["main-content"]["middle-img-src"];

const bottomContentH = document.querySelectorAll(".bottom-content h4");

const bottomContentP = document.querySelectorAll(".bottom-content p");

bottomContentH[0].textContent = siteContent["main-content"]["services-h4"];
bottomContentH[1].textContent = siteContent["main-content"]["product-h4"];
bottomContentH[2].textContent = siteContent["main-content"]["vision-h4"];

bottomContentP[0].textContent = siteContent["main-content"]["services-content"];
bottomContentP[1].textContent = siteContent["main-content"]["product-content"];
bottomContentP[2].textContent = siteContent["main-content"]["vision-content"];

const contactHeading = document.querySelector(".contact h4");
contactHeading.textContent = siteContent.contact["contact-h4"];

const contactP = document.querySelectorAll(".contact p");
// contactP[0].textContent = siteContent.contact["address"];
const splitAddress = siteContent.contact["address"].split(" ");
contactP[0].append(splitAddress[0]);
contactP[0].append(" ");
contactP[0].append(splitAddress[1]);
contactP[0].append(" ");
contactP[0].append(splitAddress[2]);
contactP[0].append(" ");
contactP[0].append(splitAddress[3]);
const contactBr = document.createElement("br");
contactP[0].append(contactBr);
contactP[0].append(splitAddress[4]);
contactP[0].append(" ");
contactP[0].append(splitAddress[5]);
contactP[1].textContent = siteContent.contact["phone"];
contactP[2].textContent = siteContent.contact["email"];

const footer = document.querySelector("footer p");
footer.textContent = siteContent.footer.copyright;

button.addEventListener("click", () => {
  heading.classList.toggle("btn-toggle");
  console.log("Hey");
});
