import React, { useState, useEffect } from 'react';
import Favorite from './Favorite';
import { price, marketCap, priceChange } from '../lib/formatter';
import { Tiny, SmallOrGreater } from '../lib/mediaQuery';
import './CurrencyList.scss';

const CurrencyList = (props) => {
  const [currencies, setCurrencies] = useState([]);

  useEffect(() => {
    if(props.filter.view === 'favorite') {
      setCurrencies(props.currencies.filter(e => props.favorites[e.id] !== undefined));
    } else {
      setCurrencies(props.currencies);
    }
    
  }, [props.filter]);

  return (
    <div>
      <div className="heading">
        <div className="market-cap-heading">MARKET CAP</div>
        <Tiny>
          <div className="price-heading">24H</div>
        </Tiny>
        <SmallOrGreater>
          <div className="price-heading">PRICE</div>
          <div className="price-c-heading">24H</div>
          <div className="price-c-heading">7D</div>
        </SmallOrGreater>
      </div>
      {currencies.map(p => (
        <div className="row" key={p.id}>

          <div className="currency-block">
            <Favorite
              active={props.favorites[p.id] !== undefined} 
              onClick={() => props.onToggleFavorite(p.id)}
            />
            <div className="currency-col">
              <div className="currency">
                <span className="rank">#{p.market_cap_rank}</span>
                <span className="symbol">{p.symbol}</span>
              </div>
              <div className="market-cap">{props.fiat}{marketCap(p.market_cap)}</div>
            </div>
          </div>

          <Tiny>
            <div className="price-col">
              <div className="price">{props.fiat}{price(p.current_price)}</div>
              <div className={"price-c " + (p.price_change_percentage_24h_in_currency > 0 ? 'price-p' : 'price-n')}>
                {priceChange(p.price_change_percentage_24h_in_currency)}
              </div>
            </div>
          </Tiny>

          <SmallOrGreater>
            <div className="price">{props.fiat}{price(p.current_price)}</div>
            <div className={"price-c " + (p.price_change_percentage_24h_in_currency > 0 ? 'price-p' : 'price-n')}>
              {priceChange(p.price_change_percentage_24h_in_currency)}
            </div>
            <div className={"price-c " + (p.price_change_percentage_7d_in_currency > 0 ? 'price-p' : 'price-n')}>
              {priceChange(p.price_change_percentage_7d_in_currency)}
            </div>            
          </SmallOrGreater>

        </div>
      ))}
    </div> 
  );
}

export default CurrencyList;