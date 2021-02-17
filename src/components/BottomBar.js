import React from 'react';
import LeaderBoardIcon from './LeaderBoardIcon';
import FavoriteIcon from './FavoriteIcon';
import './BottomBar.scss';

const BottomBar = (props) => {
  return (
    <div className="bar">
      <button className="btn" onClick={() => props.onViewChange('all')}>
        <LeaderBoardIcon 
          className={`icon ${props.view === 'all' ? "active" : "inactive"}`}
          width="25px"
          height="25px"
        />
      </button>
      <button className="btn" onClick={() => props.onViewChange('favorite')}>
        <FavoriteIcon 
          className={`icon ${props.view === 'favorite' ? "active" : "inactive"}`}
          width="25px"
          height="25px"
        />
      </button>
    </div>  
  );
}

export default BottomBar;