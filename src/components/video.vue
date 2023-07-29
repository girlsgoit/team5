<template> 
<!-- <section>
    <video id="vid" class="hed" autoplay muted loop src="Img/THE ACADEMIC COLLECTION - 4K Stock Video Footage.mp4"></video>
  </section>
    <section class="info">
      <h2 id="text">Enjoy Your New Experience</h2>
      <a href="Pages/singup.html" id="btn">Sing Up</a>
        
    </section> -->

    <section>
    <video id="vid" class="hed" autoplay muted loop src="./Img/video.mp4"></video>
  </section>
    <section class="info">
      <h2 id="text">Enjoy Your New Experience</h2>
      <a href="../Pages/singup.html" class="btn">Sign Up</a>
      <a href="../Pages/login.html" class="btn" id="btn2">Log In</a>
     </section>
</template>

<script>
   export default {
    name: "myVideo"
   }
  </script> 
  <style>
.hed{
    width: 100%;
   top: 100px;
    filter: brightness(50%);
  }
  .vid{
    padding: 30px 0px;
  width: 100%;
  text-align: center;
 
  }
</style>