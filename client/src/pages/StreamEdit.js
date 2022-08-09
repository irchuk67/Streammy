import React, {Component} from "react";
import _ from 'lodash'
import {connect} from "react-redux";
import {fetchStream, editStream} from "../redux/actions";
import { LoadingButton } from '@mui/lab';
import StreamForm from "../components/StreamForm/StreamForm";

class StreamEdit extends Component{
    componentDidMount() {
        this.props.fetchStream(this.props.match.params.id);
    }

    onSubmit = (formValues) => {
        this.props.editStream(formValues, this.props.stream)
    }

    showAppropriateElement = () => {
        if(!this.props.stream){
            return <LoadingButton loading/>
        }
        return (
            <div>
                <h3 className={'stream-form--heading'}>Edit a Stream</h3>
                <StreamForm
                    onSubmit={this.onSubmit}
                    initialValues={_.pick(this.props.stream, 'title', 'description')}/>
            </div>
        )
    }

    render() {
        return(
            <div>
                {this.showAppropriateElement()}
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {

    return{
        stream: state.streams[ownProps.match.params.id]
    }
}
export default connect(mapStateToProps, {fetchStream, editStream})(StreamEdit);