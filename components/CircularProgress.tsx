import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import 'react-circular-progressbar/dist/styles.css';
interface progressInterface {
  percentage: number;
}


const CircularProgressBar:React.FC<progressInterface> = ({ percentage }) => {
  return (
   
      <div className="  ">
        <CircularProgressbar
          value={percentage}
          text={`${percentage}%`}
          strokeWidth={20}
          styles={buildStyles({
            rotation: 0,
            strokeLinecap: 'butt',
            textSize: '20px',
            pathTransitionDuration: 0.5,
            pathColor: `#0D64DE`,
            textColor: '#000',
            trailColor: '#C7CEFF',
            backgroundColor: '#0D64DE',
            
            
          })}
        />
      </div>
  );
};

export default CircularProgressBar;

