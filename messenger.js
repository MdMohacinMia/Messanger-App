

// sating for firebase 


 const firebaseConfig = {
    apiKey: "AIzaSyBCDD4eSl3VKn-Ca4hur6VT0Nq_ycfiMAc",
    authDomain: "my-messanger-app-d7d28.firebaseapp.com",
    projectId: "my-messanger-app-d7d28",
    storageBucket: "my-messanger-app-d7d28.appspot.com",
    messagingSenderId: "548650316243",
    appId: "1:548650316243:web:80f9fdfb0c57e89a9cff26",
    measurementId: "G-NC0LNLKNXY",
    databaseURL: "https://my-messanger-app-d7d28-default-rtdb.europe-west1.firebasedatabase.app/" // ✅ এটা জরুরি
 };

  firebase.initializeApp(firebaseConfig);
  const auth = firebase.auth();
  const database = firebase.database();






// login Page start


// local server User all data

let UserEmails;
let UserPasswords;
let UserNumbers;
let UserNames;
let userLogo;


let currentUserEmail = "";


let currentUserNumber = "";
let userId ="";
// local server User all data


// function listenForMessages() {
//     const myRef = database.ref("messges/"+currentUserNumber);
//     myRef.on("child_added", (snapshot)=> {
//         const msg =snapshot.val();
//         const chatBox = document.querySelector("#meinChat");
//         let messageDiv = document.createElement("div");
//         if (msg.from === currentUserNumber) {
//             messageDiv.id='my'
//         } else {
//             messageDiv.id='you'
//         }
//         messageDiv.innerHTML=`<div><span><p> ${msg.message}</p></span><p>${msg.time}</p></div>`
//         yourId = msg.from;
//         chatBox.appendChild(messageDiv);
//     });
// }


function listenForMessages() {
    const mykey = currentUserEmail.replace(/\./g, "_");
    const myRef = database.ref("messages/" + mykey);

    myRef.on("child_added", (snapshot) => {
        const msg = snapshot.val();
        const chatBox = document.querySelector("#meinChat");
        let messageDiv = document.createElement("div");
        if (msg.from === currentUserEmail) {
            messageDiv.id='my'
        } else {
            messageDiv.id='you'
            userId = msg.from;
            userIds()
        }
        messageDiv.innerHTML=`<div><span><p> ${msg.message}</p></span><p>${msg.time}</p></div>`
        chatBox.appendChild(messageDiv);
    });
  }
function userIds(){
    let UserAllList = document.querySelector("#UserAllList")
    if(userId !== ""){
        try {
        let userName = document.querySelector("#UserAllList div div h3").innerHTML;
        if (userId === userName) {
            return
        }        
    } catch (error) {
        let createDiv= document.createElement("div");
        createDiv.innerHTML=`<img src="" alt="User Img"><span></span><div><h3>${userId}</h3><div><p>${"LastMessage"}</p><span>${"ChatTime"}</span></div></div>`
        UserAllList.appendChild(createDiv);
        allid()
    }
}
}



let login = document.querySelector("#login");
let SignUp = document.querySelector("#SignUp")
let loginpage = document.querySelector("#loginpage")
let signupBtn = document.querySelector("#signupBtn");
let visibility = document.querySelector("#visibility");
let visibility_off = document.querySelector("#visibility_off");
let password = document.querySelector("#SignUppassword");
let Email = document.querySelector("#SignUpEmail");
let names = document.querySelector("#SignUpname");
let Numbers = document.querySelector("#SignUpNumber")
let inputImage = document.querySelector("#inputImage");
let saringImagesChang = document.querySelector("#userLogoChang");
let inputFile = document.querySelector("#inputFile");
let SignUpvisibility = document.querySelector("#SignUpvisibility");
let SignUpvisibility_off =document.querySelector("#SignUpvisibility_off");
let errorNumber = document.querySelector("#errorNumber");
let errorPassword = document.querySelector("#errorSignUpPassword");
let errorName = document.querySelector("#errorName");
let errorEmail = document.querySelector("#errorSignUpEmail");
let loginpageSignUp = document.querySelector("#loginpageSignUp");
let LOGINBtn = document.querySelector("#LOGIN") ;
let ForgotPassword = document.querySelector("#ForgotPassword");
let LoginEmail = document.querySelector("#LoginEmail"); 
let LoginPassword = document.querySelector("#LoginPassword");
let LoginVisibility_off = document.querySelector("#LoginVisibility_off");
let LoginVisibility = document.querySelector("#LoginVisibility");
let errorloginEmail = document.querySelector("#errorloginEmail");
let errorloginPassword = document.querySelector("#errorloginPassword");
let forgetpage = document.querySelector("#forgetpage");
let forgetNumber = document.querySelector("#forgetNumber");
let sendOtp =document.querySelector("#sendOtp");
let forgetbackarroe1 = document.querySelector("#forgetbackarroe1");
let forgetbackarroe2 = document.querySelector("#forgetbackarroe2");
let forgetOtp = document.querySelector("#forgetOtp");
let forgetotplogiinbtn = document.querySelector("#forgetotplogiinbtn");
let sendOtpSecand = document.querySelector("#sendOtpSecand");
let forgetOTPpage = document.querySelector("#forgetOTPpage");
let AginOTPSend = document.querySelector("#AginOTPSend");
let rongEmail = document.querySelector("#rongEmail");
let CreateAccounts = document.querySelector("#CreateAccounts");
let FullMessangerApp = document.querySelector("#FullMessangerApp");
let stories_icon = document.querySelector(".stories_icon");
let Logout = document.querySelector("#Logout");
let SignUpArrow_back  = document.querySelector("#SignUpArrow_back");
let yourLogo = document.querySelector("#yourLogo");
let userLogoChang = document.querySelector("#userLogoChang");
let Your_Name = document.querySelector("#Your_Name")


