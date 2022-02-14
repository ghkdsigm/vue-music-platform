<template>
  <h3>검색결과</h3>
  <div class="music_list_wrap">
      <div class="inner">
        <SearchItem v-for="music in musics" :key="music.imdbID" :music="music"/>
      </div>
  </div>
</template>

<script>
import SearchItem from '~/components/SearchItem'

export default {
    components:{
        SearchItem
    },
    computed:{
        musics(){
            return this.$store.state.music.musics
        }
    }
}
</script>

<style lang="scss" scoped>
.music_list_wrap{
    display: flex;
    .inner{
        
        .music_list {
            width:250px;
            display: inline-block;
            padding: 0 50px 50px 0;
            box-sizing: border-box;
            vertical-align: top;  
            .info{
                text-overflow: ellipsis;
                word-break: break-all;
                overflow: hidden;
            }          
        }
    }
}

</style>