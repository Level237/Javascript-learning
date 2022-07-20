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
        incomeContainer:'.income__list',
        expenseContainer:'.expenses__list',
    };
        return {
            getInput:function(){

                return {
                    type:document.querySelector(DOMstring.inputType).value,// will be either inc or exp
                    description:document.querySelector(DOMstring.inputDescription).value,
                    value:document.querySelector(DOMstring.inputValue).value,
                }
            },

            addListItem:function(obj,type){
                var html,newHtml,element;
                //Create Html string with placeholder text
                if(type==='inc'){
                    element=DOMstring.incomeContainer;
                    html='<div class="item clearfix" id="income-%id%"><div class="item__description">%description%</div><div class="item__date"</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>'
                }else if(type==='exp'){
                    element=DOMstring.expenseContainer;
                    html='<div class="item clearfix" id="expense-%id%"><div class="item__description">%description%</div><div class="item__date"</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__percentage">21%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
                }
                //Replace the placeholder text with some actual data
                newHtml=html.replace('%id%',obj.id);
                newHtml=newHtml.replace('%description%',obj.description);
                newHtml=newHtml.replace('%value%',obj.value);
                // Insert the Html into the DOM
                document.querySelector(element).insertAdjacentHTML('beforeend',newHtml);
            },

            clearFields:function(){
                var fields,fieldsArr;

                fields=document.querySelectorAll(DOMstring.inputDescription+', '+DOMstring.inputValue);
                
                fieldsArr=Array.prototype.slice.call(fields);
            fieldsArr.forEach(function(current ,index,array){
                current.value="";
                
            });
            fieldsArr[0].focus();
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
        UICtrl.addListItem(newItem,input.type);
        //4. Calculate the budget
        UICtrl.clearFields();
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