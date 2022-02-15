<template>
  <h2 class="end_title">최신 앨범</h2>
  <div class="sub_list">
      <ul>
          <TopArtist />         
      </ul>
  </div>
</template>

<script>
import TopArtist from '~/components/TopArtist'

export default {
    components:{
        TopArtist
    }

}
</script>

<style>
.end_title{
    padding-bottom: 20px;
    font-size: 38px;
    line-height: 39px;
    letter-spacing: -.5px;
    color: #fff;
    font-weight:bold;
}
</style>