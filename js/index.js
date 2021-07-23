const $video = document.querySelector('#video')
const $play = document.querySelector('#play')
const $pause = document.querySelector('#pause')
const $backward = document.querySelector('#backward')
const $forward = document.querySelector('#forward')

$play.addEventListener('click', playVideo)
$pause.addEventListener('click', pauseVideo)

function playVideo() {
  $video.play()
  $play.hidden = true
  $pause.hidden = false
}

function pauseVideo() {
  $video.pause()
  $play.hidden = false
  $pause.hidden = true
}

$backward.addEventListener('click', backward10Sec)
$forward.addEventListener('click', forward10Sec)

function backward10Sec() {
  $video.currentTime -= 10
}

function forward10Sec() {
  $video.currentTime += 10
}

const $progress = document.querySelector('.progress')

$video.addEventListener('loadedmetadata', loaded)
$video.addEventListener('timeupdate', timeUpdate)

function loaded() {
  $progress.max = $video.duration
  $video.duration
}

function timeUpdate() {
  $progress.value = $video.currentTime
}

$progress.addEventListener('input', input)

function input() {
  $video.currentTime = $progress.value
}