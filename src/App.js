import React from 'react';
import './App.css';
import Drum from './components/DrumComponent/drum.js'
import Power from './components/PowerComponent/power.js'
import Piano from './components/PianoComponent/piano.js'

/* the parent component which consist of the power state which switches it off and on, also the bank state
  which switches it from drum to piano */
class Home extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      power : true,
      bank : 'drum',
      volume: 0.3,
    }

  }

/* it turns the state's power on when the power is clicked */
  powerClick = () => {
      this.setState({
        power: true
      });
  }

/* turns the state's power off but retains the state it was before the power was switched off */
  powerOff = () =>{
    this.setState({
      power: false,
      bank: this.state.bank
    });
  }

  handleVolume = (e) => {
    this.setState({
      volume: e.target.value
    })
  }

/* switches the state's bank to piano */
  drumBankClick = () =>{
    this.setState({
      bank: 'piano'
    });
  }

/* switches the state's bank to drum */
  pianoBankClick = () =>{
    this.setState({
      bank: 'drum'
    });
  }
  
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

/* conditional render; if power is on, if states's bank is piano or drum, different component are rendered
  respectively */
  render(){
    if(!this.state.power){
      return(
        <div>
        <Power power={this.powerClick} />
        </div>
      );
    }else if(this.state.power && this.state.bank === 'drum'){
      return(
      <Drum powerOff={this.powerOff} drumBankClick={this.drumBankClick} volume={this.state.volume} handleVolume={this.handleVolume}/>
    );
    }

    if(this.state.power && this.state.bank === 'piano'){
      return(
        <div>
        <Piano powerOff={this.powerOff} pianoBankClick={this.pianoBankClick} volume={this.state.volume} handleVolume={this.handleVolume}/>
        </div>
      );
    }
  }
}



export default Home;
