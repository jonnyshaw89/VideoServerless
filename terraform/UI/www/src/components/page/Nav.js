import React, {Component} from 'react';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import PropTypes from 'prop-types';

const style = {
    bar: {
        "backgroundColor": "white"
    },
    logo: {
        "height": "40px",
        "cursor": "hand"
    }
};

export default class Nav extends Component {

    handleTouchTap() {
        window.location.href = this.props.homeRoute;
    }

    render() {
        let appLinks
        let authLink
        if(this.props.loggedIn) {
            appLinks = (
                <span>
                    <RaisedButton data-qa="nav-btn-videos" label="Videos" href="/video" />
                    <RaisedButton data-qa="nav-btn-account" label="Account" href="/account" />
                    {/* Which Plan */}

                </span>
            )
            authLink = (<RaisedButton data-qa="nav-btn-logout" label="Logout" href="/" />)
        } else {
            authLink = (<RaisedButton data-qa="nav-btn-login" label="Login" href="/login" />)
        }

        return (
            <AppBar style={style.bar}
                    iconElementLeft={<a data-qa="nav-link-home"  href="/"><img src="/images/DashVid.svg" alt="DashVid.io" style={style.logo} /></a>}
                onLeftIconButtonTouchTap={this.handleTouchTap}
                iconElementRight={
                    <span>
                        {appLinks}
                        {authLink}
                    </span>
                }
            />
        );
    }
}

Nav.propTypes = {
    homeRoute: PropTypes.string.isRequired,
    loggedIn: PropTypes.bool.isRequired,
}