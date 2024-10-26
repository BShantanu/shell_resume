let activeUser = "shantanu"

function switchUser(newUser) {
  if (users.hasOwnProperty(newUser)) {
      activeUser = newUser;
      print("Switched to user: " + newUser);
  } else {
      print("User not found: " + newUser);
  }
}


/* Messages */
var welcome_message = "Type in a command (or 'help' to list all supported commands):\nType 'help command' to find out more about the specific command.\n";

/* Commands */
var commands =
    [
      "help",
      "clear",
      "screenfetch",
      "ls",
      "skills",
      "experience",
      "education",
      "projects",
      "aboutme",
      "interests",
      "contact",
      "resume",
      "contactshantanu",
      "contactvaibhav",
      "contactriddhi",
      "contactricha",
      "switchuser"
    ];

var input_history = [];
var history_counter = 0; // used for "scrolling" through history
var suggestionCounter = 0; // used for tab completion
var input_arguments; // global variable for command arguments

var locations = ["/", "home", activeUser, ""]; // user directories
var whereWeAt = "E://" + activeUser; // global var for current location
var currentUser = activeUser; // Set the username

function appendChar(char, id) {
  if (char == "\n") {
    $("#" + id).append("<br/>");
  } else if (char == "\t") {
    $("#" + id).append("    "); // tab = 4 spaces
  } else {
    $("#" + id).append(char);
  }
  $("#shell").get(0).scrollIntoView();
}

function displayTyping(text, id = "displayText", speed = 5) {
  var i = 0;
  var len = text.length;
  var timeoutID = 0;
  var timeout = 0;

  while (i <= len) {
    timeoutID = setTimeout(appendChar, timeout, text[i], id);
    timeout += speed;
    i++;
  }
  clearInterval(timeoutID);
}

function parseInput(input) {
  var input_arguments = input.split(" ");

  if (input_arguments[0] === "switchuser" && input_arguments[1]) {
    switchUser(input_arguments[1]);
    return null; // End parsing for this command
}
  for (var i = 0; i < commands.length; i++) {
    if (input_arguments[0] == commands[i]) {
      return input_arguments;
    }
  }
  return null;
}

function executeCommand(cmd, args) {
  eval(cmd + "();"); // NEVER use eval (bad practice), but for this purpose it's ok
}

function appendElement(element, id) {
  $("body").append("<" + element + " id='" + id + "'></" + element + ">");
}

function print(input) {
  $("#displayText").append(input.replaceAll("\n", "<br/>") + "<br/>");
}

function showElement(id) {
  $("#" + id).show();
}

/* Main */

// When document loads hide shellContainer
$(document).ready(function () {
  $("#shellContainer").hide();
  $("#shell").focus();
});

// Display welcoming message
displayTyping(welcome_message);

// Wait 0.8s then show shellContainer
setTimeout(showElement, 800, "shellContainer");

// If the user clicks anywhere in the document, focus the shell
$(document).click(function () {
  $("#shell").focus();
});

// On keydown event check for:
$("#shell").keydown(function (e) {
  $("#shell").focus();

  if (e.which == 13) { // enter key (13)
    // Get the string from input 
    var input = $("#shell").val();

    // Save the command history
    input_history.push(input);
    history_counter = input_history.length;

    // Trim and lower case the input
    input = input.trim().toLowerCase();

    // Print the shell prompt
    if (whereWeAt == locations[2]) { // home dir of username
      print("[" + activeUser + "@github ~]$ " + input);
    } else {
      print(activeUser + "@github " + whereWeAt + "] " + input);
    }

    if (input != "") {
      $("#shell").val("");

      input_arguments = parseInput(input); // global var - input_arguments

      if (input == "./resume.sh") { // print the whole resume
        print("About me:");
        print(users[activeUser].aboutmeInfo);

        print("Working experience:");
        print(users[activeUser].experienceInfo);

        print("Education:");
        print(users[activeUser].educationInfo);

        print("Skills:");
        print(users[activeUser].skillsInfo);

        print("Projects I'm currently working on:");
        projects();

        print("Interests:");
        print(users[activeUser].interestsInfo);

        print("How to contact me:");
        contact();

        print("Résumé in PDF");
        resume();
      }  else {
        executeCommand(input_arguments[0]);
      }
    }

    // used for Tab completion; reset after we hit enter
    suggestionCounter = 0;
  } /* End of Enter keypress */

  /* Command History */
  else if (e.which == 38) { // arrow up (38)
    $("#shell").val(input_history[history_counter - 1]);

    if (history_counter - 1 > 0) {
      history_counter--;
    }
  } else if (e.which == 40) { // arrow down (40)
    $("#shell").val(input_history[history_counter - 1]);

    if (history_counter < input_history.length) {
      history_counter++;
    }
  }
  // Used for Tab completion
  else if (e.which == 32) { // space (32)
    suggestionCounter++;
  }
  /* TAB completion */
  else if (e.which == 9) { // TAB (9)
    var input = $("#shell").val();
    var inputs = input.split(" ");

    if (inputs != "") {
      if (input.includes("./") && whereWeAt == locations[2]) {
        $("#shell").val("./resume.sh");
      }
      // TODO: else if: handle existing paths (/home, /home/feelqah)
      else {
        for (var i = 0; i < commands.length; i++) {
          // the input must be a substring of a command
          if (commands[i].includes(inputs[suggestionCounter]) &&
            // the input word must start with the same letter as the command
            inputs[suggestionCounter].startsWith(commands[i].slice(0, 1))) {

            //TODO: Fix bug when e.g.: i + tab + i
            //TODO: Fix bug when a param is deleted and new one is entered + tab
            $("#shell").val(function () {
              return this.value.replace(inputs[suggestionCounter], "") + commands[i];
            });
            break;
          }
        }
      }
    }

    $("#shell").focus();
    e.preventDefault();
  }

  $("#shell").get(0).scrollIntoView();
  $("#shell").focus();
}); /* End of main */

