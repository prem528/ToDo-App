 

 let todoList = [
    {
        item: 'Buy Milk',
        dueDate: '3/3/2024'
      },
      {
        item: 'Go to College',
        dueDate: '3/3/2024'
      }
 ];
displayItem();

function addtodo(){
    let inputElement =  document.querySelector('#input-box');
    let dateElement =  document.querySelector('#date-box');
    
    let todoItem = inputElement.value;
    let todoDate = dateElement.value;
    todoList.push({item: todoItem, dueDate: todoDate});
     
    inputElement.value = '';
    dateElement.value = '';
    displayItem();
 }

 function displayItem(){
    let containerElement = document.querySelector('.todo-container');
    let newHtml = ''; 
    for ( let i = 0; i < todoList.length; i++){
       
        let {item, dueDate} = todoList[i];
    
        newHtml += `
        
        <span>${item}</span>
        <span>${dueDate}</span>
        <button class="btn-delete " onclick="todoList.splice(${i}, 1);
        displayItem();">Delete</button>
        `;

    }
    containerElement.innerHTML= newHtml;
 }