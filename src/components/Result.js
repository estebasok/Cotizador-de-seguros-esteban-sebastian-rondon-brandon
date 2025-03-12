import React, {Fragment} from "react";
import styled from '@emotion/styled';

const Warning = styled.div`
  color: #856404;
  background-color: #fff3cd;
  border-color: #ffeeba;
  padding: 1rem;
  text-align: center;
  margin-top: 20px;
`;

const AmountWrap = styled.div`
  width: 50%;
  color: #ffffff;
  background-color: #34bfb2;
  padding: 1rem;
  text-align: center;
  box-sizing: border-box;
  display: inline-block;
`;

const ResetButton = styled.button`
  background-color: #00838f;
  width: 50%;
  padding: 1rem;
  color: #ffffff;
  text-transform: uppercase;
  font-weight: bold;
  border: none;
  transition: background-color .3s ease;
  box-sizing: border-box;
  display: inline-block;
  &:hover {
    background-color: #26c6da;
    cursor: pointer;
  }
  &:focus {
    outline: none;
  }
`;

const Result = ({budgetAmount}) => {
  
  return (
    (budgetAmount <= 0) 
      ? <Warning>Elige marca, año y tipo de seguro</Warning>
      : (
          <div>
            <AmountWrap>
              Monto: {budgetAmount}
            </AmountWrap>
            <ResetButton>
              Resetear costos
            </ResetButton>
          </div>
        )
  );
};

export default Result;