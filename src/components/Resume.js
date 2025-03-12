import React from "react";
import styled from '@emotion/styled';

const ResumeWrap = styled.div`
  background-color: #00b7a6;
  padding: 1rem;
  color: #ffffff;
  margin-top: 1rem;
`;

const ResumeText = styled.p`
  text-transform: capitalize;
`;

const Resume = ({formData}) => {

  const {brand, year, plan} = formData;

  if(brand.trim() === '' || year.trim() === '' || plan.trim() === '') return null;
  
  return(
    <ResumeWrap>
      <h2>Resumen cotizacion:</h2>
        <ResumeText>marca: {brand}</ResumeText>
        <ResumeText>año: {year}</ResumeText>
        <ResumeText>plan: {plan}</ResumeText>
    </ResumeWrap>
  );
};

export default Resume;