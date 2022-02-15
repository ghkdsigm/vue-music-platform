<template>
  <h2 class="end_title">장르별 뮤직</h2>
  <div class="sub_list">
      <ul>
          <Category />         
      </ul>
  </div>
</template>

<script>
import Category from '~/components/Category'

export default {
    components:{
        Category
    }

}
</script>

<style lang="scss" scoped>
.end_title{
    padding-bottom: 20px;
    font-size: 38px;
    line-height: 39px;
    letter-spacing: -.5px;
    color: #fff;
    font-weight:bold;
}
</style>