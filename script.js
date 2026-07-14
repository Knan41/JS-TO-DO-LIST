let input = document.querySelector('input');
let bttn = document.querySelector('.add');
let lists = document.querySelector('ul');

bttn.addEventListener('click',addList);

function addList(){
    let boxText = input.value;

    if(boxText=== '') return;

    let li = document.createElement('li');
    li.textContent = boxText;

    let removebttn = document.createElement('button');
    removebttn.textContent = 'remove'
    removebttn.className='imgbtn';

    li.appendChild(removebttn);
    lists.append(li)

    li.addEventListener('click',(e)=>{
        li.classList.toggle('has')
    });
    removebttn.addEventListener('click',(e)=>{
        li.remove()
    });

    input.value=''
}