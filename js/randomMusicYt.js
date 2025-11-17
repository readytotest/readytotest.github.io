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

  // Billy Idol – Dancing With Myself – Live From the Empire State Building
  "https://youtu.be/mWdx7bBWXtE?si=BVyzAcs_31fqRc1z",

  // CCR - Born On The Bayou - Live at Woodstock
  "https://youtu.be/_9KKo8mZ5Eo?feature=shared",

  // Eric Church "Some Of It" Live at Freedom Mortgage Pavilion
  "https://youtu.be/aZjFgimLM6E?si=ceoS6prrANZBONXe",

  // George Jones & Alan Jackson - "He Stopped Loving Her Today" | Opry 100: Country's Greatest Songs
  "https://youtu.be/Hdz5ue84UMM?si=FgYDfODn3DSjIfvD",

  // Janis Joplin - Piece Of My Heart (1969) Frankfurt, Germany
  "https://youtu.be/I2x1yo8Ztdw?feature=shared",

 // Jamey Johnson - High Cost of Living (Live at Farm Aid 2021)
  "https://youtu.be/__xqVoWdzpM?si=KYB_GDNjzNKGtHMk",

  // Johnny Cash - San Quentin (Live at San Quentin, 1969)
  "https://youtu.be/7e2B-thaJG0?si=XYvhW9C2P8p668MH",

  // John Fogerty - Lodi - acoustic version
  "https://youtu.be/Wpuh3QkAxwE?si=ZZCqrGoSPreGq0vA",

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

  // Willie Nelson - Whiskey River (Live From Austin City Limits, 1981)
  "https://youtu.be/lPkEmBCZTlA?si=3a4_JuE98DC5Cidl",
];

document.getElementById("randomVideoLink").onclick = function () {
  const randomIndex = Math.floor(Math.random() * ytPlaylist.length);
  const randomVideoUrl = ytPlaylist[randomIndex];
  window.open(randomVideoUrl);
  return false;
};
