import numReducer from "./reducers/numReducers";
import editStatusReducer from "./reducers/editStatusReducer";

var redux = require('redux');

// var reducer1 = (state=oldState,action)=>{
//   switch (action.type) {
//     case "CHANGE_EDIT_STATUS":
//       return {...state,editStatus:!state.editStatus}
//       break;
//     case "ADD_NEW":
//       return {
//         ...state,
//         num:[
//           ...state.num,
//           action.newItem
//         ]}
//       break;
//     case "DELETE":
//       return {
//         ...state,
//         num:
//         state.num.filter((value,i) => i !=action.number
//         )}
//     default:
//       break;
//   }
//   return state;
// }

const allReducers = redux.combineReducers({
    num:numReducer,
    editStatus:editStatusReducer
})

var store1 = redux.createStore(allReducers);

store1.dispatch({type:"CHANGE_EDIT_STATUS"})
store1.subscribe(() => {
  console.log(store1.getState());
})

store1.dispatch({
  type:"ADD_NEW",
  newItem:"Tai nghe"
})

store1.dispatch({
  type:"DELETE",
  number:0
})


export default store1;  