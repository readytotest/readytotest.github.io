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
    //Pink Floyd - Have a Cigar
    "https://youtu.be/tbdpv7G_PPg?feature=shared",
    //The Rolling Stones - Honky Tonk Women
    "https://youtu.be/hqqkGxZ1_8I?feature=shared",
    //ACDC - For Those About to Rock
    "https://youtu.be/RtMGoU9NcMo?feature=shared",
    //REO Speedwagon - Take It on the Run
    "https://youtu.be/ZQ-uWQJNx7w?feature=shared",
    //Journey - Faithfully
    "https://youtu.be/OMD8hBsA-RI?feature=shared",
    //George Satellites - Keep Your Hands to Yourself
    "https://youtu.be/WonOudGMSdc?feature=shared",
    //Danzig - Mother
    "https://youtu.be/uPugn_05Qac?feature=shared",
    //Social Distortion - King of Fools (Acoustic)
    "https://youtu.be/sHqs3UGOqO4?feature=shared",
    //Social Distortion - Prison Bound (Guitar Center Sessions)
    "https://youtu.be/lIWHlIhvt3Y?feature=shared",
    //Mike Ness - Don't Think Twice
    "https://youtu.be/bcI2hGwTgVs?feature=shared",
    //The Delray Rockets - Rockabilly Man
    "https://youtu.be/pwYx26t-Su4?feature=shared",
    //John Lennon - Stand By Me
    "https://youtu.be/YqB8Dm65X18?feature=shared",
    //The Beatles - The Ballad of John and Yoko
    "https://youtu.be/v-1OgNqBkVE?feature=shared",
   
    /* HOUSE + ELECTRONIC + DANCE */
    //Lima Papa - Superlovin' (Original Vox Mix) (2001)
    "https://youtu.be/CgkkudRCGB0?feature=shared",
    //Simon - Free at Last (original Mix) (2001)
    "https://youtu.be/HaafC6GSqEU?feature=shared",
    //Peter Heller - Big Love
    "https://youtu.be/S1i5D2_XNSw?feature=shared",
    //DJ Jean - The Launch
    "https://youtu.be/Mu0cE9RgK5M?feature=shared",
    //Armand Van Helden - You Don't Know Me
    "https://youtu.be/rnlp_avexYQ?feature=shared",
    //Stardust - Music Sounds Better with You
    "https://youtu.be/EvHzRASaCxs?feature=shared",
    //Moloko - Sing it Back
    "https://youtu.be/w1eN8vyVFIM?feature=shared",
    
    /* HIP HOP */
    //Cypress Hill - Insane in the Brain
    "https://youtu.be/5XaJIlqiNCo?feature=shared",
    //House of Pain - Jump Around
    "https://youtu.be/jrL_LzX5wv4?feature=shared",
    //Run DMC ft. Aerosmith - Walk This WAy
    "https://youtu.be/4B_UYYPb-Gk?feature=shared",

    /* COUNTRY */
    //Alan Jackson - The Older I Get
    "https://youtu.be/kElHR66Y3es?feature=shared",
    //Zac Brown & Jimmy Buffet - Chicken Fried
    "https://youtu.be/K2MR5h4eWuE?feature=shared",
    //Brad Paisley - Celebrity
    "https://youtu.be/B9mpDAJOPac?feature=shared",
    //Johnny Cash - Orange Blossom Special (Live at San Quentin)
    "https://youtu.be/Xhs5j7HN8wM?feature=shared",
    //Garth Brooks - Much Too Young to Feel This Damn Old
    "https://youtu.be/nIHWhUVxJh8?feature=shared",
    //Kenny Chesney - Save it for a Rainy Day
    "https://youtu.be/zY9es8R4PD4?feature=shared",

];

document.getElementById('randomVideoLink').onclick = function() {
    const randomIndex = Math.floor(Math.random() * ytPlaylist.length);
    const randomVideoUrl = ytPlaylist[randomIndex];
    window.open(randomVideoUrl);
    return false;
};


