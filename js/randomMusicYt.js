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
  // Creedence Clearwater Revival - Hey Tonight 
  "https://youtu.be/7ByQ0Ne3SMU?si=OhFWrWqsDX5krgj3",

  // Creedence Clearwater Revival - Bad Moon Rising 
  "https://youtu.be/zUQiUFZ5RDw?si=j6xdVGUP12oV8Kqs",

  // Creedence Clearwater Revival - Born On The Bayou
  "https://youtu.be/fcTQCNntGEs?si=jtfR3-p75pjIJTn5",

  // Creedence Clearwater Revival - Lodi
  "https://youtu.be/dIfQNB5WXmY?si=NF-MXs5fFA3tuHEu",

  // Creedence Clearwater Revival - Fortunate Son
  "https://youtu.be/ZWijx_AgPiA?si=VH-WssIvM1uDYiDU",

  // Creedence Clearwater Revival - Travelin' Band 
  "https://youtu.be/ZXLqECpHW2o?si=WLhcmuQAxUDj-bNh",

  // Creedence Clearwater Revival - Green River
  "https://youtu.be/L5V9nK7-OkM?si=izvQrAkzBrWbOW9c",

  // Creedence Clearwater Revival - Lookin' Out My Back Door
  "https://youtu.be/Aae_RHRptRg?si=TixPRTcWGXwHRYXd",

];

document.getElementById("randomVideoLink").onclick = function () {
  const randomIndex = Math.floor(Math.random() * ytPlaylist.length);
  const randomVideoUrl = ytPlaylist[randomIndex];
  window.open(randomVideoUrl);
  return false;
};
