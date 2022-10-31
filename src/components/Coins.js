import React from 'react';
import {Link} from 'react-router-dom'
import CoinItem from './CoinItem';
import Coin from '../routes/Coin';
import './Coins.scss';

const Coins = (props) => {
  return (
    <div className="container">

        <div className="heading">
            <p className="heading_id">Rank</p>
            <p className="heading_name">Coin</p>
            <p>Price</p>
            <p>24h Change</p>
            <p className="hide_mobile">24h Volume</p>
            <p className="hide_mobile">Marketcap</p>
        </div>

        {props.coins.map(coins => {
            return (
                <Link to={`/coin/${coins.id}`} element={<Coin />} key={coins.id}>
                    < CoinItem coins={coins} />
                </Link>
            )
        })}

    </div>
  )
}

export default Coins