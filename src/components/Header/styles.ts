import styled from 'styled-components'

export const Wrapper = styled.header`
  height: 6.5rem;
  max-width: 1120px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;

  @media (max-width: 1152px) {
    margin: 0 16px;
  }

  & > img {
    height: 2.5rem;
  }

  & > div {
    display: flex;
    justify-content: space-between;
  }
`
export const CityStateButton = styled.button`
  width: 9rem;
  height: 2.375rem;

  margin-right: 12px;
  padding: 0.5rem;

  border: none;
  border-radius: 6px;
  background: ${(props) => props.theme['purple-light']};
  color: ${(props) => props.theme.purple};

  display: flex;
  justify-content: space-between;
  align-items: center;

  font-size: 0.875rem;

  & > span {
    color: ${(props) => props.theme['purple-dark']};
  }
`
