// Budget Controller
var budgetController=(function(){
    

    var Expense=function(id,description,value){
        this.id=id;
        this.description=description;
        this.value=value;
        this.percentage=-1;
    }

    Expense.prototype.calcPercentage=function(totalIncome){

        if (totalIncome>0) {
            this.percentage=Math.round((this.value/totalIncome)*100);
        } else {
            this.percentage=-1;
        }
        
    }

    Expense.prototype.getPercentage=function(){

        return this.percentage;
    }

    var Income=function(id,description,value){
        this.id=id;
        this.description=description;
        this.value=value;
    }

    var calculateTotal=function(type){
        var sum=0;
        data.allItems[type].forEach(function(cur){
            sum=sum+cur.value;
        });
        data.totals[type]=sum;
    };

    var data={
        allItems:{
            exp:[],
            inc:[]
        },
        totals:{
            exp:0,
            inc:0
        },
        budget:0,
        percentage: -1
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

        deleteItem:function(type,id){
            var ids,index;

            ids=data.allItems[type].map(function(current){
                return current.id;
            });

            index=ids.indexOf(id);

            if(index !== -1){
                data.allItems[type].splice(index,1);
            }
        },
        calculateBudget:function(){

            // calculate total income and expenses
            calculateTotal('exp');
            calculateTotal('inc')
            // Calculate the budget: income - expenses
            data.budget=data.totals.inc - data.totals.exp;
            //Calculate the percentage of income that we spent
            if(data.totals.inc >0){
                 data.percentage=Math.round((data.totals.exp / data.totals.inc) * 100);
            }else{
                data.percentage=-1;
            }
            },
            calculatPercentage:function(){
                
                data.allItems.exp.forEach(function(curr){
                    curr.calcPercentage(data.totals.inc);
                })
            },

            getPercen:function(){
                var allPer=data.allItems.exp.map(function(cur){
                    return cur.getPercentage();
                });
                return allPer;
            },
        
        getBudget:function(){
            return {
                budget:data.budget,
                totalInc:data.totals.inc,
                totalExp:data.totals.exp,
                percentage:data.percentage
            };
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
        budgetLabel:'.budget__value',
        incomeLabel:'.budget__income--value',
        expenseLabel:'.budget__expenses--value',
        percentageLabel:'.budget__expenses--percentage',
        container:'.container',
        expensePercLabel:'.item__percentage',
        dateLabel:'.budget__title--month'
    };

    var formatNumber=function(num,type){

                var numSplit,int,dec;

                num=Math.abs(num);
                num=num.toFixed(2);

                numSplit=num.split('.');
                int=numSplit[0];

                if(int.length >3){
                    int=int.substr(0,int.length - 3) + ',' + int.substr(int.length - 3,int.length);
                }

                dec=numSplit[1];

                


                return (type==='exp' ? '-' : '+') + int + '.'+ dec;
            }
        return {
            getInput:function(){

                return {
                    type:document.querySelector(DOMstring.inputType).value,// will be either inc or exp
                    description:document.querySelector(DOMstring.inputDescription).value,
                    value:parseFloat(document.querySelector(DOMstring.inputValue).value),
                }
            },

            addListItem:function(obj,type){
                var html,newHtml,element;
                //Create Html string with placeholder text
                if(type==='inc'){
                    element=DOMstring.incomeContainer;
                    html='<div class="item clearfix" id="inc-%id%"><div class="item__description">%description%</div><div class="item__date"</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline">Sup</i></button></div></div></div>'
                }else if(type==='exp'){
                    element=DOMstring.expenseContainer;
                    html='<div class="item clearfix" id="exp-%id%"><div class="item__description">%description%</div><div class="item__date"</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__percentage">21%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline">Sup</i></button></div></div></div>';
                }
                //Replace the placeholder text with some actual data
                newHtml=html.replace('%id%',obj.id);
                newHtml=newHtml.replace('%description%',obj.description);
                newHtml=newHtml.replace('%value%',formatNumber(obj.value));
                // Insert the Html into the DOM
                document.querySelector(element).insertAdjacentHTML('beforeend',newHtml);
            },
            deleteListItem:function(selectorId){
                var el;
                el=document.getElementById(selectorId);
                el.parentNode.removeChild(el);
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

            displayBudget:function(obj){

                var type;
                obj.budget >0 ? type='inc' : type='exp'
                document.querySelector(DOMstring.budgetLabel).textContent= formatNumber(obj.budget,type);
                document.querySelector(DOMstring.incomeLabel).textContent=formatNumber(obj.totalInc,'inc');
                document.querySelector(DOMstring.expenseLabel).textContent=formatNumber(obj.totalExp,'exp');
               
                if(obj.percentage >0){
                    document.querySelector(DOMstring.percentageLabel).textContent=obj.percentage + "%";
                }else{
                    document.querySelector(DOMstring.percentageLabel).textContent="----";
                }
            },

            displayPercentages:function(percentage){
                var fields=document.querySelectorAll(DOMstring.expensePercLabel);
                
                var nodeListForeach=function(list,callback){
                    for(var i=0;i<list.length;i++){
                        callback(list[i],i);
                    }
                }
                nodeListForeach(fields,function(current,index){

                    if(percentage[index]>0){
                        current.textContent=percentage[index] + '%';
                    }else{
                        current.textContent=percentage[index] + '---';
                    }
                    

                })
            
            },
            displayMonth:function(){
                var now,months,month,year;

                now=new Date();
                months=['January','Febuary','March','April','May','June','July','August','September','October','November','December'];
                month=now.getMonth();
                year=now.getFullYear();

                document.querySelector(DOMstring.dateLabel).textContent=months[month]+ ' ' +year;
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
        document.querySelector(DOM.container).addEventListener('click',ctrlDeleteItem);
    };
    
    
    var updateBudget=function(){
         //1. Calculate the budget
        budgetCtrl.calculateBudget();

        //2.return the Budget
        var budget=budgetCtrl.getBudget();

         //3.display the budget on the UI
        UICtrl.displayBudget(budget);
    };

    var updatePercentage=function(){

        //1.Calculate percentage
        budgetCtrl.calculatPercentage();
        //2.Read Percentage from the budget Controller
        var percentage=budgetCtrl.getPercen();
        //3. Update the UI with the new Percentage
        UICtrl.displayPercentages(percentage);
    };
    var ctrlAddItem=function(){
        var input,newItem;
         // 1.Get the  field input data
        input=UICtrl.getInput();
        if(input.description !== "" && !isNaN(input.value) && input.value > 0){
            //2. Add the item to the budget controller
         newItem=budgetCtrl.addItem(input.type,input.description,input.value);
        // 3. add the item to the UI
        UICtrl.addListItem(newItem,input.type);
        //4.clear the fields
        UICtrl.clearFields();
        
        // calculate and update budget
        updateBudget();

        //update Percentage

        updatePercentage();
        };
        
        
    };
    var ctrlDeleteItem=function(event){
            var itemId,spliteId,type,id;
        itemId=event.target.parentNode.parentNode.parentNode.parentNode.parentNode.id
        if(itemId){
            spliteId=itemId.split('-');
            type=spliteId[0];
            id=parseInt(spliteId[1]);
            
            // 1. Delete item from data structure
            budgetCtrl.deleteItem(type,id);
            // 2.Delete item from UI
            UICtrl.deleteListItem(itemId)
            // 3.Update and show new Budget
            updateBudget();

            //4.Update Percentage
            updatePercentage();
        }
        };

    return{
        init:function(){
            console.log("application has started");
            UICtrl.displayMonth();
            UICtrl.displayBudget({
                budget:0,
                totalInc:0,
                totalExp:0,
                percentage:0
            }
            );
            setupEventListener();
        }
    }; 
        
    
})(budgetController,UIController); 

controller.init();