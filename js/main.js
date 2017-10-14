// Pressing ENTER key 'clicks' button get to fortune reading  
var btn = document.getElementById('info');
btn.addEventListener('keypress', function enterKey(e) {
	if(e.keyCode == 13) {
		horoscope();
	};
}, false);


// function to determine user horoscope when user click the button
function horoscope() {
	// store the tag with id="sign" in var userdata
	var info = document.getElementById("info");

	// confirm the element exists and what value the user submits
	console.log(info);
	console.log("users value is: " + info.value);


// array of objects to store zodiac data
var zodiac = [
	{
		sign: "aquarius",
		reading: "Forward thinking, communicative, people oriented, stubborn, generous, and dedicated.",
		image: "https://www.0800-horoscope.com/social/aquarius-250-8.png"
	},
	{
		sign: "aries",
		reading: "Courageous, energetic, willful, commanding, leading. Often leads when following would be best course of action.",
		image: "https://www.0800-horoscope.com/social/aries-250-8.png"
	},
	{
		sign: "cancer",
		reading: "Emotion, Diplomatic, Intensity, Impulsive, Selective",
		image: "https://www.0800-horoscope.com/social/cancer-250-8.png"
	},
	{
		sign: "capricorn",
		reading: "Timeless, driven, calculating, ambitious.",
		image: "https://www.0800-horoscope.com/social/capricorn-250-8.png"
	},
	{
		sign: "gemini",
		reading: "Cerebral, chatty, loves learning and education, charming, and adventurous.",
		image: "https://www.0800-horoscope.com/social/gemini-250-8.png"
	},
	{
		sign: "leo",
		reading: "Generous, organized, protective, beautiful.",
		image: "https://www.0800-horoscope.com/social/leo-250-8.png"
	},
	{
		sign: "libra",
		reading: "Balanced, seeks beauty, sense of justice.",
		image: "https://www.0800-horoscope.com/social/libra-250-8.png"
	},
	{
		sign: "pisces",
		reading: "Likeable, energetic, passionate, sensitive.",
		image: "https://www.0800-horoscope.com/social/pisces-250-8.png"
	},
	{
		sign: "sagittarius",
		reading: "Happy, absent minded, creative, adventurous.",
		image: "https://www.0800-horoscope.com/social/sagittarius-250-8.png"
	},
	{
		sign: "scorpio",
		reading: "Passionate, exacting, loves extremes, combative, reflective",
		image: "https://www.0800-horoscope.com/social/scorpio-250-8.png"
	},
	{
		sign: "taurus",
		reading: "Security, Subtle strength, Appreciation, Instruction, Patience",
		image: "https://www.0800-horoscope.com/social/taurus-250-8.png"
	},
	{
		sign: "virgo",
		reading: "Analyzing, Practical, Reflective, Observation, Thoughtful",
		image: "https://www.0800-horoscope.com/social/virgo-250-8.png"
	}
];



	// loop through zodiac array 
	for(var i = 0; i < zodiac.length; i = i + 1) {
		// check what the users value is before using it in a condition
		console.log("users value lowercase is: " + info.value.toLowerCase());
		// check the current item's sign in the zodiac array
		console.log("current zodiac sign in loop is: " + zodiac[i].sign);

		// if the value the user typed in, changed to all lowercase letters
		if(info.value.toLowerCase() === zodiac[i].sign) {
			// confirm the if statement ran
			console.log("if statement ran");

			// check some values in the console before updating HTML
			console.log("users typed in: " + info.value);
			console.log("current image value is: " + zodiac[i].image);
			console.log("current fortune value is: " + zodiac[i].reading);

			// get element with id="userSign" and change the text to the user input
			document.getElementById("yourSign").textContent = info.value;
			// get element with id="icon" and change source attribute to current zodiac image path
			document.getElementById("icon").src = zodiac[i].image;
			// // get element with id="yourHoroscope" and change the content to this concatenated string
			document.getElementById("yourHoroscope").textContent = "Your best attributes are: " + zodiac[i].reading;

			// stop the function because we found a match 
			return;
		};


		// if no match is found, do opposite of above, no content and images will display
		document.getElementById("yourSign").textContent = "No sign matches. Please try again!";
		document.getElementById("yourHoroscope").textContent = "";
		document.getElementById("icon").src = "";
	};
};
