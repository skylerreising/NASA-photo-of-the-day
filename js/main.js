
document.querySelector(".randomButton").addEventListener("click", getNASAPhotoOfTheDay)
function getNASAPhotoOfTheDay(){
  const choice = document.querySelector('input').value
  // console.log(choice)

  fetch(`https://api.nasa.gov/planetary/apod?api_key=mURSlVsh77V6Q2XtOCWyOnek5WLcdh05faqAj9M5&date=${choice}`)
  .then(res => res.json())
  .then(data => {
    console.log(data)
    if(data.media_type === 'image'){
      document.querySelector("img").src = data.hdurl
    }else if(data.media_type === 'video'){
      document.querySelector("iframe").src = data.url
    }
    
    document.querySelector("h2").innerText = data.title
    document.querySelector("h3").innerText = data.explanation
  })
  .catch(err => {
    console.log(`error ${err}`)
  })
}
