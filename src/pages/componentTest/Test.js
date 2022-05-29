import React from 'react';
import CardProduct from '../../components/Cards/CardProduct/CardProduct';

const test = () => {

    const des = "Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but occasionally circumstances occur in which toil and pain can procure him some great pleasure"

  return (
    <div >
      <h1>Tets</h1>
      <CardProduct name="Cerveza" price={123} description={des} units={10} unitsSale={7}/>
    </div>
  );
};

export default test;
