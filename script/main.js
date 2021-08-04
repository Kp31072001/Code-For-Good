let mic = document.getElementById("mic");
let chatareamain = document.querySelector('.chatarea-main');
let chatareaouter = document.querySelector('.chatarea-outer');

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();
function showusermsg(usermsg){
    let output = " ";
    output += ` <div class="chatarea-inner user">${usermsg}</div>`;
    chatareaouter.innerHTML += output;
    return chatareaouter;
}
function showchatbotmsg(chatbotmsg){
    let output = " ";
    output += ` <div class="chatarea-inner chatbot">${chatbotmsg}</div>`;
    chatareaouter.innerHTML += output;
    return chatareaouter;
}
function chatbotvoice(message){
    const speech = new SpeechSynthesisUtterance();
    speech.text = "sorry , I didn't get that ";
    if(message.includes('hello')){
        speech.text = "Welcome how may i help you";
    }
    if(message.includes('about yourself')){
        speech.text = "Sure , So i am your new friend spark you can ask me your query's";
    }
    if(message.includes('about samarthya')){
        speech.text = "Samarthya started as a social collective much like any other social movement with shared beliefs, hopes and dreams  It is committed to working on the ground level with first level actors i.e parents and schools while seeking leverage with actors higher up the chain – bureaucracy, government, academia and NGOs.";
    }
    if(message.includes('search')){
        speech.text = "Redirecting you to document search page";
        window.location.replace("file:///Users/ishitakheria/Desktop/Team12/team-12/static/card3.html");;
    }
    window.speechSynthesis.speak(speech);
    chatareamain.appendChild(showchatbotmsg(speech.text));
}
recognition.onresult = function(e){
    let resultIndex = e.resultIndex;
    let transcript = e.results[resultIndex][0].transcript;
    chatareamain.appendChild(showusermsg(transcript))
    chatbotvoice(transcript);
    console.log(transcript);

}
recognition.onend = function(){
    mic.style.background = `#03f7ff`;
}
mic.addEventListener("click" , function(){
    mic.style.background = `#03aef9`;
    recognition.start();
    console.log("ChatBot is now ACTIVATED");

})