signupBtn.addEventListener("click", function(){
    let UserPassword = password.value;
    let UserEmail = Email.value;
    let UserName = names.value;
    let UserNumber = Numbers.value;



    if(UserName.trim() !== ""){
        errorName.style.display="none"
    }
    if(UserName.trim() === ""){
        errorName.style.display="inline-block"
    }
    if(UserEmail.trim() !== ""){
        errorEmail.style.display="none"
    }
    if(UserEmail.trim() === ""){
        errorEmail.style.display="inline-block"
    }
    if(UserPassword.trim() !== ""){
        errorPassword.style.display="none"
    }
    if(UserPassword.trim() === ""){
        errorPassword.style.display="inline-block"
    }
    if(UserNumber.trim() !== ""){
        errorNumber.style.display="none"
    }
    if(UserNumber.trim() === ""){
        errorNumber.style.display="inline-block"
    }   
     
    else if(UserNumber.trim() !== "" && UserPassword.trim() !== "" && UserEmail.trim() !== "" && UserName.trim() !== ""){
        UserEmails = UserEmail;
        UserPasswords = UserPassword;
        UserNames = UserName;
        UserNumbers = UserNumber;

        auth.createUserWithEmailAndPassword(UserEmails, UserPasswords)
        .then(() => {
            currentUserEmail = UserEmails;
            listenForMessages();
            errorNumber.style.display="none"
            CreateAccounts.style.display="none";
            FullMessangerApp.style.display="block";
            stories_icon.style.display="flex";
            UserEmails="";
            UserPasswords="";
            UserNames="";
            UserNumbers ="";
            yourLogo.src=userLogo;
            userLogoChang.src= userLogo;
            currentUserNumber = UserNumbers;
            Your_Name.innerHTML=UserEmails;
            alert(`স্বাগতম ${UserNames}! আপনার অ্যাকাউন্ট তৈরি হয়েছে।`);
        })
        .catch((error) => alert(error.message));
    }
});



SignUpArrow_back.addEventListener("click",()=>{
    loginpage.style.display="block"
    SignUp.style.display="none"
})

login.addEventListener("click",()=>{
    loginpage.style.display="block"
    SignUp.style.display="none"
})

loginpageSignUp.addEventListener("click",()=>{
    loginpage.style.display="none"
    SignUp.style.display="block"
})

SignUpvisibility_off.addEventListener("click",()=>{
    SignUpvisibility_off.style.display="none"
    SignUpvisibility.style.display="block"
    password.type="text"
})

SignUpvisibility.addEventListener("click",()=>{
    SignUpvisibility_off.style.display="block"
    SignUpvisibility.style.display="none"
    password.type="password"
})
LoginVisibility_off.addEventListener("click",()=>{
    LoginVisibility_off.style.display="none"
    LoginVisibility.style.display="block"
    LoginPassword.type="text"
})

LoginVisibility.addEventListener("click",()=>{
    LoginVisibility_off.style.display="block"
    LoginVisibility.style.display="none"
    LoginPassword.type="password"
})



LOGINBtn.addEventListener("click",()=>{
    let UserLoginPassword = LoginPassword.value.trim();
    let UserLoginEmail = LoginEmail.value.trim();

    if(UserLoginEmail.trim() !== ""){
        errorloginEmail.style.display="none"
    }
    if(UserLoginEmail.trim() === ""){
        errorloginEmail.style.display="inline-block"
    }
    if(UserLoginPassword.trim() !== ""){
        errorloginPassword.style.display="none"
    }
    if(UserLoginPassword.trim() === ""){
        errorloginPassword.style.display="inline-block"
    }

    else if(UserLoginEmail.trim()!== "" && UserLoginPassword.trim() !== ""){

        auth.signInWithEmailAndPassword(UserLoginEmail, UserLoginPassword)
        .then((userCredential) => {
            alert("Logged in!");
            currentUserEmail = UserLoginEmail;
            listenForMessages();
            errorNumber.style.display="none"
            CreateAccounts.style.display="none";
            FullMessangerApp.style.display="block";
            stories_icon.style.display="flex";
            Your_Name.innerHTML=UserLoginEmail;

        })
        .catch((error) => alert(error.message));
    }
})


