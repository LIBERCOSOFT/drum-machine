import React from 'react';

class Piano extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      key: '',
    };
  }

  pianoButtonsClick = (e) => {
    const { id } = e.target;
    let audio = document.getElementById(id.split('-')[0]);
    audio.currentTime = 0;
    audio.play();
    this.setState({
      key: audio.className,
    });
  };

  render() {
    return (
      <div>
        <h1>Piano Machine</h1>

        <div>
          <audio id="q" className='Chord 1'>
            {' '}
            <source
              src="https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3"
              type="audio/mp3"
            />{' '}
          </audio>
          <audio id="w" className='Chord 2'>
            {' '}
            <source
              src="https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3"
              type="audio/mp3"
            />{' '}
          </audio>
          <audio id="e" className='Chord 3'>
            {' '}
            <source
              src="https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3"
              type="audio/mp3"
            />{' '}
          </audio>
          <audio id="a" className='Shaker'>
            {' '}
            <source
              src="https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3"
              type="audio/mp3"
            />{' '}
          </audio>
          <audio id="s" className='Open HH'>
            {' '}
            <source
              src="https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3"
              type="audio/mp3"
            />{' '}
          </audio>
          <audio id="d" className='Closed HH'>
            {' '}
            <source
              src="https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3"
              type="audio/mp3"
            />{' '}
          </audio>
          <audio id="z" className='Punchy-Kick'>
            {' '}
            <source
              src="https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3"
              type="audio/mp3"
            />{' '}
          </audio>
          <audio id="x" className='Side-Stick'>
            {' '}
            <source
              src="https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3"
              type="audio/mp3"
            />{' '}
          </audio>
          <audio id="c" className='Snare'>
            {' '}
            <source
              src="https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3"
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
              onClick={this.pianoButtonsClick}
            >
              Q
            </button>
            <button
              type='button'
              className="grid-item"
              id="w-btn"
              onClick={this.pianoButtonsClick}
            >
              W
            </button>
            <button
              type='button'
              className="grid-item"
              id="e-btn"
              onClick={this.pianoButtonsClick}
            >
              E
            </button>
            <button
              type='button'
              className="grid-item"
              id="a-btn"
              onClick={this.pianoButtonsClick}
            >
              A
            </button>
            <button
              type='button'
              className="grid-item"
              id="s-btn"
              onClick={this.pianoButtonsClick}
            >
              S
            </button>
            <button
              type='button'
              className="grid-item"
              id="d-btn"
              onClick={this.pianoButtonsClick}
            >
              D
            </button>
            <button
              type='button'
              className="grid-item"
              id="z-btn"
              onClick={this.pianoButtonsClick}
            >
              Z
            </button>
            <button
              type='button'
              className="grid-item"
              id="x-btn"
              onClick={this.pianoButtonsClick}
            >
              X
            </button>
            <button
              type='button'
              className="grid-item"
              id="c-btn"
              onClick={this.pianoButtonsClick}
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
              <input
                type="checkbox"
                onClick={this.props.pianoBankClick}
                checked
              />
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

export default Piano;
