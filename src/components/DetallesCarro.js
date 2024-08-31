import React, { Component } from "react";

const styles = {
    detallesCarro: {
        backgroundColor: '#fff',
        position: 'absolute',
        marginTop: 30,
        boxShadow: '1px 5px 5px rgb(0,0,0,0.3)',
        borderRadius: '5px',
        width: '300px',
        right: 50,
        zIndex: 1000 // Añadido para asegurarse de que esté sobre otros elementos
    },
    ul: {
        margin: 0,
        padding: 0,
        listStyleType: 'none'
    },
    producto: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '25px 20px',
        borderBottom: 'solid 1px #aaa'
    },
};

class DetallesCarro extends Component {
    render() {
        const { carro } = this.props;
        console.log('DetallesCarro props:', carro); // Debugging
        return (
            <div style={styles.detallesCarro}>
                <ul style={styles.ul}>
                    {carro.length > 0 ? (
                        carro.map(x => 
                            <li style={styles.producto} key={x.name}>
                                <img alt={x.name} src={x.img} width='50' height='32' />
                                {x.name} <span>{x.cantidad}</span>
                            </li>
                        )
                    ) : (
                        <li>No hay productos en el carrito</li>
                    )}
                </ul>
            </div>
        );
    }
}

export default DetallesCarro;