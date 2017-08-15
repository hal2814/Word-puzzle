$(document).ready(function(){
  //var puzzleString = "apple oranges apples";

  var makePuzzle = (function(string) {
    for(var index = 0; index < string.length; ++index){
      if(string.charAt(index) === 'a' || string.charAt(index) === 'e' || string.charAt(index) === 'i' || string.charAt(index) === 'o' || string.charAt(index) === 'u'){
        string = string.replace(string.charAt(index),"-");
      };
    };
    return string;
  });

  //var scramble = makePuzzle(puzzleString);
  //$("#display").text(scramble);
  var userSentence;
  var scramble;
    $("#puzzle").submit(function(event){
      userSentence = $("input#userWord").val();
      userSentence = userSentence.toLowerCase();
      scramble = makePuzzle(userSentence);
      $("#display").text(scramble);
      $("#puzzle").hide();
      event.preventDefault();
    });
    var answer;
    //var original;

    $("#guess").submit(function(event){
      answer = $("input#userAnswer").val();
      answer = answer.toLowerCase();
      if(userSentence === answer){
        alert("You are correct!");
      }else{
        alert("WRONG!");
      }
    event.preventDefault();
  });
});
