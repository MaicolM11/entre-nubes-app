import React from "react";

import { salesmanValidation } from "../../errors/validate";

import { createUser } from "../../services/user";

const createModal = (
    isThem,
    info,
    buttonTheme,
    updateSalesman,
    isOpen,
    setIsOpen
)=>{

    const submitSalesman = () => {
        if (isOpen) {
          isThem ? sendData() : editData();
        }
      };

      const { handleChangeSalesman, salesmanValues, handleSubmitSalesman, errors } = useForm(
        submitSalesman,
        salesmanValidation
      );
      
      const sendData =()=>{
        createUser(
          salesmanValues.fullName,
          salesmanValues.email,
          salesmanValues.password,
          salesmanValues.cc,
          salesmanValues.address,
          salesmanValues.phone,
          'SALESMAN'
        )
        .then(async(res)=>{
          let data = await res.json()
          if(res.ok){
            updateSalesman()
          }else{
            alert(data.message)
          }
        })
      } 

  return(
    <div></div>
  )
}