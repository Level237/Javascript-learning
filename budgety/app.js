// Budget Controller
var budgetController=(function(){
    // Some code
})();



// UI Controller
var UIController=(function(){

        // Some code

})();


// Global Controller
var controller=(function(budgetCtrl,UICtrl){

    var ctrlAddItem=function(){
         // 1.Get the  field input data

        //2. Add the item to the budget controller

        // 3. add the item to the UI

        //4. Calculate the budget

        //5.display the budget on the UI
        console.log('its work')
    }

    document.querySelector('.add__btn').addEventListener('click',ctrlAddItem)
    document.addEventListener('keypress',function(event){
        if(event.key==='Enter'){
            
            ctrlAddItem();
            
        }
        
    })
})(budgetController,UIController);