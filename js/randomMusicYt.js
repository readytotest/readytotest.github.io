/* 
This script is used to generate random URLs from an array
Just paste this in your HTML <a href="#" id="randomVideoLink" target="_blank" rel="noopener noreferrer">click here</a>
where you want the link to appear and then add this <script src="/yourdirectorypath/randomMusicYt.js"></script>
to the bottom of the page before the closing body tag
*/


const ytPlaylist = [
    //Pearl Jam - Yellow Ledbetter (Live at Madison Square Garden)
    "https://youtu.be/veK0oeGdxLo?feature=shared",
    //Metallica - Whiskey in the Jar (Slane Castle - Meath, Ireland - June 8, 2019)
    "https://youtu.be/9MNdOCQYOL8?feature=shared",
    //Social Distortion - Prison Bound (Guitar Center Sessions)
    "https://youtu.be/lIWHlIhvt3Y?feature=shared",
    //Social Distortion - California (Hustle and Flow) (Guitar Center Sessions)
    "https://youtu.be/ksTUQ7ciHXU?feature=shared",
    //Social Distortion - Ball and Chain
    "https://youtu.be/_NWjehpGSO0?feature=shared",
    //Alan Jackson - The Older I Get (Official Music Video)
    "https://youtu.be/kElHR66Y3es?feature=shared",
    //REO Speedwagon - Take it on the Run (Video Version)
    "https://youtu.be/ZQ-uWQJNx7w?feature=shared",

];

document.getElementById('randomVideoLink').onclick = function() {
    const randomIndex = Math.floor(Math.random() * ytPlaylist.length);
    const randomVideoUrl = ytPlaylist[randomIndex];
    window.open(randomVideoUrl);
    return false;
};


