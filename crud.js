const form=document.querySelector('#firsttask')
const input=document.querySelector('#book');
const input2=document.querySelector('#book2');
const input3=document.querySelector('#book3');
const records=document.querySelector('.records');

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const userdata=input.value.trim();
   
    if(!userdata){
        alert("Please enter bookname");
        return;
    } 
    
    const userdata1=input2.value.trim();
    if(!userdata1){
        alert("Please enter author");
        return;
    } 
    if(!isNaN(userdata1)){
        e.preventDefault();
        alert("Pleae enter valid author name");
    userdata1.focus()
        return false;
    }
    
    const userdata2=input3.value.trim();
    if(!userdata2){
        alert("Please enter price");
        return;
    } 
    
const record=document.createElement('div')
record.classList.add('record')
record.classList.add('mb-4')

const content=document.createElement('div')
content.classList.add('content')

const text=document.createElement('input')
text.classList.add('text')
text.classList.add('form-control')
text.classList.add('mb-3')
text.value=userdata;
text.setAttribute("readonly","readonly");
text.type="text";


content.appendChild(text);
record.appendChild(content);
records.appendChild(record);

const text2=document.createElement('input')
text2.classList.add('text')
text2.classList.add('form-control')
text2.classList.add('mb-3')
text2.value=userdata1;
text2.setAttribute("readonly","readonly");
text2.type="text";


content.appendChild(text2);
record.appendChild(content);
records.appendChild(record);

const text3=document.createElement('input')
text3.classList.add('text')
text3.classList.add('form-control')
text3.classList.add('mb-3')
text3.value=userdata2;
text3.setAttribute("readonly","readonly");
text3.type="text";

content.appendChild(text3);
record.appendChild(content);
records.appendChild(record);

const buttons=document.createElement('div');
buttons.classList.add('buttons')

const edit=document.createElement('button')
edit.classList.add('edit');
edit.classList.add('btn');
edit.classList.add('btn-warning');
edit.innerHTML="Edit";

const del=document.createElement('button');
del.classList.add('delete');
del.classList.add('btn');
del.classList.add('btn-danger');
del.classList.add('mx-3');
del.innerHTML="Delete";

buttons.appendChild(edit)
buttons.appendChild(del)
record.appendChild(buttons)

input.value=""
input2.value=""
input3.value=""

edit.addEventListener('click',()=>{
 if(edit.innerHTML=='Edit'){
   text.removeAttribute('readonly')
   text2.removeAttribute('readonly')
   text3.removeAttribute('readonly')
   edit.innerHTML='Save';
   text.focus();
  
 }else{
    text.setAttribute("readonly","readonly");
    text2.setAttribute("readonly","readonly");
    text3.setAttribute("readonly","readonly");
    edit.innerHTML='Edit';
   }
})
del.addEventListener('click',()=>{
    records.removeChild(record)
})

})
