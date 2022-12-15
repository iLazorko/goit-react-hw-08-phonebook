import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 20px;
  padding-top: 20px;
`;

export const Text = styled.p`
  color: #240a95;
  font-size: 22px;
  font-weight: 500;
`;

export const ButtonLogOut = styled.button`
  cursor: pointer;
  padding: 7px;
  width: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #240a95;
  text-transform: uppercase;
  font-weight: 500;
  color: #ffffff;
  border-radius: 5px;
  border-color: transparent;
  transition: all 500ms cubic-bezier(0.19, 1, 0.22, 1);

  &:hover,
  &:focus {
    background-color: #2d0fb2f7;
    box-shadow: 2px 1px 3px 1px rgb(26 0 27 / 48%);
  }
`;
