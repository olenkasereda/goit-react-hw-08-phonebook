import styled from '@emotion/styled';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 90%;
  font-family: sans-serif;
  font-size: 28px;
  padding: 20px;
  margin: 20px;
  border: 1px solid #524f4e;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 1), -23px 0 20px -23px rgba(0, 0, 0, 0.8),
    23px 0 20px -23px rgba(0, 0, 0, 0.8), 0 0 40px rgba(0, 0, 0, 0.1);
`;

export const Label = styled.label`
  display: flex;
  font-family: sans-serif;
  font-size: 28px;
  flex-direction: column;
  justify-content: flex-start;
  height: 140px;
`;

export const Input = styled.input`
  display: flex;
  min-width: 90%;
  height: 40px;
  margin-top: 6px;
  font-family: sans-serif;
  font-size: 28px;
  :hover,
  :focus,
  :active {
    box-shadow: 0 1px 15px rgb(125, 141, 243),
      -23px 0 20px -23px rgba(104, 104, 249, 0.8),
      23px 0 20px -23px rgba(94, 127, 235, 0.8), 0 0 40px rgb(0 0 0 / 10%);
  }
`;

export const Button = styled.button`
  max-width: 200px;
  max-height: 45px;
  line-height: 45px;
  border-radius: 45px;
  padding-left: 10px;
  padding-right: 10px;
  font-family: 'Montserrat', sans-serif;
  font-size: 20px;
  text-transform: uppercase;
  text-align: center;
  letter-spacing: 3px;
  font-weight: 400;
  color: #010101;
  background: white;
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1);
  transition: 0.3s;
  &:hover {
    background: #2ee59d;
    box-shadow: 0 15px 20px rgba(165, 188, 179, 0.4);
    color: white;
    transform: translateY(-7px);
  }
`;
