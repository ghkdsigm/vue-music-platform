<template>
  <h2 class="end_title">Top 아티스트</h2>
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
.sub_list {margin-top:20px;}
.end_title{
    padding-bottom: 20px;
    font-size: 38px;
    line-height: 39px;
    letter-spacing: -.5px;
    color: #fff;
    font-weight:bold;
}
</style>