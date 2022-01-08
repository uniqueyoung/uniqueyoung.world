import { useState, useEffect } from 'react';
import styled from 'styled-components'
import { Link } from "react-router-dom";


import Navigation from '../components/Nav';
import Footer from '../components/Footer'
import mountain from '../assets/mountain.jpeg';
import '../App.css';

const GreetingTextLong = '영어강사 출신 디지털노마드의 해외취업 멘토링 프로그램 유니크 Unique 입니다. 고군분투하며 쌓아온 유럽 및 해외 취업전략과 비전공자 개발자 로드맵 등 저의 생생한 경험을 공유합니다. 당신이 지금 어디에 있던 한국을 떠나 세계 무대에서 새로운 삶을 계획하고 계신다면 저와 함께 걸어가요.'
const GreetingText = '영어강사 출신 디지털노마드의 해외취업 멘토링 프로그램 유니크 Unique 입니다. 당신이 지금 어디에 있던 한국을 떠나 세계 무대에서 새로운 삶을 계획하고 계신다면 저와 함께 걸어가요.'

const MainImg = styled.img`
  width: 100vw;
  min-height: 100vh;
  overflow: hidden;
  filter: brightness(45%);
  margin: 0;
  background-repeat: no-repeat; 
  display: none;

  @media (min-width: 700px) {
    display: flex;
}
`

const GreetingContainer = styled.div`
  margin-top: 30vh;
  margin-left: 1.5rem;
  color: #f3f3f3;
  text-align: left;
  font-size: 1.1rem;


  @media (min-width: 700px) {
    margin-top: 2rem;
    margin-left:0;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items:center;  
    position: absolute;
    z-index: 100;
    left: 50%;
    top: 53%;
    text-align: center;
    color: white;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    font-size: 1.2rem;
  }
`

const Quote = styled.h1`
  font-family: 'Be Vietnam Pro', sans-serif;
  letter-spacing: -1px;
  font-size: 2.3rem;
  margin-top: 2rem;
  margin-right: 4rem;
  line-height: 1.1;


  @media (min-width: 400px) {
    font-size: 2.5rem;
}

  @media (min-width: 700px) {
    letter-spacing: -2px;
    margin: 0;
    margin-bottom: 1rem;
    padding: 0;
    font-size: 3.4rem;
}
`

const Content = styled.p`
  font-size: 1rem;
  width:85%;
  line-height: 1.6;

  @media (min-width: 400px) {
    font-size: 1.2rem;  
  } 

  @media (min-width: 700px) {
  font-family: 'Gowun Dodum', sans-serif;
    margin-bottom: 2rem;
    width: 50rem;
  }
`

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;

  @media (min-width: 700px) {
    width: 50%;
    justify-content: space-around;
  }
`

const ActionButton = styled.button`
  width: 8.5rem;
  height: 3.1rem;
  margin-top: 1rem;
  font-size: 1rem;
  font-weight: 700;
  cursor: pointer;
  border-radius: 5px;
  color: white;
  border: none;
  background-color: ${(props) => props.mobileColor};

  &:first-child {
    margin-right: 1.8rem;
  }

  @media (min-width: 400px) {
    width: 9.5rem;
}

  @media (min-width: 700px) {
    font-size: 1.1rem;
    background-color: ${(props) => props.color};
    min-width: 12rem;

    &:hover {
      background-color: ${(props) => props.hoverColor};
    }
    &:first-child {
      margin-right: 3rem;
    }
  }
  

`

function Home() {
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
    <div className="App">
      <header className="App-header">
        <MainImg src={mountain} className="intro-img" />
        <Navigation isColoredPage />
        <GreetingContainer>
          {isMobile ? <Quote>You deserve <br></br>to live the live<br></br> you want to life</Quote> : null}
          {!isMobile ? <Quote>You deserve to live<br></br>the live you want to life</Quote> : null}
          <Content>{isMobile ? GreetingText : GreetingTextLong}</Content>
          <ButtonContainer>
            <Link to="/programs"><ActionButton mobileColor="#202b78" color="#3f9295" hoverColor="#217b7e" >프로그램 보기</ActionButton></Link>
            <Link to="/reviews"><ActionButton mobileColor="#7c8a99" color="#7c8a99" hoverColor="#5c6a78">리뷰 보기</ActionButton></Link>
          </ButtonContainer>
        </GreetingContainer>
      </header>
      <Footer />
    </div>
  );
}

export default Home;
