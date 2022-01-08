import React from "react"

import Navigation from '../components/Nav'
import PageTitle from "../components/PageTitle"
import ProgramOverview from "../components/ProgramOverview"
import ReviewContainer from "../components/ReviewContainer";
import Footer from '../components/Footer'
import mock from '../assets/mock'

const product = mock.products[0];
const programs = product.programs;
const review = mock.reviews.entry[101]

function Entry() {

  return (
    <div>
      <Navigation isProgram backgroundColor={product.color} />
      <PageTitle color={product.color} isProgram>{product.type}</PageTitle>
      {programs.map((program) => <ProgramOverview {...program} theme={product.secondary} secondary={product.color} />)}
      <ReviewContainer color={product.secondary} item={review} />
      <Footer />
    </div>
  )
}

export default Entry