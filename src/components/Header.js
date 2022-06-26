// Kalian bisa menambahkan CSS di src/components/Header.css
import React from 'react';

const Header = (props) => {
    return (
        <>
            <img className='circle-img' src={props.img} alt='avatar_img' />
            <h1>Call a friend</h1>
            <h4>your friendly contact app</h4>
            <hr />
        </>
    )
}

export default Header;