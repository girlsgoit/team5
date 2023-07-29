<template>
<myHeader />
<myVideo/>
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
   <mySection2/>
 

   <myFormular/>
   <myInfo3/>
</template>
<script setup>
import myHeader from "../components/header.vue"
import myGallery from "../components/galleryComp.vue";
 import contactComp from "../components/contactComp.vue";
 import myInformation from "../components/informationComp.vue";
 import myWelcome from "../components/welcomeComp.vue";
 import myVideo from "../components/video.vue";
 import myFormular from "../components/formular.vue";
 import mySection2 from "../components/info2.vue";
 import myInfo3 from "../components/info3.vue";
</script>
<style>

</style>