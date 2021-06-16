var submitBtn = $(".submit-btn");
var specialMessage = $("h2");
var recName = $("h3");
var rec = $(".songrec");
var container = $(".container");
var hopefulbtn = $(".hopeful");
var upbeatbtn = $(".upbeat");
var reflectivebtn = $(".reflective");
var sadbtn = $(".sad");
var song = $("iframe");

submitBtn.on("click", showText);

function showText() {
  event.preventDefault();
  var name = $(".name").val();
  specialMessage.text(`Hi, ${name}!`);
  specialMessage.addClass("centerText");
  //maybe create an iframe but change src attribute in if statements
  if(reflectivebtn.is(":checked")) {
    console.log("reflective");
    //make font colol the color of the album cover
    recName.removeClass();
    recName.text("I recommend Nashvile by David Mead");
    recName.addClass("david");
    song.attr("src", "https://open.spotify.com/embed/track/6TK1KSYex0af7qjLG2TDVw");
  } else if (hopefulbtn.is(":checked")) {
    console.log("hopeful");
    recName.removeClass();
    recName.text("I recommend Secret For The Mad by dodie");
    recName.addClass("dodie");
    song.attr("src", "https://open.spotify.com/embed/track/2Uk0aFqYCtecHL5MCq2we0");
  } else if (upbeatbtn.is(":checked")) {
    console.log("upbeat");
    recName.removeClass();
    recName.text("I recommend Don't Take The Money by Bleachers");
    recName.addClass("bleachers");
    song.attr("src", "https://open.spotify.com/embed/track/3ySU5vwQB33iGulwcUL9qQ");
  } else if (sadbtn.is(":checked")) {
    console.log("sad");
    recName.removeClass();
    recName.addClass("taylor");
    recName.text("I recommend Illicit Affairs by Taylor Swift");
    song.attr("src", "https://open.spotify.com/embed/track/2NmsngXHeC1GQ9wWrzhOMf");
  } else {
    console.log("error");
  }
}