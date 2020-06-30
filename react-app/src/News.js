import React, { Component } from 'react';
import { connect } from 'react-redux';

 class News extends Component {
    // useEditStatusInStore = () =>{
    //     var { dispatch }=this.props;
    //     dispatch({type:'CHANGE_EDIT_STATUS'})
    // }
    render() {
        const { useEditStatusInStore } = this.props;
        return (
            <div>
                <button onClick={useEditStatusInStore}>CLick</button>
            </div>
        )
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        editStatus: state.editStatus
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        useEditStatusInStore: () => {
            dispatch({type:'CHANGE_EDIT_STATUS'})
        }
    }
}
export default  connect(mapStateToProps,mapDispatchToProps)(News)

