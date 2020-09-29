function get_to_dos(){          // function to store the tasks 
    var todos = new Array; 
    var todos_str = localStorage.getItem('todo');
    if(todos_str!==null)
    {
        todos = JSON.parse(todos_str);
    }
    return todos;
}
function add(){             // function to add the new task entered by the user
    var task = document.getElementById('task').value;
    var todos=get_to_dos();
    todos.push(task);
    localStorage.setItem('todo', JSON.stringify(todos)); //to convert the items in local storage into string
    show();
    return false;
}
  
function clearDefault(a){   //function to make sure the input task is no hanging inside the input box
  if(a.defaultValue == a.value){a.value = ""}
  
};

function remove(){     // function to remove an item from the to do list
    var id = this.getAttribute('id'); //here this refers to the task which has been clicked to remove
    var todos = get_to_dos();
    todos.splice(id, 1);
    localStorage.setItem('todo', JSON.stringify(todos));

    show();
    return false;
}

function show(){             //function to display the items in to do list
    var todos=get_to_dos();
    var html = '<ul>';
    for(var i=0;i<todos.length;i++)   //creating unordered list through javascript
    {
    html+= '<li>' + todos[i] + '<button class="remove" id="' + i + '">Delete</button> </li>';
    };
html += '</ul>';
document.getElementById('todos').innerHTML = html; //placing the created list in HTML document

var buttons = document.getElementsByClassName('remove');
for (var i=0;i<buttons.length;i++)
 {
    buttons[i].addEventListener('click',remove); //adding click event to buttons
 };
}

document.getElementById('add').addEventListener('click',add);
show();