
let user = document.getElementById("user")
let passs = document.getElementById("passs")
let login = document.getElementById("login")
let input_div = document.getElementById("input_div")
let title = document.getElementById("title")
let container = document.getElementById("container")
let note = document.getElementById("note")



    let pass = document.createElement("input")
    pass.className = "input1"
    let passC = document.createElement("input")
    passC.className = "input1"
    let BDiv = document.createElement("input")
    BDiv.className = "BDiv"
    BDiv.innerText = "Registration"
    BDiv.type = "submit"
    let note2 = document.createElement("p")
    note2.className = "note_p2"
    note2.innerText = "Passwords didn't match. Try again."
    let back_div = document.createElement("div")
    back_div.className = "back_div"
    let back_img = document.createElement("img")
    back_img.className = "back_img"
    back_div.append(back_img)
    let form = document.createElement("form")
    form.className = "login_form"
    form.action = "index.html"
    form.method = "GET"
    form.enctype = "multipart/form-data"
    let container_1 = document.createElement("div")
    container_1.className = "container1"
    
    
    let TDiv = document.createElement("div")
    TDiv.className = "TDiv"
    TDiv.innerText = "Registration"
    let nameDiv = document.createElement("div")
    nameDiv.className = "nameDiv"
    let passDiv = document.createElement("div")
    passDiv.className = "passDiv"
    let emailDiv = document.createElement("div")
    emailDiv.className = "emailDiv"
    let selector = document.createElement("select") 
    selector.className = "selector"
    let telDiv = document.createElement("div")
    telDiv.className = "telDiv"
    let loct = true;
    let loct2 = true
    let t=0;
    t=Number(t)
