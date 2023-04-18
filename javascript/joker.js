const VERSION = "1.2";

var joke_list = create_joke_list()

function create_joke_list() {
  // console.log("creating joke list...");
  var joke_list = [];
  var index = 0;
  joke_list[index++] = "Why did the tomato turn red? Because it saw the salad dressing!";
  joke_list[index++] = "Why couldn't the bicycle stand up by itself? Because it was two-tired.";
  joke_list[index++] = "What did one pencil say to the other pencil? You are looking sharp!";
  joke_list[index++] = "What do you call a fake noodle? An impasta.";
  joke_list[index++] = "Why did the chicken cross the playground? To get to the other slide!";
  joke_list[index++] = "What do you call a bear with no teeth? A gummy bear.";
  joke_list[index++] = "Why did the banana go to the doctor? Because it wasn't peeling well!";
  joke_list[index++] = "What do you get when you cross a snowman and a shark? Frostbite!";
  joke_list[index++] = "Why did the music teacher need a ladder? To reach the high notes!";
  joke_list[index++] = "What do you call a boomerang that doesn't come back? A stick.";
  joke_list[index++] = "What do you get when you cross a pig and a centipede? Bacon and legs!";
  joke_list[index++] = "Why did the cookie go to the doctor? Because it was feeling crummy.";
  joke_list[index++] = "What do you call an alligator in a vest? An investigator.";
  joke_list[index++] = "What did the grape say when it got stepped on? Nothing, it just let out a little wine.";
  joke_list[index++] = "Why don't oysters give to charity? Because they're shellfish.";
  joke_list[index++] = "What do you get when you cross a cow and a duck? Milk and quackers.";
  joke_list[index++] = "Why was the math book sad? Because it had too many problems.";
  joke_list[index++] = "Why did the golfer wear two pairs of pants? In case he got a hole in one!";
  joke_list[index++] = "What do you call a dinosaur with an extensive vocabulary? A thesaurus.";
  joke_list[index++] = "Why did the tomato go out with a prune? Because it couldn't find a date!";
  
  // console.log("list size", joke_list.length);

  return joke_list;
}

function getRandomInteger(max) {
  return Math.floor(Math.random() * max);
}

// here is a function; as a parameter, we can pass in the list
function getRandomJoke(jokes) {
  
  let idx = getRandomInteger(jokes.length);
  let joke = jokes[idx];
  
  return joke;
}

var jokes = create_joke_list();
// console.log(joke_list);

console.log(getRandomJoke(jokes));

