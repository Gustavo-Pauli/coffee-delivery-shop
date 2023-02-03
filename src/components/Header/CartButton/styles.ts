import styled from 'styled-components'

export const ButtonWrapper = styled.button`
  width: 2.375rem;
  height: 2.375rem;
  background: ${(props) => props.theme['yellow-light']};
  border: none;
  border-radius: 6px;

  color: ${(props) => props.theme['yellow-dark']};

  :hover {
    cursor: pointer;
  }
`
