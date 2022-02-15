import axios from 'axios';

//1.HTTP Request & Response와 관련된 기본 설정
const config = {
    baseUrl : 'https://ws.audioscrobbler.com/2.0/',    
    API_KEY : 'f21088bf9097b49ad4e7f487abab981e',
    USER : ['lover','lj','DiffusedOctaves','redbeanbunny','daocent','simptilda','sidneyphillipz','ccckmp','crustywaffleman','Apohrnstre','Dano1200','heatlightnings','kaantsas13'],
}

//2. API 함수들을 정리
function fetchMusicList(){
    var rand = Math.floor(Math.random()*config.USER.length);
    var rValue = config.USER[rand];

    return axios.get(`${config.baseUrl}?method=user.gettopalbums&user=${rValue}&api_key=${config.API_KEY}&format=json`);
}

function topArtist(){
    return axios.get(`${config.baseUrl}?method=chart.gettopartists&api_key=${config.API_KEY}&format=json`);
}

export {
    fetchMusicList,
    topArtist
}
