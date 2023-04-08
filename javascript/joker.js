
var joke_list = create_joke_list()

function create_joke_list() {
  console.log("creating joke list...");
  var joke_list = [];
  var index = 0;
  joke_list[index++] = "Why did the tomato turn red? Because it saw the salad dressing!";
  joke_list[index++] = "Why couldn't the bicycle stand up by itself? Because it was two-tired.";
  joke_list[index++] = "What did one pencil say to the other pencil? You are looking sharp!";
  
  console.log("list size", joke_list.length);

  return joke_list;
}

// ok, thats a short list, and it might be 'insert' instead of add but we can fix hat later
function getRandomInteger(max) {
  return Math.floor(Math.random() * max);
}

// here is a function; as a parameter, we can pass in the list
function getRandomJoke(jokes) {
  // this function should return the joke and the new joke list so you don't tell the same joke twice
  
  let idx = getRandomInteger(jokes.length)
  
  return joke, jokes;
}

var jokes = create_joke_list();
console.log(joke_list);

// console.log(getRandomJoke(jo

