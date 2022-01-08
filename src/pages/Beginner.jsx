import React from "react"

import Navigation from '../components/Nav'
import PageTitle from "../components/PageTitle"
import ProgramOverview from "../components/ProgramOverview"
import ReviewContainer from "../components/ReviewContainer";
import Footer from '../components/Footer'
import mock from '../assets/mock';

const product = mock.products[3];
const programs = product.programs;

const review101 = mock.reviews.beginnner[101];
const review102 = mock.reviews.beginnner[102];

function Beginner() {
  return (
    <div>
      <Navigation isColoredPage backgroundColor={product.color} isProgram />
      <PageTitle color={product.color} isProgram>{product.type}</PageTitle>
      <ProgramOverview {...programs[0]} theme={product.secondary} secondary={product.color} />
      <ReviewContainer color={product.color} item={review101} />
      <ProgramOverview {...programs[1]} theme={product.secondary} secondary={product.color} />
      <ReviewContainer color={product.color} item={review102} />
      <Footer />
    </div>
  )
}

export default Beginner