Logout.addEventListener("click",()=>{
    
    loginpage.style.display="block"
    CreateAccounts.style.display="block"
    FullMessangerApp.style.display="none"
    stories_icon.style.display="none"
    SignUp.style.display="none"
    forgetpage.style.display="none"
    forgetOTPpage.style.display="none"

})



ForgotPassword.addEventListener("click",()=>{
    forgetpage.style.display="block"
    loginpage.style.display="none"
})

forgetbackarroe1.addEventListener("click",()=>{
    forgetpage.style.display="none"
    loginpage.style.display="block"
})
forgetbackarroe2.addEventListener("click",()=>{
    forgetpage.style.display="block"
    forgetOTPpage.style.display="none"
})

sendOtp.addEventListener("click", function(){
    let forgetYourNumber = forgetNumber.value;
    console.log("Forget Your Number : "+forgetYourNumber)
    forgetOTPpage.style.display="block"
    forgetpage.style.display="none"

    let secound = 10;
    sendOtpSecand.innerHTML = secound +"s"
    
    let countdown = setInterval(() => {
        
        sendOtpSecand.innerHTML = secound +"s"
        secound--;
        if(secound < 0){
            clearInterval(countdown);
            sendOtpSecand.style.display="none";
            AginOTPSend.style.display="inline-block"
        }
    }, 1000);


    OTPS()


})



AginOTPSend.addEventListener("click", function(){
    sendOtpSecand.style.display="inline";
    AginOTPSend.style.display="none"
    let secound = 10;
    sendOtpSecand.innerHTML = secound +"s"
    
    let countdown = setInterval(() => {
        
        sendOtpSecand.innerHTML = secound +"s"
        secound--;
        if(secound < 0){
            clearInterval(countdown);
            sendOtpSecand.style.display="none";
            AginOTPSend.style.display="inline-block"
        }
    }, 1000);


    OTPS()

})



function OTPS(){
    let OTP = "";
    for(let i = 0; i < 6; i++){
        let RENDOMOTP = Math.floor(Math.random()*9)+1
        OTP += RENDOMOTP
    }
    console.log("Your OTP:"+OTP)
}





// login Page end



let userIdName = "";
let ImgSrc = "";
let ImgAlt = "";



let page_1 = document.querySelector(".page_1");
let page_2 = document.querySelector(".page_2");
let page_3 = document.querySelector(".page_3");


function onlineid() {
        let online_id = document.querySelectorAll(".online_id div");
    online_id.forEach(element => {
        element.addEventListener("click",function(){
            page_3.style.display="block";
            page_2.style.display="none";
        })
    });
}


let profileName ="";


function allid(){
    let all_id = document.querySelectorAll(".all_id div");

    all_id.forEach(element => {
        element.addEventListener("click",function(){
            try {
                profileName = document.querySelector(".profileName");
                let imgSrc = element.querySelector("img");
                let img = document.querySelector("#userProfileLogo");
                userIdName =element.querySelector("h3").textContent;

                profileName.innerHTML=userIdName;
            
                ImgSrc = imgSrc.src;
                ImgAlt = imgSrc.alt;

                img.src=ImgSrc;
                img.alt=ImgAlt;
                    
                page_3.style.display="block";
                page_2.style.display="none";
                
            } catch (error) {
            }

        })
    });
}







let online_id = document.querySelectorAll(".online_id div");
online_id.forEach(element => {
    element.addEventListener("click",function(){
        console.log(element);
        page_3.style.display="block";
        page_2.style.display="none";
    })
});


let all_id = document.querySelectorAll(".all_id div");
all_id.forEach(element => {
    element.addEventListener("click", function(){
        page_3.style.display="block";
        page_2.style.display="none";
    })
});


let Frand_Names = '';
let Frand_Numbers = '';
let Frand_Emails = '';

let LastMessage = "hi"
let ChatTime = "01:00 PM"

let UserAllList = document.querySelector("#UserAllList")

