<template> 
<!-- <section>
    <video id="vid" class="hed" autoplay muted loop src="Img/THE ACADEMIC COLLECTION - 4K Stock Video Footage.mp4"></video>
  </section>
    <section class="info">
      <h2 id="text">Enjoy Your New Experience</h2>
      <a href="Pages/singup.html" id="btn">Sing Up</a>
        
    </section> -->

    <section>
    <video id="vid" class="hed" autoplay muted loop src="./Img/mp4clip.mp4"></video>
  </section>
    <section class="info">
      <h2 id="text">Enjoy Your New Experience</h2>
      <a href="../Pages/singup.html" class="btn" id="btn1">Sign Up</a>
      <a href="../Pages/login.html" class="btn" id="btn2">Log In</a>
     </section>
</template>

<script>
   export default {
    name: "myVideo"
   }
  </script> 


  <style scoped>
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
#text {
  position: absolute;
}


.btn {
  text-decoration: none;
  display: inline-block;
  padding: 8px 30px;
  border-radius: 40px;
  background: rgb(255, 250, 250);
  color: rgb(0, 0, 0);
  font-size: 1.5rem;
}

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

#btn2{
  left:300px;
  color: rgb(0, 0, 0);
  
}

#btn1{
  color: rgb(0, 0, 0);

}
</style>