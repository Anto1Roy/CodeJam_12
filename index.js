const themeButton=document.getElementById("themeButton");


const sunnyIcon=document.getElementById("sunnyIcon");
const coldIcon=document.getElementById("coldIcon");
const shrekIcon=document.getElementById("shrekIcon");

//this is the possible themes from our css file
const themeMap = {
    hot: "cold",
    cold: "shrek",
    shrek: "hot"
};

const theme=localStorage.getItem("theme")||(tmp=Object.keys(themeMap)[0], localStorage.setItem('theme', tmp), tmp);

switch(theme){
    case "hot":
        sunnyIcon.style.display="block";
        break;
    case "cold":
        coldIcon.style.display="block";
        break;
    case "shrek":
        shrekIcon.style.display="block";
        break;
}

const bodyClass = document.body.classList;
bodyClass.add(theme);


function toggleTheme(){
    const current=localStorage.getItem("theme");
    const next=themeMap[current];

    bodyClass.replace(current, next);

    switch (next){
        case "hot":
            shrekIcon.style.display="none";
            sunnyIcon.style.display="block";
            break;
        case "cold":
            sunnyIcon.style.display="none";
            coldIcon.style.display="block";
            break;
        case "shrek":
            coldIcon.style.display="none";
            shrekIcon.style.display="block";
            break;

    }
    localStorage.setItem("theme", next);
}

themeButton.addEventListener("click", toggleTheme);


//here is the logic for the different food applications


//DIV
//given a meal, would return a list of ingredients, link to recipe, picture
const profileDiv=document.querySelector("#profileDiv");
//given some ingredients that we have in the fridge, would return list of recipes that we could do
const notesDiv=document.querySelector("#notesDiv");
//given the ingredients on sale in the grocery store, would return a list of recipes containing those elements
const libraryDiv=document.querySelector("#libraryDiv");


//BUTTONS
const diagnosticButton=document.querySelector("#diagnosticButton");
const whereToButton=document.querySelector("#whereToButton");
const practiceButton=document.querySelector("#practiceButton");

//this is a variable so that hide the divs we do not need anymore
let myVar=profileDiv;


diagnosticButton.addEventListener("click", ()=>{
    myVar.style.display="none";
    profileDiv.style.display="block";
    myVar=profileDiv;
});

whereToButton.addEventListener("click", ()=>{
    myVar.style.display="none";
    notesDiv.style.display="block";
    myVar=notesDiv;
});

practiceButton.addEventListener("click", ()=>{
    myVar.style.display="none";
    libraryDiv.style.display="block";
    myVar=libraryDiv;
});