let saveFrandDetails = document.querySelector("#saveFrandDetails");
saveFrandDetails.addEventListener("click", ()=>{
    IdAddPage.style.display="none"
    page_2.style.display="block"
    
    let Frand_Name = document.querySelector("#Frand_Name").value;
    let Frand_Number = document.querySelector("#Frand_Number").value;
    let Frand_Email = document.querySelector("#Frand_Email").value;

    Frand_Names = Frand_Name;
    Frand_Numbers = Frand_Number;
    Frand_Emails =  Frand_Email; 

    let createDiv= document.createElement("div");
    createDiv.id=Frand_Numbers;
    createDiv.className=Frand_Emails;
    createDiv.innerHTML=`<img src="" alt="User Img"><span></span><div><h3>${Frand_Name}</h3><div><p>${LastMessage}</p><span>${ChatTime}</span></div></div>`
    UserAllList.appendChild(createDiv);
    console.log(Frand_Names,Frand_Numbers,Frand_Emails)
    
 allid();
 onlineid();
});
let backAddPage = document.querySelector("#backAddPage");
backAddPage.addEventListener("click", ()=>{
    IdAddPage.style.display="none"
    page_2.style.display="block"

});




let icon = document.querySelector("#icon"), 
    icon2 = document.querySelector("#icon2");
let angle_up = document.querySelector("#angle_up");
let addIcon =document.querySelector("#addIcon");
let inputPild = document.querySelector("#input");
let meinChat = document.querySelector("#meinChat");
let send = document.querySelector(".fa-paper-plane");
let hand = document.querySelector(".fa-thumbs-up");
let inputs = document.querySelector("#inputText");

function toggleSendIcon(){

    inputs.addEventListener("input", ()=>{
        inputs.style.height="0";
        inputs.style.height=inputs.scrollHeight + 'px';
            send.style.display="block";
            hand.style.display="none";
            icon.style.display="none";
            angle_up.style.display="block";
            addIcon.style.display="block";
            inputs.style.width="260px";
            inputPild.style.width="63%";  
    });
}


send.addEventListener("click",()=>{
    let inputText = document.querySelector("#inputText").value.trim();
    if(inputText.trim() !== ""){
        let frandProfileNames = document.querySelector(".profileName").textContent;
        console.log(frandProfileNames)
        let toEmail = frandProfileNames.replace(/\./g, "_");
        let fromEmail = currentUserEmail.replace(/\./g,"_");
        console.log(fromEmail+" - "+toEmail)

        const messageObj = {
            from: currentUserEmail,
            message: inputText,
            time: new Date().toLocaleString(),
        };

        // Receiver-এর ইনবক্সে
        database.ref("messages/" + toEmail).push(messageObj);

        // Sender-এর ইনবক্সে
        database.ref("messages/" + fromEmail).push(messageObj);
        document.querySelector("#inputText").value="";


    }else{
            inputs.style.removeProperty("height");
            send.style.display="none";
            angle_up.style.display="none";
            addIcon.style.display="none";
            hand.style.display="block";
            icon.style.display="block";
            inputs.style.width="150px";
            inputs.style.height="21px";
            inputPild.style.width="50%";
    }
        
});
document.querySelector(".body").addEventListener("click",()=>{
    inputs.style.removeProperty("height");
    send.style.display="none";
    angle_up.style.display="none";
    addIcon.style.display="none";
    hand.style.display="block";
    icon.style.display="block";
    inputs.style.width="150px";
    inputs.style.height="21px";
    inputPild.style.width="50%";
})

angle_up.addEventListener("click",()=>{
    send.style.display="none";
    angle_up.style.display="none";
    addIcon.style.display="none";
    hand.style.display="block";
    icon.style.display="block";
    inputs.style.width="150px";
    inputs.style.height="21px";
    inputPild.style.width="50%";
})

hand.addEventListener("click",()=>{
    let fa_solid_fa_thumbs_up ='<i class="fa-solid fa-thumbs-up">'
    let frandProfileNames = document.querySelector(".profileName").textContent;
    let toEmail = frandProfileNames.replace(/\./g, "_");
    let fromEmail = currentUserEmail.replace(/\./g,"_");

    const messageObj = {
        from: currentUserEmail,
        message: fa_solid_fa_thumbs_up,
        time: new Date().toLocaleString(),
    };

    // Receiver-এর ইনবক্সে
    database.ref("messages/" + toEmail).push(messageObj);

    // Sender-এর ইনবক্সে
    database.ref("messages/" + fromEmail).push(messageObj);
})


// send.addEventListener("mousedown",function(){
//     let div = document.createElement("div");
//     div.id="my";
//     div.innerHTML='<div id="me"><i class="fa-solid fa-thumbs-up"></i> </div>'
//     meinChat.appendChild(div);
//     let bodydiv = document.querySelector(".page_3 .body");
//     bodydiv.scrollTop = bodydiv.scrollHeight;
//     pressTime = setTimeout(function(){
//     },800);
// });


// function textsend(){
//     let inputtext = document.querySelector("#inputText").value;
//     let div = document.createElement("div");
//     div.id="my";
//     div.innerHTML='<div id="me"><div>'+inputtext+'</div></div>'
//     meinChat.appendChild(div);
//     document.querySelector("#inputText").value="";
        
