import styled from 'styled-components'

export const Wrapper = styled.div`
  > form {
    width: 1120px;
    display: flex;
    margin: 40px auto 60px auto;
    gap: 32px;

    @media (max-width: 1152px) {
      margin: 0 16px;
    }
  }
`

export const LeftSide = styled.div`
  width: 640px;
  > h1 {
    margin-bottom: 15px;
    font-family: 'Baloo 2';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 130%;
    color: ${(props) => props.theme['base-title']};
  }
`

export const RightSide = styled.div`
  width: 448px;
  > h1 {
    margin-bottom: 15px;
    font-family: 'Baloo 2';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 130%;
    color: ${(props) => props.theme['base-title']};
  }
`

export const CompleteOrder = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`

export const CardHeader = styled.div`
  display: flex;
  gap: 8px;
`

export const CardHeaderIcon = styled.div`
  height: 1.375rem;
  width: 1.375rem;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const CardHeaderTitle = styled.div`
  display: flex;
  flex-direction: column;

  h2 {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    line-height: 130%;
    font-size: 16px;
    color: ${(props) => props.theme['base-subtitle']};
  }

  h3 {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    line-height: 130%;
    font-size: 14px;
    color: ${(props) => props.theme['base-text']};
  }
`

const DefaultCard = styled.div`
  background: ${(props) => props.theme['base-card']};
  padding: 40px;
  border-radius: 6px;
`

export const Address = styled(DefaultCard)`
  display: flex;
  flex-direction: column;
  gap: 32px;

  ${CardHeaderIcon} {
    color: ${(props) => props.theme['yellow-dark']};
  }
`

export const Payment = styled(DefaultCard)`
  display: flex;
  flex-direction: column;
  gap: 32px;

  ${CardHeaderIcon} {
    color: ${(props) => props.theme.purple};
  }
`

export const SelectedCoffees = styled(DefaultCard)`
  border-radius: 6px 44px 6px 44px;
`

export const AddressInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 16px;
`

export const AddressInputGroup = styled.div`
  display: flex;
  height: 2.625rem;
  column-gap: 12px;
`

export const AddressInput = styled.input`
  height: 2.625rem;
  padding-left: 12px;

  color: ${(props) => props.theme['base-text']};
  background: ${(props) => props.theme['base-input']};
  border: 2px solid ${(props) => props.theme['base-button']};
  border-radius: 4px;

  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 130%;

  :focus {
    border: 2px solid ${(props) => props.theme['yellow-dark']};
    outline: none;
    // outline: 2px solid ${(props) => props.theme['yellow-dark']};
  }

  ::placeholder {
    color: ${(props) => props.theme['base-label']};
  }
`

export const PaymentTypeButton = styled.div`
  display: flex;
  /* flex: 1 0 auto; */
  gap: 0.75rem;
  padding: 16px;
  border-radius: 6px;
  color: ${(props) => props.theme.purple};
  background: ${(props) => props.theme['base-button']};

  transition: background 0.1s, color 0.1s;

  span {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 160%;
    color: ${(props) => props.theme['base-text']};
  }

  :hover {
    cursor: pointer;
    span {
      color: ${(props) => props.theme['base-subtitle']};
    }
    background: ${(props) => props.theme['base-hover']};
  }
`

export const ButtonRadioGroup = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 12px;
  /* flex: 1 0 auto; */

  input[type='radio']:checked + label div {
    box-sizing: border-box;
    background: ${(props) => props.theme['purple-light']};
    box-shadow: inset 0px 0px 0px 1px ${(props) => props.theme.purple};
  }
`

export const ProductList = styled.div`
  list-style: none;

  display: flex;
  flex-direction: column;
  gap: 24px;

  hr {
    width: 100%;
    height: 1px;
    background: ${(props) => props.theme['base-button']};
    border: none;
  }
`

export const ProductListItem = styled.div`
  width: 100%;
  height: 80px;

  padding: 8px 4px;
  display: flex;
  gap: 20px;

  // product image
  > img {
    width: 64px;
    height: 64px;
  }
`

export const ProductListItemMiddle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  > span {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 130%;
  }

  > div {
    display: flex;
    gap: 8px;
  }
`

export const RemoveButton = styled.button`
  height: 2rem;
  display: flex;
  align-items: center;
  padding: 8px;
  gap: 4px;

  color: ${(props) => props.theme.purple};
  background: ${(props) => props.theme['base-button']};
  border: none;
  border-radius: 6px;

  transition: background 0.1s, color 0.1s;

  > span {
    color: ${(props) => props.theme['base-text']};
    display: flex;
    align-items: center;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 0.75rem;
    line-height: 130%;
    transition: inherit;
  }

  :hover {
    cursor: pointer;
    background: ${(props) => props.theme['base-hover']};
    color: ${(props) => props.theme['purple-dark']};

    > span {
      color: ${(props) => props.theme['base-subtitle']};
    }
  }
`

export const ProductListItemPrice = styled.div`
  color: ${(props) => props.theme['base-text']};
  margin: 0 0 0 auto;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 130%;
`

export const ConfirmOrderButton = styled.button`
  width: 100%;
  height: 2.875rem;
  border: none;
  border-radius: 6px;
  background: ${(props) => props.theme.yellow};
  color: ${(props) => props.theme.white};

  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 160%;

  transition: background 0.1s;

  :hover {
    background: ${(props) => props.theme['yellow-dark']};
    cursor: pointer;
  }
`

export const OrderFooter = styled.div`
  width: 100%;
`

export const OrderFooterInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin: 24px 0;
`

export const OrderFooterInfo = styled.div`
  display: flex;
  justify-content: space-between;

  div {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 0.875rem;
    line-height: 130%;

    display: flex;
    align-items: center;
  }

  div:last-child {
    font-size: 1rem;
  }
`

export const OrderFooterTotal = styled(OrderFooterInfo)`
  div {
    font-weight: 700;
    font-size: 1.25rem;
  }

  div:last-child {
    font-weight: 700;
    font-size: 1.25rem;
  }
`
