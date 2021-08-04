/* The Web Speech API
 - Speech Recognition
 - Speech synthesis
*/

//SPEECH TO TEXT
var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
var recognition = new SpeechRecognition();

var textbox = document.getElementById('stt');
var instructions = document.getElementById('instructions');

var Content = '';

recognition.continuous = true;

recognition.onresult = function(event) {

    let current = event.resultIndex;

    let transcript = event.results[current][0].transcript;

    Content += transcript;
    textbox.value = Content;
    // Add a blinking arrow near submit button 
};

recognition.onstart = function() {
    instructions.innerText = 'Voice recognition is ON.';
}

recognition.onspeechend = function() {
    instructions.innerText = 'No activity.';
}

recognition.onerror = function(event) {
    if (event.error == 'no-speech') {
        instructions.innerText = 'Error.';
    }
}

document.getElementById("start-btn").addEventListener('click', (e) => {
    if (Content.length) {
        Content += ' ';
    }
    recognition.start();
});
document.getElementById("stop-btn").addEventListener('click', (e) => {
    recognition.stop();
});

textbox.addEventListener('input', (e) => {
    Content = this.value;
});

let data = [
    {
        "id": 1,
        "subject": "Guidelines for Parents of Children Seeking Admission in Classes VI to IX in Govt. Schools under NON-PLAN ADMISSIONS",
        "state": "Delhi",
        "date_of_publish": "10/05/2020",
        "file": "",
        "audio": ""
    },
    {
        "id": 2,
        "subject": "Guidelines for Parents of Children Seeking Admission in Classes VI to IX in Govt. Schools under NON-PLAN ADMISSIONS",
        "state": "Delhi",
        "date_of_publish": "20/08/2020",
        "file": "",
        "audio": ""
    },
    {
        "id": 3,
        "subject": "Guidelines for Parents of Children Seeking Admission in Classes VI to IX in Govt. Schools under NON-PLAN ADMISSIONS",
        "state": "Delhi",
        "date_of_publish": "23/01/2021",
        "file": "",
        "audio": ""
    },
    {
        "id": 4,
        "subject": "Guidelines for Parents of Children Seeking Admission in Classes VI to IX in Govt. Schools under NON-PLAN ADMISSIONS",
        "state": "Delhi",
        "date_of_publish": "22/05/2020",
        "file": "",
        "audio": ""
    },
    {
        "id": 5,
        "subject": "Guidelines for Parents of Children Seeking Admission in Classes VI to IX in Govt. Schools under NON-PLAN ADMISSIONS",
        "state": "Delhi",
        "date_of_publish": "11/06/2019",
        "file": "",
        "audio": ""
    },
    {
        "id": 6,
        "subject": "Guidelines for Parents of Children Seeking Admission in Classes VI to IX in Govt. Schools under NON-PLAN ADMISSIONS",
        "state": "Delhi",
        "date_of_publish": "10/06/2021",
        "file": "",
        "audio": ""
    },
    {
        "id": 7,
        "subject": "Guidelines for Parents of Children Seeking Admission in Classes VI to IX in Govt. Schools under NON-PLAN ADMISSIONS",
        "state": "Delhi",
        "date_of_publish": "10/06/2021",
        "file": "",
        "audio": ""
    },
    {
        "id": 8,
        "subject": "Guidelines for Parents of Children Seeking Admission in Classes VI to IX in Govt. Schools under NON-PLAN ADMISSIONS",
        "state": "Punjab",
        "date_of_publish": "13/03/2021",
        "file": "",
        "audio": ""
    },
    {
        "id": 9,
        "subject": "Guidelines for Parents of Children Seeking Admission in Classes VI to IX in Govt. Schools under NON-PLAN ADMISSIONS",
        "state": "Uttar Pradesh",
        "date_of_publish": "10/07/2021",
        "file": "",
        "audio": ""
    },
    {
        "id": 10,
        "subject": "Guidelines for Parents of Children Seeking Admission in Classes VI to IX in Govt. Schools under NON-PLAN ADMISSIONS",
        "state": "Maharashtra",
        "date_of_publish": "23/02/2021",
        "file": "",
        "audio": ""
    }
];

let state = "Delhi"
document.getElementById("search").addEventListener('click', (e) => {
    content = document.getElementById('stt').value
    generateCards(content)
});

function generateCards(content){
    var state = content.split(" ")[0]

    let print_ac_state = data.filter((obj) => obj.state == state)||data.keywords((obj) => obj.subject==subject);
    
    var area = document.getElementById('testimonials');
    
    for(var i = 0; i< print_ac_state.length; i++){
        if( i == 5){break}
        var opening = '<div class="card"><div class="layer"></div><div class="content"><div class="image"><img src="../images/doc.jpeg" alt=""></div>'
        var date = '<div class="date"><p style="color: gray; font-size: 13px; float: left; margin-bottom: 0;">'+ print_ac_state[i]["date_of_publish"] +'<br></p></div>'
        var keywords = '<div class="tags"><span>midday meal</span><span>2021</span></div>'
        var subject = '<p>'+ print_ac_state[i]["subject"] +'</p>'
        var ending = '<div class="details"><a href="">View</a> </div></div></div>'
    
        var card = opening + date + keywords + subject + ending
        area.insertAdjacentHTML("afterbegin",card);
        
    }
}


console.log(print_ac_state);