//     let bodydiv = document.querySelector(".page_3 .body");
//     bodydiv.scrollTop = bodydiv.scrollHeight; 
// }

let pressTime;

// পিসি ও মোবাইল উভয়ের জন্য প্রেস শুরু
function startPress() {
    pressTime = setTimeout(function () {
        console.log("press");
        autoSendText.style.display = "block";
    }, 800);
}

// পিসি ও মোবাইল উভয়ের জন্য প্রেস বন্ধ
function cancelPress() {
    clearTimeout(pressTime);
}

// ইভেন্ট লিসেনার যোগ করো (পিসি)
send.addEventListener("mousedown", startPress);
send.addEventListener("mouseup", cancelPress);
send.addEventListener("mouseleave", cancelPress);

// ইভেন্ট লিসেনার যোগ করো (মোবাইল)
send.addEventListener("touchstart", startPress);
send.addEventListener("touchend", cancelPress);
send.addEventListener("touchcancel", cancelPress);


let info = document.querySelector(".fa-circle-info");
let sating = document.querySelector("#sating");
let info_page_back = document.querySelector("#info_page_back");
let manu_sating = document.querySelector("#manu_sating");
let info_page = document.querySelector("#info_page");
let sating_to_backPage2 = document.querySelector("#sating_to_backPage2");


info.addEventListener("click",()=>{
    page_3.style.display="none"
    info_page.style.display="block"
    let profileName = document.querySelector(".profileName").textContent;
    let userProfileLogo = document.querySelector("#userProfileLogo");
    console.log(userProfileLogo.url ,userProfileLogo.alt)
    document.querySelector("#frand_profile .profile h3").innerHTML=profileName;
    let FrandProfileLogo = document.querySelector("#frand_profile .profile #logo img");
    FrandProfileLogo.url=userProfileLogo.url
    FrandProfileLogo.alt=userProfileLogo.alt
    console.log(profileName)
})
 
info_page_back.addEventListener("click",()=>{
    page_3.style.display="block"
    info_page.style.display="none"
})

manu_sating.addEventListener("click",()=>{
    page_2.style.display="none"
    sating.style.display="block"
})

sating_to_backPage2.addEventListener("click",()=>{
    page_2.style.display="block"
    sating.style.display="none"
})
let bodys = document.querySelector(".page_3 .body");

let autoSendText = document.querySelector(".autoSendText");
let TimerTetxt = document.querySelector(".autoSendText .TimerTetxt");
let itemSend = document.querySelector(".autoSendText .itemSend")
let set_Timer =document.querySelector("#set_Timer");
let Enter_Number =document.querySelector("#Enter_Number");

let numBtnBack = document.querySelector(".numBtn .back");
let numBtnOk = document.querySelector(".numBtn .ok");

let timBtnBack = document.querySelector(".timBtn .back");
let timBtnOk = document.querySelector(".timBtn .ok");

let InputTime = document.querySelector("#InputTime");
let inputNumber = document.querySelector("#inputNumber");

TimerTetxt.addEventListener("click",()=>{
    inputNumber.style.display='block'
    numBtnBack.style.display='block'
    numBtnOk.style.display='block'
    Enter_Number.style.display='block'
    InputTime.style.display="none";
    itemSend.style.display="none"
    TimerTetxt.style.display="none"
    set_Timer.style.display="none"
    timBtnBack.style.display="none"
    timBtnOk.style.display="none"


});
itemSend.addEventListener("click",()=>{
    InputTime.style.display="block";
    set_Timer.style.display="block"
    timBtnBack.style.display="block"
    timBtnOk.style.display="block"
    inputNumber.style.display='none'
    itemSend.style.display="none"
    TimerTetxt.style.display="none"
    Enter_Number.style.display="none"
    numBtnBack.style.display="none"
    numBtnOk.style.display="none"
})


numBtnBack.addEventListener("click",()=>{
    numBtnBack.style.display="none"
    numBtnOk.style.display="none"
    timBtnOk.style.display="none"
    timBtnBack.style.display="none"
    Enter_Number.style.display="none"
    inputNumber.style.display="none"
    set_Timer.style.display="none"
    InputTime.style.display="none"
    TimerTetxt.style.display="flex"
    itemSend.style.display="flex"

})



timBtnBack.addEventListener("click",()=>{
    numBtnBack.style.display="none"
    numBtnOk.style.display="none"
    timBtnOk.style.display="none"
    timBtnBack.style.display="none"
    Enter_Number.style.display="none"
    inputNumber.style.display="none"
    set_Timer.style.display="none"
    InputTime.style.display="none"
    TimerTetxt.style.display="flex"
    itemSend.style.display="flex"

})

numBtnOk.addEventListener("click",()=>{
    let inputNumber = document.querySelector("#inputNumber").value;
    console.log("user Number :" + inputNumber)
    autoSendText.style.display="none"
})

