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
	let html = "";
	contentCards.forEach(x => {
		html += x;
	});

	document.getElementById("result-card-container").innerHTML = html;
}

function getVideoCard(video) {
	return `<div class="result-card" onclick="showModal('${video.label}', '${
		video.url
	}')">
				<div class="card-title">Watch:</div>
				<div class="card-label">${video.label}</div>
				<div class="thumbnail">
					<iframe width="200" 
							height="100" 
							src="${video.url}"
							frameborder="0" 
							allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
							allowfullscreen>
					</iframe>
				</div>
				</div>`;
}

function showModal(videoLabel, videoUrl) {
	console.log(videoLabel, videoUrl);
	document.getElementById("modal-wrapper").style = "display:initial";
	document.getElementById("modal-title").innerHTML = videoLabel;
	document.getElementById(
		"modal-content"
	).innerHTML = `<iframe class="modal-iframe"
						src="${videoUrl}?autoplay=1" 
						frameborder="0" 
						allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" 
						allowfullscreen>
				</iframe>`;
}
function closeModal() {
	document.getElementById("modal-wrapper").style = "display:none";
	document.getElementById("modal-content").innerHTML = "";
}

function onEndEmotionSelected(startEmotion, endEmotion, element) {
	let allEmotions = document.getElementsByClassName("emotion");
	for (let i = 0; i < allEmotions.length; i++) {
		let el = allEmotions[i];
		el.removeAttribute("style");
	}
	element.setAttribute(
		"style",
		"border-style:solid;border-color:black;border-width:1px;"
	);
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
