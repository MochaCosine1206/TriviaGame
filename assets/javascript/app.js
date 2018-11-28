

$(document).ready(function () {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var getObj = JSON.parse(this.responseText);
            var randomQ = Math.floor(Math.random() * getObj.results.length);
            console.log(randomQ);
            console.log(getObj.results);
            console.log(getObj.results[randomQ]);
            console.log(getObj.results[randomQ].category);
            $("#testID").html(getObj.results[randomQ].category);
            $(".questionQ").html(getObj.results[randomQ].question);
            $(".answer1").html(getObj.results[randomQ].correct_answer);
            $(".answer2").html(getObj.results[randomQ].incorrect_answers[0]);
            $(".answer3").html(getObj.results[randomQ].incorrect_answers[1]);
            $(".answer4").html(getObj.results[randomQ].incorrect_answers[2]);

            $("li").on("click", function () {
                if ($(this).html() === getObj.results[randomQ].correct_answer) {
                    //points++
                    newQuestion();
                    console.log("yes");
                } else {
                    //guesses left--
                    newQuestion();
                    console.log("no");
                }
            })

            function newQuestion() {
                var randomQ = Math.floor(Math.random() * getObj.results.length);
                $("#testID").html(getObj.results[randomQ].category);
                $(".questionQ").html(getObj.results[randomQ].question);
                $(".answer1").html(getObj.results[randomQ].correct_answer);
                $(".answer2").html(getObj.results[randomQ].incorrect_answers[0]);
                $(".answer3").html(getObj.results[randomQ].incorrect_answers[1]);
                $(".answer4").html(getObj.results[randomQ].incorrect_answers[2]);
            }
        }
    };
    xhttp.open("GET", "https://opentdb.com/api.php?amount=10", true);
    xhttp.send();
})



