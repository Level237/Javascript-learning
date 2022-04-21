// Budget Controller
var budgetController=(function(){
    

    var Expense=function(id,description,value){
        this.id=id;
        this.description=description;
        this.value=value;
    }

    var Income=function(id,description,value){
        this.id;
        this.description=description;
        this.value=value;
    }

    var data={
        allItems:{
            exp:[],
            inc:[]
        },
        totals:{
            exp:0,
            inc:0
        }
    };

    return {
        addItem:function(type,des,val){
            var newItem,ID;
            
            // create new ID
            if(data.allItems[type].length >0){
                ID=data.allItems[type][data.allItems[type].length - 1].id +1;

            }else{
                ID=0;
            }
            
            
            //create new item based on 'inc' or 'exp' type
            if(type==='exp'){
                newItem = new Expense(ID,des,val);
            }else if(type==='inc'){
                newItem= new Income(ID,des,val);
            }

            // Push it into our data structure
            data.allItems[type].push(newItem);

            //Return the new Item
            return newItem; 
        },
        testing:function(){
            console.log(data);
        }
    }
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
    
    var setupEventListener=function(){
        var DOM=UICtrl.getDOMstring();
        document.querySelector(DOM.inputBtn).addEventListener('click',ctrlAddItem);

        document.addEventListener('keypress',function(event){
            if(event.key==="Enter"){
                ctrlAddItem();
            }
        });
    };
    
    
    
    var ctrlAddItem=function(){
        var input,newItem;
         // 1.Get the  field input data
        input=UICtrl.getInput();
        
        //2. Add the item to the budget controller
         newItem=budgetCtrl.addItem(input.type,input.description,input.value);
        // 3. add the item to the UI

        //4. Calculate the budget

        //5.display the budget on the UI
        
    };

    return{
        init:function(){
            console.log("application has started");
            setupEventListener();
        }
    }; 
        
    
})(budgetController,UIController); 

controller.init();