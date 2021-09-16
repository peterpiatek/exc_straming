import React, {Component} from 'react';

class GoogleAuth_old extends Component {

    state = {
        isSignedIn: null
    }

    componentDidMount() {
        const gapi = window.gapi;
        gapi.load('auth2', async () => {
            await gapi.auth2.init({
                clientId: '1016637979120-hgd6gi5ar9bs6t6v3o9b2hl4budh6sm6.apps.googleusercontent.com'
            })
            this.auth = gapi.auth2.getAuthInstance();
            this.setState({isSignedIn: this.auth.isSignedIn.get()});
            this.auth.isSignedIn.listen(this.onAuthChange);
            console.log(this.auth);
        });
    }

    onAuthChange = (loginState) => {
        this.setState({isSignedIn: loginState});
    }

    renderAuthButton = () => {
        if(this.state.isSignedIn === null){
            return null;
        } else if(this.state.isSignedIn) {
            return <div className="item">
                <button onClick={this.onSignOut} className="ui red google button">
                    <i className="google icon"/>Sign Out
                </button>
            </div>
        } else {
            return <div className="item">
                <button onClick={this.onSignIn} className="ui green google button">
                    <i className="google icon" />Sign In
                </button>
            </div>
        }
    }
    onSignIn = () => {
        this.auth.signIn();
    }
    onSignOut = () => {
        this.auth.signOut();
    }

    render () {
        return (
            <div>
                {this.renderAuthButton()}
            </div>
        );
    }
}
 export default GoogleAuth_old;
