var randArr = [];
var randomQ = 0;
var shuffle = 0;
var randArrCount = 0;
var answerShuffle = 0;
var answerArr = [];
var answerArrCount = 0;
var randomLine = 0;
var points = 0;
var questionsCount = 0;
var categoryText = "";
var difficultyText = "";
var categoryAny = "https://opentdb.com/api.php?amount=10";
var category9 = "https://opentdb.com/api.php?amount=10&category=9";
var category10 = "https://opentdb.com/api.php?amount=10&category=10";
var category11 = "https://opentdb.com/api.php?amount=10&category=11";
var category12 = "https://opentdb.com/api.php?amount=10&category=12";
var category13 = "https://opentdb.com/api.php?amount=10&category=13";
var category14 = "https://opentdb.com/api.php?amount=10&category=14";
var category15 = "https://opentdb.com/api.php?amount=10&category=15";
var category16 = "https://opentdb.com/api.php?amount=10&category=16";
var category17 = "https://opentdb.com/api.php?amount=10&category=17";
var category18 = "https://opentdb.com/api.php?amount=10&category=18";
var category19 = "https://opentdb.com/api.php?amount=10&category=19";
var category20 = "https://opentdb.com/api.php?amount=10&category=20";
var category21 = "https://opentdb.com/api.php?amount=10&category=21";
var category22 = "https://opentdb.com/api.php?amount=10&category=22";
var category23 = "https://opentdb.com/api.php?amount=10&category=23";
var category24 = "https://opentdb.com/api.php?amount=10&category=24";
var category25 = "https://opentdb.com/api.php?amount=10&category=25";
var category26 = "https://opentdb.com/api.php?amount=10&category=26";
var category27 = "https://opentdb.com/api.php?amount=10&category=27";
var category28 = "https://opentdb.com/api.php?amount=10&category=28";
var category29 = "https://opentdb.com/api.php?amount=10&category=29";
var category30 = "https://opentdb.com/api.php?amount=10&category=30";
var category31 = "https://opentdb.com/api.php?amount=10&category=31";
var category32 = "https://opentdb.com/api.php?amount=10&category=32";



