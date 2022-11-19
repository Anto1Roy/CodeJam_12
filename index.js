//here is the logic/code for the different theme we are going to have

//this is the button representing the theme
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

//DIV
//given a meal, would return a list of ingredients, link to recipe, picture
const listDiv=document.querySelector("#listDiv");
//given some ingredients that we have in the fridge, would return list of recipes that we could do
const fridgeDiv=document.querySelector("#fridgeDiv");
//given the ingredients on sale in the grocery store, would return a list of recipes containing those elements
const healthyDiv=document.querySelector("#healthyDiv");


//BUTTONS
const listButton=document.querySelector("#listButton");
const fridgeButton=document.querySelector("#fridgeButton");
const healthyButton=document.querySelector("#healthyButton");

//this is a variable so that hide the divs we do not need anymore
let myVar=listDiv;


listButton.addEventListener("click", ()=>{
    myVar.style.display="none";
    listDiv.style.display="block";
    myVar=listDiv;
});

fridgeButton.addEventListener("click", ()=>{
    myVar.style.display="none";
    fridgeDiv.style.display="block";
    myVar=fridgeDiv;
});

healthyButton.addEventListener("click", ()=>{
    myVar.style.display="none";
    healthyDiv.style.display="block";
    myVar=healthyDiv;
});
