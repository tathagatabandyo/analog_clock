setInterval(clock_run,1000);
function clock_run(){
    var d=new Date();
    var h=d.getHours();
    var m=d.getMinutes();
    var s=d.getSeconds();
    hour="rotate("+(30*h+m/2+s/120)+"deg)";
    min="rotate("+(6*m+s/10)+"deg)";
    sec="rotate("+6*s+"deg)";
    console.log(hour);
    document.getElementById("hour").style.transform=hour;
    document.getElementById("minute").style.transform=min;
    document.getElementById("sec").style.transform=sec;
}