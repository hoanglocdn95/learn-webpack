import React from 'react';
import './css.css';
import './less.less';

class App extends React.Component {
  render() {
    return (
      <div className='red'>
        <p className='text'>
          That's WEBFUCK 
        </p>
        with Webpack
      </div>
    );
  }
}

export default App;
