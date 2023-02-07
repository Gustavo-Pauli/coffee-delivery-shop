import styled from 'styled-components'

export const ButtonWrapper = styled.button`
  width: 2.375rem;
  height: 2.375rem;
  background: ${(props) => props.theme['yellow-light']};
  border: none;
  border-radius: 6px;

  color: ${(props) => props.theme['yellow-dark']};

  position: relative;

  :hover {
    cursor: pointer;
  }
`

export const ProductCounter = styled.div`
  width: 1.25rem;
  height: 1.25rem;
  border-radius: 50%;

  background: ${(props) => props.theme['yellow-dark']};
  color: ${(props) => props.theme.white};

  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 130%;

  position: absolute;
  top: -0.625rem;
  right: -0.625rem;

  display: flex;
  align-items: center;
  justify-content: center;
`
