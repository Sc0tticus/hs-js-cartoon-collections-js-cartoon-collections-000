//The dwarfRollCall function should accept an array of dwarf names, for instance:
//["Doc", "Dopey", "Bashful", "Grumpy"]
//It should then return a string with the numbered dwarves. The string should look like this: "1. Doc 2. Dopey 3. Bashful 4. Grumpy "

dwarves=["Doc","Dopey","Bashful","Grumpy"];

function dwarfRollCall(dwarves) {
  var numbered_dwarves= "";
  for (let i=0; i<dwarves.length; i++){
    numbered_dwarves += `${i+1}. ${dwarves[i]} `;
  }
  return numbered_dwarves;
}

//The planeteerCalls function should accept an array of planeteer calls like: planeteerCalls = ["earth","wind","fire","water","heart"];
//It should convert each element to uppercase and add an exclamation point at the end. The return value of this method should be an array like:
//summonCaptainPlanet(planeteerCalls)
//=> ["EARTH!","WIND!","FIRE!","WATER!","HEART!"]

planeteerCalls = ["earth", "wind", "fire", "water", "heart"];

function summonCaptainPlanet(planeteerCalls){
   var Upper=[];
    for (let i=0; i<planeteerCalls.length; i++){
       Upper.push(`${planeteerCalls[i].toUpperCase()}!`);
    }
    return Upper;
}

//longPlaneteerCalls method should accept an array of calls. The function should tell us if any of the calls are longer than four characters. For example: shortWords=["wind","fire"]
//longPlaneteerCalls(short_words)=> false
// assortedWords=["earth","wind","heart","fire]
//longPlaneteerCalls(assorted_words)=> true

function longPlaneteerCalls(words) {
  for (let i=0; i<words.length; i++){
  if (words[i].length > 4 ){
  return true;
  }
  else {
  return false;
  }
}
}

//findTheCheese should accept an array of strings. It should look through these strings and return the first string that contains cheddar, gouda, and camembert.
//example: snacks=["crackers","gouda","thyme"];
//findTheCheese(snacks)=> "gouda"
//example#2: soup=["tomato soup", "cheddar","oyster crackers","gouda"];
//findTheCheese(soup)=> "cheddar"
//If a list of ingredients does not include cheese, return "no cheese"

function findTheCheese(snacks){
/*  var cheddar = snacks.indexOf("cheddar");
  var gouda = snacks.indexOf("gouda");
  var camembert = snacks.indexOf("camembert");
  var snack_pack = [cheddar,gouda,camembert];
  var sorted_snacks=snack_pack.sort();
  var found_snack = sorted_snacks.find(element=>element>=0);
  if (found_snack === undefined){
    return "no cheese!";
  }
  else {
    return snacks[found_snack];
  } */
  var allCheeses=["swiss","cheddar","gouda"];
  for (let i=0; i<snacks.length; i++){
    if (allCheeses.indexOf(snacks[i])>=0){
    return snacks[i];
    }
  }
  return "no cheese!";
}

//startsWithB
//accept words array
//return only words that start with B from that original array
function startsWithB(words){
  arrayOfB=[];
  for (i=0; i<words.length; i++){
    if (words[i][0]=== "b"){
      arrayOfB.push(`${words[i]}`)
    }
  }
  return arrayOfB;
}
