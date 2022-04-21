// Budget Controller
var budgetController=(function(){
    // Some code
})();



// UI Controller
var UIController=(function(){

    var DOMstring ={
        inputType:'.add__type',
        inputDescription:'.add__description',
        inputValue:'.add__value',
        inputBtn:'.add__btn',
    };
        return {
            getInput:function(){

                return {
                    type:document.querySelector(DOMstring.inputType).value,// will be either inc or exp
                    description:document.querySelector(DOMstring.inputDescription).value,
                    value:document.querySelector(DOMstring.inputValue).value,
                }
            },

            getDOMstring:function(){
                return DOMstring;
            }
        }

})();


// Global Controller
var controller=(function(budgetCtrl,UICtrl){

    var DOM=UICtrl.getDOMstring();
    var ctrlAddItem=function(){
         // 1.Get the  field input data
        var input=UICtrl.getInput();
        console.log(input);
        //2. Add the item to the budget controller

        // 3. add the item to the UI

        //4. Calculate the budget

        //5.display the budget on the UI
        
    }

    document.querySelector(DOM.inputBtn).addEventListener('click',ctrlAddItem)
    document.addEventListener('keypress',function(event){
        if(event.key==='Enter'){
            
            ctrlAddItem();
            
        }
        
    });
})(budgetController,UIController); 