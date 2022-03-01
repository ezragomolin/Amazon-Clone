import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import {Link} from 'react-router-dom'
import './Header.css'
import { useStateValue } from './StateProvider'
import { auth } from './firebase';


const Header = () => {
    const [{basket, user}, dispatch] = useStateValue();
    const handleAuthentication =()=>{
        if(user){
            auth.signOut();
        }
    }

  return (
    <div className ='header'>
        {/*Amazon Logo */}
        <Link to="/">
        <img className ="header_logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"/>
        </Link>
        {/*Search Bar */}
            <div className ="header_search">
                <input className = "header_searchInput" type="text"/>
                <SearchIcon className="header_searchIcon"/>
            </div>
        {/*Options */}
            <div className="header_nav">
                <Link to={!user && "/login"}>
                <div onClick={handleAuthentication} className="header_option">
                    <span className="header__optionLineOne">Hello {user ? user.email : 'Guest'}</span>
                    <span className="header__optionLineTwo">{user ? 'Sign Out' : 'Sign In'}</span>
                </div>
                </Link>
                <div className="header_option">
                    <span className="header__optionLineOne">Returns</span>
                    <span className="header__optionLineTwo">& Orders</span>
                </div>
                <div className="header_option">
                    <span className="header__optionLineOne">Your</span>
                    <span className="header__optionLineTwo">Prime</span>
                </div>
                <Link to="/checkout">
                <div className="header_optionBasket">
                    <ShoppingBagIcon/>
                    <span className="header_optionLineTwo header_basketCount">{basket?.length}</span>
                </div>
                </Link>
                
            </div>
    </div>
  )
}

export default Header

