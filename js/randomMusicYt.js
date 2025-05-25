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
  // Social Distortion "Story of My Life" & "Bad Luck" & "Ring of Fire" LIVE
  "https://youtu.be/Ase-qZaXou0?feature=shared",

  // Social Distortion "Ball and Chain" & "Reach for the Sky" LIVE
  "https://youtu.be/S74oFu3SieI?feature=shared",

  // EXCLUSIVE Social Distortion "Prison Bound" Guitar Center Sessions on DIRECTV
  "https://youtu.be/lIWHlIhvt3Y?feature=shared",

  // AC⚡DC - For Those About to Rock (We Salute You)
  "https://youtu.be/nBM1-DwjA8I?feature=shared",

  // AC⚡DC - Who Made Who (12" Extended Mix)
  "https://youtu.be/m7PELm_JgVk?feature=shared",

  // Zac Brown Band & Jimmy Buffett Perform 'Chicken Fried' 🍗 #TBT | CMT Crossroads
  "https://youtu.be/K2MR5h4eWuE?feature=shared",

  // Alan Jackson Performs "Drive"
  "https://youtu.be/rj9Bh-ibp6U?feature=shared",

  // Eric Church - Mr. Misunderstood (Official Music Video)
  "https://youtu.be/rOuF3k_-asA?feature=shared",

  // Eric Church - Some Of It (Official Lyric Video)
  "https://youtu.be/pY_9y7QKoVg?feature=shared",

  // Florida Georgia Line - Cruise
  "https://youtu.be/8PvebsWcpto?feature=shared",

  // Pearl Jam “Yellow Ledbetter” Live on the Stern Show
  "https://youtu.be/2cyp1g7idYc?si=gCu1VwdWYxasfU_5&t=89",

  // Pearl Jam - Even Flow - LIVE (Countdown, 1992)
  "https://youtu.be/Z_-trti0GfM?feature=shared",

  // Metallica: Enter Sandman (Vienna, Austria - June 1, 2024)
  "https://youtu.be/ZcWkXYzNilY?feature=shared",

  // Metallica: Whiskey in the Jar (Castle Donington, England - June 10, 2023)
  "https://youtu.be/YfouL5PyORU?feature=shared",
];

document.getElementById("randomVideoLink").onclick = function () {
  const randomIndex = Math.floor(Math.random() * ytPlaylist.length);
  const randomVideoUrl = ytPlaylist[randomIndex];
  window.open(randomVideoUrl);
  return false;
};
