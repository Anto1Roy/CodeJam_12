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
const notesDiv=document.querySelector("#DiagnosisDiv");
//given the ingredients on sale in the grocery store, would return a list of recipes containing those elements
const libraryDiv=document.querySelector("#TestDiv");


//BUTTONS
const diagnosticButton=document.querySelector("#SymptomsButton");
const whereToButton=document.querySelector("#DiagnosticButton");
const practiceButton=document.querySelector("#TestButton");

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







//This function is called when the user submits its symptoms


let id;
getID();

function getID(){;
    jQuery.ajax({
        url:`http://api.endlessmedical.com/v1/dx/InitSession`,
        success:function(res){
            id=res.SessionID;
            console.log(id);
            console.log("we got the id");
            AcceptTermsOfUse();
        },
        error:console.log("did not get ID")
    })
}

function AcceptTermsOfUse(){
    jQuery.ajax({
        type:"POST",
        url:`http://api.endlessmedical.com/v1/dx/AcceptTermsOfUse?SessionID=${id}&passphrase=I%20have%20read,%20understood%20and%20I%20accept%20and%20agree%20to%20comply%20with%20the%20Terms%20of%20Use%20of%20EndlessMedicalAPI%20and%20Endless%20Medical%20services.%20The%20Terms%20of%20Use%20are%20available%20on%20endlessmedical.com`,
        success:function(res){
            console.log("success for the term of use");
            console.log(res);
        },
        error:console.log("did not accept")
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
            console.log("post success");
            console.log(res);
            //getSource(res.results[0].id);
        },
        error:console.log("did not post")
    })

}

/*
analyze = requests.get(f"{URL}/Analyze?SessionID={id}")
    for i in range(0,5):
        print(eval(analyze.content)["Diseases"][i])
    tests = requests.get(f"{URL}/GetSuggestedTests?SessionID={id}")
*/

const submitButton=document.querySelector("#SubmitButton");
let diseases;
let tests;
//Analyze the different symptoms to output the diagnostic
submitButton.addEventListener("click", ()=>{
    
    jQuery.ajax({
        url:`http://api.endlessmedical.com/v1/dx/Analyze?SessionID=${id}`,
        success:function(res){
            console.log("we lit buddy i have cancer");
            console.log(res.Diseases);
            diseases=res.Diseases;
            getDiagnostic();

        },
        error:console.log("analyze api problem")
    });
    
    jQuery.ajax({
        url:`http://api.endlessmedical.com/v1/dx/GetSuggestedSpecializations?SessionID=${id}`,
        success:function(res2){
            console.log("in the tests api");
            console.log(res2);
            tests=res2.SuggestedSpecializations;
            console.log(tests);
            getTests();

        },
        error:console.log("Test api problem")
    });
    
    
})


const resultDiagnosisDiv=document.getElementById("resultDiagnosisDiv");
const defaultResult=document.getElementById("defaultResult");

function getDiagnostic(){
    if (diseases.length<5){
        resultDiagnosisDiv.style.display="none";
        defaultResult.style.display="block";

    }
    let bar=5;
    for(var i=0; i<diseases.length;i++){
        if (i==5){
            //unhide the result div, hide the standard div
            resultDiagnosisDiv.style.display="block";
            defaultResult.style.display="none";
            window.alert("You are dying loser, go see your diagnostic and specialists you should see!");
            break;
        }
        Object.entries(diseases[i]).forEach(([key, value])=>{
            document.getElementById(`disease${i+1}`).innerHTML=`${key}`;
            document.getElementById(`percent${i+1}`).innerHTML=`${parseFloat(value*100).toFixed(2)}%`;
            document.querySelector(`.bar-${bar}`).style.width=String(parseFloat(value*100).toFixed(2))+"%";
        })
        bar-=1;
    }
}

function getTests(){

}












