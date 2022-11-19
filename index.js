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