function createAcc(){
    if(loct){
        loct = false;
    
    
    


        

    let name = document.createElement("input")
    name.className = "input1"
    name.id="username"
    let last = document.createElement("input")
    last.className = "input1"

    
    
    
   
    let email = document.createElement("input")
    email.className = "input1"
    email.type = "email"
    

    let DataDiv = document.createElement("div")
    DataDiv.className = "DataDiv"
    let Data1 = document.createElement("input")
    Data1.className = "input1"
    Data1.id = "Data1"
    let Data2 = document.createElement("input")
    Data2.className = "input1"
    Data2.id = "Data2"
    let Data3 = document.createElement("input")
    Data3.className = "input1"
    Data3.id = "Data3"

    
    let op1 = document.createElement("option")
    op1.className = "op"
    op1.innerText = "Male"
    let op2 = document.createElement("option")
    op2.className = "op"
    op2.innerText = "Female"
    let op3 = document.createElement("option")
    op3.className = "op"
    op3.innerText = "Rather not say"

    
    let tel = document.createElement("input")
    tel.className = "input1"
    tel.value = "+"
    tel.maxLength = "14"
    tel.type = "tel"

    
    
    
    name.required = "required"
    last.required = "required"
    tel.required = "required"
    pass.required = "required"
    passC.required = "required"
    email.required = "required"
    Data1.required = "required"
    Data2.required = "required"
    Data3.required = "required"
    selector.required = "required"

    name.name = "user"
    last.name = "last"
    tel.name = "tel"
    pass.name = "pass"
    passC.name = "passC"
    email.name = "email"
    Data1.name = "Data1"
    Data2.name = "Data2"
    Data3.name = "Data3"
    selector.name = "selector"
   
   
    setTimeout(() => {
    input_div.style.opacity = "0"
    title.style.opacity = "0"
    note.style.opacity = "0"
    
    }, 1);
    setTimeout(() => {
    
    title.style.visibility = "hidden"
    title.style.fontSize = "0"
    note.style.visibility = "hidden"
   
    }, 500);
    setTimeout(() => {
    input_div.style.visibility = "hidden"
    input_div.style.height = "0"
    input_div.style.width = "0"
    }, 800);
    setTimeout(() => {
    container.style.height = "600px"
    container.style.width = "450px"
    
    }, 600);       
    setTimeout(() => {
    container.style.flexDirection = "row"
    container.style.alignItems = "start"
    container.style.justifyContent = "start"
    container.style.padding = "0"   
    
    container_1.style.visibility = "visible"
    form.style.visibility = "visible"
    
    if(t==0){container.append(container_1);
    container_1.append(back_div);
    container_1.append(form)
    form.append(TDiv);}
    
    
    container_1.style.opacity = "1"
    form.style.opacity = "1"
    
    
    
    if(t==0){form.append(note2)
    form.append(nameDiv);
    form.append(passDiv);
    form.append(emailDiv);
    form.append(DataDiv);
    form.append(telDiv);}
    
    
    back_img.src ="/images/back2.png"
    
    
    }, 950);
    setTimeout(() => {
    TDiv.style.visibility ="visible"
    back_div.style.visibility ="visible"
    }, 1100);
    setTimeout(() => {
    container_1.style.opacity ="1"
    
    
    
    
    if(t==0){nameDiv.append(name);
    nameDiv.append(last);}
    
    nameDiv.style.visibility ="visible"
    passDiv.style.visibility ="visible"
    emailDiv.style.visibility ="visible"
    DataDiv.style.visibility ="visible"
    name.style.visibility ="visible"
    last.style.visibility ="visible"
    email.style.visibility ="visible"
    Data1.style.visibility ="visible"
    Data2.style.visibility ="visible"
    Data3.style.visibility ="visible"

    }, 1150);
    setTimeout(() => {
    email.style.width = "100%"
    
    if(t==0){ emailDiv.append(email)
    passDiv.append(pass);
    passDiv.append(passC);}
    
   
    
    pass.style.visibility ="visible"
    passC.style.visibility ="visible"

    
    }, 1250);
    setTimeout(() => {
    TDiv.style.opacity ="1"
    back_div.style.opacity ="1"
    

    nameDiv.style.opacity ="1"
    name.minLength = "4px"
    passDiv.style.opacity ="1"
    emailDiv.style.opacity ="1"
    name.style.opacity ="1"
    name.placeholder ="First Name"
    last.style.opacity ="1"
    last.placeholder ="Last Name"
    Data1.style.width = "100px"
    Data1.placeholder= "Year"
    Data2.style.width = "50px"
    Data2.placeholder = "Month"
    Data3.style.width = "50px"
    Data3.placeholder = "Day"
    
    
    if(t==0){DataDiv.append(Data1);
    DataDiv.append(Data2);
    DataDiv.append(Data3);
    DataDiv.append(selector);
    selector.append(op1);
    selector.append(op2);
    selector.append(op3);}
    
    
    
    
    
    
    telDiv.style.visibility ="visible"
    BDiv.style.visibility ="visible"
    selector.style.visibility ="visible"
    }, 1300);
    setTimeout(() => {
    
    email.style.opacity ="1"
    
    
    if(t==0){form.append(telDiv);
    form.append(BDiv);}
    
    email.placeholder ="Email"
    pass.placeholder="Password"
    passC.placeholder ="Confirm"
    pass.style.opacity ="1"
    passC.style.opacity ="1"
    }, 1400);
    setTimeout(() => {
    
    if(t==0){
        telDiv.append(tel);
    }
    
    
    DataDiv.style.opacity ="1"
    tel.style.visibility ="visible"
    tel.placeholder = "Phone Number"
    selector.style.opacity ="1"
    

    Data1.type ="number"
    Data1.value = ""
    Data1.maxlength="4"
    Data1.max = "2023"
    Data1.min = "1850"


    Data2.type ="number"
    Data2.value = ""
    Data2.maxlength="2"
    Data2.max = "12"
    Data2.min = "1"


    Data3.type ="number"
    Data3.value = ""
    Data3.maxlength="2"
    Data3.max = "31"
    Data3.min = "1"

    Data1.style.opacity ="1"
    Data2.style.opacity ="1"
    Data3.style.opacity ="1"

    telDiv.style.opacity = "1"
    }, 1500);
    setTimeout(() => {
    tel.style.opacity = "1"
    BDiv.style.opacity ="1"
    
    })
setTimeout(() => {
    loct = true
    t++;
}, 1800);}

}

    passC.addEventListener("input", e=>{
    if(loct){
    if(pass.value !=passC.value){
        note2.style.visibility = "visible"
        note2.style.opacity ="1"
        BDiv.style.opacity = "0"
        BDiv.style.visibility = "hidden"
    }
    else{
        note2.style.visibility = "hidden"
        note2.style.opacity ="0"
        BDiv.style.opacity = "1"
        BDiv.style.visibility = "visible"
        
    }}
    
})

