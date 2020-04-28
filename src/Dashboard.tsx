import React from 'react';

import ImageWidget from 'widgets/ImageWidget';
import ClockWidget from 'widgets/ClockWidget';
import DaysSinceWidget from 'widgets/DaysSinceWidget';
import DaysLeftWidget from 'widgets/DaysLeftWidget';

import 'materialize-css/dist/css/materialize.css';

const Dashboard = () => {
  const title = <h1>Babydash</h1>;
  return (
    <>
      <div className="container">
        {title}
        <div className="orange">
          <div className="row valign-wrapper">
            <ImageWidget
              className="col s4"
              image="https://firebasestorage.googleapis.com/v0/b/babydash-40fe2.appspot.com/o/couple.jpg?alt=media&token=a58cd2c8-db06-451a-bf36-512e9459e6ee"
            />
            <ClockWidget className="col s4" />
            <ImageWidget
              className="col s4"
              image="https://firebasestorage.googleapis.com/v0/b/babydash-40fe2.appspot.com/o/couple.jpg?alt=media&token=a58cd2c8-db06-451a-bf36-512e9459e6ee"
            />
          </div>
          <div className="row">
            <div className="col s4">
              <DaysSinceWidget date={new Date()} />
            </div>
            <div className="col s4 offset-s4">
              <DaysLeftWidget date={new Date()} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
