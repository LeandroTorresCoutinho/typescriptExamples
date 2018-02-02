var message = "Help me, Obi-Wan";
console.log(message);
var episode = 4;
console.log("this episode = " + episode);
episode = episode + 1;
console.log("next episode = " + episode);
var favoriteDroid;
favoriteDroid = "BB-8";
console.log("my favorite Droid is " + favoriteDroid);
var isEnoghtToBeatMF = function (parsecs) {
    return parsecs < 12;
};
var distance = 14;
console.log("this " + distance + " parsecs is enoght to beat millenium Falcon? " + (isEnoghtToBeatMF(distance) ? 'YES' : 'NO'));
var call = function (name) { return console.log("Do you copy, " + name + "?"); };
call('R2');
function inc(speed, inc) {
    if (inc === void 0) { inc = 1; }
    return speed + inc;
}
console.log("inc (5,1) = " + inc(5, 1));
console.log("inc (5) = " + inc(5));