pass.addEventListener("change", e=>{
    if(loct){
    if(pass.value !=passC.value){
        note2.style.visibility = "visible"
        note2.style.opacity ="1"
        BDiv.style.opacity = "0"
        BDiv.style.visibility = "hidden"
    }
    else{
        note2.style.visibility = "hidden"
        note2.style.opacity ="0"
        BDiv.style.opacity = "1"
        BDiv.style.visibility = "visible"
        
    }}
    
})

back_div.addEventListener("click", e =>{
    if(loct2==true){
        loct2=false
    setTimeout(() => {
       container_1.style.transition = "0.5s" 
       container_1.style.opacity = "0" 
    }, 1);
    setTimeout(() => {
    container_1.style.transition = "1.5s" 
    form.style.opacity = "0"
    back_div.style.opacity = "0"
    telDiv.style.opacity = "0"
    selector.style.opacity = "0"
    emailDiv.style.opacity = "0"
    passDiv.style.opacity = "0"
    nameDiv.style.opacity = "0"
    TDiv.style.opacity = "0"
    }, 500);
    
    setTimeout(() => {
    container_1.style.visibility = "hidden" 
    form.style.visibility = "hidden"
    back_div.style.visibility = "hidden"
    telDiv.style.visibility = "hidden"
    selector.style.visibility = "hidden"
    emailDiv.style.visibility = "hidden"
    passDiv.style.visibility = "hidden"
    nameDiv.style.visibility = "hidden"
    TDiv.style.visibility = "hidden"
    }, 550);
    setTimeout(() => {
    container.style.height = "350px"
    container.style.width = "700px" 
      
    }, 700);
    setTimeout(() => {
    container.style.flexDirection = "column"
    container.style.alignItems = "center"
    container.style.justifyContent = "none"
    container.style.padding = "20px"   
    }, 800);

    setTimeout(() => {
    input_div.style.visibility = "visible"
    note.style.visibility = "visible"
    title.style.visibility = "visible"
    }, 900);
    setTimeout(() => {
    input_div.style.height = "200px"
    input_div.style.width = "100%"
    title.style.fontSize = "40px"
    
    }, 1200);
    setTimeout(() => {
    input_div.style.opacity = "1"
    note.style.opacity = "1"
    title.style.opacity = "1"
    }, 1500);
    setTimeout(() => {
        loct2=true
    }, 1700);


}



    
})
let forget_c = document.getElementById("forget_c")
let sec1 = document.getElementById("sec1")
let forgetDiv = document.createElement("div")
forgetDiv.className = "forgetDiv"

let forgetTitle =document.createElement("forgetTitle")
forgetTitle.className = "forgetTitle"
forgetTitle.innerText = "Forget Password!"

let forgetP = document.createElement("p")
forgetP.className = "forgetP"
forgetP.innerText = "Relax and try to remember your password."

let forgetOK = document.createElement("button")
forgetOK.className = forgetDiv.id = "forgetOK"
forgetOK.innerText ="OK"
let loct3=true
let fo=0
fo=Number(fo);
forget_c.onclick = function(){
if(loct3==true){
    loct3=false
    if(fo==0){sec1.append(forgetDiv);
    forgetDiv.append(forgetTitle)
    forgetDiv.append(forgetP)
    forgetDiv.append(forgetOK)
    }
    
    setTimeout(() => {
        if(fo%2!=0){
        forgetDiv.style.top="-150px"}
    }, 200);
    setTimeout(() => {
        if(fo%2==0){
        forgetDiv.style.top="50px"}
    }, 200);
    fo++
    
    


setTimeout(() => {
    loct3=true
    
}, 800);

}
}
forgetOK.onclick = function(){
    if(loct==true){
        fo++
    forgetDiv.style.top="-150px"


    }
}
form.addEventListener("sumbit", e=>{
    e.preventDefault()
    let login_save_bar = document.createElement("div")
    login_save_bar.className = "forgetDiv"


})