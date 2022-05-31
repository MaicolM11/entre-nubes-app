import React, {useState} from 'react';
import CardProduct from '../../components/Cards/CardProduct/CardProduct';
import ModalMessage from '../../components/ModalMessage/ModalMessage';
import AppProductModal from '../../components/AddProductModal/AddProductModal'
import CategoryTarget from '../../components/CategoryTarget/CategoryTarget';
import DeleteModal from '../../components/DeleteModal/DeleteModal';

const test = () => {

  const [modalOpen, setModalOpen] = useState(false);

    const url = 'https://toctocdelivery.co/wp-content/uploads/2019/04/aguila-cerveza.png'
    const des = "Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but occasionally circumstances occur in which toil and pain can procure him some great pleasure"


  const click = () => setModalOpen ((o)=> !o)

  return (
    <div >
      <h1>Tets</h1>
      <CardProduct url ={url} name="Aguila" price={123} 
      category = "Cerveza"
      description={des} units={10} 
      unitsSale={7}/>
      <p></p>
      <button style={{backgroundColor: '#4674F2'}} onClick={click}> Mostrar modal </button>
      <p></p>
      {modalOpen && <ModalMessage text="Producto agregado correctamente!" setOpenModal={setModalOpen}/>}
      <p></p>
      <AppProductModal product = 'Aguila' actualUnits = {2}/>
      <p></p>
      <CategoryTarget categoryName='Cerveza'/>
      <p></p>
      <DeleteModal title='Desea eliminar esta categoria?'
       btnName='Eliminar Categoria'/>
    </div>
  );
};

export default test;
