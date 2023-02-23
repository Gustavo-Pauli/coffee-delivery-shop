import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 1120px;
  display: flex;
  margin: 80px auto 80px auto;
  column-gap: 102px;

  @media (max-width: 1152px) {
    width: 100%;
    padding: 0 16px;
    flex-direction: column-reverse;
    row-gap: 40px;
    align-items: center;
  }
`

export const InfoSide = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`
export const ImageSide = styled.div`
  margin-top: auto;

  @media (max-width: 1152px) {
    > img {
      width: 50%;
    }
  }
`

export const InfoHeader = styled.div`
  h1 {
    font-family: 'Baloo 2';
    font-style: normal;
    font-weight: 800;
    font-size: 32px;
    line-height: 130%;

    color: ${(props) => props.theme['yellow-dark']};
  }

  h2 {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 130%;

    color: ${(props) => props.theme['base-subtitle']};
  }
`

export const InfoCard = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 32px;

  padding: 40px;

  // border gradient fix
  background: linear-gradient(white, white) padding-box,
    linear-gradient(102.89deg, #dbac2c 2.61%, #8047f8 98.76%) border-box;
  border-radius: 6px 36px 6px 36px;
  border: 1px solid transparent;
`

export const CardElement = styled.div`
  height: 42px;
  display: flex;
  column-gap: 12px;

  align-items: center;
`

export const CardElementBaseIcon = styled.div`
  height: 32px;
  width: 32px;
  border-radius: 9999px;

  display: flex;
  align-items: center;
  justify-content: center;

  color: ${(props) => props.theme.white};
`

export const CardElementLocalIcon = styled(CardElementBaseIcon)`
  background: ${(props) => props.theme.purple};
`

export const CardElementTimeIcon = styled(CardElementBaseIcon)`
  background: ${(props) => props.theme.yellow};
`

export const CardElementPaymentIcon = styled(CardElementBaseIcon)`
  background: ${(props) => props.theme['yellow-dark']};
`

export const CardElementText = styled.div`
  display: flex;
  flex-direction: column;

  P {
    color: ${(props) => props.theme['base-text']};
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 130%;

    strong {
      font-weight: 700;
    }
  }
`
