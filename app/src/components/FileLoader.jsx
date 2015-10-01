'use strict'

import React from 'react';
import ReactCSS from 'reactcss'

//AppBar
import AppBar from 'mat-lib/app-bar'
//Paper
import Paper from 'mat-lib/paper'
//Table
import Table from 'mat-lib/table/table'
import TableHeader from 'mat-lib/table/table-header'
import TableRow from 'mat-lib/table/table-row'
import TableRowColumn from 'mat-lib/table/table-row-column'
import TableBody from 'mat-lib/table/table-body'
import TableHeaderColumn from 'mat-lib/table/table-header-column'
//Styles
import Colors from 'mat-lib/styles/colors'
import ThemeManager from 'mat-lib/styles/theme-manager'
import LightRawTheme from 'mat-lib/styles/raw-themes/light-raw-theme'
import TachyusTheme from './tachyusTheme.js'
import Typography from 'mat-lib/styles/typography'

import OpenFilesButton from './file-loader/OpenFilesButton.jsx'
import GraphPaperButton from './file-loader/GraphPaperButton.jsx'

class FileLoader extends ReactCSS.Component {
  constructor(){
    super();
    this.state = {
      fixedHeader: false,
      selectable: false,
      enableSelectAll: false,
      displaySelectAll: false,
      adjustForCheckbox: false,
      displayRowCheckbox: false,
      showRowHover: true,
      muiTheme: ThemeManager.getMuiTheme(TachyusTheme),
      rows: [
        {name: '13-41-02_CorrectedFlowthrough', experiment: '2015-03-05 Baby Croc Field Day Three', created: 'Mar 3, 2015'},
        {name: 'CapReport_Flowthrough3', experiment: '2015-03-04 Baby Croc Field Overnight Two', created: 'Mar 4, 2015'},
        {name: 'file 3', experiment: 'exp 3', created: 'Mar 5, 2015'}
      ]
    };
  }

  getChildContext() {
    return {
      muiTheme: this.state.muiTheme,
    };
  }

  componentWillMount() {
    let newMuiTheme = this.state.muiTheme;
    // newMuiTheme.appBar.height = "200px" <- some things seem to expect this as '200' while other expect '200px'

    newMuiTheme.tableRow.hoverColor = this.state.muiTheme.rawTheme.palette.primary2Color;

    this.setState({muiTheme: newMuiTheme});
  }



  classes() {
    return {
      'default': {
        openFilesButton: {
          marginLeft: '24px',
          marginTop: '-28px'
        },
        tallAppBar: {
          height: '200px'
        },
        titleHolder: {
          positon: 'absolute',
          top: 0,
          left: 0
        },
      }
    }
  }


  render() {
    var rows = this.state.rows;

    return (
      <div>

        <AppBar
          title="My Files"
          showMenuIconButton={false}
          is="tallAppBar"
          iconElementRight={<GraphPaperButton color={Colors.white}/>}>
        </AppBar>

        <OpenFilesButton iconColor={Colors.white} is="openFilesButton" onChange={this._handleFiles}/>

        <Paper zDepth={0} style={{marginLeft: '104px'}}>
          <Table
              fixedHeader={this.state.fixedHeader}
              selectable={this.state.selectable}>
              <TableHeader
                enableSelectAll={this.state.enableSelectAll}
                displaySelectAll={this.state.displaySelectAll}
                adjustForCheckbox={this.state.adjustForCheckbox}>
                <TableRow
                  displayRowCheckbox={this.state.displayRowCheckbox}
                  selectable={false}>
                  <TableHeaderColumn>Filename</TableHeaderColumn>
                  <TableHeaderColumn>Experiment</TableHeaderColumn>
                  <TableHeaderColumn>Date created</TableHeaderColumn>
                </TableRow>
              </TableHeader>
              <TableBody
                showRowHover={this.state.showRowHover}
                displayRowCheckbox={this.state.displayRowCheckbox}>
                {rows.map(function(row) {
                  return (
                    <TableRow
                      selectable={this.state.selectable}>
                      <TableRowColumn>{row.name}</TableRowColumn>
                      <TableRowColumn>{row.experiment}</TableRowColumn>
                      <TableRowColumn>{row.created}</TableRowColumn>
                    </TableRow>
                  );
                }, this)} // you can pass an arg to define 'this' in the callback!
              </TableBody>
            </Table>
        </Paper>

      </div>
    );
  }

  _handleFiles(event) {
    console.log(event.target.files)
    //Use Electron File object, which has a "path" added to it. http://electron.atom.io/docs/v0.33.0/api/file-object/
  }
}

FileLoader.childContextTypes = {
  muiTheme: React.PropTypes.object,
}

export default FileLoader
// <FlatButton label="Gragh paper"/>
// <div is="titleHolder"><h1 is="title">My Files</h1></div>
// title: {
//   whiteSpace: 'nowrap',
//   overflow: 'hidden',
//   textOverflow: 'ellipsis',
//   margin: 0,
//   paddingTop: 0,
//   letterSpacing: 0,
//   fontSize: 24,
//   fontWeight: Typography.fontWeightNormal,
//   color: this.state.muiTheme.appBar.textColor,
//   lineHeight: this.state.muiTheme.appBar.height + 'px'
// }
