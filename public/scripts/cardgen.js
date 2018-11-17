function getVideoCard(video) {
	return `<div class="result-card" onclick="showVideoModal('${video.label}', '${
		video.url
	}')">
				<div class="card-title">Watch:</div>
				<div class="card-label">${video.label.replace(`\\`, "")}</div>
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

function showVideoModal(videoLabel, videoUrl) {
	console.log(videoLabel, videoUrl);
	document.getElementById("modal-wrapper").style = "display:initial";
	document.getElementById("modal-title").innerHTML = videoLabel.replace(
		`\\`,
		""
	);
	document.getElementById(
		"modal-content"
	).innerHTML = `<iframe class="modal-iframe"
						src="${videoUrl}?autoplay=1" 
						frameborder="0" 
						allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" 
						allowfullscreen>
				</iframe>`;
}

function getMusicCard(music) {
	return `<div class="result-card" onclick="showVideoModal('${music.label}', '${
		music.url
	}')">
				<div class="card-title">Listen to:</div>
				<div class="card-label">${music.label.replace(`\\`, "")}</div>
				<div class="thumbnail">
					<iframe width="200" 
							height="100" 
							src="${music.url}"
							frameborder="0" 
							allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
							allowfullscreen>
					</iframe>
				</div>
				</div>`;
}

function showMusicModal(musicLabel, musicUrl) {
	document.getElementById("modal-wrapper").style = "display:initial";
	document.getElementById("modal-title").innerHTML = musicLabel.replace(
		`\\`,
		""
	);
	document.getElementById(
		"modal-content"
	).innerHTML = `<iframe class="modal-iframe"
						src="${musicUrl}?autoplay=1" 
						frameborder="0" 
						allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" 
						allowfullscreen>
				</iframe>`;
}

function getWebsiteCard(website) {
	return `<div class="result-card" onclick="showWebsiteModal('${
		website.label
	}', '${website.url}')">
				<div class="card-title">Visit this Site:</div>
				<div class="card-label">${website.label.replace(`\\`, "")}</div>
			</div>`;
}

function showWebsiteModal(websiteLabel, websiteUrl) {
	document.getElementById("modal-wrapper").style = "display:initial";
	document.getElementById("modal-title").innerHTML = websiteLabel.replace(
		`\\`,
		""
	);
	document.getElementById(
		"modal-content"
	).innerHTML = `<a href="${websiteUrl}" target="_blank">${websiteUrl}</a>`;
}

function getActivityCard(activity) {
	return `<div class="result-card" onclick="showActivityModal('${
		activity.label
	}')">
				<div class="card-title">Do this:</div>
				<div class="card-label">${activity.label.replace(`\\`, "")}</div>
			</div>`;
}

function showActivityModal(activityLabel) {
	document.getElementById("modal-wrapper").style = "display:initial";
	document.getElementById("modal-title").innerHTML = "Do This:";
	document.getElementById(
		"modal-content"
	).innerHTML = `<div>${activityLabel.replace(`\\`, "")}</div>`;
}
