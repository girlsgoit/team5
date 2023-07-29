<template>
<header class="navtab_container">
    <a class="navtab_item1" href="../index.html">
      <img src="./Img/logo.png" alt="Logo" />
    </a>
    <nav class="navtab_item2">
      <ul class="tabmenu_container">
        <li><RouterLink :to="{name: 'cultura'}">Cultura</RouterLink></li>
        <li><RouterLink :to="{name: 'economie'}"> Economie</RouterLink></li>
        <li><RouterLink :to="{name: 'IT'}"> IT </RouterLink> </li>
        <li><RouterLink :to="{name: 'sport'}"> Sport </RouterLink></li> 
        </ul>
 </nav>
 
  </header>
</template>
<script> 
export default {
  name: "myHeader2"
}
</script>
<style scoped>
</style>