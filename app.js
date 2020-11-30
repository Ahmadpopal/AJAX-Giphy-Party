console.log("Let's get this party started!");


const API_KEY = "X5Nb0cdOIn2X5jR2JhnrTSeXie4JtTjO"

const GIPHY_URL  = "https://api.giphy.com/v1/gifs/search"

let $div = $("#gif-area")

let $searchInput = $("#search")
$searchInput.val("");


function getGiphyImage(images){
  let RandomImage = Math.floor(Math.random()*images.length)
if (RandomImage){
  let $newImage = $("<img>").attr("src", images[RandomImage])
  $newImage.css({
    "width": "300px",
    "height": "300px",
    "margin": "10px"
  })
  let $newImageDiv = $("<div>") 
  $newImageDiv.css({
    "display": "inline-block", 
    "width": "320px",
    "padding": "10px"
  })
  $newImageDiv.append($newImage)
  $div.append($newImageDiv)
}
}




async function getData(image){
const response = await axios.get(`${GIPHY_URL}`, { params: {
q: image,
api_key: API_KEY
}})

let datas = response.data.data

let ArrayOfImages = []
console.log(datas)
for (let data of datas){
 ArrayOfImages.push(data.images.original.url)
}
console.log(ArrayOfImages)
getGiphyImage(ArrayOfImages)
}

let $form = $("#giphy-form").submit(function(eve){
  eve.preventDefault();
  getData($searchInput.val())
  $searchInput.val("")
  
})


let $deleteButton = $("#delete-btn").click(function(eve){
  $div.empty()
})








