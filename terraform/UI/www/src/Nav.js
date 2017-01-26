import React, {Component} from 'react';
var authUtils = require('./utils/auth.js');

class Nav extends Component {

    onAuthStateChange(loggedIn) {
        console.log('Account Knows of Auth state change')
        this.setState({loggedIn: loggedIn})
    }

    render() {

        //Authed
        var videoLink
        var accountLink

        //unAuthed
        var signupLink

        if (authUtils.hasAuth()) {
            videoLink = <li className="pure-menu-item"><a className="pure-menu-link" href="/video">Videos</a></li>
            accountLink = <li className="pure-menu-item"><a className="pure-menu-link" href="/account">Account</a></li>
        }
        else {
            signupLink = <li className="pure-menu-item"><a className="pure-menu-link" href="/signup">Signup</a></li>
        }

        return (
            <ul className="pure-menu-list">
                {videoLink}
                {accountLink}
                {signupLink}
            </ul>
        );
    }
}

export default Nav;