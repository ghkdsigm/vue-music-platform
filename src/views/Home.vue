<template>
  <div class="today_headline">
      <Headline/>
  </div>
  <div>
      <MusicList/>
  </div>
</template>

<script>
import Headline from '~/components/Headline'
import MusicList from '~/components/MusicList'

export default {
    components:{
        Headline,
        MusicList
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