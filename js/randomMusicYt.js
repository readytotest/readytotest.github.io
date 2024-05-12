/* 
This script is used to generate random URLs from an array
Just paste this in your HTML <a href="#" id="randomVideoLink" target="_blank" rel="noreferrer">click here</a>
where you want the link to appear and then add this <script src="/yourdirectorypath/randomMusicYt.js"></script>
to the bottom of the page before the closing body tag
*/


const ytPlaylist = [
    /* ROCK */
    //Pearl Jam - Yellow Ledbetter (Acoustic)
    "https://youtu.be/pJDyJowRlhc?feature=shared",
    //Metallica - Whiskey in the Jar (Slane Castle - Meath, Ireland - June 8, 2019)
    "https://youtu.be/9MNdOCQYOL8?feature=shared",
    //Social Distortion - King of Fools (Acoustic)
    "https://youtu.be/sHqs3UGOqO4?feature=shared",
    
    
    /* HOUSE + ELECTRONIC + DANCE */
    //Lima Papa - Superlovin' (Original Vox Mix) (2001)
    "https://youtu.be/CgkkudRCGB0?feature=shared",
    //Simon - Free at Last (original Mix) (2001)
    "https://youtu.be/HaafC6GSqEU?feature=shared",
   
    
    /* HIP HOP */
    //Run DMC ft. Aerosmith - Walk This WAy
    "https://youtu.be/4B_UYYPb-Gk?feature=shared",


    /* COUNTRY */
    //Johnny Cash - Orange Blossom Special (Live at San Quentin)
    "https://youtu.be/Xhs5j7HN8wM?feature=shared",
    //Alan Jackson - The Older I Get
    "https://youtu.be/kElHR66Y3es?feature=shared",

];

document.getElementById('randomVideoLink').onclick = function() {
    const randomIndex = Math.floor(Math.random() * ytPlaylist.length);
    const randomVideoUrl = ytPlaylist[randomIndex];
    window.open(randomVideoUrl);
    return false;
};


