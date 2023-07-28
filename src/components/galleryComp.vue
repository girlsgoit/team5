<template>
<section class="gallery">
    <img src="img/portfolio/1.jpg" alt="sksksk" />

    <img src="img/portfolio/2.jpg" alt="sksksk" />

    <img src="img/portfolio/3.jpg" alt="sksksk" />

    <img src="img/portfolio/4.jpg" alt="sksksk" />

    <img src="assets/portfolio/5.jpg" alt="sksksk" />

    <img src="img/portfolio/6.jpg" alt="sksksk" />
  </section>
</template>
 <script>
export default {name: "myGallery"}
</script>
<style>
.gallery {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));

}


.gallery img {
  width: 100%;
}
Sectiunea Ce facem
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
</style>
