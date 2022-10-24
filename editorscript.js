const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '2b8b174b96msh600362b3da6d775p1cf2cbjsn8a0026c19487',
      'X-RapidAPI-Host': 'ronreiter-meme-generator.p.rapidapi.com'
    }
  };

let imageUrl = localStorage.getItem("imageToEdit")
console.log(imageUrl)

let imageEl = document.querySelector("#image-look")
let imageSaver = document.querySelector("#save")
let botTex = document.querySelector("#bot")
let topTex = document.querySelector("#top")

imageEl.src = imageUrl

imageSaver.addEventListener("click", function (event) {
	console.log(event.target)
	// console.log(event.target.innerHTML)
	let searchTerm = event.target.innerHTML

	fetch(`https://ronreiter-meme-generator.p.rapidapi.com/meme?&meme=${localStorage.getItem("imageName")}&top=${topTex.value}&bottom=${botTex.value}`, options)
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

			imageEl.src = objectURl



		})

		.catch(err => console.error(err));




})