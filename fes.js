var zsoltImage = document.getElementById('zsolt');
var anitaImage = document.getElementById('anita');
var mariannaImage = document.getElementById('marianna');
var csillaImage = document.getElementById('csilla');

$(function(){ 
   zsoltImage.onclick = function() {
        var mySrc = zsoltImage.getAttribute('src');
        if(mySrc === 'img/zsolt.gif') {
            zsoltImage.setAttribute ('src','img/zsolt.png');
         } else {
            zsoltImage.setAttribute ('src','img/zsolt.gif');
         }
   };
});



$(function(){ 
   anitaImage.onclick = function() {
        var mySrc = anitaImage.getAttribute('src');
        if(mySrc === 'img/anita.gif') {
            anitaImage.setAttribute ('src','img/anita.png');
         } else {
            anitaImage.setAttribute ('src','img/anita.gif');
         }
   };
});

$(function(){ 
   mariannaImage.onclick = function() {
        var mySrc = mariannaImage.getAttribute('src');
        if(mySrc === 'img/marianna.gif') {
            mariannaImage.setAttribute ('src','img/marianna.png');
         } else {
            mariannaImage.setAttribute ('src','img/marianna.gif');
         }
   };
});

$(function(){ 
   csillaImage.onclick = function() {
        var mySrc = csillaImage.getAttribute('src');
        if(mySrc === 'img/csilla.png') {
            csillaImage.setAttribute ('src','img/csilla.gif');
         } else {
            csillaImage.setAttribute ('src','img/csilla.png');
         }
   };
});

