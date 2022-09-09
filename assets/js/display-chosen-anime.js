"use strict";

async function chosenAnime(e){
	if (!e.target.closest("figure")) return;

	const clickedAnime = e.target.closest("figure");
	const chosenAnimeArticle = document.querySelector(".chosen-anime");
	chosenAnimeArticle.innerHTML = "";
	const allAnimeList = await getAnime();

	const filteredAnime = allAnimeList.results.filter(anime => {
		if (anime.mal_id === parseInt(clickedAnime.getAttribute("id"))) return anime;
	});

	const html = createChosenAnimePage(filteredAnime);
	chosenAnimeArticle.insertAdjacentHTML("beforeend", html);
	document.querySelector("main").classList.add("hidden");
	chosenAnimeArticle.classList.remove("hidden");

}

function createChosenAnimePage(filteredAnime){
	const anime = filteredAnime[0];
	return `
	<img src="${anime.image_url}">
		<div id="info">
			<h2> ${anime.title} </h2>
			<a href="${anime.url}" target="_blank"> MyAnimeList! </a>
			<ul>
				<li>Synopsis: ${anime.synopsis} </li>
				<li>Episodes: ${anime.episodes} </li>
				<li>Score:  ${anime.score} </li>
				<li>MyAnimeList ID: ${anime.mal_id} </li>
			</ul>
		</div>
		<button type="button" id="back">Go Back</button>
		`;
}

async function getAnime(){
	const query = document.querySelector("input#q").value;
	if (query == "") return;
	const allAnimeList = await getAllAnime(query);
	return allAnimeList;
}