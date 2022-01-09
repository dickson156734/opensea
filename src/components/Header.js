import React from 'react'
import './Header.css'
import searchIcon from '../assets/header/search.png'


const Header = () =>{
    return (
        <div className='header'>
            <div className='logoContainer'>
            </div>
            <div className='searchBar'>
                <div className='searchIconContainer'>
                    <img src={searchIcon}/>
                </div>
                <input 
                className="searchInput"
                placeholder='Collection, item or user...'
                />
            </div>
            <div className='headerItems'>
                <p>Drops</p>
                <p>Marketplace</p>
                <p>Drops</p>
            </div>
        </div>
    )
}
export default Header
