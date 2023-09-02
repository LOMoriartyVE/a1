

let login_in_done = false;
document.getElementById("profile_page").onclick = function(){
    if(login_in_done){
        location.href="profile.html"
    }
    else{
        location.href= "Login.html"
    }
}





document.getElementById("home").onclick = function(){
    location.href="index.html"
}


var auto_slider1 = 1

setInterval(function(){
    
    document.getElementById("radio" + auto_slider1).checked = true;
    auto_slider1++;
    if(auto_slider1>6){
        auto_slider1=1
    }
}, 5000)





let nev2_user = document.getElementById("profile_page")
let Login_in_text = document.getElementById("Login_in_text")
let login_in_profile_pic = document.getElementById("login_in_profile_pic")
let inf = document.getElementById("inf")
let inf_name = document.getElementById("inf_name")
let UserName,LastName,PassWord,PassWordC,Tel,Data1,Data2,Data3,Email,selector;
let Person = [];
UserName=String(UserName)
let UserIndex = [];
new URLSearchParams(window.location.search).forEach((name, value) =>{
   
    if(!(Person.length==10))
    switch(value){
        case "user":UserName = name;Person.push(UserName);break;
        case "last":LastName = name ;Person.push(LastName); break ;
        case "pass":PassWord = name ;Person.push(PassWord); break ;
        case "passC":PassWordC = name ;Person.push(PassWordC); break ;
        case "email":Email = name ;Person.push(Email); break ;
        case "Data1":Data1 = name ;Person.push(Data1); break ;
        case "Data2":Data2 = name ;Person.push(Data2); break ;
        case "Data3":Data3 = name ;Person.push(Data3); break ;
        case "selector":selector = name ;Person.push(selector); break ;
        case "tel":Tel = name ;Person.push(Tel);
        login_in_done=true;    
        console.log("from profile");
        
        UserIndex=(UserName.slice(0,6))
        console.log("o", UserIndex)
        
        Login_in_text.innerText = UserIndex + "..."

        
        
        
        
        
        
        break;

    }
})
localStorage.setItem("Username", UserName)
localStorage.setItem("LastName", LastName)
localStorage.setItem("PassWord", PassWord)
localStorage.setItem("Email", Email)
localStorage.setItem("Data1", Data1)
localStorage.setItem("Data2", Data2)
localStorage.setItem("Data3", Data3)
localStorage.setItem("selector", selector)
localStorage.setItem("tel", Tel)


