"use strict";

/* ----------------------------------------------------------------------------- */
/* Loader ---------------------------------------------------------------------- */
/* ----------------------------------------------------------------------------- */

window.addEventListener("load",function(){
        
  $("#loaderDiv").fadeOut(1000,function(){

    $("#myLoading").remove()

    $("body").css("overflow-y","auto")

  })

}) 

/* ----------------------------------------------------------------------------- */
/* Sharding -------------------------------------------------------------------- */
/* ----------------------------------------------------------------------------- */

function openLink(url){

  return   window.open(`https://${url}`,"_blank")
  
}

document.addEventListener('contextmenu', (e) => e.preventDefault());

function ctrlShiftKey(e, keyCode) {

  return e.ctrlKey && e.shiftKey && e.keyCode === keyCode.charCodeAt(0);

}

document.onkeydown = (e) => {

  // Disable F12, Ctrl + Shift + I, Ctrl + Shift + J, Ctrl + U

  if (

    e.key === 'F12' ||

    ctrlShiftKey(e, 'I') ||

    ctrlShiftKey(e, 'J') ||

    ctrlShiftKey(e, 'C') ||

    (e.ctrlKey && e.keyCode === 'U'.charCodeAt(0))

    )

  return false;

};