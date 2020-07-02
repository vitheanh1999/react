import * as types from '../constants/PostTypes';

export const addPost = (title, content) => ({
    type: types.ADD_POST,
    title,
    content
});
export const deletePost = (id,newTitle,newContent) =>({
    type: types.DELETE_POST,
    id:id,
    newTitle,
    newContent
})
export const editPost = (id) =>({
    type: types.EDIT_POST,
    id
})
export const updatePost = (id,newTitle,newContent) =>({
    type: types.UPDATE_POST,
    id:id,
    newTitle,
    newContent,
})