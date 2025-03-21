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
  // Social Distortion - Live Oct 8 2024 - Story of My Life - Bad Luck - Ring of Fire
  "https://youtu.be/Ase-qZaXou0?feature=shared",
  // Metallica: Whiskey in the Jar (Castle Donington, England - June 10, 2023)
  "https://youtu.be/YfouL5PyORU?feature=shared",
  // Pearl Jam “Yellow Ledbetter” Live on the Stern Show
  "https://youtu.be/2cyp1g7idYc?feature=shared",
];
// eslint-disable-next-line no-undef
document.getElementById("randomVideoLink").onclick = function () {
  const randomIndex = Math.floor(Math.random() * ytPlaylist.length);
  const randomVideoUrl = ytPlaylist[randomIndex];
  // eslint-disable-next-line no-undef
  window.open(randomVideoUrl);
  return false;
};
