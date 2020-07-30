"use strict";

class Question {
  constructor(q, a, b, type, point) {
    this.q = q;
    this.a = a;
    this.b = b;
    this.type = type;
    this.point = point;
  }
}
let questions = [
  new Question(
    "You get an A on a test.",
    "I am smart.",
    "I am good in the subject that the test is in.",
    "PVG",
    "a"
  ),
  new Question(
    "You play a game with some friends and you win.",
    "The people that I played with did not play the game well.",
    "I play that game well.",
    "PSG",
    "b"
  ),
  new Question(
    "You spend a night at a friend's house and you have a good time.",
    "My friend was in a friendly mood that night.",
    "Everyone in my friend's family was in a friendly mood that night.",
    "PVG",
    "b"
  ),
  new Question(
    "You go on vacation with a group of people and you have fun.",
    "I was in a good mood.",
    "The people I was with were in good moods.",
    "PSG",
    "a"
  ),
  new Question(
    "All of your friends catch a cold except you.",
    "I have been healthy lately.",
    "I am a healthy person",
    "PMG",
    "b"
  ),
  new Question(
    "Your pet gets run over by a car.",
    "I don't take good care of my pets.",
    "Drivers are not cautious enought.",
    "PSB",
    "a"
  ),
  new Question(
    "Some kids you know say that they don't like you.",
    "Once in a while people are mean to me.",
    "Once in a while I am mean to other people.",
    "PSB",
    "b"
  ),
  new Question(
    "You get very good grades.",
    "Schoolwork is simple.",
    "I am a hard worker.",
    "PSG",
    "b"
  ),
  new Question(
    "You meet a friend and your friend tells you that you look nice.",
    "My friend felt like praising the way people looked that day.",
    "Usually my friend prases the way people look.",
    "PMG",
    "b"
  ),
  new Question(
    "You tell a joke and no one laughs.",
    "I don't tell jokes well.",
    "The joke is so well known that it is no longer funny.",
    "PSB",
    "a"
  ),
  new Question(
    "Your teacher gives a lesson and you do not understand it.",
    "I didn't pay attention to anything that day.",
    "I didn't pay attention when my teacher was talking.",
    "PVB",
    "a"
  ),
  new Question(
    "You fail a test.",
    "My teacher makes hard tests.",
    "The past few weeks, my teacher has made hard tests.",
    "PMB",
    "a"
  ),
  new Question(
    "You gain a lot of weight and start to look fat.",
    "The food that I have to eat is fattening.",
    "I like fattening foods.",
    "PSB",
    "b"
  ),
  new Question(
    "A person steals money from you.",
    "That person is dishonest.",
    "People are dishonest.",
    "PVB",
    "b"
  ),
  new Question(
    "Your parents praise something that you make.",
    "I am good at making some things.",
    "My parents like some things I make.",
    "PSG",
    "a"
  ),
  new Question(
    "You play a game and you win money.",
    "I am a lucky person.",
    "I am lucky when I play games.",
    "PVG",
    "a"
  ),
  new Question(
    "You almost drawn when swimming in a river.",
    "I am not a very cautious person.",
    "Some days I am not a cautious person.",
    "PMB",
    "a"
  ),
  new Question(
    "You are invited to a lot of parties.",
    "A lot of people have been acting friendly toward me lately.",
    "I have been acting friendly toward a lot of people lately.",
    "PSG",
    "b"
  ),
  new Question(
    "A grown-up yells at you.",
    "That person yelled at the first person he saw.",
    "That person yelled at a lot of people he saw that day.",
    "PVB",
    "b"
  ),
  new Question(
    "You do a project with a group of kids and it turns out badly.",
    "I don't work well with the people in the group.",
    "I never work well with a group.",
    "PVB",
    "b"
  ),
  new Question(
    "You make a new friend.",
    "I am a nice person.",
    "The people that I meet are nice.",
    "PSG",
    "a"
  ),
  new Question(
    "You have been getting along well with your family.",
    "I am easy to get along with when I am with my family.",
    "Once in a while I am easy to get along with when I am with my family.",
    "PMG",
    "a"
  ),
  new Question(
    "You try to sell candy, but no one will buy any.",
    "Lately a lot of children are selling things, so people don't want to buy anything else from children.",
    "People don't like to buy things from children.",
    "PMB",
    "b"
  ),
  new Question(
    "You play a game and you win.",
    "Sometimes I try as hard as I can at games.",
    "Sometimes I try as hard as I can",
    "PVG",
    "b"
  ),
  new Question(
    "You get a bad grade in school.",
    "I am stupid.",
    "Teachers are unfair graders.",
    "PSB",
    "a"
  ),
  new Question(
    "You walk into a door and you get a bloody nose.",
    "I wasn't looking where I was going.",
    "I have been careless lately.",
    "PVB",
    "b"
  ),
  new Question(
    "You miss the ball and your team loses the game.",
    "I didn't try hard while playing ball that day.",
    "I usually do not try hard when I am playing ball.",
    "PMB",
    "b"
  ),
  new Question(
    "You twist your ankle in gym class.",
    "The past few weeks, the sports we played in gym class have been dangerous.",
    "The past few weeks I have been clumsy in gym class.",
    "PSB",
    "b"
  ),
  new Question(
    "Your parents take you to the beach and you have a good time.",
    "Everything at the beach was nice that day.",
    "The weather at the beach was nice that day.",
    "PVG",
    "a"
  ),
  new Question(
    "You take a train which arrives so late that you miss a movie.",
    "The past few days there have been problems with the train being on time.",
    "The trains are almost never on time.",
    "PMB",
    "b"
  ),
  new Question(
    "Your mother makes you your favorite dinner.",
    "There are a few things that my mother will do to please me.",
    "My mother likes to please me.",
    "PVG",
    "b"
  ),
  new Question(
    "A team that you are on loses a game.",
    "The team members don't play well together.",
    "That day the team members didn't play well together.",
    "PMB",
    "a"
  ),
  new Question(
    "You finish your homework quickly.",
    "Lately I have been doing everything quickly.",
    "Lately I have been doing schoolwork quickly.",
    "PVG",
    "a"
  ),
  new Question(
    "Your teacher asks you a question and you give the wrong answer.",
    "I get nervous when I have to answer questions.",
    "That day I got nervous when I had to answer questions.",
    "PMB",
    "a"
  ),
  new Question(
    "You get on the wrong bus and you get lost.",
    "That day I wasn't paying attention to what was going on.",
    "I usually don't pay attention to what's going on.",
    "PMB",
    "b"
  ),
  new Question(
    "You go to an amusement park and you have a good time.",
    "I usually enjoy myself at amusement parks.",
    "I usually enjoy myself.",
    "PVG",
    "b"
  ),
  new Question(
    "An older kid slaps you in the face.",
    "I teased his younger brother.",
    "His younger brother told him I had teased him.",
    "PSB",
    "a"
  ),
  new Question(
    "You get all the toys you want on your birthday.",
    "People always guess right as to what toys to buy me for my birthday.",
    "This birthday, people guessed right as to what toys I wanted.",
    "PMG",
    "a"
  ),
  new Question(
    "You take a vacation in the country and you have a wonderful time.",
    "The country is a beautiful place to be.",
    "The time of the year that we went was beautiful.",
    "PMG",
    "a"
  ),
  new Question(
    "Your neighbors ask you over for dinner.",
    "Sometimes people are in kind moods.",
    "People are kind.",
    "PMG",
    "b"
  ),
  new Question(
    "You have a substitute teacher and she likes you.",
    "I was well behaved during class that day.",
    "I am almost always well behaved during class.",
    "PMG",
    "b"
  ),
  new Question(
    "You make your friends happy.",
    "I am a fun person to be with.",
    "Sometimes I am a fun person to be with.",
    "PMG",
    "a"
  ),
  new Question(
    "You get a free ice cream cone.",
    "I was friendly to the ice cream man that day.",
    "The ice cream man was feeling friendly that day.",
    "PSG",
    "a"
  ),
  new Question(
    "At your friend's party the magician asks you to help him out.",
    "It was just luck that I got picked.",
    "I looked really interested in what was going on.",
    "PSG",
    "b"
  ),
  new Question(
    "You try to convince a kid to go to the movies with you, but he won't go.",
    "That day he did not feel like doing anything.",
    "That day he did not feel like going to the movies.",
    "PVB",
    "a"
  ),
  new Question(
    "Your parents get a divorce.",
    "It is hard for people to get alone well when they are married.",
    "It is hard for my parents to get along well when they are married.",
    "PVB",
    "a"
  ),
  new Question(
    "You have been trying to get into a club and you don't get in.",
    "I don't get along well with other people.",
    "I can't get along well with the people in the club.",
    "PVB",
    "a"
  )
];

