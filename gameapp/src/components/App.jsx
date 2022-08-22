
import '../App.css'
import React from 'react'
import Game from './Game'
class App extends React.Component {

  constructor () {
    super()
  
    this.state = {
        nombre: '',
        operacion: '',
        num1: 1,
        num2: 1,
        response: '',
        score: 0,
        incorrect: false,
        start: false,
    }
  } 

    render (){
      
      if (!this.state.start) {
        return this.renderHome()
      } else {
        return (
          <div>
            <Game nombre = {this.state.nombre} operacion = {this.state.operacion}/>
          </div>
        )
        
        
      }
      
    }

    renderHome () {
      return (
        <div className='container'>
            <div className='content'>
              <h1>Bienvenido</h1>
              <h1>Juego de Operaciones</h1>
              <p> Por favor ingrese sus Datos</p>

              <select name="games" id="games" onChange={this.setGame}>
              <option value="suma">---</option>
                <option value="+">Suma</option>
                <option value="-">Resta</option>
                <option value="*">Multiplicacion</option>
                <option value="/">Division</option>
              </select><br/>

              <label htmlFor="lname">Nombre del jugador</label><br />
              <input type="text" id="lname" onChange = {this.inputKeyPress}/><br />
              <button onClick={this.handleClick}> iniciar</button>
            </div>
              
            
      </div>
      )
    }


    inputKeyPress = (event) => {
    
      console.log(event.target.value)
      this.setState({
        nombre: event.target.value
      })
   
    
  }

  setGame = (event) => {
    console.log('event is')
    console.log(event.target.value)
 
    this.setState({
      operacion: event.target.value
    })
  }

  handleClick = (event) => {
    console.log('clicked')
    console.log('nombre es', this.state.nombre)
    console.log('operacion es', this.state.operacion)
    this.setState({
      start: true
    })
  }

  renderGame () {
    
    return (

        <div className='container'>
          <div className='content'>
              <h1> Game</h1>
                <div> <h2>{this.state.num1} {this.state.operacion} {this.state.num2} </h2></div>  
                <div><h2>Score: {this.state.score}</h2></div>  
                <input  onChange = {this.inputKeyPress} />
                <p>Jugador: {this.state.nombre}</p>
                <div><h1>Juego de Operaciones</h1></div> 
          </div>
        </div>
  

      
    )
  }
    
}

export default App
