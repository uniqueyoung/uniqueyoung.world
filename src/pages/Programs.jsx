import { Fragment } from "react"
import styled from 'styled-components'
import { Link } from "react-router-dom"

import Navigation from '../components/Nav'
import PageTitle from "../components/PageTitle"
import ProgramCard from "../components/ProgramCard.jsx"
import Footer from '../components/Footer'
import mocks from '../assets/mock'

const ProgramWrapper = styled.div`
  padding: 2rem 1rem;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  @media (min-width: 700px) {
    max-width: 75%;
    padding: 5rem 0;
    justify-content: space-between;
    margin: 0 auto;
  }
`


const products = mocks.products;

function Programs() {
  return (
    <>
      <Navigation />
      <PageTitle>Programs.</PageTitle>
      <ProgramWrapper>
        {products.map((product) => {
          return (
            <Link to={product.link}><ProgramCard {...product} /></Link>)
        })}
      </ProgramWrapper >
      < Footer />
    </>
  )
}

export default Programs
