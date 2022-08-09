import React, {Component} from 'react';
import {gapi} from 'gapi-script';
import {Button} from "@mui/material";
import GoogleIcon from '@mui/icons-material/Google';
import './googleAuth.scss'
import {connect} from "react-redux";
import {signIn, signOut} from "../../redux/actions";


class GoogleAuth extends Component{
    componentDidMount() {
        const start = () => gapi.client.init({
            clientId: '140681333736-i9tcend2vrmjoggl6dsmk8hpjc743jrn.apps.googleusercontent.com',
            scope: 'email',
            plugin_name: 'Streamy'
        }).then(() => {
            this.auth = gapi.auth2.getAuthInstance();
            this.onAuthChange(this.auth.isSignedIn.get());
            this.auth.isSignedIn.listen(this.onAuthChange)
        });
        gapi.load('client: auth2', start)
    }

    onAuthChange = (isSignedIn) =>{
        if(isSignedIn){
            this.props.signIn(this.auth.currentUser.get().getId())
        } else {
            this.props.signOut()
        }
    }

    onSignInClick = () => {
        this.auth.signIn();
    }

    onSignOutClick = () => {
        this.auth.signOut();
    }



    renderAuthButton(){
        if(this.props.isSignedIn === null){
            return null
        }else if(this.props.isSignedIn){
            return (
                <Button variant={'contained'} id={'button-out'} onClick={this.onSignOutClick}>
                    <GoogleIcon/>
                    Sign out
                </Button>
            )
        }else{
            return(
                <Button variant={'contained'} id={'button-in'} onClick={this.onSignInClick}>
                    <GoogleIcon/>
                    Sign In
                </Button>
            )
        }
    }

    render() {
        return (
            <div>
                {this.renderAuthButton()}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return{
        isSignedIn: state.auth.isSignedIn,
    }
}


export default connect(mapStateToProps, {signOut, signIn})(GoogleAuth);