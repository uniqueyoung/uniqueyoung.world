import Navigation from '../components/Nav'
import PageTitle from "../components/PageTitle"
import ProgramOverview from "../components/ProgramOverview"
import ReviewContainer from "../components/ReviewContainer";
import Footer from '../components/Footer'
import mock from '../assets/mock'

const product = mock.products[2];
const programs = product.programs;
const reviews = mock.reviews.english[101]


function English() {
  return (
    <div>
      <Navigation isProgram backgroundColor={product.color} />
      <PageTitle color={product.color} isProgram>{product.type}</PageTitle>
      {programs.map((program) => <ProgramOverview {...program} theme={product.secondary} secondary={product.color} />)}
      <ReviewContainer color={product.color} item={reviews} />
      <Footer />
    </div>
  )
}

export default English