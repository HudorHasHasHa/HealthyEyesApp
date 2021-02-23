import { off } from 'process';
import React from 'react';
import { render } from 'react-dom';
import { formatTime } from './formatTime';

class App extends React.Component {

  state = {
    status: 'off',
    time: '10',
    timer: null,
  }

  playBell(){
    const bell = new Audio('./sounds/bell.wav');
    bell.play();
  }

  closeApp(){
    window.close();
  }

  stopTimer = () => {
    // clearInterval(this.state.timer);
    this.setState({
      timer: 'null',
      time: '0',
      status: 'off',
    })
  }

  step = () => {
    if(this.state.time>0){
    this.setState({
      time: this.state.time-1,
    });
    }
    else if(this.state.time === 0){
      this.playBell();
      if(this.state.status === 'work'){
        this.setState({
          status: 'rest',
          time: '5',
        });
      }else if(this.state.status === 'rest'){
        this.setState({
          status: 'work',
          time: '10',
        });
      }
    }
  }

  startTimer = () => {
    this.setState({
      timer: setInterval(this.step, 1000),
      time: '10',
      status: 'work',
    });
  }

  render() {
    const { status, time } = this.state;
    switch (status) {
      case 'off':
        return (
          <div>
            <h1>Protect your eyes</h1>
            <p>According to optometrists in order to save your eyes, you should follow the 20/20/20. It means you should to rest your eyes every 20 minutes for 20 seconds by looking more than 20 feet away.</p>
            <p>This app will help you track your time and inform you when it's time to rest.</p>
            <button 
            className="btn" 
            onClick={() => {this.startTimer()}}
            >
              Start
            </button>
            <button className="btn btn-close"
            onClick = {() => {this.closeApp()}}
            >X</button>
          </div>
        )
      case 'work':
        return (
          <div>
            <h1>Protect your eyes</h1>
            <img src="./images/work.png" />
            <div className="timer">
              {formatTime(time)}
            </div>
            <button className="btn"
            onClick = {() => this.stopTimer()}  
            >
              Stop
            </button>
            <button className="btn btn-close"
            onClick = {() => {this.closeApp()}}
            >X</button>
          </div>
        )
      case 'rest':
        return (
          <div>
            <h1>Protect your eyes</h1>
            <img src="./images/rest.png" />
            <div className="timer">
              {formatTime(time)}
            </div>
            <button className="btn"
            onClick = {() => this.stopTimer()}  
            >
              Stop
            </button>
            <button className="btn btn-close"
            onClick = {() => {this.closeApp()}}
            >X</button>
          </div>
        )
    }

    // return (
    //   <div>
    //     
    //     
    //     
    //     <div className="timer">
    //       18:23
    //     </div>
    //     
    //     
    //     
    //   </div>
    // )
  }
};

render(<App />, document.querySelector('#app'));
