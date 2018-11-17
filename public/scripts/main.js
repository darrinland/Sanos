window.onload = () => {
	start();
};

function start() {
	clearPage();
	let html = "";
	html =
		html +
		`<div class="emotion-selector-container w3-animate-opacity">
			<div class="question-prompt">Right now I feel</div>
			<div class="">`;

	startEmotions.forEach(emotion => {
		html =
			html +
			`<div class="start-emotion" onclick="onStartEmotionSelected('${emotion}')">${emotion}</div>`;
	});

	html = html + `</div></div>`;
	document.getElementById("content-container").innerHTML = html;
}

function onStartEmotionSelected(startEmotion) {
	addStartOverButton();
	let html = `<div class="large">Right now I feel ${startEmotion}</div>`;
	html =
		html +
		`<div class="emotion-selector-container w3-animate-opacity">
			<div class="question-prompt">But I want to feel</div>
			<div class="emotion-options">`;

	let filteredEndEmotions = emotions.filter(
		x => x.emotionLabel != startEmotion
	);
	filteredEndEmotions.forEach(endEmotion => {
		html =
			html +
			`<div class="emotion" onclick="onEndEmotionSelected('${startEmotion}', '${
				endEmotion.emotionLabel
			}', this)">${endEmotion.emotionLabel}</div>`;
	});

	html = html + `</div></div>`;

	document.getElementById("content-container").innerHTML = html;
}

function buildEmotionContent(endEmotion) {
	document.getElementById(
		"result-container"
	).innerHTML = `<div class="w3-animate-opacity">
			<div class="result-title">Try This</div>
		</div>`;

	let selectedEmotion = emotions.filter(x => x.emotionLabel === endEmotion)[0];
	let content = selectedEmotion.content;
	let contentCards = [];
	content.video.forEach(x => {
		contentCards.push(getVideoCard(x));
	});
}

function getVideoCard(video) {
	console.log(video);
	return "";
}

function onEndEmotionSelected(startEmotion, endEmotion, element) {
	// let allEmotions = document.getElementsByClassName("emotion");
	// for (let i = 0; i < allEmotions.length; i++) {
	// 	let el = allEmotions[i];
	// 	el.removeAttribute("style");
	// }
	// element.setAttribute(
	// 	"style",
	// 	"border-style:solid;border-color:black;border-width:2px;"
	// );
	buildEmotionContent(endEmotion);
}

function clearPage() {
	document.getElementById("content-container").innerHTML = "";
	document.getElementById("result-container").innerHTML = "";
	document.getElementById("start-over-container").innerHTML = "";
}

function addStartOverButton() {
	let html = `<div class="start-over" onclick="start()">
					<div><i class="material-icons"> refresh </i></div>
				</div>`;
	document.getElementById("start-over-container").innerHTML = html;
}
