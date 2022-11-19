const themeButton=document.getElementById("themeButton");


const sunnyIcon=document.getElementById("sunnyIcon");
const coldIcon=document.getElementById("coldIcon");

//this is the possible themes from our css file
const themeMap = {
    hot: "cold",
    cold: "hot"
};

const theme=localStorage.getItem("theme")||(tmp=Object.keys(themeMap)[0], localStorage.setItem('theme', tmp), tmp);

switch(theme){
    case "hot":
        sunnyIcon.style.display="block";
        break;
    case "cold":
        coldIcon.style.display="block";
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
            coldIcon.style.display="none";
            sunnyIcon.style.display="block";
            break;
        case "cold":
            sunnyIcon.style.display="none";
            coldIcon.style.display="block";
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





const URL="http://api.endlessmedical.com/v1/dx";


//This function is called when the user submits its symptoms



/*const clientAge=(document.getElementById("clientAge")).value;
const submitButton=document.querySelector("#submitButton");

submitButton.addEventListener("click", ()=>{
    //analyze the whole shits

})
*/


/*
function getValue(obj){
    //value fof the object
    const objectValue=obj.value;
    //id of the object 
    const objectID=obj.id;
    jQuery.ajax({
        url:`http://api.endlessmedical.com/v1/dx/UpdateFeature?SessionID=${id}&name=${objectID}&value=${objectValue}`,
        success:function(res){
            console.log(res);
            //getSource(res.results[0].id);
        },
        error:console.log("penis")
    })

}


*/
let id;
getID();

function getID(){;
    jQuery.ajax({
        url:`http://api.endlessmedical.com/v1/dx/InitSession`,
        success:function(res){
            id=res.SessionID;
            console.log(id);
            AcceptTermsOfUse();
        },
        error:console.log("penis")
    })
}

function AcceptTermsOfUse(){
    jQuery.ajax({
        type:"POST",
        url:`http://api.endlessmedical.com/v1/dx/AcceptTermsOfUse?SessionID=${id}&passphrase=I%20have%20read,%20understood%20and%20I%20accept%20and%20agree%20to%20comply%20with%20the%20Terms%20of%20Use%20of%20EndlessMedicalAPI%20and%20Endless%20Medical%20services.%20The%20Terms%20of%20Use%20are%20available%20on%20endlessmedical.com`,
        success:function(res){
            console.log("success");
            console.log(res);
            //getSource(res.results[0].id);
        },
        error:console.log("penis")
    })

}


function getValue(obj){
    //value fof the object
    const objectValue=obj.value;
    //id of the object 
    const objectID=obj.id;
    jQuery.ajax({
        type:"POST",
        url:`http://api.endlessmedical.com/v1/dx/UpdateFeature?SessionID=${id}&name=${objectID}&value=${objectValue}`,
        success:function(res){
            console.log("success");
            console.log(res);
            //getSource(res.results[0].id);
        },
        error:console.log("penis")
    })

}













