<template>
  <div class="link_wrap">
    <div class="link">
        <div class="thumb">
            <img :src='image' alt="" class="img_pc"  @error="replaceByDefault">
        </div>
       
        <div class="text_area">
            <span class="genre">Pop</span>
            <strong class="title">Play Count #{{top.playcount}} :  {{ top.name }}</strong>
            <div class="info"> 오랜만에 신곡으로 돌아온 체인스모커스, 강렬한 임팩트를 주는 이진아의 신곡까지. 지금 주목해야 할 멋진 신곡들을 VIBE 매거진에서 확인하세요. 글 : 박희아, 이대화 </div>
            <div class="sub"></div>
            <span class="item"> VIBE MAG </span><span class="item">2022.02.07</span>
        </div> 
    </div>
  </div>  
</template>

<script>
import { fetchMusicList } from '../api/index.js'

export default {
    data(){
        return {
            top:[],
            image:[]
        }
    },
    created() {        
        const vm = this;
        fetchMusicList()
            .then(function(response){
                let musicList = response.data.topalbums.album;     
                for (let i = 0; i < musicList.length; i++) {
                    let musicList2 = response.data.topalbums.album[0]["image"].pop([i])["#text"];
                    let deepList = musicList[0]
                    let list2 = musicList2                    
                    let list = deepList                 
                    vm.top = list; 
                    vm.image = list2;
                    break
                 }                         
            })
            .catch(function(error){
                console.log(error);
            })
    },
    methods: {
        replaceByDefault(e) {
        e.target.src = 'https://allforyoung-maycan-seoul.s3.ap-northeast-2.amazonaws.com/uploads/description/2021/01/28/3a5f6864-6e64-4b70-9d11-874acbf1b139.jpg'
        }
    }
}
</script>

<style lang="scss" scoped>
.link_wrap{
    z-index: 20;
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
            .img_pc {
                position: relative;
                width: 100%;
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
        }

    }
}
</style>