


<template>
<header class="navtab_container">
  <RouterLink :to="{name: 'home'}" class="navtab_item1">
      <img src="./Img/logo.png" alt="Logo" />

    </RouterLink>
  <nav class="navtab_item2">
    <ul class="tabmenu_container">
    
      <li><RouterLink :to="{name: 'cultura'}">Domenii</RouterLink></li>

    </ul>
  </nav>
</header>
</template>
<script scoped> 
import { RouterLink } from "vue-router";

export default {
  data: function() {
    return {
      isVisible: false
    }
  },
  methods: {
    toggleVisibility: function() {
      this.isVisible=!this.isVisible
    }
  },
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
