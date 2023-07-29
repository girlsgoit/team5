<template>
<!-- <section class="gallery">
    <img src="./portfolio/1.jpg" alt="sksksk" />

    <img src="./portfolio/2.jpg" alt="sksksk" />

    <img src="./portfolio/3.jpg" alt="sksksk" />

    <img src="./portfolio/4.jpg" alt="sksksk" />

    <img src="./portfolio/5.jpg" alt="sksksk" />

    <img src="./portfolio/6.jpg" alt="sksksk" />
  </section> -->
  <section class="gallery">
      <img src="./img/galerie3.jpg" alt="sksksk" />

      <img src="./img/galerie1.jpg" alt="sksksk" />
      <img src="./img/galerie4.jpg" alt="sksksk" />

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

/* }
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
} */
</style>
