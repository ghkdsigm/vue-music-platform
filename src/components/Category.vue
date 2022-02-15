<template>
    <li class="music_list">
        <a>            
            <img src="https://music-phinf.pstatic.net/20181204_83/1543917552142Qd1y6_PNG/mood_1_NowHot.png?type=f360"/>
        </a>
    </li> 
    <li class="music_list">
        <a>            
            <img src="https://music-phinf.pstatic.net/20181204_1/1543917558419bLOt5_PNG/mood_2_Hip.png?type=f360"/>
        </a>
    </li> 
    <li class="music_list">
        <a>            
            <img src="https://music-phinf.pstatic.net/20181204_11/1543918826895DFvFt_PNG/mood_3_Happy.png?type=f360"/>
        </a>
    </li> 
    <li class="music_list">
        <a>            
            <img src="https://music-phinf.pstatic.net/20181204_2/1543918833159wpHlc_PNG/mood_4_Sad.png?type=f360"/>
        </a>
    </li> 
    <li class="music_list">
        <a>            
            <img src="https://music-phinf.pstatic.net/20181204_26/1543918838129f4Jv3_PNG/mood_5_Love.png?type=f360"/>
        </a>
    </li> 
    <li class="music_list">
        <a>            
            <img src="https://music-phinf.pstatic.net/20181204_238/1543918865951D4jqi_PNG/mood_8_Blankly.png?type=f360"/>
        </a>
    </li> 
    <li class="music_list">
        <a>            
            <img src="https://music-phinf.pstatic.net/20181204_251/1543918889382acDmF_PNG/mood_9_Wokrout.png?type=f360"/>
        </a>
    </li> 
    <li class="music_list">
        <a>            
            <img src="https://music-phinf.pstatic.net/20181204_193/1543918895074bt55B_PNG/mood_10_Relax.png?type=f360"/>
        </a>
    </li> 
    <li class="music_list">
        <a>            
            <img src="https://music-phinf.pstatic.net/20181204_31/1543918854261L2yhu_PNG/mood_6_Broken.png?type=f360"/>
        </a>
    </li> 
    <li class="music_list">
        <a>            
            <img src="https://music-phinf.pstatic.net/20181204_143/1543918860459dh7Hq_PNG/mood_7_Focus.png?type=f360"/>
        </a>
    </li> 
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
img {
        width:90%;
        border:3px solid transparent;
        &:hover {
            border:3px solid #f953c6;
        }
    }
.music_list {
    width:20%;
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
    .artistName {
        opacity: 0.6;
    }      
}
</style>