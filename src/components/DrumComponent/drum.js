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
    let audio = document.getElementById(id);
    audio.currentTime = 0;
    audio.play();
    this.setState({
      key: audio.className,
    });
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
              className="grid-item"
              id="q"
              onClick={this.drumButtonsClick}
            >
              Q
            </button>
            <button
              className="grid-item"
              id="w"
              onClick={this.drumButtonsClick}
            >
              W
            </button>
            <button
              className="grid-item"
              id="e"
              onClick={this.drumButtonsClick}
            >
              E
            </button>
            <button
              className="grid-item"
              id="a"
              onClick={this.drumButtonsClick}
            >
              A
            </button>
            <button
              className="grid-item"
              id="s"
              onClick={this.drumButtonsClick}
            >
              S
            </button>
            <button
              className="grid-item"
              id="d"
              onClick={this.drumButtonsClick}
            >
              D
            </button>
            <button
              className="grid-item"
              id="z"
              onClick={this.drumButtonsClick}
            >
              Z
            </button>
            <button
              className="grid-item"
              id="x"
              onClick={this.drumButtonsClick}
            >
              X
            </button>
            <button
              className="grid-item"
              id="c"
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