$(document).ready(function () {
    $(".splashScreen").fadeIn(1000).delay(2000);
    $(".logoSplash").fadeIn(2000).delay(1000);
    $(".logoSplash").fadeOut(1000).delay(1000);
    $(".selectionScreen").delay(2000).fadeIn(2000);
    $(".playButton").on("click", function () {
        $(".selectionScreen").fadeOut(1000).delay(1000);
        $(".playScreen").delay(2000).fadeIn(2000);
    })





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
                randomAnswerArrBoolean();
                $(".answer3, .answer4").hide();

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
                    questionsCount++;
                    $(".wins").html(points + "/" + questionsCount);
                    randArrCount++;
                    newQuestion();
                    console.log("yes");
                    console.log(randArr[randArrCount]);
                    console.log(answerArr);
                } else {
                    questionsCount++;
                    randArrCount++;
                    $(".wins").html(points + "/" + questionsCount);
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
        
    };

}



    $("#categorySelect").on("change", function () {
        categoryText = $("#categorySelect option:selected").text();
        if (categoryText === "Any Category") {
            xhttp.open("GET", categoryAny, true);
            xhttp.send();
        }
    })
    $("#categorySelect").on("change", function () {
        categoryText = $("#categorySelect option:selected").text();
        if (categoryText === "General Knowledge") {
            xhttp.open("GET", category9, true);
            xhttp.send();
        }
    })

    $("#categorySelect").on("change", function () {
        categoryText = $("#categorySelect option:selected").text();
        if (categoryText === "Entertainment: Books") {
            xhttp.open("GET", category10, true);
            xhttp.send();
        }
    })
    $("#categorySelect").on("change", function () {
        categoryText = $("#categorySelect option:selected").text();
        if (categoryText === "Entertainment: Film") {
            xhttp.open("GET", category11, true);
            xhttp.send();
        }
    })
    $("#categorySelect").on("change", function () {
        categoryText = $("#categorySelect option:selected").text();
        if (categoryText === "Entertainment: Music") {
            xhttp.open("GET", category12, true);
            xhttp.send();
        }
    })
    $("#categorySelect").on("change", function () {
        categoryText = $("#categorySelect option:selected").text();
        if (categoryText === "Entertainment: Musicals & Theatres") {
            xhttp.open("GET", category13, true);
            xhttp.send();
        }
    })
    $("#categorySelect").on("change", function () {
        categoryText = $("#categorySelect option:selected").text();
        if (categoryText === "Entertainment: Television") {
            xhttp.open("GET", category14, true);
            xhttp.send();
        }
    })
    $("#categorySelect").on("change", function () {
        categoryText = $("#categorySelect option:selected").text();
        if (categoryText === "Entertainment: Video Games") {
            xhttp.open("GET", category15, true);
            xhttp.send();
        }
    })
    $("#categorySelect").on("change", function () {
        categoryText = $("#categorySelect option:selected").text();
        if (categoryText === "Entertainment: Board Games") {
            xhttp.open("GET", category16, true);
            xhttp.send();
        }
    })
    $("#categorySelect").on("change", function () {
        categoryText = $("#categorySelect option:selected").text();
        if (categoryText === "Science & Nature") {
            xhttp.open("GET", category17, true);
            xhttp.send();
        }
    })
    $("#categorySelect").on("change", function () {
        categoryText = $("#categorySelect option:selected").text();
        if (categoryText === "Science: Computers") {
            xhttp.open("GET", category18, true);
            xhttp.send();
        }
    })
    $("#categorySelect").on("change", function () {
        categoryText = $("#categorySelect option:selected").text();
        if (categoryText === "Science: Mathmatics") {
            xhttp.open("GET", category19, true);
            xhttp.send();
        }
    })
    $("#categorySelect").on("change", function () {
        categoryText = $("#categorySelect option:selected").text();
        if (categoryText === "Mythology") {
            xhttp.open("GET", category20, true);
            xhttp.send();
        }
    })
    $("#categorySelect").on("change", function () {
        categoryText = $("#categorySelect option:selected").text();
        if (categoryText === "Sports") {
            xhttp.open("GET", category21, true);
            xhttp.send();
        }
    })
    $("#categorySelect").on("change", function () {
        categoryText = $("#categorySelect option:selected").text();
        if (categoryText === "Geography") {
            xhttp.open("GET", category22, true);
            xhttp.send();
        }
    })
    $("#categorySelect").on("change", function () {
        categoryText = $("#categorySelect option:selected").text();
        if (categoryText === "History") {
            xhttp.open("GET", category23, true);
            xhttp.send();
        }
    })
    $("#categorySelect").on("change", function () {
        categoryText = $("#categorySelect option:selected").text();
        if (categoryText === "Politics") {
            xhttp.open("GET", category24, true);
            xhttp.send();
        }
    })
    $("#categorySelect").on("change", function () {
        categoryText = $("#categorySelect option:selected").text();
        if (categoryText === "Art") {
            xhttp.open("GET", category25, true);
            xhttp.send();
        }
    })
    $("#categorySelect").on("change", function () {
        categoryText = $("#categorySelect option:selected").text();
        if (categoryText === "Celebrities") {
            xhttp.open("GET", category26, true);
            xhttp.send();
        }
    })
    $("#categorySelect").on("change", function () {
        categoryText = $("#categorySelect option:selected").text();
        if (categoryText === "Animals") {
            xhttp.open("GET", category27, true);
            xhttp.send();
        }
    })
    $("#categorySelect").on("change", function () {
        categoryText = $("#categorySelect option:selected").text();
        if (categoryText === "Vehicles") {
            xhttp.open("GET", category28, true);
            xhttp.send();
        }
    })
    $("#categorySelect").on("change", function () {
        categoryText = $("#categorySelect option:selected").text();
        if (categoryText === "Entertainment: Comics") {
            xhttp.open("GET", category29, true);
            xhttp.send();
        }
    })
    $("#categorySelect").on("change", function () {
        categoryText = $("#categorySelect option:selected").text();
        if (categoryText === "Science: Gadgets") {
            xhttp.open("GET", category30, true);
            xhttp.send();
        }
    })
    $("#categorySelect").on("change", function () {
        categoryText = $("#categorySelect option:selected").text();
        if (categoryText === "Entertainment: Japanese Anime & Manga") {
            xhttp.open("GET", category31, true);
            xhttp.send();
        }
    })
    $("#categorySelect").on("change", function () {
        categoryText = $("#categorySelect option:selected").text();
        if (categoryText === "Entertainment: Cartoon & Animations") {
            xhttp.open("GET", category32, true);
            xhttp.send();
        }
    })

})



