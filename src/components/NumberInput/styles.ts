import styled from 'styled-components'

interface WrapperProps {
  height?: string
}

export const Wrapper = styled.div<WrapperProps>`
  height: ${(props) => props.height};
  width: 4.75rem;
  background: ${(props) => props.theme['base-button']};

  border-radius: 6px;
  overflow: hidden;

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
  width: 100%;
  height: 100%;

  border: none;
  background: ${(props) => props.theme['base-button']};

  display: flex;
  align-items: center;
  justify-content: center;

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
