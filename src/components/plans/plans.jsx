import React from 'react';
import './plans.scss';
import { plansData } from '../../data/plansData';

import whiteTick from '../../assets/whiteTick.png';

const Plans = () => {
  return (
    <div className="plans-container  " id="plans">
      <div className="blur blur-p"></div>
      <div className="blur blur-p-two"></div>
      <div className="h2">
        <span className="stroke-text">READY TO START</span>
        <span>YOUR jOURNEY</span>
        <span className="stroke-text">NOW WITHUS</span>
      </div>

      <div className="plans">
        {plansData.map((plan, i) => (
          <div className="plan" key={i}>
            {plan.icon}
            <span>{plan.name}</span>
            <span>$ {plan.price}</span>

            <div className="features">
              {plan.features.map((feature, i) => (
                <div className="feature">
                  <img src={whiteTick} alt="" />
                  <span key={i}>{feature}</span>
                </div>
              ))}
            </div>

            <div className="">
              <span>See more benefits -&gt;</span>
            </div>
            <button className="btn">Join now</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Plans;
