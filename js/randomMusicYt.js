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

    /*
    ________________________________
    | // ROCK \m/_(>_<)_\m/        |
    |______________________________|
    */


    // Pearl Jam - Yellow Ledbetter (Live at Madison Square Garden)
    "https://youtu.be/veK0oeGdxLo?feature=shared",
    // Social Distortion - Prison Bound (Guitar Center Sessions)
    "https://youtu.be/lIWHlIhvt3Y?feature=shared",
    // Social Distortion - Story of My Life (Acoustic)
    "https://youtu.be/IPfB7Qnm0MI?feature=shared",
    // Social Distortion - Ball and Chain
    "https://youtu.be/_NWjehpGSO0?feature=shared",
    // REO Speedwagon - Take It on the Run 
    "https://youtu.be/ZQ-uWQJNx7w?feature=shared",
    // Metallica: Whiskey in the Jar (Castle Donington, England)
    "https://youtu.be/YfouL5PyORU?feature=shared",
    // Danzig - Mother 93 Live
    "https://youtu.be/zO6nRXPzX1A?feature=shared",
    // Janis Joplin - Piece of My Heart
    "https://youtu.be/7uG2gYE5KOs?feature=shared",
    // AC/DC - Hells Bells
    "https://youtu.be/etAIpkdhU9Q?feature=shared",
    // David Gilmour - Wish You Were Here (Live)
    "https://youtu.be/WaEKXGlfYj8?feature=shared",
    // The Beatles - Let It Be
    "https://youtu.be/egCy1KoE1Ss?feature=shared",


    /*
    ________________________________
    | // HOUSE ᕕ(⌐■_■)ᕗ ♪♬        |
    |______________________________|
    */


    // Simon - Free At Last (Original Mix) (2001)
    "https://youtu.be/HaafC6GSqEU?feature=shared",
    // Ben Kim - Somebody to Love
    "https://youtu.be/FlCSy3p0gNg?feature=shared",
    // Lima Papa - Superlovin' (Original Vox Mix) (2001)
    "https://youtu.be/CgkkudRCGB0?feature=shared",
    // Groovy Disco and R&B Mix at a New York Basement Party
    "https://youtu.be/4nvewes8Inc?feature=shared",


    /*
    _____________________________
    | // Acoustic Cover /o/o/o/  |
    |____________________________|
    */


    // Chris Cornell - Nothing Compares 2 U
    "https://youtu.be/IuUDRU9-HRk?feature=shared",
    // Jelly Roll - Good Riddance Greenday Cover
    "https://youtu.be/o0LK-cetrXE?feature=shared&t=33",
    // The Velvet Candles - Duke of Earl
    "https://youtu.be/3q_DNRtEkxI?feature=shared",


    /*
    _____________________________
    | // Rap (>'-')>             |
    |____________________________|
    */

    // Cypress Hill - Insane in the Brain (Instrumental)
    "https://youtu.be/vH3qzcG989w?feature=shared",


    /*
    _____________________________
    | // POP and R&B (๑˃̵ᴗ˂̵)و     |
    |____________________________|
    */


    // Robin Thicke - Blurred Lines ft. T.I., Pharrell
    "https://youtu.be/yyDUC1LUXSU?feature=shared",
    // Maroon 5 - Girls Like You ft. Cardi B (Official Music Video)
    "https://youtu.be/aJOTlE1K90k?feature=shared",


    /*
    ________________________________
    | // COUNTRY ♪└(￣◇￣)┐♪        |
    |______________________________|
    */


    // Alan Jackson - The Older I Get 
    "https://youtu.be/kElHR66Y3es?feature=shared",
    // Garth Brooks - Much Too Young (To Feel This Damn Old)
    "https://youtu.be/nIHWhUVxJh8?feature=shared",
    // Johnny Cash - Orange Blossom Special - Live at San Quentin
    "https://youtu.be/Xhs5j7HN8wM?feature=shared",
    // Randy Travis - Storms of Life
    "https://youtu.be/aKH9bAVTrwA?feature=shared",


];

document.getElementById('randomVideoLink').onclick = function() {
    const randomIndex = Math.floor(Math.random() * ytPlaylist.length);
    const randomVideoUrl = ytPlaylist[randomIndex];
    window.open(randomVideoUrl);
    return false;
};


