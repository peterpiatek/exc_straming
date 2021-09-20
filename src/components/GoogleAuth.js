import React, {Component} from 'react';
import {connect} from "react-redux";
import {signIn, signOut} from "../actions";

class GoogleAuth extends Component {

    componentDidMount() {
        window.gapi.load('auth2', async() => {
            this.auth = await window.gapi.auth2.init({
                clientId: '1016637979120-hgd6gi5ar9bs6t6v3o9b2hl4budh6sm6.apps.googleusercontent.com'
            })
            this.onSignStatusChange(this.auth.isSignedIn.get());
            this.auth.isSignedIn.listen(this.onSignStatusChange);
        })
    }

    onSignStatusChange = (isSignedIn) => {
        if(isSignedIn){
            if(this.profile === null || !this.profile){
                console.log(this.auth.currentUser.get().getBasicProfile());
                const userProfileData = this.auth.currentUser.get().getBasicProfile();
                if(userProfileData){
                    this.profile = {
                        email: userProfileData.getEmail(),
                        id: userProfileData.getId(),
                        name: userProfileData.getName(),
                    }
                }
            }
            this.props.signIn(this.profile);
        } else {
            this.profile = null;
            this.props.signOut();
        }
    }

    renderButtons = () => {
        if(this.props.isSignedIn === null){
            return null;
        } else if(this.props.isSignedIn){
            return (
                <div className="item">
                    <button onClick={this.onSignOutClick} className="ui button google red"><i className="icon google" />Sign Out</button>
                </div>
            );
        } else {
            return (
                <div className="item">
                    <button onClick={this.onSignInClick} className="ui button google red"><i className="icon google" />Sign In</button>
                </div>
            );
        }
    }

    onSignInClick = () => {
        this.auth.signIn();
    }
    onSignOutClick = () => {
        this.auth.signOut();
    }

    render() {
        return (
            <div>{this.renderButtons()}</div>
        );
    }

}

const mapStateToProps = state => {
    return {isSignedIn: state.auth.isSignedIn}
}

export default connect(mapStateToProps, {signIn, signOut})(GoogleAuth);
