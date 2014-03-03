var Cards;
var JSONFile = "js/cards.json";
var Subject;
var Topic;
var CardNumber = 0;
var Question;
var Description;
var Answer;
var AnswerExt;
var IsFlipped = false;
function setSubject(subject)
{
    $("#subject")[0].innerHTML = subject;
    Subject = subject;
    CardNumber = 0;
    buildTopics();
}

function setTopic(topic)
{
    $("#topic")[0].innerHTML = topic;
    Topic = topic;
    CardNumber = 0;
}

function randomCard()
{
     CardNumber = Math.floor(Math.random() * (Cards[Subject][Topic].length));
     getCard();
}

function previousCard()
{
    if (CardNumber > 0)
    {
        CardNumber--;
    }
    getCard();
}

function buildTopics()
{
    var menu = $('#topic-menu')[0];
    menu.innerHTML = "";
    for (topic in Cards[Subject])
    {
        menu.innerHTML += "<li><a href='#' onclick=\"setTopic('" + topic + "');getCard();\">" + topic + "</a></li>";
    }
    $("#topic")[0].innerHTML = "No Topic Set";
}

function buildSubjects()
{
    var menu = $('#subject-menu')[0];
    menu.innerHTML = "";
    for (subject in Cards)
    {
        menu.innerHTML += "<li><a href='#' onclick=\"setSubject('" + subject + "');getCard();\">" + subject + "</a></li>";
    }
    $("#subject")[0].innerHTML = topic;
}

function nextCard()
{
    if (CardNumber < Cards[Subject][Topic].length - 1)
    {
        CardNumber++;
    }
    getCard();
}

function showAnswer()
{
    if(IsFlipped){
        $("#question-title")[0].innerHTML = Question;
        $("#question-info")[0].innerHTML = Description;
    }
    else
    {
        $("#question-title")[0].innerHTML = "<strong>" + Answer + "</strong>";
        $("#question-info")[0].innerHTML = AnswerExt;
    }
    IsFlipped = !IsFlipped;
}

function LoadDB()
{
    var jqxhr = $.getJSON( JSONFile, function() {
    console.log( "success" );
    })
    .done(function(data) {
    console.log("Loaded DB from File.");
    Cards = data;
    //Do some prep.
    buildSubjects();
    setSubject("Computing");
    buildTopics();
    setTopic("Hardware");
    getCard();
    })
    .fail(function() {
        alert("You broke it genius!");
    });
}

function getCard()
{
    var Card = Cards[Subject][Topic][CardNumber];
    $("#question-title")[0].innerHTML = Card["question"]; Question = Card["question"];
    $("#question-info")[0].innerHTML = Card["description"]; Description = Card["description"];
    Answer = Card["answer"];
    if(typeof Card["answerext"] == 'undefined')
    {
        AnswerExt = "";
    }
    else
    {
        AnswerExt = Card["answerext"];
    }
    
}

LoadDB();
