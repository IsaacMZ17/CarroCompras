import React, { Component } from "react";
import BubbleAlert from './BubbleAlert'
import DetallesCarro from './DetallesCarro'

const styles = {
    carro: {
        backgroundColor: '#359A2C',
        color: '#fff',
        border: 'none',
        padding: '15px',
        borderRadius: '15px',
        cursor: 'pointer'
    },

    bubble: {
        position: 'relative',
        left: 12,
        top: 20
    }
}
class Carro extends Component {
    render() {
        const { carro, esCarrovisible, mostrarCarro } = this.props
        const cantidad = carro.reduce((acc, el) => acc + el.cantidad, 0)
        
        return (
            <div>
                <span style={styles.bubble}>
                    {cantidad !== 0
                      ? <BubbleAlert value={cantidad}/> 
                      : null}
                </span>
                <button style={styles.carro}>
                    Carro
                </button>
                <DetallesCarro carro={carro} />

                {/* <span style={styles.bubble}>
                    {cantidad !== 0
                      ? <BubbleAlert value={cantidad}/> 
                      : null}
                </span>
                <button onClick={mostrarCarro} style={styles.carro}>
                    Carro
                </button>
                {esCarrovisible ? <DetallesCarro carro={carro} /> : null} */}
            </div>
        )
    }
}

export default Carro