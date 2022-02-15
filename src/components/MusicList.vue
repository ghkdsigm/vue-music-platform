<template>
  <div class="music_list_wrap">
      <div class="inner">
        <MusicItem/>
      </div>
  </div>
</template>

<script>
import MusicItem from '~/components/MusicItem'

export default {
    components:{
        MusicItem
    }
}
</script>

<style lang="scss" scoped>
.music_list_wrap{
    display: flex;
    margin-top:50px;
}
</style>