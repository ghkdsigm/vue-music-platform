<template>
    <span class="input_area">
        <input type="search" id="search_keyword" title="검색창" placeholder="앨범 검색" autocomplete="off" class="input_search" v-model="title" @keyup.enter.prevent="apply"/>
        <span class="icon_search"></span>                       
    </span>    
</template>

<script>
export default {
     data(){
        return {
            title:'',
            artist:'',
            number: 20,
            image:'',
            pic:[]
        }

     },
     methods:{        
         async apply(e){
             // searchmovie.. 
             //e.preventDefault();   
             this.$store.dispatch('music/searchMusics', {
                 title: this.title,
                 artist: this.artist,
                 number: this.number,
                 image: this.image
             }),
             this.$store.dispatch('music/searchNewMusic', {
                 title: this.title,
             }),
             
             this.$router.push('/SearchResult') 
             //location.href='/SearchResult'
         }
     }
}
</script>


<style lang="scss" scoped>
.input_area {
    position: relative;
    display: block;
    .input_search {
        display: block;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        word-break: break-all;
        padding: 10px 20px 10px;
        width: 100%;
        height: 40px;
        border: 0;
        background-color: #1a1a1a;
        border-radius: 4px;
        font-size: 17px;
        font-weight: 700;
        line-height: 20px;
        letter-spacing: -.3px;
        color: #fff;
        -webkit-transition: background-color .2s ease;
        transition: background-color .2s ease;
        caret-color: #ff00b0;
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        &:focus{
                outline: 0;
                -webkit-box-shadow: 0 0 4px 0 #ffa7f4;
                box-shadow: 0 0 4px 0 #ffa7f4;
                background-color: #262626;
        }
    }
    .icon_search {
        background-position: -452px -512px;
        width: 20px;
        height: 20px;
        position: absolute;
        top: 10px;
        left: 13px;
    }
}
</style>