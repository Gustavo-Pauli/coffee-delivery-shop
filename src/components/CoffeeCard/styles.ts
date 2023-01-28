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
  width: 81px;
  height: 21px;

  margin-top: 12px;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 9999px;
  background: ${(props) => props.theme['yellow-light']};

  > span {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 10px;
    text-transform: uppercase;
    text-align: center;
    line-height: 130%;
    color: ${(props) => props.theme['yellow-dark']};
  }
`

export const Footer = styled.div`
  display: flex;
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
