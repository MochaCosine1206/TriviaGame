var randArr = [];
var randomQ = 0;
var shuffle = 0;
randArrCount = 0;

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


            console.log(randArr);
            console.log(randomQ);
            console.log(getObj.results);
            console.log(getObj.results[randArr[randArrCount]]);
            console.log(getObj.results[randArr[randArrCount]].type);
            console.log(getObj.results[randArr[randArrCount]].category);
            if (getObj.results[randArr[randArrCount]].type === "boolean") {
                $(".answer3, .answer4").hide();
            }
            if (getObj.results[randArr[randArrCount]].type === "multiple") {
                $("li.answer3, li.answer4").show();
            }
            $("#testID").html(getObj.results[randArr[randArrCount]].category);
            $(".questionQ").html(getObj.results[randArr[randArrCount]].question);
            $(".answer1").html(getObj.results[randArr[randArrCount]].correct_answer);
            $(".answer2").html(getObj.results[randArr[randArrCount]].incorrect_answers[0]);
            $(".answer3").html(getObj.results[randArr[randArrCount]].incorrect_answers[1]);
            $(".answer4").html(getObj.results[randArr[randArrCount]].incorrect_answers[2]);

            $("li").on("click", function () {
                if ($(this).html() === getObj.results[randArr[randArrCount]].correct_answer) {
                    //points++
                    randArrCount++;
                    newQuestion()
                    console.log("yes");
                    console.log(randArr[randArrCount]);
                } else {
                    //guesses left--
                    randArrCount++;
                    newQuestion()
                    console.log("no");
                    console.log(randArr[randArrCount]);
                }
            })

            function newQuestion() {
                console.log(randArr);
                console.log(randomQ);
                console.log(getObj.results);
                console.log(getObj.results[randArr[randArrCount]]);
                console.log(getObj.results[randArr[randArrCount]].type);
                console.log(getObj.results[randArr[randArrCount]].category);
                if (getObj.results[randArr[randArrCount]].type === "boolean") {
                    $("li.answer3, li.answer4").hide();
                }
                if (getObj.results[randArr[randArrCount]].type === "multiple") {
                    $("li.answer3, li.answer4").show();
                }
                $("#testID").html(getObj.results[randArr[randArrCount]].category);
                $(".questionQ").html(getObj.results[randArr[randArrCount]].question);
                $(".answer1").html(getObj.results[randArr[randArrCount]].correct_answer);
                $(".answer2").html(getObj.results[randArr[randArrCount]].incorrect_answers[0]);
                $(".answer3").html(getObj.results[randArr[randArrCount]].incorrect_answers[1]);
                $(".answer4").html(getObj.results[randArr[randArrCount]].incorrect_answers[2]);
            }

            // questionType()
            // function questionType() {
            //     if (getObj.results[randArr[randArrCount]].type === "boolean") {
            //         $(".answer3, .answer4").hide();                    
            //     }
            // }

        }
    };
    xhttp.open("GET", "https://opentdb.com/api.php?amount=10", true);
    xhttp.send();
})



