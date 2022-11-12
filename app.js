//First try to manipulate the background color via js as its easiest
let body = document.body;
body.style.backgroundColor = "beige";

//OuterHTML overwrites InnerHTML as seen below. First i changed the content in my h1 tag with the innerHTML then overwrote that change with th eouterHTML function
let ftxHeader = document.getElementById(`ftxTop`);
ftxHeader.innerHTML = `<a href="https://www.reuters.com/markets/currencies/exclusive-least-1-billion-client-funds-missing-failed-crypto-firm-ftx-sources-2022-11-12/">Rugpull</a>`;

ftxHeader.outerHTML = `FTX's collapse will most likey usher in crypto regulation`

//This added a p tag to my h1 element before the img element that was already there
let modifiedhOne = document.getElementById(`ftxScam`);
modifiedhOne.insertAdjacentHTML(`beforeBegin`, '<p>The CEO of FTX misappropiated user funds</p>');

//This changes my class named element content to what i wrote in the app.js file
let modifiedHeader = document.getElementsByClassName(`ftxPara`);
for (let i=0; i<modifiedHeader.length; i++){
    modifiedHeader[i].outerHTML = `SBF is clearly an industry plant`;//The outer HTML only affects the first p tag
    modifiedHeader[i].innerHTML = `This event will increase the call for regulation in crypto`//The innerHTML affects the second p tag 
}

//This inserts a nested tag at the end of the id selected via the insertadjacentHTML function 
let modifiedDiv = document.getElementById(`ftxSummary`);
modifiedDiv.insertAdjacentHTML(`afterend`, `<div><p>FTX was the piggybank to the hedgefund Alameda Research</p></div>`);

//This changes my selected p tag content to what i wrote in the app.js file via the innerHTML function
let modifiedShady = document.getElementById(`ftxAlameda`);
modifiedShady.innerHTML = `Alameda's main website is now down and it seems the hedge fund was being propped up by customer deposits on FTX, which with they traded with`;

