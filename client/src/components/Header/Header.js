import React from "react";
import {Link} from 'react-router-dom';
import './Header.scss'
import GoogleAuth from "../GoogleAuth/GoogleAuth";

const Header = () => {
    return(
        <div className={'header'}>
            <Link to={'/'} className={'logo'}>Streamer</Link>

            <div>
                <ul className={'header__menu'}>
                    <li className={'header__menu--item'}>
                        <Link to={'/'} className={'header__menu--link'}>Streams</Link>
                    </li>
                    <li className={'header__menu--item'}>
                        <GoogleAuth/>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Header;