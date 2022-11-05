"use strict";

document.addEventListener("DOMContentLoaded", init);

const URL = "https://jikan1.p.rapidapi.com/search/anime?q=";

/*


CALLING THIS API RETURNS IN 410 -> GONE.
THIS MEANS THAT THE API HAS BEEN REMOVED.
WILL REFACTOR LATER TO WORK WITH ANOTHER API.


*/

function init(){
	document.addEventListener("submit", checkUserInfo);
	document.addEventListener("click", chosenAnime);
	document.addEventListener("click", goBack);
}

function goBack(e){
	if (!e.target.closest("#back")) return;
	document.querySelector("main").classList.remove("hidden");
	document.querySelector("article").classList.add("hidden");
}

async function getAllAnime(query){
	const rapidKey = document.querySelector("#rapidKey").value;
	if (rapidKey === null) return;

	const options = {
		method: 'GET',
		headers: {
			'X-RapidAPI-Key': `${rapidKey}`,
			'X-RapidAPI-Host': 'jikan1.p.rapidapi.com'
		}
	};
	const fetchAnime = await fetch(`${URL}${query}`, options);
	const res = fetchAnime.json();
	return res;
}

async function checkUserInfo(e){
	e.preventDefault();
	const query = document.querySelector("input#q").value;
	if (query == "") return;
	const allAnimeList = await getAllAnime(query);
	displayAllAnime(allAnimeList);
}
