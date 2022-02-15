<template>
  <h2 class="end_title"><a href="/"><span>←</span> 홈으로</a></h2>
  <h3>{{musics.name}}검색결과</h3>
  <div class="music_list_wrap">
      <div class="inner">
        <SearchItem v-for="music in musics" :key="music.mbid" :music="music">
        </SearchItem>
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
    },
}
</script>

<style lang="scss" scoped>
.music_list_wrap{
    display: flex;
    margin-top:50px;
    .inner{
        
        .music_list {
            width:250px;
            display: inline-block;
            padding: 0 0 50px 0;
            box-sizing: border-box;
            text-align: center;
            vertical-align: top;  
            .info{
                text-overflow: ellipsis;
                word-break: break-all;
                overflow: hidden;  
                max-width: 200px;  
                margin: 0 auto;
            }          
        }
    }
}

</style>