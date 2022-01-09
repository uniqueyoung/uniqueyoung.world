import styled from 'styled-components'
import { Link } from "react-router-dom";

import Navigation from '../components/Nav';
import Footer from '../components/Footer';
import me from '../assets/me.png';
import circles from '../assets/circles.png';
import logoImg from '../assets/logoImg.png';




const UniqueImgHelper = styled.div`
  width: 100%;
  height: 20vh;
  background-color: darkgrey;
  margin-bottom: -3px;
  display:block;

  @media (min-width: 700px) {
    display:none;
  }
`


const UniqueImg = styled.img`
  width: 100%;
  height: 20vh;
  margin-bottom: 1rem;

  @media (min-width: 700px) {
      height: 60vh;

    margin-bottom: 1.75rem;
  }
`

const OurImg = styled.img`
  width: 100%;
  filter: brightness(40%);
  margin-bottom: 0;

  @media (min-width: 700px) {
    margin-bottom: 1.75rem;
  }
`

const Title = styled.h1`
  font-family: 'Be Vietnam Pro',sans-serif;
  margin: 1rem 0;
  font-size: 2rem;
  
  font-weight: 600;
  color: #363636;
  line-height: 1.1;

  @media (min-width: 700px) {
    padding-right:0;
    font-size: 2.3rem;
  }
`

const DescriptionBox = styled.div`
  font-family: 'Be Vietnam Pro', sans-serif;
  max-width: 100vw;
  padding: 1rem 7%; 
  font-weight: 500;
  display:flex;
  flex-direction: column;
  
  @media (min-width: 700px) {
    padding: 1rem 20%;
  }
`

const ContentP = styled.p`
  font-size: 1rem;
  color: #363636;
  margin-bottom: 0.5rem;
  margin-top: 0;
  line-height: 1.6;

  @media (min-width: 400px) {
    font-size: 1.2rem;
  }

  @media (min-width: 700px) {
    margin-top: 1rem;
  }

`

const CircleWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 1rem 2rem;

    @media (min-width: 700px) {
      padding: 0
  }
  
`
const Circles = styled.img`
  width: 18rem;
  @media (min-width: 700px) {
    width: 32rem;
  }
`


const MoreLink = styled.a`
  margin: 1rem 0;
  font-size: 1.1rem;
  font-weight: 700;
  border: none;
  color: #363636;
  text-decoration: underline;
  text-decoration-style: wavy;
  align-self: flex-end;

  @media (min-width: 700px) {
    font-size: 1.2rem;

  }
`

export default function About() {
  return (
    <>
      <Navigation isColoredPage />
      <UniqueImgHelper />
      <UniqueImg src={logoImg} />
      <DescriptionBox>
        <Title>
          Unique, become the best version of yourself.
        </Title>
        <CircleWrapper>
          <Circles src={circles} />
        </CircleWrapper>
        <ContentP>유니크 프로그램의 본질은 [내면에 집중하기] 입니다. 지금 내가 원하는 걸 얻기 위해서 내가 아닌 다른 사람인 척할 필요 없어요. 지금 가진 것만으로도 충분합니다. 앞으로 해야 할 일은 그것들을 자연스럽게 이력서에 녹여내고 효과적인 방법으로 문을 두드리는 것입니다. 많이 준비하고 많이 두드리면 분명히 열립니다. </ContentP>
        <ContentP>유니크 프로그램의 모든 컨텐츠, 로드맵, 과제는 제가 직접 고안하고 설계하였습니다. 당신이 준비하고 있는 그 길을 더 빨리 갈 수 있도록 제가 자신있는 분야들로만 프로그램을 꾸렸습니다. 영어강사 경력, 심리학 전공, 수많은 해외취업 경력, 유럽, 미국, 싱가폴, 호주 등 수 많은 회사들과의 인터뷰 경험을 바탕으로 멘토링합니다.
        </ContentP>
        <MoreLink><Link to="/programs">프로그램 보기</Link></MoreLink>
      </DescriptionBox>

      <OurImg src={me} alt="My partner, myself and an argentinian friend in San Cristoral, Mexico." />
      <DescriptionBox>
        <Title>
          Why I do what I do.
        </Title>
        <ContentP>안녕하세요 헤더입니다. 당신의 귀중한 시간을 내서 제 공간을 방문해주셔서 진심으로 감사해요. 저는 현재 영국에 베이스를 두고 전세계를 앞마당 삼아 디지털노마드로 살고 있어요. 저는 대학에서 심리학을 공부했고 주관적 행복에 대해 관심이 많아요. 20대 초반 길고 짧은 배낭여행를 다니면서 제가 원하는 것은 사회가 정의하는 성공한 삶이 아니라 자유로운 삶이라는 걸 깨닫았어요. 저는 영어 강사일을 오래했고 현재 본업은 개발자입니다. 한국에서 취업에 지독하게 실패했고 많이 헤맸지만 저는 지금 원하는 곳에 있으며 원하는 일을 하고 있고 무엇보다 자유로워요. 고군분투하며 쌓아온 영국, 유럽, 미국 등 해외취업 전략과 비전공자 개발자 로드맵 등 저의 생생한 경험을 공유합니다. 당신이 지금 원하는 삶을 찾아 걸어가는 그 여정에서 덜 실패하고 더 빨리 갈 수 있도록 제가 먼저 거쳐간 고민들과 시행착오를 공유하고 싶어요. 당신이 젊고 건강할 때 더 넓은 세상을 보고 다양한 사람을 만나고 많은 것들을 즐겼으면 좋겠어요. You are young and unique.</ContentP>
        <MoreLink href="https://blog.naver.com/jamonytomate/222610304829" target="_blank" rel="noopener noreferrer">본문읽기</MoreLink>
      </DescriptionBox>
      <Footer />
    </>
  )
}