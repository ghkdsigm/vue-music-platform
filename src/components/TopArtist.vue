<template>  
    <li class="music_list" v-for="(item, index) in recents" :key="index">
        <a target="_blank">            
            <div class="info">                  
                <span class="index">
                     <span class="pc">{{ index + 1}}</span>
                </span>
                <span class="playcount">
                    총 <span class="pc">{{ item.playcount }}</span> 번 재생
                </span>
                <span class="listeners">
                    총 <span class="ls">{{ item.listeners }}</span> 명의 청취자
                </span>
                <span class="artist">
                    {{ item.name }}
                </span>
                <span class="link">
                    <a :href="item.url" target="_blank">바로가기</a>
                </span>
            </div> 
        </a>
    </li> 
</template>

<script>
import { topArtist } from '../api/index.js'

export default {    
    data(){
        return {
            recents:[]
        }
    },
    methods: {
        replaceByDefault(e) {
            e.target.src = 'https://allforyoung-maycan-seoul.s3.ap-northeast-2.amazonaws.com/uploads/description/2021/01/28/3a5f6864-6e64-4b70-9d11-874acbf1b139.jpg'
        }
    },
    created() {        
        const vm = this;
        topArtist()
            .then(function(response){
                let musicList = response.data.artists.artist;
                for (let i = 0; i < musicList.length; i++) {
                    let list = musicList
                    return vm.recents = list; 
                }                         
            })
            .catch(function(error){
                console.log(error);
            })
    }
    
}
</script>

<style lang="scss" scoped>
img {
        height:220px;
        border:3px solid transparent;
        &:hover {
            border:3px solid #f953c6;
        }
    }
.music_list {
    width:100%;
    display: inline-block;
    padding: 10px 25px 10px;
    box-sizing: border-box;
    vertical-align: top;      
    border-bottom: 1px solid #242424;
    &:hover {
        background: #f953c6;
        background: -webkit-gradient(linear, left top, right top, from(#f953c6), to(#b91d73));
        background: linear-gradient(to right, #f953c6, #b91d73);
        color:#fff;
    }
    .info{
        text-overflow: ellipsis;
        word-break: break-all;
        overflow: hidden; 
        display:flex;
        span {
            min-width: 16%;
            font-size: 16px;
            font-weight: 300;
            &:first-child{
                width:5%;
                text-align: center;
                padding: 0 5% 0 0;
            }
            &:last-child{
                text-align: center;                
            }
            .pc {
                color:rgb(172, 172, 172);                
            }
            .ls {
                color:rgb(172, 172, 172);               
            }
            &:nth-of-type(4){
                text-align: center;
                width:35%;
            }
            &:last-child{
                width:25%;
            }
        } 
        .artist {
            font-weight:bold;
            font-size:20px;
        }
    }          
}
</style>