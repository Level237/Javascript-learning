var minutes=0,hours=0,millisecondes=0,secondes=0;
var begin;

function start(){
    begin=setInterval(update_chrono,100);
}

function update_chrono(){

        millisecondes++;
        document.querySelector('.milliseconde').innerHTML=millisecondes+ ' ms';
    if(millisecondes===10){
        millisecondes=0;
        secondes++;
         document.querySelector('.seconde').innerHTML=secondes+ ' s';

         if(secondes===60){
            secondes=0;
            minutes++;
            document.querySelector('.minute').innerHTML=minutes+ ' min';
         }
         if(minutes===60){
            minutes=0;
            hours++;
            document.querySelector('.hour').innerHTML=hours+ ' h';
         }
    }
    
}


function stop(){
    clearInterval(begin);

    begin=null;
}

function reset(){
    document.querySelector('.milliseconde').innerHTML=0;
    document.querySelector('.seconde').innerHTML=0;
    document.querySelector('.minute').innerHTML=0;
    document.querySelector('.hour').innerHTML=0;
}
