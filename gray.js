if (location.href.indexOf('sawa-official-preview') > -1) {
  return
}

var randomNumber = Math.floor(Math.random() * 101)
var random = localStorage.getItem('sawa_ow_gray_random')
if (random) {
  randomNumber = random
} else {
  localStorage.setItem('sawa_ow_gray_random', randomNumber)
}

console.log('randomNumber:', randomNumber)

if (randomNumber < 50) {
  var query = location.href.split('?')[1]
  var url = 'https://sawa-official-preview.github.io/gray'
  if (query) {
    url += '?' + query
  }
  location.replace(url)
}
