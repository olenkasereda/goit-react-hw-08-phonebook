import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const UserName = styled.p`
  font-weight: 700;
  font-size: 24px;
`;

export const Button = styled.button`
  display: inline-flex;
  padding: 0 8px 4px 8px;
  align-items: center;

  font-size: 25px;
  font-weight: 700;
  border-radius: 25px;
  border: 1px solid rgb(47, 158, 153);
  color: #2ee59d;
  cursor: pointer;

  :hover,
  :focus {
    color: #2ee59d;
  }
`;
