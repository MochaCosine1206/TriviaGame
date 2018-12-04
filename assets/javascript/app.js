var getObj = [];
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
var categoryAny = "https://opentdb.com/api.php?amount=50";
var category9 = "https://opentdb.com/api.php?amount=50&category=9";
var category10 = "https://opentdb.com/api.php?amount=50&category=10";
var category11 = "https://opentdb.com/api.php?amount=50&category=11";
var category12 = "https://opentdb.com/api.php?amount=50&category=12";
var category13 = "https://opentdb.com/api.php?amount=50&category=13";
var category14 = "https://opentdb.com/api.php?amount=50&category=14";
var category15 = "https://opentdb.com/api.php?amount=50&category=15";
var category16 = "https://opentdb.com/api.php?amount=50&category=16";
var category17 = "https://opentdb.com/api.php?amount=50&category=17";
var category18 = "https://opentdb.com/api.php?amount=50&category=18";
var category19 = "https://opentdb.com/api.php?amount=50&category=19";
var category20 = "https://opentdb.com/api.php?amount=50&category=20";
var category21 = "https://opentdb.com/api.php?amount=50&category=21";
var category22 = "https://opentdb.com/api.php?amount=50&category=22";
var category23 = "https://opentdb.com/api.php?amount=50&category=23";
var category24 = "https://opentdb.com/api.php?amount=50&category=24";
var category25 = "https://opentdb.com/api.php?amount=50&category=25";
var category26 = "https://opentdb.com/api.php?amount=50&category=26";
var category27 = "https://opentdb.com/api.php?amount=50&category=27";
var category28 = "https://opentdb.com/api.php?amount=50&category=28";
var category29 = "https://opentdb.com/api.php?amount=50&category=29";
var category30 = "https://opentdb.com/api.php?amount=50&category=30";
var category31 = "https://opentdb.com/api.php?amount=50&category=31";
var category32 = "https://opentdb.com/api.php?amount=50&category=32";



$(document).ready(function () {
    $(".splashScreen").fadeIn(1000).delay(2000);
    $(".logoSplash").fadeIn(2000).delay(1000);
    $(".logoSplash").fadeOut(1000).delay(1000);
    $(".selectionScreen").delay(2000).fadeIn(2000);
    $(".playButton").on("mousedown", function(){
        $(this).css('box-shadow', '1px 5px 2px rgba(0, 0, 0, 0.4)');
    });
    $(".playButton").on("mouseup", function () {
        $(this).css('box-shadow', '5px 10px 5px rgba(0, 0, 0, 0.19)');
        $(".selectionScreen").fadeOut(1000).delay(1000);
        $(".playScreen").delay(2000).fadeIn(2000);
    })


    runGame();

    function runGame (){

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            getObj = JSON.parse(this.responseText);

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

            // console.log(getObj.results[randArr[randArrCount]].type);
            // console.log($('ul li').length);

            if (getObj.results[randArr[randArrCount]].type === "boolean") {
                randomAnswerArrBoolean();
                $(".answer3, .answer4").hide();

            } else {
                $("li.answer3, li.answer4").show();
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


            

            randomAnswerArr()
            $(".wins").html(points);
            $("#testID").html(getObj.results[randArr[randArrCount]].category);
            $(".questionQ").html(getObj.results[randArr[randArrCount]].question);
            $("li:nth-child(" + answerArr[0] + ")").html(getObj.results[randArr[randArrCount]].correct_answer);
            $("li:nth-child(" + answerArr[1] + ")").html(getObj.results[randArr[randArrCount]].incorrect_answers[0]);
            $("li:nth-child(" + answerArr[2] + ")").html(getObj.results[randArr[randArrCount]].incorrect_answers[1]);
            $("li:nth-child(" + answerArr[3] + ")").html(getObj.results[randArr[randArrCount]].incorrect_answers[2]);


            $("li").on("mousedown", function(){
                $(this).css('box-shadow', '1px 3px 0px rgba(0, 0, 0, 0.4)');
                
            })
            $("li").on("mouseup", function () {
                $(this).css('box-shadow', '2px 5px 3px rgba(0, 0, 0, 0.19)');
                if ($(this).html() === getObj.results[randArr[randArrCount]].correct_answer) {
                    points++;
                    questionsCount++;
                    $(".wins").html(points + "/" + questionsCount);
                    randArrCount++;
                    newQuestion();
                } else {
                    questionsCount++;
                    randArrCount++;
                    $(".wins").html(points + "/" + questionsCount);
                    newQuestion();
                }
            })


            function resetAnswer() {
                answerShuffle = 0;
                answerArr = [];
                randomLine = 0;
            }

            function resetGame() {
                $("li").off("click");
                $("li").off("mousedown");
                $("li").off("mouseup");
                $(".playbutton").off("click");
                getObj = [];
                randArr = [];
                randomQ = 0;
                shuffle = 0;
                randArrCount = 0;
                answerShuffle = 0;
                answerArr = [];
                randomLine = 0;
                points = 0;
                $(".wins").html(points)
                questionsCount = 0;
                categoryText = "";
                selectCategory();
            }



            function newQuestion() {
                if (randArrCount === 50) {
                    $(".winsGameOver").html(points);
                    $(".playScreen").fadeOut(1000).delay(1000);
                    $(".gameOverScreen").delay(1000).fadeIn(2000);
                    $(".playAgainButton").on("mousedown", function () {
                        $(this).css('box-shadow', '1px 5px 2px rgba(0, 0, 0, 0.4)');
                    })
                    $(".playAgainButton").on("mouseup", function () {
                        $(this).css('box-shadow', '5px 10px 5px rgba(0, 0, 0, 0.19)');
                        $("#categorySelect").prop('selectedIndex', 0);
                        $(".gameOverScreen").fadeOut(1000).delay(1000);
                        $(".selectionScreen").delay(2000).fadeIn(2000);
                        resetGame();
                    })
                } else {
                    console.log("answerArr " + answerArr);
                    console.log("questionsCount " + questionsCount);
                    console.log("randArrCount " + randArrCount);
                    console.log("answerShuffle " + answerShuffle);
                    console.log("randomLine " + randomLine);
                    console.log("shuffle " + shuffle);
                    console.log(getObj);
                    console.log(getObj.results[randArr[randArrCount]]);
                    console.log(getObj.results[randArr[randArrCount]].type);
                    console.log(getObj.results[randArr[randArrCount]].category);
                    resetAnswer();


                    loadQuestions();




                    function loadQuestions() {
                        // console.log(getObj.results[randArr[randArrCount]].type)
                        if (getObj.results[randArr[randArrCount]].type === "boolean") {
                            $("li.answer3, li.answer4").hide();
                            randomAnswerArrBoolean();
                        } else {
                            $("li.answer3, li.answer4").show();
                        }
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
    }
    selectCategory();
    function selectCategory() {

        $(".playbutton").on("click", function () {
            if ($("#categorySelect option:selected").text() === "Pick a Category") {
                xhttp.open("GET", categoryAny, true);
                xhttp.send();
            }
        })

        $("#categorySelect").on("change", function () {
            categoryText = $("#categorySelect option:selected").text();
            if (categoryText === "Random") {
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
        $(".categorySelect").val(0);

    }
}
})



