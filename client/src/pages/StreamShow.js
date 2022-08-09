import React, {Component, useEffect} from "react";
import {fetchStream} from "../redux/actions";
import {connect} from "react-redux";
import {LoadingButton} from "@mui/lab";
import flv from 'flv.js';


class StreamShow extends Component{
    constructor(props) {
        super(props);

        this.videoRef = React.createRef();
    }

    componentDidMount() {
        this.props.fetchStream(this.props.match.params.id);
        this.buildPlayer();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        this.buildPlayer();
    }

    componentWillUnmount() {
        this.player.destroy();
    }

    buildPlayer() {
        const {id} = this.props.match.params;

        if(this.player || !this.props.stream){
            return;
        }

        this.player = flv.createPlayer({
            type: 'flv',
            url: `http://localhost:8000/live/${id}.flv`
        });

        this.player.attachMediaElement(this.videoRef.current);
        this.player.load();
    }

    createContent(){
        console.log(this.props.stream)
        if(!this.props.stream){
            return <LoadingButton loading/>
        }else {
            return(
                <React.Fragment>
                    <video ref={this.videoRef} controls style={{width: '100%'}}/>
                    <h1>{this.props.stream.title}</h1>
                    <h5>{this.props.stream.description}</h5>
                </React.Fragment>
            )
        }
    }

    render() {
        return (
            <div>
                {this.createContent()}
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return{
        stream: state.streams[ownProps.match.params.id]
    }
}

export default connect(mapStateToProps, {fetchStream})(StreamShow);