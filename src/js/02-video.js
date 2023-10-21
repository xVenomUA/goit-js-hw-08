import throttle from 'lodash.throttle';
import Player from '@vimeo/player';

const iframe = document.getElementById('vimeo-player');
const vimeoPlayer = new Player(iframe);
const currentTime = { 
    duration: 0,
    percent: 0,
    seconds: 0,
}
const KEY_UPDATE_VIDEO = 'videoplayer-current-time';
const GET_TIME_FROM_LOCALSTORAGE = localStorage.getItem(KEY_UPDATE_VIDEO) ?? null;

vimeoPlayer.on('timeupdate', throttle((onPlay), 1000));

function onPlay(evt) {
    currentTime.duration = evt.duration; 
    currentTime.percent = evt.percent; 
    currentTime.seconds = evt.seconds;
    localStorage.setItem(KEY_UPDATE_VIDEO, JSON.stringify(currentTime));
}


if (GET_TIME_FROM_LOCALSTORAGE) {
    const parseTime = JSON.parse(GET_TIME_FROM_LOCALSTORAGE);
    vimeoPlayer.setCurrentTime(parseTime.seconds - 0.5);
}