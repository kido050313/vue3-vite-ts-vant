<template>
<keep-alive>
    <RouterView />
  </keep-alive>
  
</template>

<script lang="ts" setup="props">

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body {
  background-color: #fafafa;
}

.footer {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100vw;
}
</style>
