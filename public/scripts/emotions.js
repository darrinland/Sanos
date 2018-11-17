let emotions = [];

emotions.push({
	emotion: "Happy",
	startFromAny: true,
	startFromEmotions: [],
	content: {
		music: [
			{
				label: " Little Bird by. Ghost of Paul Revere",
				url: "https://www.youtube.com/watch?v=-rcQj3aNbgE"
			},
			{
				label: " Mr. Blue Sky from Guardians of the Galaxy Soundtrack",
				url: "https://www.youtube.com/watch?v=RoiUK4XlJts"
			},
			{
				label: " Stevie Wonder Don't You Worry About a Thing",
				url: "https://www.youtube.com/watch?v=QkBUx6Zn6mo"
			},
			{
				label: " Play for Change",
				url: "https://www.youtube.com/watch?v=Us-TVg40ExM"
			},
			{
				label: " Hakuna Matata",
				url: "https://www.youtube.com/watch?v=D4zG1Tnt5A8"
			}
		],
		video: [
			{
				label: " Funny Animal Videos",
				url: "https://www.youtube.com/watch?v=xO8Cz-9qKTI"
			},
			{
				label: " Funny Baby Videos",
				url: "https://www.youtube.com/watch?v=hkANcahJA4U"
			},
			{
				label: " Ted Talk on Scientifically proven ways to become Happier",
				url: "https://www.youtube.com/watch?v=8KkKuTCFvzI"
			},
			{
				label: " east west bowl",
				url:
					"https://www.youtube.com/watch?v=rT1nGjGM2p8&index=3&t=0s&list=PLHzW2SpMZ8hsbsRUVNqxDyAe4iRKmzk3T"
			},
			{
				label: " helium chior kid",
				url: "https://www.youtube.com/watch?v=29N-CoSGP2c"
			}
		],
		website: [
			{ label: " Good News", url: "https://www.today.com/news/good-news" }
		]
	}
});

function getSmallHTMLYouTubeEmbed(url) {
	let beginning = '<iframe width="300" height="215" src=';
	let ending = `${url} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
	return beginning + ending;
}

function getLargeHTMLYouTubeEmbed(url) {
	let beginning = '<iframe width="560" height="315" src=';
	let ending = `${url} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
	return beginning + ending;
}
