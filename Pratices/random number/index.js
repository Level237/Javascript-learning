var randomNumber=Math.floor(Math.random() *25) +1;
var promp;
var coups=0;
function FindNumber(){
    
    while(promp !== randomNumber){
        promp=parseInt(prompt('Please enter number'));
        if(promp<randomNumber){
            coups++;
        console.log('le nombre à trouvé est plus grand que votre nombre');
    }
    else if(promp > randomNumber){
        console.log('le nombre a trouvé est plus petit que votre nombre');
        coups++;
    }else{
        console.log('Bravo vous aviez trouvé avec '+coups+' coups');

    }
    }
    

    
}

FindNumber();