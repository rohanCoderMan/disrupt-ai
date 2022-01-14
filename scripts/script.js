// VARIABLES and OBJECTS

const btn = document.querySelector(".talk");
const content = document.querySelector(".content");
const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();



//check for click in mic button
btn.addEventListener("click", () => {
  // start listening to user
  recognition.start();
});


//On recognition start , display "listening.." in ui and console
recognition.onstart = function () {
  console.log("Listening");
  content.textContent = "listening.....";
};

//On recognition end , get the text given by user
recognition.onresult = function (event) {
  // Current result
  const current = event.resultIndex;
  //grammer checks to get the main transcript
  const transcript = event.results[current][0].transcript;
  // displaying text recived in ui
  content.textContent = transcript;
  // procces the transcript for keywords
  Procces(transcript);
};


// Keyword check
function Procces(message) {
  // robot voice object.
  const speech = new SpeechSynthesisUtterance();
  
  //default text
  speech.text = "I am not able to understand.";
  
  //command list start

  // opening stuff
  if (message.includes("YouTube")) {
    speech.text = "Opening youtube"; // says this
    window.open("https://www.youtube.com/"); // opens youtube
  }
  
  if (message.includes("Gmail")) {
    speech.text = "Opening Gmail";//says this
    window.open("https://mail.google.com/");//opens gmail
  }
  
  if (message.includes("WhatsApp")) {
    speech.text = "Opening WhatsApp";//says this
    window.open("https://web.whatsapp.com/");// opens whatsapp
  }
  
  if (message.includes("discord")) {
    speech.text = "Opening discord";//says this
    window.open("https://discord.com/app");// opens discord
  }
  
  if (message.includes("Facebook")) {
    speech.text = "Opening facebook";//says this
    window.open("https://www.facebook.com/");// opens facebook
  }
  
  // end Opening stuff
  //---------------------------------------------------------------------------------------------------------------//
  //utility commands
  
  if (message.includes("time" || "date")) {
    let s = new Date().toLocaleString(); // get the time through toLocaleString()
    speech.text = s;// says the the time
  }
  
  if (message.includes("weather")) {
    speech.text = "Opening weather"; //says this
    window.open("https://www.google.com/search?q=weather") //Googles "weather because we were to lazy to code a wether widget 🤣🤣"
  }
  // imagining every single way a user can ask a question 😒
  if (message.includes("search") || message.includes("look up")||message.includes("Google") || message.includes("calculate")) { 
    if (message.includes("search")) {
      var Y = "search";

      var X = message

      var Z = X.slice(X.indexOf(Y) + Y.length); // spliting up the str- you wont get it without  a example.
      /** 
       * y="keyword"
       * 
       * x="what user said xxx keyword lol 1234 "
       * 
       * z= (finds y  in x and slices out the important stuff AFTER y) = "lol 1234"
      */

      speech.text = "looking up " + Z; // says the thing
      {
        window.open("https://www.google.com/search?q=" + Z); // googles the thing
      }
    }
  
    if (message.includes("look up")) {
      var Y = "look up";
      var X = message
      var Z = X.slice(X.indexOf(Y) + Y.length);// get the example from line 93 😒
      speech.text = "looking up " + Z;
      {
        window.open("https://www.google.com/search?q=" + Z);
      }
    }
  
    if (message.includes("Google")) {
      var Y = "Google";
      var X = message
      var Z = X.slice(X.indexOf(Y) + Y.length);// get the example from line 93 😒
      speech.text = "looking up " + Z;
      {
        window.open("https://www.google.com/search?q=" + Z);
      }
    }
  
    if (message.includes("calculate")) {// JUST in case someone says "calculate 5+5"
      var Y = "calculate";

      var X = message

      var Z = X.slice(X.indexOf(Y) + Y.length);// get the example from line 93 😒
      speech.text = "calculating " + Z;
      {
        window.open("https://www.google.com/search?q=" + Z);
      }
    }
  }
    //end of utility commands
    //-------------------------------------------------------------------------------------------------------------//
    //talk commands start
    if (message.includes("hello" || "hey" || "hi")) {// just chatting with user , its fun!
      speech.text = "Hey! how can i help?";
    }
    if (message.includes("name")) {
      speech.text = "Hello my name is DISRUPT AI, i am your assistant!";
    }
    //talk commands end
    //-------------------------------------------------------------------------------------------------------------//          
  
  //command list end


  //speaking stuff VARIABLES
  speech.volume = 1;
  speech.rate = 1.1;
  speech.pitch = 1;
  //speak the speech.text set by the set of if statments looking for keywords.
  window.speechSynthesis.speak(speech);

  //thats preety much it hers a complete ai ready 🙌👍
}