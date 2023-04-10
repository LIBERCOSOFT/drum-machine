import React from 'react';

class Drum extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      key: '',
    };
  }

  drumButtonsClick = (e) => {
    const { id } = e.target;
    let audio = document.getElementById(id.split('-')[0]);
    audio.currentTime = 0;
    audio.play();
    this.setState({
      key: audio.className,
    });
  };

  componentDidMount() {
    const keyDownHandler = event => {
      let keys = ['q', 'w', 'e', 'a', 's', 'd', 'z', 'x', 'c']
      let pressedKey = event.key.toLowerCase();
      if(keys.includes(pressedKey)){
        document.getElementById(`${pressedKey}-btn`).click();
        document.getElementById(`${pressedKey}-btn`).classList.add('active');
        setTimeout(() => {
          document.getElementById(`${pressedKey}-btn`).classList.remove('active');
        }, 100);
      }
    };

    document.addEventListener('keydown', keyDownHandler);

    return () => {
      document.removeEventListener('keydown', keyDownHandler);
    };
  };

  render() {
    return (
      <div>
        <h1>Drum Machine</h1>

        <div>
          <audio id="q" className="Heater 1">
            {' '}
            <source
              src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
              type="audio/mp3"
            />{' '}
          </audio>
          <audio id="w" className="Heater 2">
            {' '}
            <source
              src="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"
              type="audio/mp3"
            />{' '}
          </audio>
          <audio id="e" className="Heater 3">
            {' '}
            <source
              src="https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"
              type="audio/mp3"
            />{' '}
          </audio>
          <audio id="a" className="Heater 4">
            {' '}
            <source
              src="https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"
              type="audio/mp3"
            />{' '}
          </audio>
          <audio id="s" className="Clap">
            {' '}
            <source
              src="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"
              type="audio/mp3"
            />{' '}
          </audio>
          <audio id="d" className="Open HH">
            {' '}
            <source
              src="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"
              type="audio/mp3"
            />{' '}
          </audio>
          <audio id="z" className="Kick_n_Hat">
            {' '}
            <source
              src="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"
              type="audio/mp3"
            />{' '}
          </audio>
          <audio id="x" className="Kick">
            {' '}
            <source
              src="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"
              type="audio/mp3"
            />{' '}
          </audio>
          <audio id="c" className="Closed HH">
            {' '}
            <source
              src="https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
              type="audio/mp3"
            />{' '}
          </audio>
        </div>

        <div className="home-container">
          <div className="grid-container">
            <button
              type='button'
              className="grid-item"
              id="q-btn"
              onClick={this.drumButtonsClick}
            >
              Q
            </button>
            <button
              type='button'
              className="grid-item"
              id="w-btn"
              onClick={this.drumButtonsClick}
            >
              W
            </button>
            <button
              type='button'
              className="grid-item"
              id="e-btn"
              onClick={this.drumButtonsClick}
            >
              E
            </button>
            <button
              type='button'
              className="grid-item"
              id="a-btn"
              onClick={this.drumButtonsClick}
            >
              A
            </button>
            <button
              type='button'
              className="grid-item"
              id="s-btn"
              onClick={this.drumButtonsClick}
            >
              S
            </button>
            <button
              type='button'
              className="grid-item"
              id="d-btn"
              onClick={this.drumButtonsClick}
            >
              D
            </button>
            <button
              type='button'
              className="grid-item"
              id="z-btn"
              onClick={this.drumButtonsClick}
            >
              Z
            </button>
            <button
              type='button'
              className="grid-item"
              id="x-btn"
              onClick={this.drumButtonsClick}
            >
              X
            </button>
            <button
              type='button'
              className="grid-item"
              id="c-btn"
              onClick={this.drumButtonsClick}
            >
              C
            </button>
          </div>

          <div className="right-container">
            <h5>Power</h5>
            <label className="switch">
              <input type="checkbox" onClick={this.props.powerOff} checked />
              <span className="slider" />
            </label>

            <div className="key-container">
              <h4> {this.state.key} </h4>
            </div>

            <input 
          type="range" 
          min="0" max="1" 
          value={this.props.volume} 
          onChange={this.props.handleVolume}
          step="0.1"/>

            <h5>Bank</h5>
            <label className="switch">
              <input type="checkbox" onClick={this.props.drumBankClick} />
              <span className="slider" />
            </label>
          </div>
        </div>

        <p>
          coded by <a href="https://github.com/LIBERCOSOFT">LIBERCOSOFT</a>
        </p>
      </div>
    );
  }
}

export default Drum;
