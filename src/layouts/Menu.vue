<template>
  <Nav />
</template>

<script>
import Nav from '../components/Nav'

export default ({
  components: {
    Nav
  }
})
</script>

<style lang="scss" scoped>
header {
  position: fixed;
  top: 0;
  bottom: 0px;
  width: 245px;
  z-index: 10100;
  background-color: #000;
  border-right: 1px solid hsla(0,0%,100%,.1);     
}
</style>