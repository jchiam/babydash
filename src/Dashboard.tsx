import React from 'react';

import ImageWidget from 'widgets/ImageWidget';

import 'materialize-css/dist/css/materialize.css';

const Dashboard = () => {
  const title = <h1>Babydash</h1>;

  return (
    <>
      <div className="container">
        {title}
        <div className="orange">
          <div className="row">
            <div className="col s4">
              <ImageWidget image="https://firebasestorage.googleapis.com/v0/b/babydash-40fe2.appspot.com/o/couple.jpg?alt=media&token=a58cd2c8-db06-451a-bf36-512e9459e6ee" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;