import React from "react";

const styles = {
    title: {
        marginBottom: '30px'
    }
}

class Title extends React.Component {
    render() {
        return (
            <h1 style={styles.title}>Tienda</h1>
        )
    }
}

export default Title