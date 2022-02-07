let arrayofimg = ["images/1.JPG","images/2.JPEG" ,"images/3.JPG"];
let stopButton = document.getElementById("button"); 
let i=0;
let interval = setInterval(function(){
    if(i<arrayofimg.length)
    {
        document.slide.src=arrayofimg[i];
        i++;
    }else{
        i=0;
    }
},1000)

let x=0;
stopButton.onclick = function(){
    if(x==0){
        clearInterval(interval);
        x=1;
    }else{
        setInterval(function(){
            if(i<arrayofimg.length)
            {
                document.slide.src=arrayofimg[i];
                i++;
            }else{
                i=0;
            }
        },1000)
        x=0;
    }
}
