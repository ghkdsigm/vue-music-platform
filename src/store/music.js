import axios from 'axios'

export default {
    // module!
    namespaced: true,

    // data!
    state:() => ({
        musics:[],  
        title:'',
        poster:''   
    }),

    // computed !
    getters:{},
   
    // methods!!
    // mutation에서만 데이터변경이 가능함
    mutations:{       
        // updateState(state, payload){
        //     Object.keys(payload).forEach(key => {
        //         state[key] = payload[key]
        //     })
        // },
       
        setapiValue(state, payload){
            state.musics = payload;
        },
        resetMovies(state){
            state.musics = []
            //state.message = _defaultMessage
            //state.loading = false
        }
    },
    
    actions:{
        async searchMusics({ commit }, payload){
            const {title, artist, image} = payload
            
            
            // const LASTFM_API_KEY = '9af4387404a23d44f266ac8b3af22df5'            
            // const res = await axios.get(`https://ws.audioscrobbler.com/2.0/?method=album.search&album=bts&api_key=9af4387404a23d44f266ac8b3af22df5&format=json`)
            // axios.request(res).then(function (response) {
                
            //     console.log(response);            
               
            // }).catch(function (error) {
            //     console.error(error);
            // });

            const LASTFM_API_KEY = '9af4387404a23d44f266ac8b3af22df5' 
            const res = {
            method: 'GET',
                url: `http://ws.audioscrobbler.com/2.0/?method=album.search&album=${title}&api_key=${LASTFM_API_KEY}&format=json`,
                params: {limit:'20'},
                crossDomain: true                   
            };
            
            axios.request(res).then(function (response) {                
                let musicList = response.data.results.albummatches.album;
                for (let i = 0; i < musicList.length; i++) {
                    //   let albumImg = musicList[i]["image"].pop([i])["#text"]
                    //   let albumTitle = musicList[i]["name"]
                    //   let albumArtist = musicList[i]["artist"]                    
                    commit('setapiValue', musicList);
                                        
                 }
                
            }).catch(function (error) {
                console.error(error);
            });
            
            //const { results } = res.data
            // commit('updateState', {
            //     musics: response.data.results.albummatches.album,

            // })   
            
            
            
            
            // 영화 api (iamdb)-----------------
            // const OMDB_API_KEY = '7035c60c'
            // const res = await axios.get(`https://www.omdbapi.com/?apikey=${OMDB_API_KEY}&s=${title}&type=${type}&y=${year}$page=3`)
            
            // const { Search, totalResults } = res.data   
            // commit('updateState', {
            //     musics: Search,
            // })   

            // const total = parseInt(totalResults, 30)
            // const pageLength = Math.ceil(total / 10)
                     
            // 음악 api (spotify)----------------
            // const res = {
            //     method: 'GET',
            //         url: 'https://spotify23.p.rapidapi.com/search/',
            //         params: {q: `${title}`, type: 'albums', offset: '0', limit: '1', numberOfTopResults: '5'},
            //         headers: {
            //             'x-rapidapi-host': 'spotify23.p.rapidapi.com',
            //             'x-rapidapi-key': '8ab0ba4a09msh838d3cdc2c00a56p158278jsnc416649a319c'
            //         }
            //     };
              
            //   axios.request(res).then(function (response) {
                
            //        console.log(response.data);                
            //        console.log(response.data.query);
            //        console.log(response.data.albums.items[i].data.name);
            //        console.log(response.data.albums.items[i].data.coverArt.sources[2].url);
            //        console.log(response.data.albums.items[i].data.date.year);  
                  
            //   }).catch(function (error) {
            //       console.error(error);
            //   });
 

                  
        },        
    }    

}
