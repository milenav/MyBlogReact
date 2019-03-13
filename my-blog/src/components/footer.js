import React, { Component } from 'react';

const fullYear = new Date().getFullYear();
class Footer extends Component {
   render () {
       return (
        <footer className="py-3 bg-dark fixed-bottom">
        <div className="container">
          <p className="m-0 text-center text-white">Copyright {fullYear} &copy; My Blog Inc. All rights reserved.</p>
          <p className="m-0 text-center text-white">Designed by Milena Valcheva</p>
        </div>
      </footer>
       )
   }
}

export default Footer;