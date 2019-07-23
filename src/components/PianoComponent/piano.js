import React from "react";

class Piano extends React.Component {
    constructor(props){
        super(props);

        this.state ={
            key: ''
        }


    this.clickQ = this.clickQ.bind(this);
    this.clickW = this.clickW.bind(this);
    this.clickE = this.clickE.bind(this);
    this.clickA = this.clickA.bind(this);
    this.clickS = this.clickS.bind(this);
    this.clickD = this.clickD.bind(this);
    this.clickZ = this.clickZ.bind(this);
    this.clickX = this.clickX.bind(this);
    this.clickC = this.clickC.bind(this);
    }

/* buttons Onclick function to play the audio assocaited with them through their id and set the state with
    their name  */
    clickQ(){
        document.getElementById('q').play();
        this.setState({
            key: 'Chord 1'
        });
    }

    clickW(){
        document.getElementById('w').play();
        this.setState({
            key: 'Chord 2'
        });
    }

    clickE(){
        document.getElementById('e').play();
        this.setState({
            key: 'Chord 3'
        });
    }
    clickA(){
        document.getElementById('a').play();
        this.setState({
            key: 'Shaker'
        });
    }
    clickS(){
        document.getElementById('s').play();
        this.setState({
            key: 'Open HH'
        });
    }
    clickD(){
        document.getElementById('d').play();
        this.setState({
            key: 'Closed HH'
        });
    }
    clickZ(){
        document.getElementById('z').play();
        this.setState({
            key: 'Punchy-Kick'
        });
    }
    clickX(){
        document.getElementById('x').play();
        this.setState({
            key: 'Side-Stick'
        });
    }
    clickC(){
        document.getElementById('c').play();
        this.setState({
            key: 'Snare'
        });
    }
    render(){
        return(
        <div>
        <h1>Piano Machine</h1>

        <div>
            <audio id="q"> <source src="https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3" type="audio/mp3" /> </audio>
            <audio id="w"> <source src="https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3" type="audio/mp3" /> </audio>
            <audio id="e"> <source src="https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3" type="audio/mp3" /> </audio>
            <audio id="a"> <source src="https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3" type="audio/mp3" /> </audio>
            <audio id="s"> <source src="https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3" type="audio/mp3" /> </audio>
            <audio id="d"> <source src="https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3" type="audio/mp3" /> </audio>
            <audio id="z"> <source src="https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3" type="audio/mp3" /> </audio>
            <audio id="x"> <source src="https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3" type="audio/mp3" /> </audio>
            <audio id="c"> <source src="https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3" type="audio/mp3" /> </audio>
        </div>

        <div className="home-container">
          <div className="grid-container">
            <button className="grid-item" onClick={this.clickQ}>Q</button>
            <button className="grid-item" onClick={this.clickW}>W</button>
            <button className="grid-item" onClick={this.clickE}>E</button>
            <button className="grid-item" onClick={this.clickA}>A</button>
            <button className="grid-item" onClick={this.clickS}>S</button>
            <button className="grid-item" onClick={this.clickD}>D</button>
            <button className="grid-item" onClick={this.clickZ}>Z</button>
            <button className="grid-item" onClick={this.clickX}>X</button>
            <button className="grid-item" onClick={this.clickC}>C</button>
          </div>

          <div className="right-container">
          <h5>Power</h5>
            <label className="switch">
                <input type="checkbox" onClick={this.props.powerOff} checked/>
                <span className="slider" />
            </label>
            
            <div className="key-container">
                <h4> {this.state.key} </h4>
            </div>

            <h5>Bank</h5>
            <label className="switch">
                <input type="checkbox" onClick={this.props.pianoBankClick} checked/>
                <span className="slider" />
            </label>
          </div>

        </div>

        <p>coded by <a href="https://github.com/OLADIPO-K">OLADIPO-K</a></p>
      </div>
    );
    }
}


export default Piano