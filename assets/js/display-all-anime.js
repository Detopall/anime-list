"use strict";

function displayAllAnime(allAnimeList){
	const displayAllAnime = document.querySelector("#all-anime");
	displayAllAnime.innerHTML = "";
	let html = "";
	allAnimeList.results.forEach(anime => {
		html += `
		
		<figure id="${anime.mal_id}">
				<img src="${anime.image_url}" alt="${anime.title}" title="${anime.title}">
				<figcaption>${anime.title}</figcaption>
		</figure>
		`;
	});

	displayAllAnime.insertAdjacentHTML("beforeend", html);
}