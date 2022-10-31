import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './Coin.scss';
import DOMPurify from 'dompurify';

const Coin = () => {

    const params = useParams()
    const [coin, setCoin] = useState({});

    const url = `https://api.coingecko.com/api/v3/coins/${params.coinId}`

    useEffect(() => {
        axios.get(url).then((res) => {
            setCoin(res.data)
        }).catch((error) => {
            console.log(error)
        })
    }, [])


  return (

        <div className="coin_container">

            <div className="coin_content1">
                 <div className="coin_info">
                    <div className="coin_heading">
                         <h2 className="rank_btn">#{coin.market_cap_rank}</h2>
                        {coin.image ? <img src={coin.image.small} alt="" /> : null}
                        <h2>{coin.name}</h2>
                    </div>

                    <div className="coin_price">
                     {coin.market_data?.current_price ? <h1> ${coin.market_data.current_price.usd.toLocaleString()}</h1> : null}
                    </div>
                 </div>
            </div>

            <div className="coin_content2">
                <div className="coin_content_row1">
                    <p>1h</p>
                    <p>24h</p>
                    <p>7d</p>
                    <p>30d</p>
                    <p>1y</p>
                </div>
                <div className="coin_content_row2">
                        {coin.market_data?.price_change_percentage_1h_in_currency ? <p>{coin.market_data.price_change_percentage_1h_in_currency.usd.toFixed(1)}%</p> : null}
                        {coin.market_data?.price_change_percentage_24h_in_currency ? <p>{coin.market_data.price_change_percentage_24h_in_currency.usd.toFixed(1)}%</p> : null}
                        {coin.market_data?.price_change_percentage_24h_in_currency ? <p>{coin.market_data.price_change_percentage_7d_in_currency.usd.toFixed(1)}%</p> : null}
                        {coin.market_data?.price_change_percentage_24h_in_currency ? <p>{coin.market_data.price_change_percentage_30d_in_currency.usd.toFixed(1)}%</p> : null}
                        {coin.market_data?.price_change_percentage_24h_in_currency ? <p >{coin.market_data.price_change_percentage_1y_in_currency.usd.toFixed(1)}%</p> : null}  
                </div>
            </div>

    
                <div className="coin_stats">

                <div className="coin_stats_right">
                        <div className="coin_stats_item">
                            <h4>Market Cap</h4>
                            {coin.market_data ? <p>${coin.market_data.market_cap.usd.toLocaleString()}</p> : null }
                        </div>
                        <div className="coin_stats_item">
                            <h4>24h Volume</h4>
                            {coin.market_data ? <p>${coin.market_data.total_volume.usd.toLocaleString()}</p> : null }
                        </div>
                        <div className="coin_stats_item">
                            <h4>Circulating Supply</h4>
                            {coin.market_data ? <p>{coin.market_data.circulating_supply}</p> : null}                        
                        </div>

                    </div>

                    <div className="coin_stats_left">
                        <div className="coin_stats_item">
                            <h4>24h Low</h4>
                            {coin.market_data ? <p>${coin.market_data.low_24h.usd.toLocaleString()}</p> : null }
                        </div>
                        <div className="coin_stats_item">
                            <h4>24h High</h4>
                            {coin.market_data ? <p>${coin.market_data.high_24h.usd.toLocaleString()}</p> : null }
                        </div>
                    </div>

                   
                </div>
            
         
           
                <div className="coin_about">
                    <h3>About</h3>
                    <p dangerouslySetInnerHTML={{
                            __html: DOMPurify.sanitize(coin.description ? coin.description.en : ''),
                        }}>
                        
                        </p>
                </div>
           

        </div>
 
  )
}

export default Coin