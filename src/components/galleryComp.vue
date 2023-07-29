<template>
  <section class="gallery">
      <img src="./img/galerie3.jpg" alt="sksksk" />

      <img src="./img/galerie1.jpg" alt="sksksk" />
      <img src="./img/galerie4.jpg" alt="sksksk" />

    </section>
</template>
 <script>
export default {name: "myGallery"}
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@600&family=Noto+Sans&display=swap");

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
  align-items: center;
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
  padding: 10px;
  text-transform: uppercase;
  margin-right: 50px;
  font-size: 20px;
  border-radius: 20px;
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
  font-size: 40px;
  padding-left: 550px;
  margin-bottom: 10px;
  color: white;
  font-family: 'Inter';
  display: flex;
  text-align: center;
  margin-right: 10px;

}
.sec p {
  color: white;
  font-size: 17px;
  max-width: 1200px;
  text-align: center;
  font-family: 'Inter';
 
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
.gallery {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));

}


.gallery img {
  height: 305px;
  min-width: 458px;
  
}
.contact{
    padding: 25px;
    background-color: #45668e;
    box-sizing: 0 5px 35px rgba(0,0,0,0.15);
    border-radius: 5px;
    width: 40%;
}

.contact h3{
    font-weight: 500;
    font-size: 22px;
    margin-bottom: 10px;
    color: white;
    text-align: center;
}

.form{
    grid-area: form;
    margin-top: -500px;
    position: relative;
    bottom: 50px;
    margin-left: 20px;
    



}

.formbox{
    position: relative;
    width: 100%;
   

}
.formbox .row50{
    display: flex;
    gap: 20px;
}
.inputbox{
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
}
.formbox .row50 .inputbox{
    width: 100%;
}
.inputbox span{
    color: rgb(255, 253, 253);
    margin-top: 10px;
    margin-bottom: 5px;
    
}
.inputbox input{
    padding: 10px;
    font-size: 17px;
    outline: none;
    border: 1px solid #333;
}
.inputbox textarea{
    padding: 10px;
    font-size: 17px;
    outline: none;
    border: 1px solid #333;
    resize: none;
    min-height: 50px;
    margin-bottom: 10px;

}
.inputbox input[type="submit"]{
    background-color: #f2f5f8;
    color: #050505;
    border: none;
    font-size: 17px;
    max-width: 120px;
    font-weight: 500;
    cursor: pointer;

}
.sex-loc{
   margin-top: 20px;
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
 .sec1cultura {
    position: relative;
    padding: 100px;
   background: rgb(68, 65, 80);
  } 
.sec1cultura h2{
  color: white;
}
.sec1cultura p{
  color: white;
}
.sec1IT{
  position: relative;
  padding: 100px;
 background: rgb(68, 65, 80);

}
.sec1IT h2{
color: white;
}
.sec1IT p{
  color: white;
}
.sportsec{
  position: relative;
  padding: 100px;
 background: rgb(68, 65, 80);
}
.sportsec h2{
  color: white;
}
.btn{
  text-decoration: none;
  display: inline-block;
  padding: 8px 30px;
  border-radius: 40px;
  background: rgb(255, 250, 250);
  color: rgb(0, 0, 0);
  font-size: 1.5rem;
}
.info{
  display: flex;
}

.info a{
  color: #050505;
  
}
#btn2{
  left:200px;
  
}

</style>
