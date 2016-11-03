var score = 0;

$("button").click(function () {
        $("#startScreen").hide();
        $(".container").show();
        time();
    });
$('.container').hide();


var questions = [{
  "question": "What's Bart's Middle Name?",
  "option1":"Jay",
  "option2": "Adam", 
  "option3": "Bob",
  "option4": "Lisa",
  "answer":"0"
},
{
  "question":"What is the name of Bart's best friend?",
  "option1": "Carl",
  "option2":"Jimbo", 
  "option3": "Milhouse", 
  "option4": "Auto", 
  "answer":"3"
},
{
  "question": "What's the Name of Flander's Shop?", 
  "option1": "Quicky Mart",
  "option2": "Lefty Shop",
  "option3": "Leftorium",
  "option4": "Left Handed Products", 
  "answer": "2"
},
 {
  "question":"What is the name of the bar where Homer drinks?", 
  'option1':"Moe's Tavern", 
  'option2':"BBQ Bar", 
  "option3":"Joe's Cavern",
   "option4":"The Drinking Hole",
   "answer":"0",
 },
{
  "question": "What famous singer helped to stop Whacking Day?",
  "option1":"Michael Jackson", 
  "option2":"Prince", 
  "option3":"Barry White", 
  "option4":"Tom Cruise", 
  "answer":"3"
}]

var x = 0;
//loops each question and options
$(".display").html(questions[x].question);
$("#opt1").html(questions[x].option1);
$("#opt2").html(questions[x].option2);
$("#opt3").html(questions[x].option3);
$("#opt4").html(questions[x].option4);

function next(){
  $(".display").html(questions[x].question);
  $("#opt1").html(questions[x].option1);
  $("#opt2").html(questions[x].option2);
  $("#opt3").html(questions[x].option3);
  $("#opt4").html(questions[x].option4);
  sec = 10;
  $('.timer').html(sec);

}
$('.option').click(function(){
  // console.log("works");
  x++
  next();
})
//homer audio
var audio = new Audio('http://www.wavsource.com/snds_2016-10-30_1570758759693582/tv/simpsons/homer/doh1_y.wav');
//timer
function time (){
  setInterval(timer, 1000);
}

var sec = 10;
$('.timer').html(sec);
function timer(){
  sec--
  $('.timer').html(sec);
  if(sec==0){
    next();
  }
}

audio.play();

var answers = ["0","2","3","0","3"], 
    tot = answers.length;

function getScore(){
 
}
