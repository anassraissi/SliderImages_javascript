const right=document.querySelector('.right');
const slider=document.querySelector('.slider');
const left=document.querySelector('.left');
const images=document.querySelectorAll('.image')
const bottom=document.querySelector('.bottom');
let slideNumber=1;
const length=images.length;

for(let i=0; i<length;i++){
    const div=document.createElement('div');
    div.className='button'; 
    bottom.appendChild(div);
 }


const buttons=document.querySelectorAll('.button');
buttons[0].style.background='white';

const resetBg=()=>{
       buttons.forEach((button)=>{
       button.style.background='transparent';
       })
}

buttons.forEach((button,i)=>{
       button.addEventListener('click',()=>{
           resetBg();
           slider.style.transform=`translateX(-${i*800}px)`;
           slideNumber=i+1;
           buttons[i].style.background='white';

       })

})
const changeClolor=()=>{
    resetBg();  
    buttons[slideNumber-1].style.background='white';
}

const nexImage=()=>{
    slider.style.transform=`translateX(-${slideNumber * 800}px)`;
    slideNumber++;
}
const prevImage=()=>{
    slider.style.transform=`translateX(-${(slideNumber-2)*800}px)`; 
    slideNumber--;
}
const getLastImage=()=>{
    slider.style.transform=`translateX(-${(length-1)*800}px)`;
    slideNumber=length;
}
 const getFirstImage=()=>{
    slider.style.transform=`translateX(0px)`;
    slideNumber=1;     
}
right.addEventListener('click',()=>{
   (slideNumber<images.length) ? nexImage() : getFirstImage();
   changeClolor();
})  

left.addEventListener('click',()=>{
    (slideNumber>1) ? prevImage() : getLastImage();  
    changeClolor();

 })


