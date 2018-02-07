import React, { Component } from 'react';
import { Document, Page } from 'react-pdf';

class NpcPage extends Component {
  render() {
    return (
      <div className="page">
        <div className="row">
          <div className="col-sm-12"><h1 className="page-title text-center">NPC Creation</h1></div>
        </div>
        <div className="row">
          <div className="col-sm-12">NPC Creation</div>
        </div>
      </div>
    );
  }
}

export default NpcPage;
