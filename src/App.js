  
import React from 'react';
import './App.css';

class App extends React.Component{
  constructor(){
    super()
    this.state={
      Fullname:"Eren Jäger",
      bio:"Eren is a teenager who swears revenge on enormous creatures known as Titans that devoured his mother and destroyed his town in the Shiganshina district in Wall Maria. In order to defeat the Titans, Eren, alongside his childhood friends Mikasa Ackerman and Armin Arlert, enlist in the Military and join the Exploration Corps—an elite group of soldiers who fight Titans outside the walls and also study the physiology of Titans in order to know what they are fighting. ",
      profession:"Titans ",
      show:true,
      imgSrc:"data:image/jpeg;base64,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",
      buttonMsg:"Hide",
      life:"alive",
      StyleContainer:{
        width: "auto",
        border: "1px solid #00008B",
        backgroundColor: "black"},
      time:0,
    };
  }

  btnStyle={
    width:"200px",
    backgroundColor:"#000028",
    color:"#e7d7f5",
    border:"2px solid #000028",
    borderRadius:"150px",
    textAlign:"center",

  };
  handlebtn=()=>{
    if(this.state.show){
      this.setState({
        StyleContainer:{display:"none"},
        buttonMsg:"Hidden !",
        life:"still free",
        show:false})
    }else{
      this.setState({
        StyleContainer:{
          width: "auto",
          border: "1px solid #00008B",
          backgroundColor: "#00008B"},
        buttonMsg:"Hide",
        life:"free",
        show:true
      })}}
  updatetime=()=>{
    this.setState(prevState=>{return {time:prevState.time+1} })
  }
  componentDidMount() {
    setInterval(() => this.updatetime(),1000);
  }

  render(){
    return (
      <React.Fragment>
        <div className="Container" style={this.state.StyleContainer}>
          <div className="row">
            <div className="column left" style={{backgroundColor:'#00008B'}}>
              <img width ='250px' heigth ='250px' style={{borderRadius:"7px",boxShadow:"0 0 90px 20px #ede1f7"}} src={this.state.imgSrc} alt="imgsrc"/>
            </div>
            <div className="column right" style={{backgroundColor:"#00008B"}}>
              <h3>Full Name : <span className="info-text">{this.state.Fullname}</span></h3>
              <h4>Profession : <span className="info-text">{this.state.profession}</span></h4>
              <h4>Bio : <span className="info-text">{this.state.bio}</span></h4>
            </div>
          </div>
      </div>
      <div className="btn">
        <h3>Eren is {this.state.life} here for {this.state.time}</h3>
        <button style={this.btnStyle} onClick={this.handlebtn}>{this.state.buttonMsg}</button>
      </div>


      </React.Fragment>
  );
}
}

export default App;



