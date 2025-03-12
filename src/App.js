import React, {useState} from "react";
import styled from '@emotion/styled';
import Header from './components/Header';
import Form from './components/Form';
import Resume from './components/Resume';
import Result from './components/Result';

const MainContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;

const FormContainer = styled.div`
  background-color: #ffffff;
  padding: 3rem;
`;

export default function App() {
  const [budgetObj, setBudgetObj] = useState({
    budgetAmount: 0,
    formData: {
      brand: '',
      year: '',
      plan: ''
    }
  });
  const {formData, budgetAmount} = budgetObj; 
  return (
    <MainContainer>
      <Header
        title="Cotizador de seguros"/>
        <FormContainer>
          <Form
            setBudgetObj={setBudgetObj}/>
            <Resume
              formData={formData}/>
            <Result
              budgetAmount={budgetAmount}/>
        </FormContainer>
    </MainContainer>
  );
}
