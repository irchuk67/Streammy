import React, {Component} from "react";
import {connect} from "react-redux";
import {fetchStreams, openPopup} from "../../redux/actions";
import {Link} from 'react-router-dom'
import './StreamList.scss';
import {AddAPhoto} from "@mui/icons-material";

class StreamList extends Component{
    componentDidMount() {
        this.props.fetchStreams()
    }

    renderStreams(){
        return this.props.streams.map(stream => {
            return (
                <li className={'streams--list__item'} key={stream.id}>
                    <AddAPhoto id={'photo'} />
                    <Link
                        className={'streams--list__item--title'}
                        to={`/streams/${stream.id}`}>
                        {stream.title}
                    </Link>
                    <p className={'streams--list__item--description'}>{stream.description}</p>
                    {this.renderButtons(stream)}
                </li>
            )
        })
    }

    renderButtons(stream) {
        if(this.props.currentUserId === stream.userId){
            return(
                <div className={'buttons'}>
                    <Link to={`/streams/edit/${stream.id}`} className={'buttons__edit'}>
                        Edit
                    </Link>
                    <Link className={'buttons__delete'} to={`/streams/delete/${stream.id}`} onClick={() => this.props.openPopup()}>
                        Delete
                    </Link>
                </div>
            )
        }
    }

    renderCreateButton(){
        if(this.props.isSignedIn){
            return <Link className={'create-stream'} to={'/streams/new'}>Create stream</Link>
        }
    }

    render() {
        return(
            <div className={'streams'}>
                <div className={'row'}>
                    <h1 className={'streams--heading'}>Streams</h1>
                    {this.renderCreateButton()}
                </div>
                <ul className={'streams--list'}>
                    {this.renderStreams()}
                </ul>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        streams: Object.values(state.streams), //obj to array
        currentUserId: state.auth.userId,
        isSignedIn: state.auth.isSignedIn
    }
}

export default  connect(mapStateToProps, {fetchStreams, openPopup})(StreamList);