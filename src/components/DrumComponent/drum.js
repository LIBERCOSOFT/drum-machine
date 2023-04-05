import React from "react";

class Drum extends React.Component {
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
            key: 'Heater 1'
        });
    }

    clickW(){
        document.getElementById('w').play();
        this.setState({
            key: 'Heater 2'
        });
    }

    clickE(){
        document.getElementById('e').play();
        this.setState({
            key: 'Heater 3'
        });
    }
    clickA(){
        document.getElementById('a').play();
        this.setState({
            key: 'Heater 4'
        });
    }
    clickS(){
        document.getElementById('s').play();
        this.setState({
            key: 'Clap'
        });
    }
    clickD(){
        document.getElementById('d').play();
        this.setState({
            key: 'Open HH'
        });
    }
    clickZ(){
        document.getElementById('z').play();
        this.setState({
            key: 'Kick_n_Hat'
        });
    }
    clickX(){
        document.getElementById('x').play();
        this.setState({
            key: 'Kick'
        });
    }
    clickC(){
        document.getElementById('c').play();
        this.setState({
            key: 'Closed HH'
        });
    }
    render(){
        return(
        <div>
        <h1>Drum Machine</h1>

        <div>
            <audio id="q"> <source src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3" type="audio/mp3" /> </audio>
            <audio id="w"> <source src="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3" type="audio/mp3" /> </audio>
            <audio id="e"> <source src="https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3" type="audio/mp3" /> </audio>
            <audio id="a"> <source src="https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3" type="audio/mp3" /> </audio>
            <audio id="s"> <source src="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3" type="audio/mp3" /> </audio>
            <audio id="d"> <source src="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3" type="audio/mp3" /> </audio>
            <audio id="z"> <source src="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3" type="audio/mp3" /> </audio>
            <audio id="x"> <source src="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3" type="audio/mp3" /> </audio>
            <audio id="c"> <source src="https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3" type="audio/mp3" /> </audio>
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
                <input type="checkbox" onClick={this.props.drumBankClick}/>
                <span className="slider" />
            </label>
          </div>

        </div>

        <p>coded by <a href="https://github.com/LIBERCOSOFT">LIBERCOSOFT</a></p>
      </div>
    );
    }
}


export default Drum