
import App from '../App';
// var allusers[] =  function fetchUsers() {
//     return function(dispatch) {
//         fetch('http://localhost:3000')
//            .then(resp => {
//                return resp.json()
//            .then( json => dispatch({type: "USER_LIST", json}));
//     })
//   }
// }

export function userList(){
	return{
		type:"USER_LIST",
		payload:[App.addUsers]
	}
}


// export default function reducer (state={
//   mlbIdsLogosColorsData: [],
// }, action) {

//   switch (action.type) {
//     case "FETCH_COLORS": {
//       return {...state, mlbIdsLogosColorsData: action.json }
//     }
//   }
//   return state;
// }





export function fetchMlbIdsLogosColors() {
    return function(dispatch) {
        fetch('/mlb/mlb_ids_logos_colors')
           .then(resp => {
               return resp.json()
           .then( json => dispatch({type: "FETCH_COLORS", json}));
    })
  }
}
