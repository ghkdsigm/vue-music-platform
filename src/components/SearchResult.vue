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
                <div>
                    앨범 검색결과
                </div>
                <strong class="title">{{group.name}}</strong>
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
    font-size:25px;
    font-weight: bold;
}
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
            img {
                widows: 90%;
            }
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
            .genre{
                background: #f953c6; /* fallback for old browsers */
                background: -webkit-linear-gradient(to right, #f953c6, #b91d73); 
                background: linear-gradient(to right, #f953c6, #b91d73); 
                color:#fff;    
                padding: 5px 25px;    
                border-radius: 15px;    
                position: relative;
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
                font-size: 43px;
                line-height: 52px;
                letter-spacing: -.72px;
                white-space: pre-line;
                color: #fff;    
                font-weight: 600;
            }
            .info{
                overflow: hidden;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;
                text-overflow: ellipsis;
                white-space: normal;
                word-break: break-all;
                display: block;
                display: -webkit-box;
                position: relative;
                height: 50px;
                margin-top: 17px;
                font-size: 18px;
                line-height: 25px;
                letter-spacing: -.5px;
                color: hsla(0,0%,100%,.7);
                word-break: keep-all;
                font-weight:400;
            }
            .sub {
                position: relative;
                margin-top: 9px;
                margin-left: 1px;
                .item {
                    display: inline-block;
                    font-size: 15px;
                    line-height: 18px;
                    letter-spacing: -.3px;
                    vertical-align: top;
                    color: hsla(0,0%,100%,.6);
                }
            }
            .linkTo{
                position: absolute;
                display: block;
                margin-top: 25px;
            }
        }
    }
}
</style>