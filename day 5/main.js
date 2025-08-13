var stuff = [];

function addThing(thing) {
  if (thing === undefined) {
    console.log("Can't add nothing!");
    return;
  }
  
  stuff.push(thing);
  var where = stuff.length - 1;
  console.log("Put in " + where + ": " + showThing(thing));
}

function showAll() {
  if (stuff.length === 0) {
    console.log("Nothing here yet");
    return;
  }
  
  console.log("All my things:");
  for (var i = 0; i < stuff.length; i++) {
    console.log(i + " -> " + showThing(stuff[i]));
  }
}

function showOne(spot) {
  spot = Number(spot);
  if (spot < 0 || spot >= stuff.length) {
    console.log("No such spot: " + spot);
    return;
  }
  
  console.log("At " + spot + ": " + showThing(stuff[spot]));
}

function changeThing(spot, newThing) {
  spot = Number(spot);
  if (spot < 0 || spot >= stuff.length) {
    console.log("Can't change - bad spot");
    return;
  }
  
  var old = stuff[spot];
  stuff[spot] = newThing;
  console.log("Changed " + spot + " from " + showThing(old) + " to " + showThing(newThing));
}

function removeThing(spot) {
  spot = Number(spot);
  if (spot < 0 || spot >= stuff.length) {
    console.log("Can't remove - bad spot");
    return;
  }
  
  var gone = stuff.splice(spot, 1)[0];
  console.log("Took out " + spot + ": " + showThing(gone));
}

function showThing(what) {
  if (what === null) return "nothing";
  if (typeof what === "object") return JSON.stringify(what);
  return what;
}