let start = document.getElementById("start");
let test = document.getElementById("test");
let q = document.getElementById("q");
let a = document.getElementById("a");
let b = document.getElementById("b");
let bA = document.getElementById("bA");
let bB = document.getElementById("bB");
let score = document.getElementById("score");

start.onclick = function() {
  score.firstChild.data = "";
  start.firstChild.data = "restart";
  test.style.visibility = "visible";
  let i = -1;
  let pmbscore = 0;
  let pmgscore = 0;
  let pvbscore = 0;
  let pvgscore = 0;
  let psbscore = 0;
  let psgscore = 0;
  let end = function() {
    start.firstChild.data = "start";
    test.style.visibility = "hidden";
    score.style.visibility = "visible";
    // TODO: make this prettier.
    let HoB = pmbscore + pvbscore;
    let totalb = pmbscore + pvbscore + psbscore;
    let totalg = pmgscore + pvgscore + psgscore;
    let gminusb = totalg = totalb;
    score.firstChild.data = `PMB: ${pmbscore}  PMG: ${pmgscore}  PVB: ${pvbscore}  PVG: ${pvgscore}  
HoB: ${HoB}
PSB: ${psbscore}  PSG: ${psgscore}
Total B: ${totalb}  Total G: ${totalg}
G - B: ${gminusb}
`;
  };
  let next = function() {
    i++;
    if (i >= questions.length) {
      return end();
    }
    q.innerText = questions[i].q;
    a.innerText = questions[i].a;
    b.innerText = questions[i].b;
  };
  bA.onclick = function() {
    if (questions[i].point === "a") {
      if (questions[i].type === "PVB") pvbscore++;
      if (questions[i].type === "PVG") pvgscore++;
      if (questions[i].type === "PMB") pmbscore++;
      if (questions[i].type === "PMG") pmgscore++;
      if (questions[i].type === "PSB") pmbscore++;
      if (questions[i].type === "PSG") pmgscore++;
    }
    next();
  };
  bB.onclick = function() {
    if (questions[i].point === "b") {
      if (questions[i].type === "PVB") pvbscore++;
      if (questions[i].type === "PVG") pvgscore++;
      if (questions[i].type === "PMB") pmbscore++;
      if (questions[i].type === "PMG") pmgscore++;
      if (questions[i].type === "PSB") pmbscore++;
      if (questions[i].type === "PSG") pmgscore++;
    }
    next();
  };
  next();
};
