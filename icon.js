var pos=0;
var pinc=.25

drawit=function(){
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.clearRect(0, 0, c.width, c.height);
for(var x=0;x< 10; x++){
 var r = x*10 +4;
 var st=((pos * (x+1)) % 200)/100;
 var et=(st + 1) % 2;
 
 ctx.beginPath();
 ctx.lineWidth=8;
 ctx.arc(100, 100, r, et * Math.PI , st * Math.PI);
 ctx.stroke();
 //console.log(r + " " + pos + " " +st + " " + et);
 pos=(pos+pinc)  %200;
}
 pinc=.7 * ((100-(Math.abs(100-pos)))/100);  
 if (pinc<.01) pinc=.01;   
   
 //console.log(pos + " " + pinc);   
    
}

window.setInterval("drawit();", 60);
