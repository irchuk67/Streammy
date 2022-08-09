import React, {useEffect} from "react";
import PopUp from "../components/PopUp/PopUp";
import {connect} from "react-redux";
import {closePopup, deleteStreamById, fetchStream} from "../redux/actions";
import {LoadingButton} from "@mui/lab";
import history from "../history";

const StreamDelete = (props) => {

    useEffect(() => {
        props.fetchStream(props.match.params.id)
    }, []);

    const actions = () => {
        return(
            <React.Fragment>
                <button className={'delete'} onClick={() => props.deleteStreamById(props.match.params.id)}>Delete</button>
                <button  className={'cancel'} onClick={() => closePopUp()}>Cancel</button>
            </React.Fragment>
        )
    };

    const content = () => {
        if(!props.stream.title){
            return 'Are u sure, u want to delete this stream?'
        }

        return `Are u sure, u want to delete the stream with title "${props.stream.title}"?`
    }

    const closePopUp = () => {
        props.closePopup();
        history.push('/')
    }

    if(!props.stream){
        return <LoadingButton loading/>
    }

    return(
        <div>
           <PopUp
               open={props.open}
               onClose={() => closePopUp()}
               title={'Delete Stream'}
               content = {content()}
               actions={actions}
           />
        </div>
    )
}

const mapStateToProps = (state, ownProps) => {
    return{
        open: state.popup.open,
        stream: state.streams[ownProps.match.params.id]
    }
}


export default connect(mapStateToProps, {closePopup, deleteStreamById, fetchStream})(StreamDelete);