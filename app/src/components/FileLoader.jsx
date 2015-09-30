'use strict'

import React from 'react';
import ReactCSS from 'reactcss'

//AppBar
import AppBar from 'mat-lib/app-bar'
//Buttons
import FlatButton from 'mat-lib/flat-button'
import FloatingActionButton from 'mat-lib/floating-action-button'
//Paper
import Paper from 'mat-lib/paper'
//Icons
import Poll from 'mat-lib/svg-icons/social/poll'
import Add from 'mat-lib/svg-icons/content/add'
//Table
import Table from 'mat-lib/table/table'
import TableHeader from 'mat-lib/table/table-header'
import TableRow from 'mat-lib/table/table-row'
import TableRowColumn from 'mat-lib/table/table-row-column'
import TableBody from 'mat-lib/table/table-body'
import TableHeaderColumn from 'mat-lib/table/table-header-column'
//Styles
import Colors from 'mat-lib/styles/colors'

export default class FileLoader extends ReactCSS.Component {
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
    };
  }

  classes() {
    return {
      'default': {
        iconElementRight: {
          position: 'relative',
          padding: '0 16px'
        },
        pollIconElementRight: {
          display: 'relative',
          'vertical-align': 'middle',
          padding: '0 8px',
          width: '16px',
          height: '16px'
        },
        addFileFLoatingActionButton: {
          marginLeft: '24px',
          marginTop: '-28px'
        },
        addFileInput: {
          bottom: "0",
          cursor: "pointer",
          left: "0",
          opacity: "0",
          position: "absolute",
          right: "0",
          top: "0",
          width: "100%",
        },
        tallAppBar: {
          height: '200px'
        }
      }
    }
  }


  render() {
    return (
      <div>

        <AppBar
          title="My Files"
          is="tallAppBar"
          showMenuIconButton={false}
          iconElementRight={<FlatButton>
            <span is="iconElementRight"><Poll is="pollIconElementRight" color={Colors.white}/>Graph paper</span>
          </FlatButton>}>
        </AppBar>

        <FloatingActionButton is="addFileFLoatingActionButton">
          <div>
            <input type="file" is="addFileInput" multiple></input>
            <Add color={Colors.white} style={{"vertical-align": "middle"}}/>
          </div>
        </FloatingActionButton>

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
                <TableRow
                  selectable={this.state.selectable}>
                  <TableRowColumn>13-41-02_CorrectedFlowthrough</TableRowColumn>
                  <TableRowColumn>2015-03-05 Baby Croc Field Day Three</TableRowColumn>
                  <TableRowColumn>Mar 3, 2015</TableRowColumn>
                </TableRow>
              </TableBody>
            </Table>
        </Paper>

      </div>
    );
  }
}
// <FlatButton label="Gragh paper"/>
