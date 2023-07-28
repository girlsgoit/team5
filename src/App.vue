<template>

  <myHeader/>
 
   <!-- <section class="bigS">
     <img src="Img/jdjdj.jpg" alt="Main" />
   </section>
 
   <section class="info">
     <h2 id="text">Enjoy Your New Experience</h2>
     <a href="#" id="btn">Learn More</a>
   </section> -->
   <myWelcome/>
  
   <myInformation/>
 
 
  
   <myGallery/>
   <RouterView/>
 
 
   <section class="bigS">
     <img src="Img/studentw.png" alt="Main" />
   </section>
 
 
   <myFooter/>
 </template>
 
 <script setup>
 import myHeader from "./components/header.vue";
 import myFooter from "./components/footer.vue";
 import myGallery from "./components/galleryComp.vue";
 import contactComp from "./components/contactComp.vue";
 import myInformation from "./components/informationComp.vue";
 import myWelcome from "./components/welcomeComp.vue";
 import myVideo from "./components/video.vue";
 import myFormular from "./components/formular.vue";

   </script> 
 <style>
 /* @import url('https://fonts.googleapis.com/css2?family=Inter:wght@600&family=Noto+Sans&display=swap'); */
 
 ::-webkit-scrollbar {
   width: 10px;
 }
 
 ::-webkit-scrollbar-thumb {
   background: rgb(9, 9, 9);
   border-radius: 50px;
 }
 
 ::-webkit-scrollbar-thumb:hover {
   background: rgb(254, 252, 252);
 }
 html {
   background-color: black;
   scroll-behavior: smooth;
 }
 
 body {
   margin: 0px;
   font-family: Inter;
 }
 
 .navtab_container {
   position: relative;
   display: flex;
   justify-content: space-between;
   background-color: rgb(7, 1, 36);
 }
 .navtab_container img {
   height: 120px;
   width: auto;
 }
 .tabmenu_container {
   display: flex;
   justify-content: space-between;
   list-style-type: none;
 }
 .tabmenu_container li a {
   text-decoration: none;
   color: white;
   padding: 30px;
   text-transform: uppercase;
   margin-right: 50px;
   font-size: 20px;
 }
 .bigS img {
   width: 100%;
   object-fit: cover;
   height: 700px;
   object-position: top;
   filter: brightness(20%);
   position: relative;
 }
 .bigS::before {
   content: "";
   position: absolute;
   bottom: 0;
   width: 100%;
   height: 100px;
   background: linear-gradient(to top #0b0c53, transparent);
   z-index: 1000;
 }
 .tabmenu_container li a:hover {
   background: rgb(11, 27, 61);
   color: rgb(208, 216, 238);
 }
 
 #text {
   position: absolute;
 }
 
 #btn {
   text-decoration: none;
   display: inline-block;
   padding: 8px 30px;
   border-radius: 40px;
   background: rgb(255, 250, 250);
   color: rgb(0, 0, 0);
   font-size: 1.5rem;
 }
 .sec {
   position: relative;
   padding: 100px;
   background: rgb(7, 1, 36);
 }
 .sec h2 {
   font-size: 1.2rem;
   margin-bottom: 10px;
   color: white;
 }
 .sec p {
   color: white;
 }
 .info h2 {
   position: absolute;
   text-align: center;
   margin: 50px;
   font-size: 3rem;
   top: 45%;
   z-index: 10;
   color: white;
 }
 .info a {
   position: absolute;
   text-align: center;
   margin: 50px;
   font-size: 3rem;
   top: 55%;
   z-index: 10;
   color: white;
 }
 .bigS {
   width: 100%;
   object-fit: cover;
   height: 700px;
   object-position: top;
   filter: brightness(90%);
   position: relative;
 }
 
 .gallery img {
   max-width: 100px;
   margin: auto;
 }
 </style>