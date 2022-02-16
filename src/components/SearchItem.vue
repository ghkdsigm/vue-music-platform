<template>  
    <div class="music_list">
        <a :href="music.url" target="_blank">
            <img :src='music.image.pop([3])["#text"]' alt="" width="200" @error="replaceByDefault" />
            <!-- <div>{{ music.image.pop([i])["#text"] }}</div> -->
            <!-- <div class="poster" :style="{backgroundImage: `url(${img})`}"></div> -->
            <div class="info">
                <div class="title">
                    {{ music.name }}
                </div>
                <div class="artistName">
                    {{ music.artist }}
                </div>                
            </div> 
        </a>
    </div> 
</template>

<script>
export default {    
    props:{
        music:{
            type:Object,
            default:() => ({})
        }         
    },
    methods: {
        replaceByDefault(e) {
        e.target.src = 'https://allforyoung-maycan-seoul.s3.ap-northeast-2.amazonaws.com/uploads/description/2021/01/28/3a5f6864-6e64-4b70-9d11-874acbf1b139.jpg'
        }
    }
    
}
</script>

<style lang="scss" scoped>
img {
    width:90%;
    height:220px;
    box-sizing:border-box;
    &:hover {
        border:3px solid #f953c6;
    }
}
.artistName {
    opacity: 0.6;
}

</style>