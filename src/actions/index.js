import axios from 'axios'

export const FETCHING = 'FETCHING';
export const SUCCESS = 'SUCCESS';
export const FAILURE = 'FAILURE';
export const fetchChars = () => {

    return (dispatch) => {
        console.log('called dispatch')
        dispatch({type: FETCHING, fetching: true});
        axios.get(`https://swapi.co/api/people/`)
        .then( response => {
            console.log('dispatch success')

            dispatch(
            {type:SUCCESS, characters: response.data, fetching: false}
        )})
        .catch( err => {
            console.log('fail')

            dispatch(
            {type:FAILURE, errorMessage: 'Failed', fetching: false}
        )})
    }
}

// export const callingFriends = () => {

//     return (dispatch) => {

//         dispatch({type: LOADING})
//         axios.get('http://localhost:5000/api/friends')
//         .then( response => {
//             dispatch({type: SUCCESS, friends: response.data})
//     })
//         .catch( err => {
//             dispatch({type: ERROR, errorMessage: "You have no friends. Weep bitterly!" })
//         })
//     }
// }



// we'll need axios

// we'll need to create 3 different action types here.
// one for fetching, one for success and one for failure

// our action creator will be a function that returns a function
// the url to fetch characters from is `https://swapi.co/api/people/`
// remember that now we have controll over our thunk-based action creator
