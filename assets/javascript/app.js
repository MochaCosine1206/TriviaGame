var randArr = [];
var randomQ = 0;
var shuffle = 0;
var randArrCount = 0;
var answerShuffle = 0;
var answerArr = [];
var answerArrCount = 0;
var randomLine = 0;
var points = 0;

$(document).ready(function () {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var getObj = JSON.parse(this.responseText);

            randomize()
            function randomize() {
                while (shuffle < getObj.results.length) {
                    randomQ = Math.floor(Math.random() * getObj.results.length);
                    if (!randArr.includes(randomQ)) {
                        randArr.push(randomQ);
                        shuffle++;
                    }
                }
            }


            function randomAnswerArr() {
                while (answerShuffle < $('ul li').length) {
                    randomLine = Math.floor((Math.random() * $('ul li').length) + 1);
                    if (!answerArr.includes(randomLine)) {
                        answerArr.push(randomLine);
                        answerShuffle++;
                    }
                }
            }

            function randomAnswerArrBoolean() {
                while (answerShuffle < 2) {
                    randomLine = Math.floor((Math.random() * 2) + 1);
                    if (!answerArr.includes(randomLine)) {
                        answerArr.push(randomLine);
                        answerShuffle++;
                    }
                }
            }
            console.log(answerArr);


            console.log(randArr);
            console.log(randomQ);
            console.log(getObj.results);
            console.log(getObj.results[randArr[randArrCount]]);
            console.log(getObj.results[randArr[randArrCount]].type);
            console.log(getObj.results[randArr[randArrCount]].category);
            if (getObj.results[randArr[randArrCount]].type === "boolean") {
                $(".answer3, .answer4").hide();
                randomAnswerArrBoolean();
            }
            if (getObj.results[randArr[randArrCount]].type === "multiple") {
                $("li.answer3, li.answer4").show();
            }
            answerArr = [];
            randomAnswerArr()
            $(".wins").html(points);
            $("#testID").html(getObj.results[randArr[randArrCount]].category);
            $(".questionQ").html(getObj.results[randArr[randArrCount]].question);
            $("li:nth-child(" + answerArr[0] + ")").html(getObj.results[randArr[randArrCount]].correct_answer);
            $("li:nth-child(" + answerArr[1] + ")").html(getObj.results[randArr[randArrCount]].incorrect_answers[0]);
            $("li:nth-child(" + answerArr[2] + ")").html(getObj.results[randArr[randArrCount]].incorrect_answers[1]);
            $("li:nth-child(" + answerArr[3] + ")").html(getObj.results[randArr[randArrCount]].incorrect_answers[2]);

            $("li").on("click", function () {
                if ($(this).html() === getObj.results[randArr[randArrCount]].correct_answer) {
                    points++;
                    $(".wins").html(points);
                    randArrCount++;
                    newQuestion();
                    console.log("yes");
                    console.log(randArr[randArrCount]);
                    console.log(answerArr);
                } else {
                    //guesses left--
                    randArrCount++;
                    newQuestion();
                    console.log("no");
                    console.log(randArr[randArrCount]);
                    console.log(answerArr);
                }
            })

            function resetAnswer() {
                answerShuffle = 0;
                answerArr = [];
                answerArrCount = 0;
                randomLine = 0;
            }

            function newQuestion() {
                console.log(answerArr);
                console.log(randArr);
                console.log(randomQ);
                console.log(getObj.results);
                console.log(getObj.results[randArr[randArrCount]]);
                console.log(getObj.results[randArr[randArrCount]].type);
                console.log(getObj.results[randArr[randArrCount]].category);
                resetAnswer();
                if (getObj.results[randArr[randArrCount]].type === "boolean") {
                    $("li.answer3, li.answer4").hide();
                    randomAnswerArrBoolean();
                }
                if (getObj.results[randArr[randArrCount]].type === "multiple") {
                    $("li.answer3, li.answer4").show();
                }
                
                randomAnswerArr();
                $("#testID").html(getObj.results[randArr[randArrCount]].category);
                $(".questionQ").html(getObj.results[randArr[randArrCount]].question);
                $("li:nth-child(" + answerArr[0] + ")").html(getObj.results[randArr[randArrCount]].correct_answer);
                $("li:nth-child(" + answerArr[1] + ")").html(getObj.results[randArr[randArrCount]].incorrect_answers[0]);
                $("li:nth-child(" + answerArr[2] + ")").html(getObj.results[randArr[randArrCount]].incorrect_answers[1]);
                $("li:nth-child(" + answerArr[3] + ")").html(getObj.results[randArr[randArrCount]].incorrect_answers[2]);
            }

        }
    };
    xhttp.open("GET", "https://opentdb.com/api.php?amount=10", true);
    xhttp.send();
})



