<template>
  <div id="conatainer" class="container">
      <div id="content" class="content">
          <RouterView />          
      </div>
      <Footer />
  </div>     
</template>

<script>
import Footer from '~/components/Footer'
export default {
    components:{
        Footer
    }
}
</script>

<style lang="scss" scoped>
.container {
    min-height: 600px;
    padding-left: 245px;  
    .content {
        width: 1525px;
        padding: 55px 0 55px;
        margin: 0 auto 150px;
        position: relative;
    }
}
</style>