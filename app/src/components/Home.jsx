'use strict';

import React from 'react';
import RaisedButton from 'mat-lib/raised-button'
import Dialog from 'mat-lib/dialog'
import ThemeManager from 'mat-lib/styles/theme-manager'
import LightRawTheme from 'mat-lib/styles/raw-themes/light-raw-theme'
import Colors from 'mat-lib/styles/colors'

class Home extends React.Component {
  
  constructor() {
    super();
    this. _handleClick = this. _handleClick.bind(this)
    this.state = {
      muiTheme: ThemeManager.getMuiTheme(LightRawTheme),
    };
  }

  getChildContext() {
    return {
      muiTheme: this.state.muiTheme,
    };
  }

  componentWillMount() {
    let newMuiTheme = ThemeManager.modifyRawThemePalette(this.state.muiTheme, {
      accent1Color: Colors.deepOrange500,
    });

    this.setState({muiTheme: newMuiTheme});
  }

  render() {

    let containerStyle = {
      textAlign: 'center',
      paddingTop: '200px',
    };

    let standardActions = [
      { text: 'Okay' },
    ];

    return (
      <div style={containerStyle}>
        <Dialog
          title="Super Secret Password"
          actions={standardActions}
          ref="superSecretPasswordDialog">
          1-2-3-4-5
        </Dialog>

        <h1>material-ui</h1>
        <h2>example project</h2>

        <RaisedButton label="Super Secret Password" primary={true} onClick={this._handleClick} />

      </div>
    );
  }

  _handleClick() {
    this.refs.superSecretPasswordDialog.show();
  }
}

Home.childContextTypes = {
  muiTheme: React.PropTypes.object,
}

export default Home
