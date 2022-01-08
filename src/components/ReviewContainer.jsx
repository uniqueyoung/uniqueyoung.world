import React from "react"
import styled from 'styled-components'
import { Link } from "react-router-dom";

// import '../pages/style.css';


const ReviewContainerWrapper = styled.div`
  background-color: ${(props) => props.color};
  margin-top: -20px;
  width: 100vw;
  min-height: 550px;
  padding: 4rem 1.5rem 4rem 1.5rem;
  display: flex;
  flex-direction: column;
  
  @media (min-width: 700px) {
    padding: 5rem 8rem 3rem 8rem;
  }
`


const ReviewItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  line-height: 1.6;
  
  @media (min-width: 700px) {


  }
  `


const ReadMoreLink = styled(Link)`
  margin-top:30px;
  font-size: 18px;
  font-weight: 600;
  border: none;
  color: white;
  background-color: transparent;
  text-decoration: underline;
  text-decoration-style: wavy;
  align-self: center;
  font-family: 'Gowun Dodum';

  @media (min-width: 700px) {
    margin-top:0;
    margin-bottom: 20px;
    align-self: flex-end;
  }
`

const ItemWrapper = styled.div`
  width: 100%;
  color: white;
  display: flex;
  flex-direction: column;
  align-items:center;
  letter-spacing: 0.5px;

  @media (min-width: 700px) {
    width: 70%;
  }
  `

const ProfileImg = styled.img`
  width: 150px;
  height: 150px;
  margin-bottom: 40px;
  
  @media (min-width: 700px) {
    margin-bottom: 60px;
  }
`

const Dot = styled.span`
  height:10px;
  width: 10px;
  background-color: white;
  border-radius: 50%;
  display: inline-block;
`
const ProfileDetailContainer = styled.div`
  margin-top: 30px;
  display:flex;
  flex-direction: column;
  align-items:center;
`

const ProgramNamesContainer = styled.span`
  display:flex;
  justify-content: center;
`

const JobContainer = styled.div`
  display:flex;
  justify-content: center;
  text-aignt: center;
  
  p {
    text-align: center;
  }
`
const ReivewContent = styled.p`
  padding:0;
  font-size: 1.1rem;
  margin-bottom: 1rem;
  
  @media (min-width: 700px) {
  font-size: 1.2rem;
  }
`
function ReviewItem({ profile, content, program, name, job, at, link, isReviewPage }) {
  const programNames = program.map((ele) => (<span><Dot />&nbsp;{ele}&nbsp;</span>));
  const moreLink = isReviewPage ? link : '/reviews';

  return (
    <ItemWrapper>
      <ProfileImg src={profile} />
      <ReivewContent>{content}</ReivewContent>
      <ProfileDetailContainer>
        <ProgramNamesContainer>{name}&nbsp;{programNames}</ProgramNamesContainer>
        <JobContainer>
          <p>{job}&nbsp;{at}</p>
        </JobContainer>
      </ProfileDetailContainer>
      {isReviewPage ? <ReadMoreLink to={moreLink}>프로그램보기</ReadMoreLink> : <ReadMoreLink to={moreLink}>리뷰 더보기</ReadMoreLink>}
    </ItemWrapper>)
}


function ReviewContainer({ color, item, isReviewPage }) {
  const backgroundColor = color ? color : item.color;
  return (
    <ReviewContainerWrapper color={backgroundColor}>
      <ReviewItems>
        <ReviewItem {...item} isReviewPage />
      </ReviewItems>
    </ReviewContainerWrapper >)
}

export default ReviewContainer;

