

//
const gifSectionL = document.getElementById('giffys');
const formL = document.getElementById('giffy-form');
const searchTag = document.getElementById('search-tag');



////////////////  listen for submit
formL.addEventListener('submit', function (e) {
	e.preventDefault()
	let tag = searchTag.value;
	gifWall(tag);
});

gifSectionL.addEventListener('click', function (e) {
	let tag = searchTag.value;

	swapGif(tag, e.target)
	console.log("search test", searchTag.value);  //test

})


function gifWall(query) {

	/////////////////  values for url params, make e-z wordz
	const apiKey = 'vzEl5CaRrCqsxr4VrNW4LKitmkTfXLl1';
	var offset = Math.floor(Math.random() * 100);   //api returns 50 gifs (max). this adjusts index to make results appear random
	var path = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${query}&offset=${offset}`;


	////////////////  callback
	fetch(path).then(function (resp) {
		return resp.json()
	}).then(function (json) {

		var insertable = '';

		json.data.slice(0, 20).forEach(function (obj) {				//2nd param in slice controls # of results returned


			var giffyURL = obj.images.downsized_medium.url;
			insertable += `<img src="${giffyURL}">`;

			console.log(obj.images.downsized_medium.url)     //test
		})

		gifSectionL.innerHTML = insertable;


	}).catch(function (err) {
		console.log(err.message)
	})
}

///////////////////////////// repeat function for individual img elements


function swapGif(query, element) {
	
console.log(query)
	const apiKey = 'vzEl5CaRrCqsxr4VrNW4LKitmkTfXLl1';
	
	var path = `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}&tag=${query}`;


	////////////////  callback
	fetch(path).then(function (resp) {
		return resp.json();
	}).then(function (json) {
		element.src = json.data.images.downsized_medium.url;

	}).catch(function (err) {
		console.log(err.message);
	})

	
}

