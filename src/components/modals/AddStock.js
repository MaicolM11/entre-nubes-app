import React, { useState } from "react";
import styled from "styled-components";
import AnimatedModalContainer from "../../components/modals/animation/AnimatedModalContainer"
import { useSpring, animated } from "react-spring";
import { ReactComponent as Circle } from "../../assets/icons/circle.svg"
import DataInput from "../inputs/DataInput";
import { colors } from "../styles/colors";
import Button from "../buttons/Button"; 
import {updateUnits} from "../../services/product"

const ModalAddStockContainer = styled.div`
position: relative;
width: 423px;
background: #FFFFFF;
border-radius: 16px;
`;

const TitleAddStock = styled.div`
height: 28px;

font-family: 'Roboto';
font-style: normal;
font-weight: 700;
font-size: 24px;
line-height: 28px;
font-feature-settings: 'liga' off;

padding-top : 30px;
padding-left : 25px;

color: #262626;

`;

const Units = styled.div`
height: 20px;

font-family: 'Roboto';
font-style: normal;
font-weight: 700;
font-size: 18px;
line-height: 20px;

display: flex;
align-items: center;

padding-top : 30px;
padding-left : 25px;

color: #262626;

`;

const Input = styled.div`
padding-top : 30px;
padding-left : 25px;
`;

const ButtonStock = styled.div`
padding-top : 30px;
padding-bottom : 30px;
display: flex;
align-items: center;
justify-content: center;
`;

const AddStock = ({product, isOpen, setIsOpenAddStock, update }) =>{

    const animation = useSpring({
        config: {
            duration: 250,
        },
        opacity: isOpen ? 1 : 0,
        transform: isOpen ? `translateY(0%)` : `translateY(-100%)`,
    });
    
    const [units, setUnits] = useState(0)
    
    const handleSubmit = ()=>{
        updateUnits(product._id, units).then(async (res) => {
            handleSetIsOpen()
            update()
          });
        
    }

    const handleSetIsOpen = () => {
        setIsOpenAddStock((open) => !open)
      };

      const handleChange = (e) => {
        const { name, value } = e.target;
        setUnits((values) => {
          return {
            ...values,
            [name]: value,
          };
        });
      };
    
    return(
        <AnimatedModalContainer
        modal = {
            <animated.div style={animation}>
            <ModalAddStockContainer>
                <TitleAddStock>
                    Producto : {product.brand}
                </TitleAddStock>
                <Units>
                    Unidades actuales : {product.stock}
                </Units>
                <Input>
                <DataInput
                        size="stockInput"
                        icon={<Circle stroke={colors.brand} />}
                        type="text"
                        name="stock"
                        placeholder="Unidades para stock"
                        // defaultValue={product.stock}
                        onChange={handleChange}
                />
                </Input>
                <ButtonStock>
                <Button
                      size="mediumButton"
                      theme="ok"
                      text="Agregar unidades"
                      onClick={handleSubmit}
                    />
                </ButtonStock>
            </ModalAddStockContainer>
            </animated.div>
        }
        isOpen = {isOpen}
        setIsOpen = {setIsOpenAddStock}
        />
    )
} 

export default AddStock