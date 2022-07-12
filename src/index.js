const siteContent = { // DO NOT CHANGE THIS OBJECT
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
  },
  "main-content": {
    "features-h4": "Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "services-h4": "Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4": "Contact",
    "address": "123 Way 456 Street Somewhere, USA",
    "phone": "1 (888) 888-8888",
    "email": "sales@greatidea.io",
  },
  "footer": {
    "copyright": "Copyright Great Idea! 2021",
  },
  "images": {
    "logo-img": "http://localhost:9000/img/logo.png",
    "cta-img": "http://localhost:9000/img/cta.png",
    "accent-img": "http://localhost:9000/img/accent.png",
  },
};

console.log('project wired!');

//This sets all the nav links words using a for loop. navigation is turned
//into an array and then updated using bracket[notation] to what is equal
//that key value pair in the JSON object of selectros and updated values.
// the specific selectors used are "nav", "nav-item-'i'", "italic".
const navigation = document.querySelectorAll('nav a');
const arr1 = Array.from(navigation);
for (let i = 0; i < navigation.length; i++) {
    arr1[i].textContent = siteContent["nav"][`nav-item-${i + 1}`];
    arr1[i].classList.add("italic");
  }

// uses siteContent to set the logo for the DOM by querySelectoring the logo-img id selector.
//Images
const topImage = document.querySelector("#logo-img");
topImage.src = siteContent["images"]["logo-img"];
const ctaImage = document.querySelector("#cta-img");
ctaImage.src = siteContent["images"]["cta-img"];
const middleImage = document.querySelector("#middle-img");
middleImage.src = siteContent["images"]["accent-img"];

// uses siteContent to update the H1 value in the div with the class .cta-text.
const div1 = document.querySelector(".cta-text h1");
div1.textContent = siteContent["cta"]["h1"];

//top button in html document in the .cta class.
const topButton = document.querySelector(".cta-text button");
topButton.textContent = siteContent["cta"]["button"];


// This is all the code for the the H4's and paragraphs .top-content class in html document.
const topContentH4 = document.querySelectorAll(".top-content .text-content H4");
const topContentParagraphs = document.querySelectorAll(".top-content .text-content p");
const topContentArrayH4 = Array.from(topContentH4);
const topContentarrayP = Array.from(topContentParagraphs);
topContentH4[0].textContent = siteContent["main-content"]["features-h4"];
topContentH4[1].textContent = siteContent["main-content"]["about-h4"];
topContentarrayP[0].textContent = siteContent["main-content"]["features-content"];
topContentarrayP[1].textContent = siteContent["main-content"]["about-content"];


// bottom content H4 and Paragraph content. .bottom-content class in the html document.
const bottomContentH4 = document.querySelectorAll(".bottom-content .text-content h4");
const bottomContentParagraphs = document.querySelectorAll(".bottom-content .text-content p");
const bottomContentArrayH4 = Array.from(bottomContentH4);
const bottomContentArrayP = Array.from(bottomContentParagraphs);

// function loopBottomContent(arg1, arg2, arg3){
//   for (let i = 0; i < bottomContentArrayP.length; i++){
//     bottomContentH4[i].textContent = siteContent["main-content"][`${arg1}-h4`];
//     bottomContentH4[i].textContent = siteContent["main-content"][`${arg2}-h4`];
//     bottomContentH4[i].textContent = siteContent["main-content"][`${arg3}-h4`];
//     bottomContentParagraphs[i].textContent = siteContent["main-content"][`${arg1}-content`];
//     bottomContentParagraphs[i].textContent = siteContent["main-content"][`${arg2}-content`];
//     bottomContentParagraphs[i].textContent = siteContent["main-content"][`${arg3}-content`];
//   }
// }
//
// loopBottomContent("services", "product", "vision");

bottomContentH4[0].textContent = siteContent["main-content"]["services-h4"];
bottomContentH4[1].textContent = siteContent["main-content"]["product-h4"];
bottomContentH4[2].textContent = siteContent["main-content"]["vision-h4"];
bottomContentParagraphs[0].textContent = siteContent["main-content"]["services-content"];
bottomContentParagraphs[1].textContent = siteContent["main-content"]["product-content"];
bottomContentParagraphs[2].textContent = siteContent["main-content"]["vision-content"];

// adding Bold class to footer element.
const footer = document.querySelector("footer a");
footer.classList.add("bold");
footer.textContent = siteContent["footer"]["copyright"];

const contactSectionParagraphs1 = document.querySelector(".contact");
const contactSectionParagraphs = contactSectionParagraphs1.querySelectorAll("p");
const contactSectionParagraphArray = Array.from(contactSectionParagraphs);


contactSectionParagraphArray[0].textContent = siteContent["contact"]["address"];
contactSectionParagraphArray[1].textContent = siteContent["contact"]["phone"];
contactSectionParagraphArray[2].textContent = siteContent["contact"]["email"];
const contactH4 = document.querySelector(".contact h4");
contactH4.textContent = siteContent["contact"]["contact-h4"];




///end of document