timBtnOk.addEventListener("click",()=>{
    let InputTime = document.querySelector("#InputTime").value;
    console.log("user time :" + InputTime)
    autoSendText.style.display="none"

})


bodys.addEventListener("click",()=>{
    autoSendText.style.display="none"
    addItem.style.display="none"
})
bodys.addEventListener("touchstart",()=>{
    autoSendText.style.display="none"
    addItem.style.display="none"
})



let addItem = document.querySelector(".addItem")

let Locatison =document.querySelector(".Locatison");
let HeddinCamera = document.querySelector(".HeddinCamera");
let HeddenVideo = document.querySelector("#HeddenVideo");
let HeddinCameraBox =document.querySelector(".HeddinCameraBox")
let Locatison_link = document.querySelector(".Locatison a")

Locatison.addEventListener("click",()=>{
    Locatison_link.click();
})


HeddinCamera.addEventListener("click",()=>{
    box.style.display="none"
    HeddinCameraBox.style.display="flex"
    addItem.style.display="none"
    HeddenVideo.play()

})

let videoClossIcon =document.querySelector("#videoCloss");
videoClossIcon.addEventListener("click",()=>{
        HeddinCameraBox.style.display="none"
        HeddenVideo.pause()
})

addIcon.addEventListener("click", ()=>{
    addItem.style.display="block";
})



const box = document.querySelector(".HeddinCameraBox");

let isDragging = false;
let offsetX, offsetY;

box.addEventListener("mousedown", function (e) {
    isDragging = true;
    offsetX = e.clientX - box.offsetLeft;
    offsetY = e.clientY - box.offsetTop;
    box.style.cursor = "grabbing";
});

document.addEventListener("mousemove", function (e) {
    if (isDragging) {
        box.style.left = e.clientX - offsetX + "px";
        box.style.top = e.clientY - offsetY + "px";
    }
});

document.addEventListener("mouseup", function () {
    isDragging = false;
    box.style.cursor = "grab";
});

box.addEventListener("touchstart", function (e) {
    const touch = e.touches[0];
    offsetX = touch.clientX - box.offsetLeft;
    offsetY = touch.clientY - box.offsetTop;
}, false);

box.addEventListener("touchmove", function (e) {
    e.preventDefault(); // স্ক্রল বন্ধ করে দেয়
    const touch = e.touches[0];
    box.style.left = (touch.clientX - offsetX) + "px";
    box.style.top = (touch.clientY - offsetY) + "px";
}, false);



HeddinCamera.addEventListener("click",()=>{
    navigator.mediaDevices.getUserMedia({ video: true})
    .then(function(stream){
        let CameraVideo = document.querySelector("#HeddinCamera");
        CameraVideo.srcObject = stream;
    })

    .catch(function(error) {
        alert("Camera Not Open")
    })
})


let fullscreen = document.querySelector("#fullscreen");
let imagText = document.querySelector(".HeddinCameraBox .imagText");
let clossIcon = document.querySelector(".material-symbols-outlined");

fullscreen.addEventListener("click",()=>{
    HeddinCameraBox.style.width="100%"
    HeddinCameraBox.style.height="100%"
    HeddinCameraBox.style.top="0px"
    HeddinCameraBox.style.left="0px"
    imagText.style.margin="-580px 0px 0px -0px"
    clossIcon.style.marginLeft="130px";
    fullscreen.style.marginBottom="50px";
    box.classList.add("disable");

})





// let input = document.querySelector("#inputText");
// let send = document.querySelector(".fa-paper-plane");
// let hand = document.querySelector(".fa-thumbs-up");
// console.log("img")

// if (input.trim() !== "")
//     send.style.display="none"
//     hand.style.display="block"
// }
// else {
//     send.style.display="block"
//     hand.style.display="none"
// }




// inputText.addEventListener("focus", function(terget){
//     inputText.style.width="88%"
//     input.style.width="77%"
//     icon.style.display="none";
//     angle_up.style.display="block"
//     icon2.className="fa-solid fa-paper-plane";
//     terget.target.style.placeholder="Type a Message...";


//     let inputTextSend = document.querySelector(".fa-paper-plane");
//     inputTextSend.addEventListener("click",()=>{
//         let inputs = document.querySelector("#inputText").value;
//         let my_div= document.createElement("div");
//         my_div.id="my"
//         my_div.innerHTML='<div id="me"><div>'+inputs+'</div></div>'
//         meinChat.appendChild(my_div);
//     });
// });

// inputText.addEventListener("blur", function(){
//     inputText.style.width="150px"
//     input.style.width="auto"
//     icon.style.display="block";
//     // icon2.className="fa-solid fa-thumbs-up";
//     angle_up.style.display="none"
// });


// let hand = document.querySelector(".fa-thumbs-up");

