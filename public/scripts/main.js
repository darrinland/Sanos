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
			<div class="start-emotion-options">`;

	startEmotions.forEach(emotion => {
		html =
			html +
			`<div style="background-color:${
				emotion.color
			}" class="start-emotion" onclick="onStartEmotionSelected('${
				emotion.label
			}')">${emotion.label}</div>`;
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
			`<div style="background-color:${
				endEmotion.color
			}; border-style:none; border-width:1px;" class="emotion" onclick="onEndEmotionSelected('${startEmotion}', '${
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
	content.music.forEach(x => {
		contentCards.push(getMusicCard(x));
	});
	content.website.forEach(x => {
		contentCards.push(getWebsiteCard(x));
	});
	content.activity.forEach(x => {
		contentCards.push(getActivityCard(x));
	});

	let cardsToAdd = shuffle(contentCards).slice(0, 9);

	let html = "";
	cardsToAdd.forEach(x => {
		html += x;
	});

	document.getElementById("result-card-container").innerHTML = html;
}
function closeModal() {
	document.getElementById("modal-wrapper").style = "display:none";
	document.getElementById("modal-content").innerHTML = "";
}

function onEndEmotionSelected(startEmotion, endEmotion, element) {
	let allEmotions = document.getElementsByClassName("emotion");
	for (let i = 0; i < allEmotions.length; i++) {
		let el = allEmotions[i];
		el.setAttribute(
			"style",
			el
				.getAttribute("style")
				.replace("border-style:solid", "border-style:none")
		);
	}
	element.setAttribute(
		"style",
		element
			.getAttribute("style")
			.replace("border-style:none", "border-style:solid")
	);
	buildEmotionContent(endEmotion);
}

function clearPage() {
	document.getElementById("content-container").innerHTML = "";
	document.getElementById("result-container").innerHTML = "";
	document.getElementById("result-card-container").innerHTML = "";
	document.getElementById("start-over-container").innerHTML = "";
}

function addStartOverButton() {
	let html = `<div class="start-over" onclick="start()">
					<div><i class="material-icons"> refresh </i></div>
				</div>`;
	document.getElementById("start-over-container").innerHTML = html;
}

function shuffle(array) {
	var currentIndex = array.length,
		temporaryValue,
		randomIndex;

	// While there remain elements to shuffle...
	while (0 !== currentIndex) {
		// Pick a remaining element...
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex -= 1;

		// And swap it with the current element.
		temporaryValue = array[currentIndex];
		array[currentIndex] = array[randomIndex];
		array[randomIndex] = temporaryValue;
	}

	return array;
}
