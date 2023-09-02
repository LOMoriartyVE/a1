document.getElementById("home").onclick = function(){
    location.href="index.html"
}

document.getElementById("profile_username").innerText = localStorage.getItem("Username") +" " +  localStorage.getItem("LastName")
let UserName =document.getElementById("username")

let LastName = document.getElementById("lastname")

let Email = document.getElementById("email")

let Tel = document.getElementById("tel")

let Data = document.getElementById("data")

let Selector = document.getElementById("selector")

UserName.innerText = localStorage.getItem("Username")
LastName.innerText = localStorage.getItem("LastName")
Email.innerText = localStorage.getItem("Email")
Tel.innerText = localStorage.getItem("tel")
Data.innerText = localStorage.getItem("Data1") +"/"+ localStorage.getItem("Data2")+"/"+ localStorage.getItem("Data3")
selector.innerText = localStorage.getItem("selector")


let sec1_element1 = document.getElementById("sec1_element1")
let sec1_element2 = document.getElementById("sec1_element2")
let sec1_element3 = document.getElementById("sec1_element3")
let sec1_element4 = document.getElementById("sec1_element4")
setTimeout(() => {
    sec1_element1.style.backgroundColor = "#d2691e"
}, 1);
sec1_element1.onclick = function(){
    sec1_element1.style.backgroundColor = "#d2691e"
    sec1_element2.style.backgroundColor = ""
    sec1_element3.style.backgroundColor = ""
    sec1_element4.style.backgroundColor = ""
    sec1_element4.style.color = "#a52a2a"
}
sec1_element2.onclick = function(){
    sec1_element2.style.backgroundColor = "#d2691e"
    sec1_element1.style.backgroundColor = ""
    sec1_element3.style.backgroundColor = ""
    sec1_element4.style.backgroundColor = ""
    sec1_element4.style.color = "#a52a2a"
}
sec1_element3.onclick = function(){
    sec1_element4.style.color = "#a52a2a"
    sec1_element3.style.backgroundColor = "#d2691e"
    sec1_element2.style.backgroundColor = ""
    sec1_element1.style.backgroundColor = ""
    sec1_element4.style.backgroundColor = ""
}
sec1_element4.onclick = function(){
    sec1_element4.style.backgroundColor = "#d2691e"
    sec1_element4.style.color = "#fff"
    sec1_element2.style.backgroundColor = ""
    sec1_element3.style.backgroundColor = ""
    sec1_element1.style.backgroundColor = ""
}

// searcher main manus : 
let nev2_searcher_input = document.getElementById("nev2_searcher_input");
let searcher_icon = document.getElementById("searcher_icon");
let nev2_searcher = document.getElementById("nev2_searcher");

let searcher_icon_time=0;
let searcher_icon_bool=true;
searcher_icon.addEventListener("click", e=>{
    
    
    if(searcher_icon_time%2==0){
        if(searcher_icon_bool){
        searcher_icon_bool=false
    setTimeout(() => {
        nev2_searcher.style.justifyContent = "none"
        nev2_searcher.style.width = "320px"
        nev2_searcher.style.cursor = "default"
        searcher_icon.style.cursor = "pointer"
    }, 1);
    setTimeout(() => {
        nev2_searcher_input.style.width = "250px"
        nev2_searcher.style.border = "#121212 1px solid"
        nev2_searcher_input.style.visibility = "visible"
        nev2_searcher_input.style.opacity = "1"
        searcher_icon_time++;
        console.log()
    }, 10);
    setTimeout(() => {
        searcher_icon_bool = true
    }, 300);
}}
    if(searcher_icon_time%2!=0) {
        if(searcher_icon_bool){
            searcher_icon_bool = false

       
       
        
        setTimeout(() => {
            nev2_searcher.style.justifyContent = "center"
            nev2_searcher_input.style.width = "0px"
    
            nev2_searcher.style.border = "#121212 0px solid"
            nev2_searcher_input.style.visibility = "hidden"
            nev2_searcher_input.style.opacity = "0"
        }, 1);
        setTimeout(() => {
            nev2_searcher.style.width = "40px"
            nev2_searcher.style.cursor = "pointer"
            searcher_icon.style.cursor = "default"
            searcher_icon_time++
        }, 10);
        setTimeout(() => { 
            searcher_icon_bool= true
        }, 300);
         
 }
    }
})
