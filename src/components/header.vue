 
<template>
  <div  class="navtab_container">

    <a class="navtab_item1" href="index.html"
      ><img src="Img/logo.png" alt="Logo" />
    </a>
    <nav class="navtab_item2">
      <ul class="tabmenu_container">
        <li> <a href="index.html"> Acasa </a> </li>
        <li> <a href="index.html"> Despre noi </a> </li>
        <li> <a href="index.html"> Galerie </a> </li>
        <li> <a href="index.html"> Contacte </a> </li>
      </ul>
    </nav>

  </div>
</template>
<script> 

export default {
  name: "myHeader"
}
</script>
<style>
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
.tabmenu_container li a:hover {
  background: rgb(11, 27, 61);
  color: rgb(208, 216, 238);
}
</style>
