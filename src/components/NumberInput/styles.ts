import styled from 'styled-components'

export const Wrapper = styled.div`
  height: 2rem;
  width: 4.75rem;
  background: ${(props) => props.theme['base-button']};
  border-radius: 6px;

  display: flex;
  align-items: center;
`
export const StyledInput = styled.input`
  width: 1.5rem;
  text-align: center;
  border: none;

  color: ${(props) => props.theme['base-title']};

  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }

  -moz-appearance: textfield;
  background: ${(props) => props.theme['base-button']};

  &:focus {
    outline-color: ${(props) => props.theme['base-title']};
  }
`

export const StyledButton = styled.button`
  border: none;
  background: ${(props) => props.theme['base-button']};

  cursor: pointer;
  color: ${(props) => props.theme.purple};
  transition: color 0.1s;

  &:hover {
    color: ${(props) => props.theme['purple-dark']};
  }
`

export const MinusButton = styled(StyledButton)`
  padding: 0 0.25rem 0 0.5rem;
`

export const PlusButton = styled(StyledButton)`
  padding: 0 0.5rem 0 0.25rem;
`
