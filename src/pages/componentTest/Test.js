import React, {useState} from 'react';
import CardProduct from '../../components/cards/product/CardProduct';
import ModalMessage from '../../components/modals/message/ModalMessage';
import AppProductModal from '../../components/modals/add-product-stock/AddProductStockModal'
import CategoryTarget from '../../components/cards/category/CategoryTarget';
import DeleteModal from '../../components/modals/delete/DeleteModal';

const Test = () => {

  const [modalOpen, setModalOpen] = useState(false);

    const url = 'https://toctocdelivery.co/wp-content/uploads/2019/04/aguila-cerveza.png'
    const des = "Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but occasionally circumstances occur in which toil and pain can procure him some great pleasure"


  const click = () => setModalOpen ((o)=> !o)

  return (
    <div className='test'>
      <h1>Tets</h1>
      <CardProduct url ={url} name="Aguila" price={123} 
      category = "Cerveza"
      description={des} units={10} 
      unitsSale={7}/>
    </div>
  );
};

export default Test;
