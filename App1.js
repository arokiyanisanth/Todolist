// creating an array for getting user input
let arr=[];
// for editing index
editindex=-1;
// first print the elements in the array default for rendering manually
const initialarray=()=>{
    const newarr= arr.map((data,index)=>`<li class="list-group-item "> ${data}
                    <button
                    
                     class="btn btn-outline-secondary float-end " type="button" onclick="handleEdit(${index})">EDIT</button>
                    <button class="btn btn-outline-secondary float-end" type="button" onclick="handleDelete(${index})">DELETE</button>

                </li>`); 

document.getElementById('listdata').innerHTML=newarr.join('');
}
initialarray();


// add button function
const Add=()=>{
    const valuefromuser=document.getElementById('userinput').value;
    // adding elemnts properly to the list if conditions is used
    if(!valuefromuser){
          alert('please enter a valid list items');
          return;
     }
    //  for checking if the item already exists in the list
     if (arr.includes(valuefromuser)){
            alert('this item already exists in the list');
            return;
     }
    if (editindex===-1){
     arr.push(valuefromuser);
     
    }else{
     arr[editindex]=valuefromuser
    }
    editindex=-1;
    //again called for rerendring purpose
    initialarray();
    document.getElementById('userinput').value='';
    
}

// delete button function
const handleDelete=(index)=>{
    arr.splice(index,1);
    initialarray();
}

// edit button function
const handleEdit=(index)=>{
    document.getElementById('userinput').value=arr[index];
    editindex=index;
}