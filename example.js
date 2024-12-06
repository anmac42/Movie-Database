// Authors : Gina Philipose, Rena Ahn, Zachary Mullen
// JavaScript File : scripts.js
// Last Update : August 29th, 2024

// "Initial Sugar Concentrations" and "Lactose Operon" input display
const display = document.getElementById("displayInputs");

//containers to put inputs in
const lacExIn = document.getElementById("lacExInput");
const gluIn = document.getElementById("gluInput");
const lacInIn = document.getElementById("lacInInput");
const lacAlIn = document.getElementById("lacAlInput");
const promoter = document.getElementById("prom");
const operator = document.getElementById("oper");
const repressor = document.getElementById("rep");
const permease = document.getElementById("perm");
const betaGal = document.getElementById("bGal");
const CAP = document.getElementById("CAPCAMP");
const plas = document.getElementById("plas");

// input display options
const lacIn = document.getElementById("lacIn");
const lacOut = document.getElementById("lacOut");
const allo = document.getElementById("allo");
const gluc = document.getElementById("gluc");
const promOne = document.getElementById("promOne");
const promNone = document.getElementById("promNone");
const opOne = document.getElementById("opOne");
const opNone = document.getElementById("opNone");
const repOne = document.getElementById("repOne");
const repNone = document.getElementById("repNone");
const repTwo = document.getElementById("repTwo");
const permOne = document.getElementById("permOne");
const permNone = document.getElementById("permNone");
const betaNone = document.getElementById("betaNone");
const betaOne = document.getElementById("betaOne");
const capAct = document.getElementById("capAct");
const capInact = document.getElementById("capInact");
const plasPres = document.getElementById("plasPres");
const plasAbs = document.getElementById("plasAbs");

// plasmid input display containers
const oper2 = document.getElementById("oper2")
const rep2 = document.getElementById("rep2")
const perm2 = document.getElementById("perm2")
const bGal2 = document.getElementById("bGal2")
const CAPCAMP2 = document.getElementById("CAPCAMP2")
const prom2 = document.getElementById("prom2")

// extra plasmid inputs
const plasPromPres = document.getElementById("plasPromPres");
const plasPromAbs = document.getElementById("plasPromAbs"); 
const plasOperPres = document.getElementById("plasOperPres"); 
const plasOperAbs = document.getElementById("plasOperAbs");
const plasRepNone = document.getElementById("plasRepNone"); 
const plasRepAbs = document.getElementById("plasRepAbs"); 
const plasRepLac = document.getElementById("plasRepLac"); 
const plasPermNone = document.getElementById("plasPermNone")
const plasPermAbs = document.getElementById("plasPermAbs");
const plasBNone = document.getElementById("plasBNone");
const plasBAbs = document.getElementById("plasBAbs");

// run sim button
const runBtn = document.getElementById("runBtn")

// next page button on simulation page
const nxtPg = document.getElementById("linkPart");


window.addEventListener("load", checkData);
function checkData(){
    // if pre-test hasn't been taken yet, start at firstPage.html instead of simulation page
    if(localStorage.getItem("questions")==null) {
        window.location.href = "firstPage.html";
    } else { 
        // if post-test has been taken, change button on simulation page
        // to go to the score page instead of the post-test page again
        const getQuestions = localStorage.getItem("questions");
        const jsonQuestions = JSON.parse(getQuestions);
        if(jsonQuestions.finish != 0) {
            var btnText = document.getElementById("btnText");
            btnText.innerHTML="<b>Go to Score Page</b>";
            nxtPg.href = "submission.html"
        }
    }
};

// start simulating / submit
runBtn.addEventListener("submit", function(event){
    event.preventDefault();
});

// display plasmid inputs
plasPromPres.addEventListener("click", function() {
    prom2.innerHTML="";
    prom2.append(plasPromPres.value);
});
plasPromAbs.addEventListener("click", function() {
    prom2.innerHTML="";
    prom2.append(plasPromAbs.value);
});
plasOperPres.addEventListener("click", function() {
    oper2.innerHTML="";
    oper2.append(plasOperPres.value);
});
plasOperAbs.addEventListener("click", function() {
    oper2.innerHTML="";
    oper2.append(plasOperAbs.value);
});
plasRepNone.addEventListener("click", function() {
    rep2.innerHTML="";
    rep2.append(plasRepNone.value);
});
plasRepAbs.addEventListener("click", function() {
    rep2.innerHTML="";
    rep2.append(plasRepAbs.value);
});
plasRepLac.addEventListener("click", function() {
    rep2.innerHTML="";
    rep2.append(plasRepLac.value);
});
plasPermNone.addEventListener("click", function() {
    perm2.innerHTML="";
    perm2.append(plasPermNone.value);
});
plasPermAbs.addEventListener("click", function() {
    perm2.innerHTML="";
    perm2.append(plasPermAbs.value);
});
plasBNone.addEventListener("click", function() {
    bGal2.innerHTML="";
    bGal2.append(plasBNone.value);
});
plasBAbs.addEventListener("click", function() {
    bGal2.innerHTML="";
    bGal2.append(plasBAbs.value);
});


