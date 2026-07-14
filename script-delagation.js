let input = document.querySelector('input');
let bttn = document.querySelector('.add');
let lists = document.querySelector('ul');

bttn.addEventListener('click', () => {
    let boxText = input.value.trim();

    if(boxText === '') return;

    lists.innerHTML += `<li class="full">${boxText}<button class="removebttn"><img src="assests/pngtree-recycle-bin-icon-for-your-project-png-image_1599747-removebg-preview.png"></button></li>`;
});


lists.addEventListener('click', (e) => {

    if(e.target.parentElement.classList.contains('removebttn')){
        e.target.parentElement.parentElement.remove();
    }
   
    if(e.target.classList.contains('full')) {
        e.target.classList.toggle('has');
    }   

    input.value=''

});