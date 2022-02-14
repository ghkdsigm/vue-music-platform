<template>  
    <div class="music_list">
        <img :src="music.Poster" alt="" width="200"/> 
        <div class="info">
            <div class="year">
                {{ music.Year }}
            </div>
            <div class="title">
                {{ music.Title }}
            </div>
        </div>   
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
        height:250px;
    }
</style>