// hand.addEventListener("click", function(){
//     let my_div= document.createElement("div");
//     my_div.id="my"
//     my_div.innerHTML='<i class="fa-solid fa-thumbs-up"></i>'
//     meinChat.appendChild(my_div);
// });

let for_image = document.querySelector(".fa-image");
let InputImg = document.querySelector("#InputImg");
for_image.addEventListener("click",function(){
    InputImg.click();
})

// call page strat

let audio_call = document.querySelector("#audio_call");
let video_coll = document.querySelector("#video_coll");
let phoneCall = document.querySelector("#audio_phone_icon");
let video_call_icon = document.querySelector(".fa-video");
let call = document.querySelector(".call");
let videocall = document.querySelector("#videocall");
let Clossphone = document.querySelector("#clossPhone")
let clossVideoPhone = document.querySelector("#clossVideoPhone")
let backPage = document.querySelector("#backPage");

let volume_low = document.querySelector(".fa-volume-low");
let volume_high = document.querySelector(".fa-volume-high");


let Audio_call="Audio call";
let Video_coll="video call";
let Tap_to_call_again="Tap to call again";
let VideoPhoneColl = document.querySelector("#VideoPhoneColl")

video_call_icon.addEventListener("click",()=>{
    video_coll.style.display="block";
    page_3.style.display="none";

    let my_div =document.createElement("div");
    my_div.id="my"
    my_div.innerHTML='<div id="me"> <div class="call" id="videocall"> <div>  <div class="phone"> <i class="fa-solid fa-video"></i> </div> <div> <p> '+Video_coll+'</p><span>'+Tap_to_call_again+'</span> </div> </div> </div> </div>';
    meinChat.appendChild(my_div)

    navigator.mediaDevices.getUserMedia({ video: true})
    .then(function(stream){
        let videoPhone = document.querySelector("#VideoPhoneColl")
        videoPhone.srcObject = stream;
    })
    .catch(function(error){
        alert("Camera nOt Open")
    })

    VideoPhoneColl.play()

})
// videocall.addEventListener("click",()=>{
//     video_coll.style.display="block";
//     page_3.style.display="none";
//     let my_div =document.createElement("div");
//     my_div.id="my"
//     my_div.innerHTML='<div id="me"> <div class="call" id="videocall"> <div> <i class="fa-solid fa-video"></i> <div> <p> '+Video_coll+'</p><span>'+Tap_to_call_again+'</span> </div> </div> </div> </div>';
//     meinChat.appendChild(my_div);
// })

clossVideoPhone.addEventListener("click",()=>{
    video_coll.style.display="none";
    page_3.style.display="block";
    VideoPhoneColl.pause()
})

backPage.addEventListener("click",()=>{
    page_2.style.display="block";
    page_3.style.display="none";
})



phoneCall.addEventListener("click",()=>{
    audio_call.style.display="block";
    page_3.style.display="none";

    // let call = `<div class="call"><div><i class="fa-solid fa-phone-slash"> </i> <p> Audio call</p></div><span>Tap to call again</span></div>`
    // let frandProfileNames = document.querySelector(".profileName").textContent;
    // let toEmail = frandProfileNames.replace(/\./g, "_");
    // let fromEmail = currentUserEmail.replace(/\./g,"_");

    // const messageObj = {
    //     from: currentUserEmail,
    //     message:call,
    //     time: new Date().toLocaleString(),
    // };

    // // Receiver-এর ইনবক্সে
    // database.ref("messages/" + toEmail).push(messageObj);

    // // Sender-এর ইনবক্সে
    // database.ref("messages/" + fromEmail).push(messageObj);
    console.log("not complete")
})
// call.addEventListener("click",()=>{
//     audio_call.style.display="block";
//     page_3.style.display="none";
//     let my_div =document.createElement("div");
//     my_div.id="my"
//     my_div.innerHTML='<div id="me"> <div class="call"> <div> <i class="fa-solid fa-phone-slash"></i> <div> <p> '+Audio_call+'</p><span>'+Tap_to_call_again+'</span> </div> </div> </div> </div>';
//     meinChat.appendChild(my_div);
// })

Clossphone.addEventListener("click",()=>{
    audio_call.style.display="none";
    page_3.style.display="block";
})

backPage.addEventListener("click",()=>{
    page_2.style.display="block";
    page_3.style.display="none";
})


volume_low.addEventListener("click",()=>{
    volume_low.style.display="none";
    volume_high.style.display="block";
});

volume_high.addEventListener("click",()=>{
    volume_high.style.display="none";
    volume_low.style.display="block";
});


// auto chat 




const allText = document.querySelector(".allText");
const addInput = document.querySelector("#addInput");
const savebtn = document.querySelector("#save");
const ThreeDots = document.querySelector("#ThreeDots");
let settings = document.querySelector(".settings");
let AiPageimg = document.querySelector("#icon img");
let autoMessag  = document.querySelector(".autoMessag");
let pageback = document.querySelector("#pageback");

