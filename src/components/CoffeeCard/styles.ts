import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 256px;
  height: 310px;

  border-radius: 6px 36px 6px 36px;

  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;

  background: ${(props) => props.theme['base-card']};

  & > img {
    width: 120px;
    height: 120px;

    margin-top: -40px;
  }

  & > h5 {
    margin-top: 16px;

    text-align: center;
    font-family: 'Baloo 2';
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 130%;

    color: ${(props) => props.theme['base-subtitle']};
  }

  & > p {
    margin-top: 8px;

    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 130%;
    text-align: center;

    color: ${(props) => props.theme['base-label']};
  }
`

export const Tag = styled.div`
  margin-top: 12px;

  display: flex;
  align-items: center;
  justify-content: center;

  column-gap: 4px;

  > span {
    font-family: 'Roboto';
    padding: 4px 8px;

    font-style: normal;
    font-weight: 700;
    font-size: 10px;
    text-transform: uppercase;
    text-align: center;
    line-height: 130%;

    border-radius: 9999px;
    color: ${(props) => props.theme['yellow-dark']};
    background: ${(props) => props.theme['yellow-light']};
  }
`

export const Footer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: auto;
`

export const Price = styled.div`
  font-family: 'Baloo 2';
  font-style: normal;
  font-weight: 800;
  font-size: 24px;
  line-height: 130%;

  color: ${(props) => props.theme['base-text']};

  ::before {
    content: 'R$ ';
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 130%;

    color: ${(props) => props.theme['base-text']};
  }
`

export const AddToCartButton = styled.button`
  width: 38px;
  height: 38px;
  border: none;
  background: ${(props) => props.theme['purple-dark']};
  color: ${(props) => props.theme.white};

  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;

  transition: background 0.1s;
  :hover {
    background: ${(props) => props.theme.purple};
    cursor: pointer;
  }
`

export const FooterRightSide = styled.div`
  display: flex;
  gap: 8px;
`
