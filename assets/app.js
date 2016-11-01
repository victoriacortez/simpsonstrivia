var questions = [{
  "question": "What's Bart's Middle Name?",
  "option1":"Jay",
  "option2": "Adam", 
  "option3": "Bob",
  "option4": "Lisa",
  "answer":"0"
},
{
  "question":"When Lisa tried to do a story for Kidz News, what was the crazy woman throwing at her?",
  "option1": "Dogs",
  "option2":"Bottles", 
  "option3": "Hairdryer", 
  "option4": "Cats", 
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

$(".display").html(questions[x].question);
$("#opt1").html(questions[x].option1);
$("#opt2").html(questions[x].option2);
$("#opt3").html(questions[x].option3);
$("#opt4").html(questions[x].option4);


setInterval(function() {
  var timer = $('.timer').html();
  timer = timer.split(':');
  var seconds = timer[1];
    if(seconds!="00"){
      seconds -=1;
    if(seconds < 0){
      seconds= 59;
    }
    else if (seconds < 10 && length.seconds !=2) seconds = '0' +seconds;
    $('.timer').html(":" + seconds);
    }
},1000);