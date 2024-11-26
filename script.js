const connectBtn=document.querySelector('.connectBtn');
const connectBtn2=document.querySelector('.connectBtn2');
const connectBar=document.getElementById('connect');
const tools=document.querySelector('.tools');
const tools2=document.querySelector('.tools2');
const updateInfo=document.querySelector('.update-info');
const modelBar=document.querySelector('.fa-bars');
const model=document.querySelector('.modal');
const closeModal=document.querySelector('.fa-circle-xmark');
closeModal.addEventListener('click',()=>{
 model.style.transform='translateY(-400px)';
})
modelBar.addEventListener('click',()=>{
model.style.transform='translateY(0px)';
})
function connectInfoDisplay(){
     connectBar.style.transform='scale(0.8)';
     setTimeout(()=>{
          connectBar.style.transform='scale(1)';
     },700);
}
function toolFunctionDisplay(){
     updateInfo.style.transform='translateY(0px)';
     setTimeout(()=>{
          updateInfo.style.transform='translateY(-100px)';
     },2000);
}
tools.addEventListener('click',toolFunctionDisplay)
tools2.addEventListener('click',toolFunctionDisplay)
connectBtn.addEventListener('click',connectInfoDisplay);
connectBtn2.addEventListener('click',connectInfoDisplay);