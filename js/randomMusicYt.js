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

// Going to keep this all concert music videos

const ytPlaylist = [
  // AC⚡DC - Thunderstruck (Live at Donington, August 17, 1991 - Official HD Video)
  "https://youtu.be/Af0P6XEkI7Y?feature=shared",

  //Alice In Chains - Man In The Box (Live at Moore Theatre) (1990)
  "https://youtu.be/naoSdrzqh-M?feature=shared",

  // Alan Jackson Performs "Drive"
  "https://youtu.be/rj9Bh-ibp6U?feature=shared",

  // Darius Rucker "Wagon Wheel" Story + Performance | CMT Storytellers
  "https://youtu.be/ceAJ4_3my20?feature=shared&t=120",

  // Florida Georgia Line & Nelly Perform "Cruise" | CMT Crossroads
  "https://youtu.be/Wz0oHEC1WgY?feature=shared",

  // Janis Joplin - Piece Of My Heart (1969) Frankfurt, Germany
  "https://youtu.be/I2x1yo8Ztdw?feature=shared",

  // Jake Owen performs "Down to the HonkyTonk" at the 2022 A Capitol Fourth
  "https://youtu.be/6UBpAj06SDs?feature=shared",

  // Johnny Cash - San Quentin (Live at San Quentin, 1969)
  "https://youtu.be/7e2B-thaJG0?feature=shared",

  // Metallica: Enter Sandman (Vienna, Austria - June 1, 2024)
  "https://youtu.be/ZcWkXYzNilY?feature=shared",

  // Metallica: Whiskey in the Jar (Castle Donington, England - June 10, 2023)
  "https://youtu.be/YfouL5PyORU?feature=shared",

  // Old Crow Medicine Show - Wagon Wheel
  "https://youtu.be/-skF6KZw54I?feature=shared",

  // Pearl Jam - Even Flow - LIVE (Countdown, 1992)
  "https://youtu.be/Z_-trti0GfM?feature=shared",

  // Pearl Jam “Yellow Ledbetter” Live on the Stern Show
  "https://youtu.be/2cyp1g7idYc?si=gCu1VwdWYxasfU_5&t=89",

  // Rancid - Roots Radicals Live {Summer Sonic 2001ᴴᴰ}
  "https://youtu.be/hSx6MsH_vfU?si=SptZZqUSLT4akfbR",

  // Social Distortion "Story of My Life" & "Bad Luck" & "Ring of Fire" LIVE
  "https://youtu.be/Ase-qZaXou0?feature=shared",

  // Social Distortion "Ball and Chain" & "Reach for the Sky" LIVE
  "https://youtu.be/S74oFu3SieI?feature=shared",

  // The Black Crowes - 'She Talks to Angels' @ LOCKN' Festival
  "https://youtu.be/lgYTTM6BfjU?feature=shared",
];

document.getElementById("randomVideoLink").onclick = function () {
  const randomIndex = Math.floor(Math.random() * ytPlaylist.length);
  const randomVideoUrl = ytPlaylist[randomIndex];
  window.open(randomVideoUrl);
  return false;
};
