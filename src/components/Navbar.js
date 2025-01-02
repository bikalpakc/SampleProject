import React from 'react';

const Navbar = () => {
    return (
        <nav style={styles.navbar}>
            <h1 style={styles.text}>Hello</h1>
        </nav>
    );
};

const styles = {
    navbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#0070f3',
        height: '60px',
        color: 'white',
    },
    text: {
        margin: 0,
        fontSize: '24px',
    },
};

export default Navbar;