for(let u=0;u<Person.length;u++){
    console.log(Person[u])
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


// sec0
let day = document.getElementById("Days");
let hour = document.getElementById("hours");
let min = document.getElementById("min");
let sec = document.getElementById("sec");
// set timer
day.innerText = "7";
hour.innerText = "1";
min.innerText = "1";
sec.innerText = "1";
let day1 = 7;
let hour1 = 1;
let min1 = 1;
let sec1 = 1;
function StartTimer(){
    setInterval(() => {
        
        sec1-=1
        if(min1==0 && sec1==0 && hour==0){
            day1-=1
            hour=23
            min1=59
            sec1=59
            day.innerText = day1;
            min.innerText = min1;
            hour.innerText = hour1;
        }
        if(min1==0 && sec1==0){
            hour1-=1
            min1=59
            sec1=59
            min.innerText = min1;
            hour.innerText = hour1;
        }
        if(sec1==0){
            min1-=1
            sec1=59;
            min.innerText = min1;

        }
        sec.innerHTML = sec1;
        
        
        








    }, 1000);
}

//sec01 label
let games_label1 = document.getElementById("games_label1")
let games_label2 = document.getElementById("games_label2")
let games_label3 = document.getElementById("games_label3")
let games_label4 = document.getElementById("games_label4")
games_label1.onclick = function(){
    games_label1.style.backgroundColor = "#a52a2a"
    games_label2.style.backgroundColor = "#d2691e"
    games_label3.style.backgroundColor = "#d2691e"
    games_label4.style.backgroundColor = "#d2691e"
}
games_label2.onclick = function(){
    games_label2.style.backgroundColor = "#a52a2a"
    games_label1.style.backgroundColor = "#d2691e"
    games_label3.style.backgroundColor = "#d2691e"
    games_label4.style.backgroundColor = "#d2691e"
}
games_label3.onclick = function(){
    games_label3.style.backgroundColor = "#a52a2a"
    games_label2.style.backgroundColor = "#d2691e"
    games_label1.style.backgroundColor = "#d2691e"
    games_label4.style.backgroundColor = "#d2691e"
}
games_label4.onclick = function(){
    games_label4.style.backgroundColor = "#a52a2a"
    games_label2.style.backgroundColor = "#d2691e"
    games_label3.style.backgroundColor = "#d2691e"
    games_label1.style.backgroundColor = "#d2691e"
}















let switcher_s1 = document.getElementById("switcher_s1").onclick = function(){
    document.getElementById("switcher_s1").style.backgroundColor = "#a52a2a"
    document.getElementById("switcher_s2").style.backgroundColor = "#ae6161"
    document.getElementById("switcher_s3").style.backgroundColor = "#ae6161"
    
}
let switcher_s2 = document.getElementById("switcher_s2").onclick = function(){
    document.getElementById("switcher_s2").style.backgroundColor = "#a52a2a"
    document.getElementById("switcher_s1").style.backgroundColor = "#ae6161"
    document.getElementById("switcher_s3").style.backgroundColor = "#ae6161"
}
let switcher_s3 = document.getElementById("switcher_s3").onclick = function (){
    document.getElementById("switcher_s3").style.backgroundColor = "#a52a2a"
    document.getElementById("switcher_s2").style.backgroundColor = "#ae6161"
    document.getElementById("switcher_s1").style.backgroundColor = "#ae6161"
}
var id = null;
var idd = null;
var id_d =null
var rot = 0;
var t = 0;
var d = Number(d)
d=90;
var o=0;
let n1=0,n2=0,n3=0,n4=0;
n1,n2=Number(n1, n2)




   m1=  document.getElementById("img4_1")
   m2=  document.getElementById("img4_2")
   m3=  document.getElementById("img4_3")
   m4=  document.getElementById("img4_4")
   let m=[m1, m2, m3, m4];
function rotate(){
    o-=90;
    
    
    t++;
    switch (t) {
        case 1:location.href = "#sec7_card2";break;
        case 2:location.href = "#sec7_card3";break;
        case 3:location.href = "#sec7_card4";break;
        case 4:location.href = "#sec7_card1";break;
    }
    if(t==4){t=0;}

    if(n1==4){n1=0;}
    if(n2==4){n2=0;}
    if(n3==4){n3=0;}
    if(n4==4){n4=0;}



    if(n1!=2){setTimeout(() => {
        if(m1.style.rotate == "-360deg"){o=-90;}
        m1.style.rotate = o + "deg";
    }, 5);}
    if(n1==2){setTimeout(() => {

        m1.style.rotate = o + "deg";
    }, 1200);}
    
    if(n2!=3){setTimeout(() => {
        m2.style.rotate = o + "deg";
    }, 5);}
    if(n2==3){setTimeout(() => {
        m2.style.rotate = o + "deg";
    }, 1200);}

    if(n3!=1){setTimeout(() => {
        m3.style.rotate = o + "deg";
    }, 5);}
    if(n3==1){setTimeout(() => {
        m3.style.rotate = o + "deg";
    }, 1200);}

    if(n4!=0){setTimeout(() => {
        m4.style.rotate = o + "deg";
    }, 5);}
    if(n4==0){setTimeout(() => {
        m4.style.rotate = o + "deg";
    }, 1200);}

    n1+=1;
    n2+=1;
    n3+=1;
    n4+=1;


    
        
    
    
    var elem1 = document.getElementById("C2");   
    clearInterval(id);
    id = setInterval(frame, 5)
    function frame(){rot++;
        if(rot == d ){
            d+=90;
            if(rot == 360){d=90;rot=0}
            clearInterval(id)
        }
       
           
            
            elem1.style.rotate =  rot + "deg";

        

    }

}
function tt(){
    
}
let text = document.getElementById("Text");
let input_div = document.getElementById("input_div");
let SI   = document.getElementById("SI")  ;
let S8bar= document.getElementById("S8bar");
let li_div = document.getElementById("li_div");
let X = document.getElementById("X");
let c,y,x,g,gg,k=0,mn;


text.addEventListener("input", e =>{
    
})

SI.onclick = function (){
    if(text.value == ""){
        
    }
    else{
    if( kl_input){
    kl_input =false
    setTimeout(() => {
        text.style.transition ="0.15s"
        text.style.opacity ="0"
    }, 200);
    setTimeout(() => {
        text.style.visibility ="hidden"
    }, 250);
    setTimeout(() => {
        input_div.style.transition ="0.95s"
        input_div.style.width ="0"
    }, 300);

    setTimeout(() => {
        S8bar.style.transition ="0.75s"
        S8bar.style.width = "50px"
        SI.style.marginLeft = "0px"
       

    }, 500);
    setTimeout(() => { 
        S8bar.style.borderRadius ="50%"
    }, 820);
    setTimeout(() => { 
        
        SI.style.transition ="0.5s"
        SI.style.opacity ="0"
        
    }, 900);
    setTimeout(() => { 
        SI.style.visibility ="hidden"
        input_div.style.visibility ="hidden"
    }, 950);
    setTimeout(() => { 
        
        S8bar.style.height = "600px";
        S8bar.style.width  = "600px";
        S8bar.style.borderRadius ="28px";
    }, 1200);
    setTimeout(() => { 
        S8bar.style.border = "2px #d2691e solid";
        S8bar.style.flexDirection = "column";
        S8bar.style.padding = "50px";
        S8bar.style.alignItems = "start";
        S8bar.style.position = "relative";
        li_div.style.position = "relative";
        li_div.style.visibility = "visible";

    }, 1250);
    setTimeout(() => { 
        X1.style.transition="1s"
        X1.style.top = "10px";
        X1.style.right = "10px";
        X1.style.opacity = "1";
        X1.style.visibility = "visible";
    }, 1400);
    setTimeout(() => {
    kl_input = true
    }, 1700);
   
    
    }}}
    X1.onclick = function(){
        setTimeout(() => {
        li_div.style.position = "absolute";
        li_div.style.visibility = "hidden";
        X1.style.opacity = "0"
        X1.style.transition="0.1s"
        X1.style.visibility = "hidden";
        X1.style.top = "0px";
        X1.style.right = "0px";
        }, 50);
        setTimeout(() => {
        S8bar.style.border = "none";
        S8bar.style.flexDirection = "row";
        S8bar.style.padding = "0 10px";
        S8bar.style.alignItems = "center";
        S8bar.style.position = "relative";
        }, 250);
        setTimeout(() => {
        S8bar.style.height = "50px";
        S8bar.style.width  = "300px";
        S8bar.style.borderRadius ="10px"
        }, 500);
        setTimeout(() => {
            SI.style.transition ="0.8s"
            SI.style.opacity ="1"
        }, 600);
        setTimeout(() => { 
            SI.style.visibility ="visible"
        input_div.style.visibility ="visible"
        }, 820);
        setTimeout(() => { 
            SI.style.marginLeft = "10px"
        }, 900);
        setTimeout(() => { 
            input_div.style.transition ="0.55s"
            input_div.style.width ="245px"
        }, 950);
        setTimeout(() => { 
            
            text.style.opacity = "1"
        }, 1100);
        setTimeout(() => {
            text.style.visibility ="visible"
            text.ariaPlaceholder = "Search"
            text.value = ""
        }, 1250);
    }









let reaction = document.getElementById("reaction")
let rea = document.getElementById("rea");
let hre = document.getElementById("reaction_hea");
let ReactionN=document.getElementById("reaction_n");
let b=true,press=true;
let reaction_nn=0;
reaction.addEventListener("mouseover", e=>{
    
    if(b){
    hre.style.transition = "0.5s"
    hre.src = "/images/heart.png"
    reaction.style.backgroundColor = "#f5f1d1"}
   
}, 1000)
reaction.addEventListener("mouseout", e=>{
    if(b){
    hre.style.transition = "0.5s"
    hre.src = "/images/heart777.png"
    reaction.style.backgroundColor = "#f6f4e5"
    }
}, 1000)
reaction.addEventListener("click", e=>{
    if(press){
    press=false
    b=false
    
    setTimeout(() => {
    hre.style.transition = "0.5s"
    hre.src = "/images/heart777.png"
    reaction.style.backgroundColor = "#f6f4e5"
    }, 1);
    setTimeout(() => {
    hre.style.transition = "0.5s"
    hre.src = "/images/heart.png"
    
    }, 100);
    setTimeout(() => {
    
    hre.style.height ="50%"
    hre.style.width  ="50%"
    rea.style.height = "100%"
    rea.style.width  = "10%"
    }, 100);
    setTimeout(() => {
    hre.style.height ="80%"
    hre.style.width  ="80%"
    }, 200);
    setTimeout(() => {
    rea.style.background  = "#e18b8b"
    rea.style.opacity  = "1"
    ReactionN.style.top = "-15px"
    }, 300);
    setTimeout(() => {
    rea.style.opacity  = "0"
    reaction_nn++;
   
    if(reaction_nn == 10000){
        ReactionN.style.fontSize = "8px"
    }
    reaction_n.innerHTML = reaction_nn;
    }, 500);
    setTimeout(() => {
    rea.style.background  = "#a52a2a"
    rea.style.height = "1%"
    rea.style.width  = "1%"
    rea.style.opacity  = "0"
    

    }, 700);
    setTimeout(() => {
    ReactionN.style.top = "10px"
    }, 900);
    setTimeout(() => {
        press=true
    }, 1000);
    
}


}, 1000)





let Comment_open_a = true;
let comment_open = document.getElementById("comment_open");
let comment_div = document.getElementById("comment_div");
let comment_add_div = document.getElementById("comment_add_div")
let comment_div_close = document.getElementById("comment_div_close");
comment_div_close.onclick = function(){
    setTimeout(() => {
    comment_add_div.style.visibility = "hidden";
    }, 10);
    setTimeout(() => {
    
    comment_div.style.height = "00px";
    comment_div.style.width = "00px";
    }, 700);
    setTimeout(() => {
    comment_div.style.visibility = "hidden";
    }, 420);
    
    
}
comment_open.onclick = function(){
    if(Comment_open_a){
    
    setTimeout(() => {
        comment_div.style.transition = "0.6s"
        comment_div.style.visibility = "visible";
        comment_div.style.height = "810px";
        comment_div.style.width = "700px";
    }, 100);
    setTimeout(() => {
        comment_add_div.style.transition = "0.7s";
        comment_add_div.style.visibility = "visible";
    }, 1300);
}}






let comment_area = document.getElementById("comment_area")
let MK = document.getElementById("make_comment")
let comment_v = document.getElementById("Comment_p")

let l= document.getElementById("sec9")

MK.onclick = function() {
    
    let MK ;
  
    if(comment_v.value === ""){}
    else{ 
    Mk = document.createElement("div");
    Mk.style.backgroundColor = "#ae6161"
    Mk.style.color = "#f5f1d1"
    Mk.style.padding = "5px"
    Mk.style.borderRadius = "6px"
    Mk.style.margin = "6px"
    Mk.innerText = comment_v.value
    Mk.className = "h";
    comment_area.append(Mk)
    comment_v.value =""
    }
}
let sml1 = document.getElementById("sml1")
let big1 = document.getElementById("big1")
let lk = true;
let ui;

big1.onclick = function(){
if(lk){
    lk = false
    setTimeout(() => {
    
    sml1.style.top = "-100px" 
    }, 1);
    setTimeout(() => {
    sml1.style.zIndex = "2" 
    big1.style.zIndex = "1" 
    }, 300);
    setTimeout(() => {
    sml1.style.top = "15px" 
    }, 800);
    setTimeout(() => {
    sml1.style.height = "70px" 
    sml1.style.width = "70px" 
    }, 1200);
    setTimeout(() => {
    big1.style.transition = "0.1s" 
    big1.style.height = "10px" 
    big1.style.width = "10px" 
    big1.style.top = "45px" 
    }, 1700);
    setTimeout(() => {
    big1.style.transition = "0.76s" 
    lk = true
    }, 2000);}
}
sml1.onclick = function(){
if(lk){
    lk = false

    setTimeout(() => {
    
    big1.style.top = "-100px" 
    }, 1);
    setTimeout(() => {
    sml1.style.zIndex = "1" 
    big1.style.zIndex = "2" 
    }, 300);
    setTimeout(() => {
    big1.style.top = "15px" 
    }, 800);
    setTimeout(() => {
    big1.style.height = "70px" 
    big1.style.width = "70px" 
    }, 1200);
    setTimeout(() => {
    sml1.style.transition = "0.1s" 
    sml1.style.height = "10px" 
    sml1.style.width = "10px" 
    sml1.style.top = "45px" 
    }, 1700);
    setTimeout(() => {
    sml1.style.transition = "0.76s" 
    lk = true
    }, 2000);}
}
