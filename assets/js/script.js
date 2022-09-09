"use strict";

document.addEventListener("DOMContentLoaded", init);

const URL = "https://jikan1.p.rapidapi.com/search/anime?q=";

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
	const options = {
		method: 'GET',
		headers: {
			'X-RapidAPI-Key': '90afc290a4msh942c639bb0fe563p15afe0jsn7d560927cf10',
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
