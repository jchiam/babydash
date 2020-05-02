import React, { useState, useEffect } from 'react';
import { parseISO } from 'date-fns';
import firebase from 'firebase/app';
import 'firebase/database';

import ImageWidget from 'widgets/ImageWidget';
import ClockWidget from 'widgets/ClockWidget';
import DaysSinceWidget from 'widgets/DaysSinceWidget';
import DaysLeftWidget from 'widgets/DaysLeftWidget';

import 'materialize-css/dist/css/materialize.css';

const app = firebase.initializeApp({
  databaseURL: process.env.FIREBASE_DB_URL
}, 'Babydash');
const db = firebase.database(app);

const Dashboard = () => {
  const [anniversary, updateAnniversary] = useState(null as Date | null);

  useEffect(() => {
    db.ref('anniversary').once('value')
      .then(snapshot => {
        if (snapshot.val()) {
          updateAnniversary(parseISO(snapshot.val()));
        }
      });
  }, []);

  const title = <h1>#beccameachiam</h1>;
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
            <DaysSinceWidget
              className="col s4"
              date={anniversary || new Date()}
            />
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
