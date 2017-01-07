(function (window){
var speakWord = "Hello";
var helloSpeaker = new Object ();
helloSpeaker.speak = function speak(name) {
	document.write(speakWord + " " + name + " /// ");
	console.log (speakWord + " " + name)};
window.helloSpeaker = helloSpeaker;
})(window);
