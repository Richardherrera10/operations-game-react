
import '../App.css'
import React from 'react'
import Winner from './Winner'
class Game extends React.Component {
    constructor (props) {
        super()
        console.log('props are', props)
        this.state = {
            num1: 1,
            num2: 1,
            score: 0,
            nombre: props.nombre,
            operacion: props.operacion,
            response: '',
            incorrect: false

        }
      } 

    render () { 
            console.log('nombre dado es', this.state.nombre)
            console.log('operacion dado es', this.state.operacion)
            if (this.state.score < 3) {
                return (
                    <div className='container'>
                        <div className='content'>
                            <h1> Game</h1>
                            <h1>{this.state.num1} {this.state.operacion} {this.state.num2} </h1> 
                            <h2 id ='problem' className={this.state.incorrect ? 'incorrect' : ''}>Score: {this.state.score}</h2>
                            <input onKeyPress = {this.inputKeyPress} onChange = {this.updateResponse} value = {this.state.response}/>
                            <p>Jugador: {this.state.nombre}</p>
                            <div><h1>Juego de Operaciones</h1></div>
                        </div>
                        
                        
                    </div>
                )
            } else if (this.state.score >= 3) {
                return (
                    < Winner nombre = {this.state.nombre} />
                )
            }
        
    }

    inputKeyPress = (event) => {
        console.log(event.key)
        if (event.key === "Enter") {
            
            console.log('enter')
            const answer = parseFloat( this.state.response)
            console.log('respuesta escrita', answer)

            let correcta = revisarRespuesta(this.state.num1, this.state.num2, this.state.operacion, answer)

            if (correcta) {
                this.setState({
                    score: this.state.score + 1,
                    response: '',
                    num1: Math.ceil(Math.random() * 10),
                    num2: Math.ceil(Math.random() * 10),
                    incorrect: false
                })
            } else {
                this.setState({
                    score: this.state.score - 1,
                    response: '',
                    incorrect: true,
                })
            }

        } else {

            console.log('other key')

        }
    }

    updateResponse = (event) => {
        this.setState({
            response: event.target.value
        })
        event.target.response = ''
    }
    

}
function revisarRespuesta(numero1, numero2, signo, respuesta) {
    console.log('entre a funcion')
    if (signo === '+'){
        if (respuesta === numero1 + numero2 ) {
            return true
        }

    } else if (signo === '-') {
        console.log(numero1-numero2)
        if (respuesta === numero1 - numero2 ) {
            
            return true
        }

    } else if (signo === '*') {
        if (respuesta === numero1 * numero2 ) {
            return true
        }

    } else if (signo === '/') {

        let div = ((numero1) / (numero2))
        
        let nuevo = div.toFixed(1)

        if (respuesta === parseFloat(nuevo) ) {
            return true
        }
    
    } else {
        return false
    }
}

export default Game



