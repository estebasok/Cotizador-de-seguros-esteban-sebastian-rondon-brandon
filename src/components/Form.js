import React, {useState} from 'react';
import styled from '@emotion/styled';
import getFinalBudget from '../helper';

const Field = styled.div`
  display: flex;
  margin-bottom: 1rem;
  align-items: center;
`;

const Label = styled.label`
  flex: 0 0 100px;
`;

const Select= styled.select`
  display: block;
  width: 100%;
  padding: 1rem;
  border: 1px solid #e1e1e1;
  -webkit-appearance: none;
`;

const Radio = styled.input`
  margin: 0 1rem;
`;

const Button = styled.button`
  background-color: #00838f;
  width: 100%;
  padding: 1rem;
  color: #ffffff;
  text-transform: uppercase;
  font-weight: bold;
  border: none;
  transition: background-color .3s ease;
  margin-top: 2rem;
  &:hover {
    background-color: #26c6da;
    cursor: pointer;
  }
  &:focus {
    outline: none;
  }
`;

const Error = styled.div`
  color: #721c24;
  background-color: #f8d7da;
  border-color: #f5c6cb;
  padding: 1rem;
  text-align: center;
  margin-top: 20px;
`;

const Form = ({setBudgetObj}) => {

  const [formData, setFormData] = useState({
    brand: '',
    year: '',
    plan: ''
  });
  const [error, setError] = useState(false);

  const {brand, year, plan} = formData;

  const fieldHandle = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value 
    });
  };

  const submitForm = e => {
    e.preventDefault();
    if(brand.trim() === '' || year.trim() === '' || plan.trim() === '') {
      setError(true);
      return;
    }
    setError(false);
    const budgetAmount = getFinalBudget(2000, brand, year, plan);
    setBudgetObj({
      formData,
      budgetAmount
    });
    setFormData({
      brand: '',
      year: '',
      plan: ''
    });
  }

  return(
    <form
      onSubmit={submitForm}>

      <Field>
        <Label>Marca:</Label>
          <Select
            name="brand"
            value={brand}
            onChange={fieldHandle}>
            <option value="">-- Seleccione --</option>
            <option value="americano">Americano</option>
            <option value="europeo">Europeo</option>
            <option value="asiatico">Asiatico</option>
          </Select>
      </Field>

      <Field>
        <Label>Año:</Label>
          <Select
            name="year"
            value={year}
            onChange={fieldHandle}>
            <option value="">-- Seleccione --</option>
            <option value="2021">2021</option>
            <option value="2020">2020</option>
            <option value="2019">2019</option>
            <option value="2018">2018</option>
            <option value="2017">2017</option>
            <option value="2016">2016</option>
            <option value="2015">2015</option>
            <option value="2014">2014</option>
            <option value="2013">2013</option>
            <option value="2012">2012</option>
        </Select>
      </Field>

      <Field>
        <Label>Plan:</Label>
        <Radio 
          type="radio"
          name="plan"
          value="basico"
          checked={plan === 'basico'}
          onChange={fieldHandle}/>Basico
        <Radio 
          type="radio"
          name="plan"
          value="completo"
          checked={plan === 'completo'}
          onChange={fieldHandle}/>Completo
      </Field>

      <Button type="submit">Cotizar</Button>

      { 
        (error) 
          ? <Error>Completar los campos del formulario.</Error>
          : null 
      }

    </form>
  );
};

export default Form;