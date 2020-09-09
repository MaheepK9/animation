var ball= document.querySelector('.ball');
var info= document.querySelector('.information');
var y= 1;
var grav=1;

setInterval(function(){

    if(y > 450) grav = -grav;
    grav += 1;
    y += grav;
    ball.style.top = (y) + 'px';
    info.innerHTML = "Y = "+y+", Gr = "+ grav
},60);