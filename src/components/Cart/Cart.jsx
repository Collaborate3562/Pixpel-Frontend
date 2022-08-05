import React from "react";
import "./Cart.scss"

const Cart = (props) => {
    return (
        <div className="cart" style={props.styles}>
            <div className="cart__inner">
                <div className="cart__title">
                    Cart
                </div>
                <div className="cart__list">
                    <div className="cart__item">
                        <div className="cart__img-wrap">
                            <img src="assets/images/market/nft1.jpg" alt="" className="cart__img"/>
                        </div>
                        <div className="cart__content">
                            <div className="cart__content-title">
                                H1 hero text for you
                            </div>
                            <div className="cart__content-price">
                                2 PIXP
                            </div>
                        </div>
                        <div className="cart__delete">
                            <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 1L6.5 6.5M12 12L6.5 6.5M6.5 6.5L1 12L12 1" stroke="#717A8B" stroke-width="2"
                                      stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
            <div className="cart__footer">
                <div className="cart__footer-top">
                    <div className="cart__footer-top-name">
                        Total price
                    </div>
                    <div className="cart__footer-top-price">
                        214 421.21 PIXP
                    </div>
                </div>
                <button className="cart__btn">
                    Buy it now
                </button>
            </div>
        </div>
    )
}
export default Cart