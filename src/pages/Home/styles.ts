import styled from 'styled-components'

export const DefaultSection = styled.section`
  display: flex;
  justify-content: center;

  @media (max-width: 1152px) {
    margin: 0 16px;
  }
`

export const IntroSection = styled(DefaultSection)`
  align-items: center;
  min-height: 544px;

  > img {
    position: absolute;
    width: 100%;
    overflow: hidden;
    z-index: -500;
  }
`

export const ShopSection = styled(DefaultSection)`
  min-height: 544px;
`

const defaultDivContainer = styled.div`
  max-width: 1120px;
  display: flex;
  justify-content: space-between;
  flex-grow: 1;
`

export const IntroContainer = styled(defaultDivContainer)`
  height: 360px;
  display: flex;

  @media (max-width: 768px) {
    align-items: center;
    height: auto;
    flex-direction: column-reverse;

    h1,
    h2 {
      text-align: center;
    }

    ul {
      margin-top: 32px;
    }
  }

  @media (min-width: 961px) {
    height: auto;
  }

  > div {
    justify-content: space-between;
  }

  // title and item list
  div:nth-child(1) {
    max-width: 588px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  // image
  div:nth-child(2) {
  }
`

export const ShopContainer = styled(defaultDivContainer)`
  display: flex;
  flex-direction: column;
  margin-bottom: 157px;

  > h3 {
    margin-top: 32px;
    margin-bottom: 52px;
    font-family: 'Baloo 2';
    font-style: normal;
    font-weight: 800;
    font-size: 32px;
    line-height: 130%;
  }

  > div {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    // card
    > div {
      margin-top: 40px;
    }
  }
`

export const IntroTitle = styled.div`
  h1 {
    font-family: 'Baloo 2', sans-serif;
    font-weight: 800;
    font-size: 3rem;
    line-height: 130%;

    color: ${(props) => props.theme['base-title']};
    margin-bottom: 1rem;
  }

  h2 {
    font-family: 'Roboto';
    font-weight: 400;
    font-size: 1.25rem;
    line-height: 130%;

    color: ${(props) => props.theme['base-subtitle']};
  }
`

export const IntroItemList = styled.ul`
  margin-bottom: 8px;
  margin-top: 16px;
  list-style-type: none;

  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-row-gap: 20px;

  li {
    display: flex;
    align-items: center;

    color: ${(props) => props.theme['base-text']};
  }

  // icon
  div {
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    margin-right: 12px;
    flex: 0 0 auto;

    svg {
      color: ${(props) => props.theme.white};
      margin: auto;
    }
  }

  & > li:nth-child(1) > div {
    background: ${(props) => props.theme['yellow-dark']};
  }

  & > li:nth-child(2) > div {
    background: ${(props) => props.theme['base-text']};
  }

  & > li:nth-child(3) > div {
    background: ${(props) => props.theme.yellow};
  }

  & > li:nth-child(4) > div {
    background: ${(props) => props.theme.purple};
  }
`