pageback.addEventListener("click",()=>{
    page_3.style.display="block";
    autoMessag.style.display="none";
})

AiPageimg.addEventListener("click",()=>{
    page_3.style.display="none";
    autoMessag.style.display="block";
})
addInput.addEventListener("click", ()=>{
    let AiBotTExt = document.createElement("div")
    AiBotTExt.className="AiBotTExt";
    AiBotTExt.innerHTML='<input type="text" class="User" placeholder="User"> <input type="text" class="AiBot" placeholder="Ai Bot">'
    allText.appendChild(AiBotTExt);
});


ThreeDots.addEventListener("click", ()=>{
    settings.style.display="block";
})

allText.addEventListener("click",()=>{
    settings.style.display="none";
})

let BotMemory = JSON.parse(localStorage.getItem("BotMemory")) || {};

savebtn.addEventListener("click",()=>{
    const answers = document.querySelectorAll(".AiBot");
    const questions = document.querySelectorAll(".User");

    questions.forEach((QUser, index) => {
        let question= QUser.value.trim().toLowerCase();
        let answer = answers[index].value.trim().toLowerCase();

        if(question && answer){
            BotMemory[question]=answer;
        }
    });

    localStorage.setItem("BotMemory", JSON.stringify(BotMemory));
    console.log("BotMemory Save")
});


let seind = document.querySelector("#btn");
let AiBotPrint = document.querySelector("#AiBotPrint");




let IdAddPage = document.querySelector(".IdAddPage")
let addIdBtn = document.querySelector(".addIdBtn");
addIdBtn.addEventListener("click",()=>{
    IdAddPage.style.display="block"
    page_2.style.display="none"
    console.log("addPage")
})



let cropper_container_cropper_bg = document.querySelector(".cropper-bg")
let preview = document.querySelector("#previewImage")
let viewImg = document.querySelector(".img img");
let cropperdiv = document.querySelector(".cropper");
let ImagePage_back = document.querySelector("#ImagePage_back");
let cropper;

inputImage.addEventListener("click",()=>{
    inputFile.click();
});


inputFile.addEventListener('change', function (e) {
  const file = e.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = function () {
    preview.src = reader.result;

    if (cropper) {
      cropper.destroy(); // আগের cropper থাকলে destroy
    }

    cropper = new Cropper(preview, {
      aspectRatio: 1, // স্কয়ার
      viewMode: 1
    });
  };
  reader.readAsDataURL(file);
  cropperdiv.style.display="inline-flex"
  
  const style = document.createElement('style');
  style.innerHTML = `
  .cropper-crop-box,
  .cropper-view-box {
    border-radius: 50% !important;
    }
    .cropper-bg{
        background: transparent;
        }    
        `;
        document.head.appendChild(style);
    });
    
    
    
    
    
    
    function saveImage(){
        const canvas = cropper.getCroppedCanvas();
        const croppedImage = canvas.toDataURL("image/png");
        viewImg.src = croppedImage;
        userLogo = croppedImage;
        cropperdiv.style.display="none"
        
    }
    
    
    ImagePage_back.addEventListener("click",()=>{
    cropperdiv.style.display="none"
})





// let stingpreviewImage = document.querySelector("#stingpreviewImage")
// let cropperSating = document.querySelector("#cropperSating")
// let satingImagePage_back = document.querySelector("#satingImagePage_back")
// let inputImageChang = document.querySelector("#inputImageChang")
// let satingcropper;
// saringImagesChang.addEventListener("click",()=>{
//     inputImageChang.click();
// });

// inputFile.addEventListener('change', function (e) {
//   const file = e.target.files[0];
//   if (!file) return;

//   const reader = new FileReader();
//   reader.onload = function () {
//     stingpreviewImage.src = reader.result;

//     if (satingcropper) {
//         satingcropper.destroy(); // আগের cropper থাকলে destroy
//     }

//     satingcropper = new Cropper(stingpreviewImage, {
//         aspectRatio: 1,
//         viewMode: 1
//       });
//   };
//   reader.readAsDataURL(file);
//   cropperSating.style.display="inline-flex"
  
//   const style = document.createElement('style');
//   style.innerHTML = `
//   .cropper-crop-box,
//   .cropper-view-box {
//     border-radius: 50% !important;
//     }
//     .cropper-bg{
//         background: transparent;
//         }    
//         `;
//         document.head.appendChild(style);
//     });
    
    
    
    
    
    
    function saveImages(){
        const canvas = satingcropper.getCroppedCanvas();
        const croppedImage = canvas.toDataURL("image/png");
        viewImg.src = croppedImage;
        userLogo = croppedImage;
        cropperdiv.style.display="none"
        
    }
    
    
    satingImagePage_back.addEventListener("click",()=>{
        cropperSating.style.display="none"
})

