<template>      
    <div class="music_list" v-for="item in recents" :key="item">
        <a target="_blank">            
            <img :src='item.image.pop([3])["#text"]' alt="" width="200" @error="replaceByDefault" />
            <div class="info">
                <div class="year">
                </div>
                <div class="title">
                    {{ item.name }}
                </div>
            </div> 
        </a>
    </div> 
    
</template>

<script>
import { fetchMusicList } from '../api/index.js'

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
        fetchMusicList()
            .then(function(response){
                let musicList = response.data.topalbums.album;
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
    width:250px;
    display: inline-block;
    padding: 0 0 50px 0;
    box-sizing: border-box;
    vertical-align: top;  
    text-align: center;
    .info{
        text-overflow: ellipsis;
        word-break: break-all;
        overflow: hidden;    
        max-width: 200px;
        margin: 0 auto;
    }          
}
</style>