function sendApiRequest(){
  var userInput = document.getElementById("input").value
  console.log(userInput)

  var giphyApiKey = "xlZvgtju6sJDMUsBuTZ7qgnpvsH4h4wg"
  var giphyApiURL = `https://api.giphy.com/v1/gifs/search?q=${userInput}&rating=g&api_key=${giphyApiKey}`

  fetch(giphyApiURL).then(function (data) {
    return data.json()
  })
  .then(function(json){
    console.log(json.data[0].images.fixed_height.url)
    var imgPath = json.data[0].images.fixed_height.url
    var img =document.createElement("img")
    img.setAttribute("style","display:block;margin-left:auto; margin-right:auto; ")
    img.setAttribute("src", imgPath)
    document.body.appendChild(img)
  })
}
