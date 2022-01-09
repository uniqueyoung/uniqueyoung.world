import mock from '../assets/mock';
import PageTitle from "../components/PageTitle"
import Navigation from '../components/Nav'
import ReviewContainer from "../components/ReviewContainer";
import Footer from '../components/Footer'


const allReviews = mock.reviews.all;

function Reviews() {
  return (
    <div>
      <Navigation navTheme="light" isDarkLogo />
      <PageTitle>Reviews.</PageTitle>
      {allReviews.map((review) => <ReviewContainer item={review} isReviewPage={true} />)}
      <Footer />
    </div>
  )
}



export default Reviews

