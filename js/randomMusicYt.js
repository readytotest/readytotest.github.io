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

// Going to keep this all live music

const ytPlaylist = [
  // Billy Idol - Rebel Yell (Rewind Live / 2023)
  "https://youtu.be/wgZJq5mXRqE?feature=shared",

  // Janis Joplin - Piece Of My Heart (1969) Frankfurt, Germany
  "https://youtu.be/I2x1yo8Ztdw?feature=shared",

  // CCR - Born On The Bayou - Live at Woodstock
  "https://youtu.be/_9KKo8mZ5Eo?feature=shared",

  // Metallica: Enter Sandman (Vienna, Austria - June 1, 2024)
  "https://youtu.be/ZcWkXYzNilY?feature=shared",

  // Old Crow Medicine Show - Wagon Wheel - @Tree House Brewery
  "https://youtu.be/-skF6KZw54I?feature=shared",

  // Pearl Jam - Even Flow - LIVE (Countdown, 1992)
  "https://youtu.be/Z_-trti0GfM?feature=shared",

  // Pearl Jam “Yellow Ledbetter” Live on the Stern Show
  "https://youtu.be/2cyp1g7idYc?si=gCu1VwdWYxasfU_5&t=89",

  // Rancid - Roots Radicals Live {Summer Sonic 2001ᴴᴰ}
  "https://youtu.be/hSx6MsH_vfU?si=SptZZqUSLT4akfbR",

  // Social Distortion "Story of My Life"
  "https://youtu.be/OZgrURofhQA?feature=shared",

  // The Delray Rockets - Rockabilly Man
  "https://youtu.be/pwYx26t-Su4?feature=shared",

  // Twisted Sister -  'Twisted Xmas Live In Las Vegas' (2011)
  "https://youtu.be/ujsYUMZQPdw?feature=shared",
];

document.getElementById("randomVideoLink").onclick = function () {
  const randomIndex = Math.floor(Math.random() * ytPlaylist.length);
  const randomVideoUrl = ytPlaylist[randomIndex];
  window.open(randomVideoUrl);
  return false;
};
