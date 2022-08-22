import React from 'react'
import '../App.css'
class Winner extends React.Component {comment
  // 
    constructor (props) {
        super()
        console.log('props are', props)
        this.state = {
            nombre: props.nombre,
        }
      } 

      render (){
        return (
            <h1 id='winner'> ¡Felicidades, gano {this.state.nombre}!</h1>
        )
      }
}

export default Winner