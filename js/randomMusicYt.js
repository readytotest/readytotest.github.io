/*

                _________-----_____
       _____------           __      ----_
___----             ___------              \
   ----________        ----                 \
               -----__    |             _____)
                    __-                /     \
        _______-----    ___--          \    /)\
  ------_______      ---____            \__/  /
               -----__    \ --    _          /\
                      --__--__     \_____/   \_/\
                              ----|   /          |
                                  |  |___________|
                                  |  | ((_(_)| )_)
                                  |  \_((_(_)|/(_)
                                  \             (
                                   \_____________)
                ===========================================================
                =                                                         =
                =   This script is used to generate random URLs from an   =
                =   array. Just paste this in your HTML <a href="#"        =
                =   id="randomVideoLink" target="_blank" rel="noopener    =
                =   noreferrer">click here</a> where you want the link to =
                =   appear and then add this <script                      =
                =   src="/yourdirectorypath/randomMusicYt.js"></script> to =
                =   the bottom of the page before the closing body tag.   =
                =                                                         =
                ===========================================================
                */     

const ytPlaylist = [

    /*ROCK MUSIC ᕙ(⇀‸↼‶)ᕗ */
    //Pearl Jam - Yellow Ledbetter (Live at Madison Square Garden)
    "https://youtu.be/veK0oeGdxLo?feature=shared",
    //Social Distortion - Prison Bound (Guitar Center Sessions)
    "https://youtu.be/lIWHlIhvt3Y?feature=shared",
    //Social Distorion - Ball and Chain (Acoustic)
    "https://youtu.be/mkfnNUdeo3w?feature=shared",
    //The Delray Rockets - Rockabilly Man
    "https://youtu.be/pwYx26t-Su4?feature=shared",

    /*HOUSE MUSIC ᕕ(⌐■_■)ᕗ ♪♬ */
    //Simon - Free At Last (Original Mix) (2001)
    "https://youtu.be/HaafC6GSqEU?feature=shared",
    //Peter Heller - Big Love
    "https://youtu.be/S1i5D2_XNSw?feature=shared",
    //Lima Papa - Superlovin' (Original Vox Mix) (2001)
    "https://youtu.be/CgkkudRCGB0?feature=shared",
   

    /* COUNTRY MUSIC
    ,*-.
    |  |
,.  |  |
| |_|  | ,.
`---.  |_| |
    |  .--`
    |  |
    |  |  */
    //Alan Jackson - The Older I Get
    "https://youtu.be/kElHR66Y3es?feature=shared",
    //Johnny Cash - Orange Blossom Special
    "https://youtu.be/Xhs5j7HN8wM?feature=shared",
    //Garth Brookes - Much Too Young to Feel This Damnn Old
    "https://youtu.be/nIHWhUVxJh8?feature=shared"

];

document.getElementById('randomVideoLink').onclick = function() {
    const randomIndex = Math.floor(Math.random() * ytPlaylist.length);
    const randomVideoUrl = ytPlaylist[randomIndex];
    window.open(randomVideoUrl);
    return false;
};


