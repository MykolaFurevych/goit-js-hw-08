import throttle from 'lodash.throttle';

const CURRENT_TIME = 'videoplayer-current-time';

const iframeEl = document.querySelector('#vimeo-player');
const player = new Vimeo.Player(iframeEl);

function updatesTime(event) {
  localStorage.setItem(CURRENT_TIME, event.seconds);
}

if (localStorage.getItem(CURRENT_TIME)) {
  player.setCurrentTime(localStorage.getItem(CURRENT_TIME));
}

player.on('timeupdate', throttle(updatesTime, 1000));
