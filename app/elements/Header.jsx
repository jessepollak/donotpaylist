import React from 'react'
import Helmet from 'react-helmet'
import ReactDOMServer from 'react-dom/server'

import config from 'helmconfig.js'

class Header extends React.Component {
  render() {
    return (
      <Helmet
        title="Do Not Pay"
        meta={config.meta}
        link={config.link}
      />
    );
  }
}

ReactDOMServer.renderToString(<Header />);
let header = Helmet.rewind();

export default header;
