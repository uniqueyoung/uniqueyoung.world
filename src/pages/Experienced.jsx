import Navigation from '../components/Nav'
import PageTitle from "../components/PageTitle"
import ProgramOverview from "../components/ProgramOverview"
import ReviewContainer from "../components/ReviewContainer";
import Footer from '../components/Footer'
import mock from '../assets/mock'

const product = mock.products[1];
const programs = product.programs;
const reviews = mock.reviews.experienced[201];

function Experienced() {
  return (
    <div>
      <Navigation isProgram backgroundColor={product.color} />
      <PageTitle color={product.color} isProgram>{product.type}</PageTitle>
      <ProgramOverview theme={product.secondary} secondary={product.color} {...programs[0]} />
      <ReviewContainer color={product.color} item={reviews} />
      <Footer />
    </div>
  )
}

export default Experienced