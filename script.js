//Declaring Variables
let cancel = document.getElementById('cancel');
let save = document.getElementById('save');
let plusbtn = document.querySelector(".task-item > .icon");

let taskSubject = document.querySelector('.task-subject');
let allnumbers= document.querySelectorAll('.today > .number , .upcoming > .number');
let donetasks= document.querySelector('.done-tasks');
let tasks =document.querySelector('.tasks');
let input =document.querySelector('.task-subject input');


//--------------------------------------
//Event Listeners

document.addEventListener('DOMContentLoaded' , () =>{
  // document.classList.add('transition-effect');
  taskSubject.classList.remove('active');
})
cancel.addEventListener('click', () => {
  
  // taskSubject.classList.add("inactive");
  // cancel.classList.add('transition-effect');
  // setTimeout(() => {
  //   taskSubject.classList.remove("active");
  // }, 300);
   taskSubject.classList.remove("active");

});

plusbtn.addEventListener('click', () =>{
  taskSubject.classList.add('active');
  // plusbtn.classList.add('transition-effect');
})




save.addEventListener('click', () => {
  taskSubject.classList.remove("active");
  // save.classList.add('transition-effect');
  tasks.innerHTML += `
            <div class="task task-item">
              <div class="c1">
                <input type="checkbox">
                <div class="content">${input.value}</div>
              </div>
              
              <div class="c2 minus-icon">
                <img src="assets/images/icons8-minus-48.png" alt="minus icon" onclick="removeTask(event)" 
                onmouseover="showToolTip(this)" onmouseout="hideToolTip(this)">
              </div> 
            </div>`;

            allnumbers.forEach(el => {
              el.innerHTML++;
            });

})


tasks.addEventListener('change',(event)=>{
  targetCheckBox= event.target.closest('.task').querySelector('input[type="checkbox"]');
  if(targetCheckBox && targetCheckBox.checked){
    // console.log("helloooooo");
    // task.classList.add('transition-effect');
    let task = targetCheckBox.parentElement.parentElement;
    let donetask= task;
    donetask.style.backgroundColor= '#20ad20';
    // donetask.classList.add('.vertical-line')
    targetCheckBox.setAttribute('checked',"");
    targetCheckBox.setAttribute('disabled','')
    donetask.querySelector('.minus-icon').remove();
    donetask = document.createElement('s').appendChild(task);
    task.remove();

    donetasks.innerHTML += `<s>${donetask.outerHTML}</s>`;
    allnumbers.forEach(element => {
      element.innerHTML--;
    })
  }
})
document.querySelectorAll('.sub-item').forEach(element => {
  element.addEventListener('click',() =>{
    if(element.classList.contains('today')){
      document.querySelector('.task-container').style.display= ""
    }
    else{
      document.querySelector('.task-container').style.display= "none"
    }
  })
})

//--------------------------------------
//Functions

function addTransition(element){
  element.style.transition = 'all 0.3s ease-in-out'
}
function removeTask(event){
  event.target.parentElement.parentElement.remove();
  allnumbers.forEach(el => {
    el.innerHTML--;
  });

}
function showToolTip(element){
  element.title="delete";
}
function hideToolTip(element){
  element.title="";
}
function search() {
  var input, filter,i;
  input = document.getElementById("search-btn");
  filter = input.value.toLowerCase();
  let content = document.querySelectorAll('.menu-tasks .sub-item');
console.log(filter)
  for (i = 0; i < content.length; i++) {
    let temp = content[i];
    if (temp.textContent.toLowerCase().includes(filter)) {
      temp.style.display = "";//جهت نمایش المان مخفی شده به کار میره
    } else {
      temp.style.display = "none";
    }
  }
}
function clickEffect(element){
  element.classList.toggle('clickable');
}
