let arrayOfTodo = localStorage.getItem('todo') ? JSON.parse(localStorage.getItem('todo')) : [];

let getInput = document.querySelector('.input');

const Add=()=>{
    let inputValue = getInput.value;

    if(inputValue == ''){

        alert("please enter something");

    }
    else{
        arrayOfTodo.push(inputValue);

        let strData = JSON.stringify(arrayOfTodo);

        localStorage.setItem('todo',strData)

        console.log(arrayOfTodo);

        getInput.value = " ";

        display()
    }
}

const display=()=>{
    let output = document.querySelector('.output');

    let newHtml = '';

    let welcome = "Enter your task"

    for(i=0; i< arrayOfTodo.length; i++){

        let getLocalData = localStorage.getItem('todo');

        let objectOfAraay = JSON.parse(getLocalData);

        let todoItem = objectOfAraay[i];

        let count = i+1;

        newHtml += `<div class = "item"><span class = "num">${count}</span><textarea disabled class = "data">${todoItem}</textarea><button class ="dlt" onclick ="remove()"><i class="fa fa-trash" aria-hidden="true"></i></button><button class= "edit" onclick = "edititem()" ><i class="fa fa-pencil" aria-hidden="true"></i></button><div class ="update"><button class= "save" onclick = "save()"><i class="fa fa-check" aria-hidden="true"></i></button><button class="cancel" onclick = "cancel()"><i class="fa fa-times" aria-hidden="true"></i></button></div></div>`;
      
        arrayOfTodo.length === 0 ? output.innerHTML = `<h1 class = "welcome" >Enter your task</h1>` : output.innerHTML = newHtml;
    }

    edititem();
    save();
    remove();
    cancel();
}

const edititem=()=>{

   let editButton = document.querySelectorAll('.edit');

   let textArea = document.querySelectorAll('textarea');

   let update = document.querySelectorAll('.update');

   let removebutton = document.querySelectorAll('.dlt');

   editButton.forEach((eb,i)=>{

    eb.addEventListener('click',()=>{

        textArea[i].disabled = false;

        textArea[i].style.border = "3px solid ";

        textArea[i].style.borderColor = "green"

        textArea[i].style.width = "220px";

        update[i].style.display = "flex";

        update[i].style.width = "150px"

        removebutton[i].style.display = "none";

        editButton[i].style.display = "none"

    })
   })
   
}

const save=()=>{

    let saveButton = document.querySelectorAll('.save');

    let textArea = document.querySelectorAll('textarea');

    let update = document.querySelectorAll('.update');


    saveButton.forEach((sd,i)=>{

        sd.addEventListener("click",()=>{

            let text = textArea[i].value;

            textArea[i].disabled = true;

            arrayOfTodo[i] = text;

            update[i].style.display = "none";

            localStorage.setItem("todo",JSON.stringify(arrayOfTodo));

            location.reload()

        
        })
    })
 
}

const remove=()=>{

    const removebutton = document.querySelectorAll('.dlt');

    removebutton.forEach((rb,i)=>{

        rb.addEventListener("click",()=>{

        arrayOfTodo.splice(i,1);

        localStorage.setItem("todo",JSON.stringify(arrayOfTodo));

        location.reload();

        })
    })
}

const cancel=()=>{

    let cancelbutton = document.querySelectorAll(".cancel");

    let textArea = document.querySelectorAll('textarea');

    let update = document.querySelectorAll('.update');


    cancelbutton.forEach((cb,i)=>{

        cb.addEventListener("click",()=>{

             textArea[i].disabled = true;

             update[i].style.display = "none";

             location.reload();
        })
    })
}

display()

