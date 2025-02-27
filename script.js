window.addEventListener("load", function () {
    elemekElerese1();
    elemekElerese2();
    elemekElerese3();
    elemekElerese4();
    elemForm1();
   
});

function elemekElerese1() {
    const elem=document.querySelectorAll("section h2") [0];
    document.getElementById("f1");
    let tartalom=elem.innerHTML

    console.log(tartalom);
}

function elemekElerese2() {
    const elem=document.querySelectorAll("#ide")[0]
   document.getElementById("ide");
   elem.innerHTML="<p>Jó reggelt!</p>"
    
}

function elemekElerese3(){
    const elem3=document.querySelectorAll(".ide")[0]
    document.getElementsByClassName("ide");
    elem3.innerHTML="<p>Jó reggelt!</p>"

}

function elemekElerese4(){
    const elem4=document.getElementsByClassName("lista")[0];
    let txt="<ul>"
    {
        
        for (let i=0; i <5; i++) {
            let szam=Math.floor(Math.random()*21)+10
            txt+=`<li>${szam}</li>`
        }
        txt+="</ul>"
    }
    elem4.innerHTML=txt;    

}

function elemForm1(){
    const form1=document.getElementsByClassName("lista")[0];
    form1.classList.add("formazott")
    form1.innerHTML=" ";
}
