import axios from "axios"


export const getGames=()=>{
    return async function(dispach){
        let games = await axios.get(`backend-pi-videogames-production.up.railway.app/videogames`);
        return dispach({
        type: 'GET_GAMES',
        payload: games.data 
        })
    }
}

export const getGamesByName=(name)=>{
    return async function(dispach){
        let gamesByName = await axios.get(`backend-pi-videogames-production.up.railway.app/videogames?name=${name}`)
        return dispach({
            type: 'GET_GAMES_NAME',
            payload: gamesByName.data
        })
    }
}

export const getGenres = ()=>{
    return async function(dispach){
        let genres = await axios.get(`backend-pi-videogames-production.up.railway.app/genres`);
        return dispach({
        type: 'GET_GENRES',
        payload: genres.data 
        })
    }
}

export const filterByGenre = (payload) => {
    return {
        type: 'FILTER_BY_GENRE',
        payload
    }
}

export const filterGames = (payload)=>{
    return{
        type: "FILTER_ORDER",
        payload
    }
}
export const filterByRating = (payload) => {
   return {
      type: 'FILTER_BY_RATING',
      payload
   }
} 

export const sortByName = (payload) => {
   return {
      type: 'SORT_BY_NAME',
      payload
   }
}

export const filterApiDb = (payload) => {
    return {
       type: 'FILTER_API_DB',
       payload
    }
}

export const getGameById = (id)=>{
    return async function(dispach){
        let game = await axios.get(`backend-pi-videogames-production.up.railway.app/videogames/${id}`);
        return dispach({
        type: 'GET_GAME_ID',
        payload: game.data 
        })
    }
}

export const loaded = ()=>{
    return{type: 'LOADED'}
}

export const postVideogame = (payload) => {
    return async (dispatch) => {
       try {
          console.log(payload)
          const json = await axios.post('backend-pi-videogames-production.up.railway.app/videogames', payload)
          console.log(json.data)
          return dispatch({
             type: 'POST_VIDEOGAME',
             payload: json.data
          })
       } catch(err) {
          console.log(err)
       }
    }
 }



// export const setGamesLocal = ()=>{
//     return{type: 'SET_GAMES'}
// }

