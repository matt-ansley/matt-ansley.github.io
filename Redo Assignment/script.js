const allSections = document.querySelectorAll('.main-content');
const sections = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.controlls');
const sectBtn = document.querySelectorAll('.control');

function PageTransitions(){



    var test = document.getElementsByClassName('controlls');

    //button click active class
    for(let i = 0; i < sectBtn.length ; i++ ){
        sectBtn[i].addEventListener('click', function(){
            let currentBtn = document.querySelectorAll('.active-btn');
            currentBtn[0].className = currentBtn[0].className.replace('active-btn', '');
            this.className += ' active-btn';
        })
    }
    //ACTIVE SECTIONS
    allSections.addEventListener('click', (e) =>{
        console.log(e.target);
    })

    for(let a = 0; a < allSections.length; a++){
        allSections[a].addEventListener
    }
}



PageTransitions();

