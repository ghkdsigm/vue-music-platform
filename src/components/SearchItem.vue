<template>  
    <div class="music_list">
        <a :href="music.url">
            <img :src='music.image.pop([i])["#text"]' alt="" width="200" />
            <!-- <div>{{ music.image.pop([i])["#text"] }}</div> -->
            <!-- <div class="poster" :style="{backgroundImage: `url(${img})`}"></div> -->
             <div class="info">
                <div class="year">
                    {{ music.artist }}
                </div>
                <div class="title">
                    {{ music.name }}
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
    }
    
}
</script>

<style lang="scss" scoped>
img {
        height:220px;
    }
</style>