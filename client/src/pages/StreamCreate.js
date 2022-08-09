import React, {Component} from "react";
import {createNewStream} from "../redux/actions";
import {connect} from "react-redux";
import StreamForm from "../components/StreamForm/StreamForm";

class StreamCreate extends Component{

    onSubmit = (formValues) => {
        this.props.createNewStream(formValues);
    }

    render() {
        return(
            <div>
                <h3 className={'stream-form--heading'}>Create a Stream</h3>
                <StreamForm onSubmit={this.onSubmit}/>
            </div>
        )
    }


}

export default connect(null, {createNewStream})(StreamCreate);