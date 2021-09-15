import React, {Component} from 'react';

class GoogleAuth extends Component {

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
            this.auth.isSignedIn.listen(this.onAuthChange)

        });
    }

    onAuthChange = (loginState) => {
        this.setState({isSignedIn: loginState});
    }

    renderAuthButton = () => {
        if(this.state.isSignedIn === null){
            return <div>Dont know yet</div>
        } else if(this.state.isSignedIn) {
            return <div>I am signed in</div>
        } else {
            return <div>Not signed in</div>
        }
    }

    render () {
        return (
            <div>
                {this.renderAuthButton()}
            </div>
        );
    }
}
 export default GoogleAuth;
