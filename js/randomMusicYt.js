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

    // ROCK \m/_(>_<)_\m/

    // Pearl Jam - Yellow Ledbetter (Live at Madison Square Garden)
    "https://youtu.be/veK0oeGdxLo?feature=shared",
    // Social Distortion - Prison Bound (Guitar Center Sessions)
    "https://youtu.be/lIWHlIhvt3Y?feature=shared",
    // REO Speedwagon - Take It on the Run 
    "https://youtu.be/ZQ-uWQJNx7w?feature=shared",


    // HOUSE ᕕ(⌐■_■)ᕗ ♪♬

    // Simon - Free At Last (Original Mix) (2001)
    "https://youtu.be/HaafC6GSqEU?feature=shared",
    // Ben Kim - Somebody to Love
    "https://youtu.be/FlCSy3p0gNg?feature=shared",
    // Lima Papa - Superlovin' (Original Vox Mix) (2001)
    "https://youtu.be/CgkkudRCGB0?feature=shared",
   

    // COUNTRY ♪└(￣◇￣)┐♪

    // Alan Jackson - The Older I Get
    "https://youtu.be/kElHR66Y3es?feature=shared",
    // Garth Brooks - Much Too Young (To Feel This Damn Old)
    "https://youtu.be/nIHWhUVxJh8?feature=shared",
    // Kenny Chesney - Save It for a Rainy Day
    "https://youtu.be/zY9es8R4PD4?si=f_eimHkbb-EcepsZ" 



];

document.getElementById('randomVideoLink').onclick = function() {
    const randomIndex = Math.floor(Math.random() * ytPlaylist.length);
    const randomVideoUrl = ytPlaylist[randomIndex];
    window.open(randomVideoUrl);
    return false;
};


