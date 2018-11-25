import React from 'react';
import platform from 'platform';
import Header from './Header';
import react from './assets/logo.svg';

class App extends React.Component {
  state = {
    os: '',
    width: window.innerWidth,
    height: window.innerHeight,
    hmm: ''
  }
  componentDidMount(){
    const os = platform.os.family;
    this.setState({os});
    window.addEventListener('resize', this.handleWindowSizeChange);
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowSizeChange);
  }
  handleWindowSizeChange = () => {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  };
  render() {
    const { os, height, width } = this.state;
    return (
      <div>
        <Header />
        <div className="App">
          <div>Hello, <span>{os}</span> user!</div>
          <div>Your viewport size is <br/>
          <span className="2">{width}px <small>x</small> {height}px</span></div>
          <br/> <br/>
          <a href={`whatsapp://send?text=Brooo i use an ${os} device brooo\n and its screen resolution is ${width} x ${height} pixels brooooo`} data-action="share/whatsapp/share">Share</a>
        </div>
        <p>Built with <img src={react} alt="react logo"/> by <a href="https://adithyabhat.com" target="_blank" rel="noopener noreferrer">Adithya NR</a></p>
      </div>
    );
  }
}


export default App;
