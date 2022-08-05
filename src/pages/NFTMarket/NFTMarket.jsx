import React from "react";
import {Header, Filter, NFTCard, Cart} from "../../components";
import "./NFTMarket.scss"

const NFTMarket = () => {
    return (<>
        <div className="market">
            <Header></Header>
            <div className="container">
                <h1 className="title market__title">
                    NFT Market Place
                </h1>
                <div className="game-market__inner">
                    <div className="game-market__wrap" style={{width: 1180}}>
                        <Filter classes={"filter--offset-bottom"}></Filter>
                        <div className="row-wrap market__row">
                            <NFTCard></NFTCard>
                            <NFTCard></NFTCard>
                            <NFTCard></NFTCard>
                            <NFTCard></NFTCard>
                            <NFTCard></NFTCard>
                            <NFTCard></NFTCard>
                            <NFTCard></NFTCard>
                            <NFTCard></NFTCard>
                            <NFTCard></NFTCard>
                            <NFTCard></NFTCard>
                            <NFTCard></NFTCard>
                            <NFTCard></NFTCard>
                            <NFTCard></NFTCard>
                            <NFTCard></NFTCard>
                            <NFTCard></NFTCard>
                            <NFTCard></NFTCard>
                            <NFTCard></NFTCard>
                            <NFTCard></NFTCard>
                            <NFTCard></NFTCard>
                            <NFTCard></NFTCard>
                            <NFTCard></NFTCard>
                            <NFTCard></NFTCard>
                            <NFTCard></NFTCard>
                            <NFTCard></NFTCard>
                            <NFTCard></NFTCard>
                            <NFTCard></NFTCard>
                            <NFTCard></NFTCard>
                            <NFTCard></NFTCard>
                            <NFTCard></NFTCard>
                            <NFTCard></NFTCard>
                            <NFTCard></NFTCard>
                            <NFTCard></NFTCard>
                            <NFTCard></NFTCard>
                            <NFTCard></NFTCard>
                            <NFTCard></NFTCard>
                            <NFTCard></NFTCard>
                            <NFTCard></NFTCard>
                            <NFTCard></NFTCard>
                            <NFTCard></NFTCard>
                            <NFTCard></NFTCard>
                            <NFTCard></NFTCard>
                            <NFTCard></NFTCard>
                            <NFTCard></NFTCard>
                            <NFTCard></NFTCard>
                            <NFTCard></NFTCard>
                            <NFTCard></NFTCard>
                            <NFTCard></NFTCard>
                            <NFTCard></NFTCard>
                            <NFTCard></NFTCard>
                            <NFTCard></NFTCard>
                            <NFTCard></NFTCard>
                        </div>

                        <div className="game-market__cart" style={{right: -80}}>
                            <Cart></Cart>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>)
}

export default NFTMarket