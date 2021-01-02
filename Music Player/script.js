'use strict'

const secondAlbumBtn = document.querySelector('.scndAlbumBtn');
const set1 = document.querySelector('.set1');
const firstPlyr = document.querySelector('.firstPlyr');
const set2Opener = document.querySelector('.set2Opener');
const set2 = document.querySelector('.set2');

secondAlbumBtn.addEventListener('click', function () {
    set1.style.display = 'none';
    firstPlyr.pause();
    set2.style.display = 'block';


});

