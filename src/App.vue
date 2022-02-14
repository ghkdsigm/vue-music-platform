<template>
    <div class="home">
        <div class="containerWrap">
            <Menu /> 
            <Main /> 
        </div>
    </div>
   
</template>

<script>
import Main from '~/layouts/Main'
import Menu from '~/layouts/Menu'


export default ({
  components: {
    Main,
    Menu
  }
})
</script>


<style lang="scss" scoped>
@import "~/scss/main";

    .home{
        background-color: #000;
        position: relative;
        min-height: 100%;
        overflow-x: hidden;
        .containerWrap {
            max-width: 1920px;
            margin: 0 auto;
        }
    }

</style>