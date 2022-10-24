const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '2b8b174b96msh600362b3da6d775p1cf2cbjsn8a0026c19487',
    'X-RapidAPI-Host': 'ronreiter-meme-generator.p.rapidapi.com'
  }
};

  fetch('https://ronreiter-meme-generator.p.rapidapi.com/images', options)
	.then(response => response.json())
	.then(memes => {
		console.log(memes)
		let list = document.querySelector("#list")

		for (let i = 0; i < 50; i++) {

			let li = document.createElement("li")
			li.textContent = memes[i]
			list.appendChild(li)
		}

	})
	//.catch(err => console.error(err));

list.addEventListener("click", function (event) {
	console.log(event.target)
	// console.log(event.target.innerHTML)
	let searchTerm = event.target.innerHTML

	fetch(`https://ronreiter-meme-generator.p.rapidapi.com/meme?&meme=${searchTerm}&font_size=50&font=Impact`, options)
		.then(response => {
			console.log(response)
			return response.blob()
		})
		.then(imageBlob => {
			imgsrc = imageBlob;
			const objectURl = URL.createObjectURL(imageBlob)
			console.log(objectURl)

			let reader = new FileReader();
			console.log(reader.readAsDataURL(imageBlob));

			reader.onload = function(){
			localStorage.setItem("imageToEdit",this.result);
			localStorage.setItem("imageName",event.target.textContent)
							}

			const image = document.createElement("img")
			image.src = objectURl

			document.body.appendChild(image)


		})

		.catch(err => console.error(err));






})


