<template>
<header class="navtab_container">
    <RouterLink :to="{name: 'home'}" class="navtab_item1">
      <img src="./Img/logo.png" alt="Logo" />

    </RouterLink>
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