import * as types from '../constants/PostTypes';
import data from '../data.json';

const initialState = data;
const PostReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_POST":
            return [
                {
                    id:'1',
                    title:action.title,
                    content:action.content,
                    editStatus:false
                },
                ...state
            ]
        case "DELETE_POST":
            return  state.filter(post => post.id!=action.id)
        case "EDIT_POST":
            return state.map((post) => post.id === action.id
            ? { ...post, editStatus: !post.editStatus }
            : post);
        case "UPDATE_POST":
            return state.map((post) => {
               if( post.id === action.id){
                   post.title = action.title;
                   post.content = action.content
               }
               return post
            })
        default:
            return state
    }
}

export default PostReducer;