

var myImage = document.querySelector('img');

$(function(){ 
   myImage.onclick = function() {
        var mySrc = myImage.getAttribute('src');
        if(mySrc === 'img/zsolt.gif') {
            myImage.setAttribute ('src','img/zsolt.png');
         } else {
            myImage.setAttribute ('src','img/zsolt.gif');
         }
   };
});