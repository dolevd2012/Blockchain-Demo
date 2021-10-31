import React from 'react';
import Peer from './Peer'


function Coinbase() {

    return (
        <div className="blockchain">
            <h1 style={{ marginLeft: '210px' }}>Coinbase</h1>
            <ul>

                <h2>Peer A</h2>
                <li> <Peer peerId={0} blockType={"withTokensAndCoinbase"} /> </li>
                <h2>Peer B</h2>
                <li> <Peer peerId={1} blockType={"withTokensAndCoinbase"} /> </li>
                <h2>Peer C</h2>
                <li> <Peer peerId={2} blockType={"withTokensAndCoinbase"} /> </li>

            </ul>
        </div>
    )
}

export default Coinbase