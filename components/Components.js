const navigationn=document.querySelector('.navigation');
const footer=document.querySelector('.footer');
const navigationComponent=`<div class="navigation-component">
          <ul>
               <li><a class="logo" href="../about.html">Magnetonn.in</a></li>
               <li><a class="explore" href="../index.html">Explore</a></li>
          </ul>
     </div>
     `
const footerComponent=`<div class="blog-footer">
          <div class="connect" id="connect">
               <p>Connect with Me</p>
               <div class="links">
                    <a href=""><i class="fa-solid fa-envelope"></i></a>
                    <a href="http://"><i class="fa-brands fa-instagram"></i></a>
                    <a href="http://"><i class="fa-brands fa-linkedin"></i></a>
               </div>
               <div class="copyright">
          <p class="copy">&copy; 2024 Magneton.in. All Rights Reserved.</p>
         </div>
          </div>
     </div>
   `
     function createCommonComponents(){
          navigationn.innerHTML=navigationComponent;
          footer.innerHTML=footerComponent;
     }

     createCommonComponents()