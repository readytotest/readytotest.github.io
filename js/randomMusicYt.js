const ytPlaylist = [
    //Pearl Jam - Yellow Ledbetter (Acoustic)
    "https://youtu.be/pJDyJowRlhc?feature=shared",
    //Metallica - Whiskey in the Jar (Slane Castle - Meath, Ireland - June 8, 2019)
    "https://youtu.be/9MNdOCQYOL8?feature=shared",
    //Lima Papa - Superlovin' (Original Vox Mix) (2001)
    "https://youtu.be/CgkkudRCGB0?feature=shared",
    //Simon - Free at Last (original Mix) (2001)
    "https://youtu.be/HaafC6GSqEU?feature=shared",
    //Alan Jackson - The Older I Get
    "https://youtu.be/kElHR66Y3es?feature=shared",
    //Johnny Cash - Orange Blossom Special (Live at San Quentin)
    "https://youtu.be/Xhs5j7HN8wM?feature=shared"
];

document.getElementById('randomVideoLink').onclick = function() {
    const randomIndex = Math.floor(Math.random() * ytPlaylist.length);
    const randomVideoUrl = ytPlaylist[randomIndex];
    window.open(randomVideoUrl);
    return false;
};


