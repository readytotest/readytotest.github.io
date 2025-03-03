/*
===========================================================
=                                                         =
=   This script is used to generate random URLs from an   =
=   array. Just paste this in your HTML <a href="#"       =
=   id="randomVideoLink" target="_blank" rel="noopener    =
=   noreferrer">click here</a> where you want the link to =
=   appear and then add this <script                      =
=   src="/yourdirectorypath/randomMusicYt.js"></script> to=
=   the bottom of the page before the closing body tag.   =
=                                                         =
===========================================================
*/     

const ytPlaylist = [

    /* Social Distortion - Live Oct 8 2024
    Story of My Life - Bad Luck - Ring of Fire */
    "https://youtu.be/Ase-qZaXou0?feature=shared",
    // Metallica: Whiskey in the Jar (Slane Castle - Meath, Ireland - June 8, 2019)
    "https://www.youtube.com/watch?v=9MNdOCQYOL8",
    // Peter Heller - Big Love
    "https://youtu.be/S1i5D2_XNSw?feature=shared",
    // Pearl Jam “Yellow Ledbetter” Live on the Stern Show
    "https://youtu.be/2cyp1g7idYc?feature=shared",

];

document.getElementById('randomVideoLink').onclick = function() {
    const randomIndex = Math.floor(Math.random() * ytPlaylist.length);
    const randomVideoUrl = ytPlaylist[randomIndex];
    window.open(randomVideoUrl);
    return false;
};