// displays defaults
window.addEventListener("load", function(){
    permNone.click();
    promNone.click();
    opNone.click();
    repNone.click();
    betaNone.click();
    capInact.click();
    plasAbs.click();
    plasPromPres.click()
    plasOperPres.click()
    plasRepNone .click()
    plasPermNone.click()
    plasBNone.click()
    lacExIn.append(lacOut.value)
    lacInIn.append(lacIn.value)
    gluIn.append(gluc.value)
    lacAlIn.append(allo.value)
});

//display plasmid inputs box or not
plasPres.addEventListener("click", function() {
    plas.innerHTML="";
    plas.append(plasPres.value);
    document.getElementById("pres").style.display = "block";
    document.getElementById("plasmidInputs").style.display = "block";
});
plasAbs.addEventListener("click", function() {
    plas.innerHTML="";
    plas.append(plasAbs.value);
    document.getElementById("pres").style.display = "none";
    document.getElementById("plasmidInputs").style.display = "none"
});

// display inputs
capAct.addEventListener("click", function() {
    CAP.innerHTML="";
    CAP.append(capAct.value);
});
capInact.addEventListener("click", function() {
    CAP.innerHTML="";
    CAP.append(capInact.value);
});
betaOne.addEventListener("click", function() {
    betaGal.innerHTML="";
    betaGal.append(betaOne.value);
});
betaNone.addEventListener("click", function() {
    betaGal.innerHTML="";
    betaGal.append(betaNone.value);
});
permOne.addEventListener("click", function() {
    permease.innerHTML="";
    permease.append(permOne.value);
});
permNone.addEventListener("click", function() {
    permease.innerHTML="";
    permease.append(permNone.value);
});
repTwo.addEventListener("click", function() {
    repressor.innerHTML="";
    repressor.append(repTwo.value);
});
repOne.addEventListener("click", function() {
    repressor.innerHTML="";
    repressor.append(repOne.value);
});
repNone.addEventListener("click", function() {
    repressor.innerHTML="";
    repressor.append(repNone.value);
});
opNone.addEventListener("click", function() {
    operator.innerHTML="";        
    operator.append(opNone.value);
});
opOne.addEventListener("click", function() {
    operator.innerHTML="";
    operator.append(opOne.value);
});
promOne.addEventListener("click", function() {
    promoter.innerHTML="";
    promoter.append(promOne.value);
});
promNone.addEventListener("click", function() {
    promoter.innerHTML="";
    promoter.append(promNone.value);
});
lacOut.addEventListener("input", function(){
    lacExIn.innerHTML = "";
    lacExIn.append(lacOut.value);  
});
gluc.addEventListener("input", function(){
    gluIn.innerHTML = "";
    gluIn.append(gluc.value);  
});
lacIn.addEventListener("input", function(){
    lacInIn.innerHTML = "";
    lacInIn.append(lacIn.value);  
});
allo.addEventListener("input", function(){
    lacAlIn.innerHTML = "";
    lacAlIn.append(allo.value);  
});

// opens input tabs
function openTab(event, tabName) {
    var tabcontent = document.getElementsByClassName("content"); // displayed content
    const tablinks = document.getElementsByClassName("tablinks"); // tab buttons
    
    if(event.currentTarget.className.indexOf(" active")!=-1){
        // Hide all "tabcontent" class elements
        for (let i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
        }

        // remove "active" status from all
        for (let i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace(" active", "");
        }
    } else {
        // Get all elements with class="tabcontent" and hide them
        for (let i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
        }

        // show tab content for specific tab button clicked
        document.getElementById(tabName).style.display = "block";

        // remove "active" status from all
        for (let i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace(" active", "");
        }

        // Show only the current tab as active
        document.getElementById(tabName).style.display = "block";
        event.currentTarget.className += " active";
    }
}


