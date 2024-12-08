const connectBtn=document.querySelector('.connectBtn');
const connectBtn2=document.querySelector('.connectBtn2');
const connectBar=document.getElementById('connect');
const tools=document.querySelector('.tools');
const tools2=document.querySelector('.tools2');
const updateInfo=document.querySelector('.update-info');
const modelBar=document.querySelector('.fa-bars');
const model=document.querySelector('.modal');
const closeModal=document.querySelector('.fa-circle-xmark');
const section2=document.querySelector('.section2');
let datafromApi;
let modifiedData;

function spiltDate(dates){
     const dateString=dates;
     const date = new Date(dateString);
     const formattedDate = date.toLocaleDateString('en-GB'); 
     return formattedDate
}
function sortPostBylatest(arr){
    modifiedData=arr.sort((a, b) => new Date(b.date) - new Date(a.date));
}
async function grabData(){
     try{
          let postData=await fetch('https://magnetonn-in-backend.vercel.app/');
          datafromApi=await postData.json();
          sortPostBylatest(datafromApi)
          createCards(modifiedData);
          // createCards(datafromApi)
     }
     catch(err){
          console.log('error occured:',err);
     }
     
}

function createCards(arr){
     arr.forEach((data)=>{
          section2.innerHTML +=`<div class="post-card">
               <div class="post-title"><h3 class="postHeading">${data.title}</h3></div>
               <div class="post-desc">
                    <h5 class="postDesc">${data.description}</h5>
               </div>
               <div class="footerSec">
                    <div class="created">
                              <p class="general-light">${spiltDate(data.date)}</p>
           
                         </div>
                         <div class="readBtnn">
                              <a class="readBtn" href="../posts/${data.url}"><button class="readMore">Read</button></a>
                         </div>
               </div>
          </div>
         `
     })
}
grabData();
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

