window.onload = () => {
	start();
};

function start() {
	clearPage();
	console.log(emotions);
	let startHtml = "";
	startHtml =
		startHtml +
		`<div class="emotion-selector-container w3-animate-opacity">
								<div class="question-prompt">Right now I feel:</div>
								<div class="emotion-options">`;

	emotions.forEach(emotion => {
		startHtml =
			startHtml +
			`<div class="emotion" onclick="onStartEmotionSelected('${
				emotion.emotion
			}')">${emotion.emotion}</div>`;
	});

	startHtml = startHtml + `</div></div>`;
	document.getElementById("content-container").innerHTML = startHtml;
}

function onStartEmotionSelected(startEmotion) {
	let html = `<div>Right now I feel ${startEmotion}.</div>`;
	html =
		html +
		`<div class="emotion-selector-container w3-animate-opacity">
								<div class="question-prompt">But I want to feel:</div>
								<div class="emotion-options">`;

	filteredEndEmotions = filteredEndEmotions.filter(x => x != startEmotion);
	filteredEndEmotions.forEach(endEmotion => {
		html =
			html +
			`<div class="emotion" onclick="onEndEmotionSelected('${startEmotion}', '${endEmotion}')">${endEmotion}</div>`;
	});

	html = html + `</div></div>`;

	document.getElementById("content-container").innerHTML = html;
}

function onEndEmotionSelected(startEmotion, endEmotion) {
	let html = `<div class="w3-animate-opacity"><div>Right now I feel ${startEmotion}.</div><div>But I want to feel ${endEmotion}.</div></div>`;

	document.getElementById("content-container").innerHTML = html;
}

function clearPage() {
	document.getElementById("content-container").innerHTML = "";
}
