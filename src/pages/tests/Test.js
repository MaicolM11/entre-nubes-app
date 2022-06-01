import React, {useState} from 'react';

import AddProductStockModal from '../../components/modals/add-product-stock/AddProductStockModal';

const Test = () => {

  const [modalOpen, setModalOpen] = useState(false);

    const url = 'https://toctocdelivery.co/wp-content/uploads/2019/04/aguila-cerveza.png'
    const des = "Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but occasionally circumstances occur in which toil and pain can procure him some great pleasure"


  const click = () => setModalOpen ((o)=> !o)

  return (
    <div className='test'>
      <h1>Tets</h1>
      <AddProductStockModal
      product="Aguila"
      />
    </div>
  );
};

export default Test;
