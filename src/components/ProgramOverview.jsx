import { useState, useEffect } from 'react';
import { Link } from "react-router-dom"
import styled from 'styled-components'


const ProgramWrapper = styled.div`
  width: 100%;
  font-family: 'Be Vietnam Pro', sans-serif;
  line-height: 1.6;
  margin: 0 auto;
  padding: 1.5rem;

  @media (min-width: 700px) {
    width: 75%;
    margin-bottom: 5rem;
    padding: 0;
  }
`

const LineIntro = styled.div`
  padding: 2rem 1rem;
  display: flex;
  flex-direction: row;
  
  @media (min-width: 700px) {
    padding: 2.5rem 3.5rem;
    margin-bottom: 2rem;
  }
`

const Label = styled.label`
  text-transform: uppercase;
  font-family: 'Be Vietnam Pro', sans-serif;
`

const Hr = styled.hr`
  @media (min-width: 700px) {
    flex: 1 1 0%;
    border-top: none;
    border-right: none;
    border-left: none;
    border-image: initial;
    border-bottom: 1px solid black;
    margin-left: 1rem;
    margin-top: 10px;
  }
`

const H1 = styled.h1`
  margin: 0 0 0.5rem;
  font-size: 1.6rem;
  font-weight: 700;

  @media (min-width: 700px) {
    margin: 0px 0px 1rem;
    font-size: 2.2rem;
  }
`

const H2 = styled.h2`
  text-transform: uppercase;
  font-size: 1.4rem;
  margin: 0px;
  color: ${props => props.theme ? props.theme : 'initial'};

  @media (min-width: 700px) {
    font-size: 1.6rem;
  }
`

const ProgramContent = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 700px) {
    flex-direction: row;
  }
`

const LeftWrapper = styled.div`
  margin-bottom: 1rem;
  font-size: 17px;

  @media (min-width: 700px) {
    margin-right: 8rem;
    margin-bottom: 0;
  }
`

const RightWrapper = styled.div`
  width: 90vw;
  flex: 1 1 0%;
  text-transform: uppercase;
  
  @media (min-width: 700px) {
    min-width: 15rem;
    font-size:1rem;
  }
`

const P = styled.p`
  font-size: 1.1rem;
  margin-top: 1rem;

  @media (min-width: 700px) {
    font-size: 1.2rem;
  }

  &:first-child {
    margin-bottom: 2rem;
  }
`

const DetailItemWrapper = styled.div`

`

const DetailLabel = styled.label`
  font-weight: 700;
  text-transform: uppercase;
  `

const DetailP = styled.p`
  margin-top: 0.2rem;
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
  
  @media (min-width: 700px) {
    font-size: 1rem;
  margin-bottom: 1rem;

  }

`

const ButtonContainer = styled.div` 
  margin-top: 1.5rem; 
  display: flex;
  flex-direction:  column;
  max-width: 100%;
  
  @media (min-width: 400px) {
    font-size: 1.1rem;
    width: 10rem;
    flex-direction: row;
    justify-content: space-between;
  }

  @media (min-width: 700px) {
    margin-top: 1rem; 
    flex-direction:  column;
  }
`

const ActionButton = styled.button`
  background-color: ${props => props.action === 'apply' ? props.theme : 'lightgray'};
  padding: 0;
  color: white;
  border: none;
  width: 18rem;
  font-size: 1rem;
  height: 50px;
  border-radius: 5px;
  font-weight: 600;
  cursor: pointer;
  
  &:first-child {
    margin-right: 1rem;
    margin-bottom: 1rem;

    @media (min-width: 700px) {
      margin-bottom:0.5rem;
    }
  }

  &:hover {
      background-color: ${props => props.action === 'apply' ? props.secondary : '#bdbcbc'};
  }

  @media (min-width: 400px) {
      font-size: 1.1rem;
      width: 11rem;
      margin-bottom: 1rem;

  }

  @media (min-width: 700px) {
    margin: 0.7rem 0;
    width: 13rem;
  }

`


const DetailItem = ({ label, value }) => {
  return (
    <DetailItemWrapper>
      <DetailLabel>{label}</DetailLabel>
      {typeof (value) !== 'string' ? value.map((value) => <DetailP>{value}</DetailP>) : <DetailP>{value}</DetailP>}
    </DetailItemWrapper>
  )
}


export default function ProgramOverview({ title, code, form, content, SecondContent, afters, details, theme, secondary }) {
  const afterString = code === '501' ? '키워드' : `${title}에서 무엇을 얻어 갈 수 있을까?`;
  const [width, setWidth] = useState(window.innerWidth);

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }

  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    }
  }, [])
  const isMobile = width <= 768;

  return (
    <>
      {isMobile ? null : (<LineIntro>
        <Label>
          Program Brief
        </Label>
        <Hr />
      </LineIntro>)}
      <ProgramWrapper className="main-content">
        <H1>{title}</H1>
        <H2 theme={secondary}>What to Expect?</H2>
        <ProgramContent>
          <LeftWrapper>
            <P>{content}</P>
            <P>{SecondContent}</P>
            <P><strong>{afterString}</strong><br></br> {afters.map((after) => <>{after}<span>&nbsp;&#10004; &nbsp;</span></>)}</P>
          </LeftWrapper>
          <RightWrapper>
            {details.map((detailItem) => <DetailItem {...detailItem} />)}
            <ButtonContainer>
              <a href={form} target="_blank" rel="noopener noreferrer"><ActionButton action="apply" theme={theme} secondary={secondary}>예약신청하기</ActionButton></a>
              <Link to="/programs"><ActionButton>다른 프로그램 보기</ActionButton></Link>
            </ButtonContainer>
          </RightWrapper>
        </ProgramContent>
      </ProgramWrapper>
    </>
  )
}

