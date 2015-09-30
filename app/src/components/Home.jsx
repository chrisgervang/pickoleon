'use strict';

import React from 'react';
import RaisedButton from 'mat-lib/raised-button'
import Dialog from 'mat-lib/dialog'
import ThemeManager from 'mat-lib/styles/theme-manager'
import LightRawTheme from 'mat-lib/styles/raw-themes/light-raw-theme'
import Colors from 'mat-lib/styles/colors'

import FileLoader from './FileLoader.jsx'

class Home extends React.Component {

  constructor() {
    super();
    // this. _handleClick = this. _handleClick.bind(this)
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
      accent1Color: Colors.amber500,
    });

    this.setState({muiTheme: newMuiTheme});
  }

  render() {

    return (
      <FileLoader />
    );
  }

  // _handleClick() {
  //   this.refs.superSecretPasswordDialog.show();
  // }
}

Home.childContextTypes = {
  muiTheme: React.PropTypes.object,
}

export default Home
