import React from "react";
import "./Boliranas.css";
import Header from "../../../components/header/Header";
import NotificationButton from "../../../components/header/NotificationButton";

import { getByIdProducts, editProduct } from "../../../services/product";
import { useState } from "react";

const Boliranas = () => {


  const [test, setTest] = useState({})

  const clickGetId = () =>{
    console.log('click')
    editProduct('629a4a2ba758805a38a188ec',"Pilsen editada",
     "629a49dda758805a38a188de",1500,
    2500,
    "375ml",
    40, 'x')
    }


  return (
    <div className="admin-boliranas-container">
      <Header
        title="Boliranas"
        description="Información de las Boliranas"
        component={<NotificationButton />}
      />

      <div>
        <button  onClick={clickGetId}>
         products 
        </button>
      </div>
    </div>

  );
};

export default Boliranas;
