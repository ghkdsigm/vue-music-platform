<template>
  <h2 class="end_title"><a href="/"><span>←</span> 홈으로</a></h2>
  <!-- <h3>{{musics.name}}검색결과</h3> -->
  <div class="today_headline">
      <div class="link_wrap">
        <div class="link">
            <div class="thumb">
                <img :src="pics.url" alt="">
            </div>
            <div class="text_area">
                <p>
                    앨범 검색결과
                </p>
                <strong class="title">' {{group.name}} '</strong>
            </div>
        </div> 
    </div>
  </div>
  

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
        },
        pics(){
            return this.$store.state.music.pics
        },
        group(){
            return this.$store.state.music.group
        }      
    },
}
</script>

<style lang="scss" scoped>
.end_title {
    font-size:35px;
    font-weight: bold;
}
.music_list_wrap{
    display: flex;
    margin: 50px -25px 0 0;
    .inner{
        
        .music_list {
            width:258px;
            display: inline-block;
            padding: 0 0 50px 0;
            box-sizing: border-box;
            text-align: left;
            vertical-align: top;  
            img {
                widows: 100%;
            }       
        }
    }
}



.link_wrap{
    z-index: 20;
    margin-top: 25px;
    .link{
        display: block;
        position: relative;
        padding-left: 482px;
        height: 336px;
        overflow: hidden;
        .thumb {
            position: absolute;
            top: 0;
            left: 0;
            width: 482px;
            height: 100%;
            overflow: hidden;
            img {
                position: relative;
                width: 100%;    
                bottom: 15%;
            }
        }
        .text_area {
            position: relative;
            height: 100%;
            padding: 50px 90px 0 60px;
            overflow: hidden;
            -webkit-box-sizing: border-box;
            box-sizing: border-box;
            background: no-repeat 50%;
            background-size: 2000px;
            background-image:url(https://music-phinf.pstatic.net/20220207_162/1644214553488WKdlP_JPEG/%C4%BF%B9%F61.jpg?type=f720_720_b50);
            &::before {
                position: absolute;
                top: 0;
                left: 0;
                bottom: 0;
                right: 0;
                background-color: rgba(0,0,0,.55);
                content: "";
            }
            p {                
                color:#fff;       
                position: relative;
                margin-bottom:25px;
                font-size:25px;
                font-weight: 200;
            }
            .title {
                overflow: hidden;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;
                text-overflow: ellipsis;
                white-space: normal;
                word-break: break-all;
                display: block;
                display: -webkit-box;
                position: relative;
                left: -2px;
                max-height: 104px;
                margin-top: 10px;
                font-size: 63px;
                line-height: 52px;
                letter-spacing: -.72px;
                white-space: pre-line;
                color: #fff;    
                font-weight: 600;
            }            
        }
    }
}
</style>