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
            ? { ...post, editStatus: !post.editStatus}
            : {...post,editStatus:false});
        case "UPDATE_POST":     
            return state.map((post) => {
                if (post.id === action.id) {
                    console.log(action);  
                    return {
                        ...post,
                        title: action.newTitle,
                        content: action.newContent,
                        editing: !post.editStatus
                    }
                } else {
                    return post;
                }
            })
        default:
            return state
    }
}

export default PostReducer;