import React, { Component } from 'react';
import { Document, Page } from 'react-pdf';

class MagicItemsPage extends Component {
  state = {
    numPages: null,
    pageNumber: 1,
  }
 
  onDocumentLoad = ({ numPages }) => {
    this.setState({ numPages });
  }

  render() {
    const { pageNumber, numPages } = this.state;

    var pages = []
    for (var i = 0; i < numPages; ++i) {
      pages.push(<Page pageNumber={i} />);
    }

    return (
      <div className="page">
        <Document
          file="pdf/Sane_Magical_Prices.pdf"
          onLoadSuccess={this.onDocumentLoad}>
          {pages}
        </Document>
      </div>
    );
  }
}

export default MagicItemsPage;