/* command implementations */

function help() {
  // if (input_arguments.length > 1) {
  //   input_arguments = input_arguments.slice(1); // remove the command name
  //   var counter = 0;

  //   for (var i = 0; i < input_arguments.length; i++) {
  //     if (commands.includes(input_arguments[i])) {
  //       print("'" + input_arguments[i] + "': " + commandsInfo[input_arguments[i]]);
  //     }
  //   }
  // } else {
  //   print("Following commands are supported:");

  //   for (var i = 0; i < commands.length; i++) {
  //     print(commands[i]);
  //   }
  // }
  print("User-specific commands for " + activeUser + ":");
  for (const command of commands) {
      print(command);
  }
}

function clear() {
  $("#displayText").empty();
}

function skills() {
  displayTyping(users[activeUser].skillsInfo);
}

function experience() {
  displayTyping(users[activeUser].experienceInfo, "displayText", 2);
}

function education() {
  displayTyping(users[activeUser].educationInfo);
}

function projects() {
  displayTyping(users[activeUser].projectsInfo)
}

function aboutme() {
  displayTyping(users[activeUser].aboutmeInfo);
}

function interests() {
  displayTyping(users[activeUser].interestsInfo);
}

function contact() {
    displayTyping(users[activeUser].contactInfoShantanu)
}

function resume() {
  if(activeUser == 'shantanu'){
  $("#displayText").append('<a href="#" onclick="window.open(\'Bajaj Finserv Resume (2).pdf\', \'_blank\', \'fullscreen=yes\'); return false;">PDF Résumé</a> <br/>');
  }
  else if(activeUser == "classyvaibhav"){
    $("#displayText").append('<a href="#" onclick="window.open(\'resume.pdf\', \'_blank\', \'fullscreen=yes\'); return false;">PDF Résumé</a> <br/>');
  }
  else if(activeUser == "richa"){
    $("#displayText").append('<a href="#" onclick="window.open(\'badhel_richa_resume.pdf\', \'_blank\', \'fullscreen=yes\'); return false;">PDF Résumé</a> <br/>');
  }
  else if(activeUser == "riddhi"){
    $("#displayText").append('<a href="#" onclick="window.open(\'riddhi badhel resume.pdf\', \'_blank\', \'fullscreen=yes\'); return false;">PDF Résumé</a> <br/>');
  }
}


// function ls() {
//   if (whereWeAt == locations[2] && input_arguments.length == 1) { // "username dir / ~"
//     print("resume.sh");
//   } else if (input_arguments.length == 2) {
//     if (input_arguments[1] in files) {
//       print(files[input_arguments[1]].join(" "));
//     } else if (input_arguments[1].includes("/")) {

//       //TODO: handle /home, /home/feelqah with a more "dynamic way"

//       if (input_arguments[1].includes("home") || input_arguments[1].includes("classyvaibhav")) {

//         var dirs = input_arguments[1].split("/");

//         print(files[dirs[dirs.length - 1]].join(" "));
//       } else {
//         print("ls: " + input_arguments[1] + ": No such file or directory");
//       }
//     }
//   } else {
//     print("ls: invalid arguments");
//   }
// }

function contactshantanu() {
  for (var i = 0; i < contactInfoShantanu.length; i++) {
    $("#displayText").append(contactInfoShantanu[i]);
  }
  $("#displayText").append("<br/>");
}

function contactvaibhav() {
  for (var i = 0; i < contactInfoVaibhav.length; i++) {
    $("#displayText").append(contactInfoVaibhav[i]);
  }
  $("#displayText").append("<br/>");
}

function contactriddhi() {
  for (var i = 0; i < contactInfoRiddhi.length; i++) {
    $("#displayText").append(contactInfoRiddhi[i]);
  }
  $("#displayText").append("<br/>");
}

function contactricha() {
  for (var i = 0; i < contactInfoRicha.length; i++) {
    $("#displayText").append(contactInfoRicha[i]);
  }
  $("#displayText").append("<br/>");
}


// function interestsshantanu() {
//   displayTyping(interestsofshantanu);
// }

if(input == "shantanuinterests"){
  print(interestsShantanu)
}