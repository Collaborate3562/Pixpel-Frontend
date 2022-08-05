import React from "react";
import Header from "../Header/Header";
const Menu = (props) => {
    const nameClass = `${props.elemClass} menu`
    return (
        <nav className={nameClass.trim()}>
            <ul className="menu__list">
                <li className="menu__item">
                    <a href="/buy-crypto" className="menu__link">
                        Buy Crypto
                    </a>
                </li>
                <li className="menu__item">
                    <a href="/market" className="menu__link">
                        Markets
                    </a>
                </li>
                <li className="menu__item">
                    <a href="/trade" className="menu__link">
                        Trade
                    </a>
                </li>
                <li className="menu__item">
                    <a href="/derivatives" className="menu__link">
                        Derivatives
                    </a>
                </li>
                <li className="menu__item">
                    <a href="/earn" className="menu__link">
                        Earn
                    </a>
                </li>
                <li className="menu__item">
                    <a href="/finance" className="menu__link">
                        Finance
                    </a>
                </li>
                <li className="menu__item">
                    <a href="/nft" className="menu__link">
                        NFT
                    </a>
                </li>
            </ul>
        </nav>
    )
}
Menu.defaultProps = {
    elemClass: ''
}
console.log(Header)
export default Menu