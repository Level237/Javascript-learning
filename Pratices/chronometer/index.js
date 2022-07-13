var minutes=0,hours=0,millisecondes=0,secondes=0;

function start(){
    setInterval(update_chrono,100)
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