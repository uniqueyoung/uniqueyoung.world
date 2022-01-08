import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Navigation from '../components/Nav'
import PageTitle from "../components/PageTitle"
import ProgramOverview from "../components/ProgramOverview"
import Footer from '../components/Footer'
import mock from '../assets/mock'
import profileTrump from '../assets/trump-circle.png';

const product = mock.products[6];
const programs = product.programs;

const TrumpQuote = styled.div`
  height: 70vh;
  font-family: 'Be Vietnam Pro', sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.color};
  color: white;
  @media (min-width: 700px) {
    height: 450px;
  }
`
const TrumpImg = styled.img`
  box-sizing: border-box;
  padding: 1rem;
  width: 190px;
  height: 190px;
`

const Quote = styled.p`
  font-family: 'Be Vietnam Pro', sans-serif;
  width: 80%;

  text-align: center;
  font-size: 25px;
  margin-bottom: 20px;
  @media (min-width: 700px) {
      width: 40%;

  }
`
function CoffeeChat() {
  return (
    <div>
      <Navigation isProgram backgroundColor={product.color} />
      <PageTitle color={product.color} isProgram>{product.type} < FontAwesomeIcon icon={"coffee"} /></PageTitle>
      {programs.map((program) => <ProgramOverview {...program} theme={product.secondary} secondary={product.color} />)}

      <TrumpQuote color={product.color}>
        <TrumpImg src={profileTrump} />
        <Quote>&#8220;Always try to learn from people's mistake not your own. It is much cheaper that way.&#8221;
        </Quote><span>Donald Trump</span></TrumpQuote>
      <Footer />
    </div>
  )
}

export default CoffeeChat