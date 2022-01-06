import styled from 'styled-components'
import { Link } from "react-router-dom";


import logo from './logo.light.png';
import logoDark from './logo.dark.png';
import Footer from './components/Footer'
import './App.css';


const longText = '저는 현재 영국에 베이스를 두고 전 세계를 앞마당 삼아 디지털 노마드로 살고 있어요. 고군분투하며 쌓아온 유럽 및 해외 취업전략과 비전공자 개발자 로드맵 등 저의 생생한 경험을 공유합니다. 당신이 지금 어디에 있든 한국을 떠나 새로운 무대에서의 삶을 계획하고 계신다면 저와 함께 걸어가요. '
const shortText = '당신이 지금 어디에 있든 한국을 떠나 새로운 무대에서의 삶을 계획하고 계신다면 저와 함께 걸어가요.'

const GreetingContainer = styled.div`
  margin-left: 1.5rem;
  color: #f3f3f3;
  text-align: left;

  @media (min-width: 700px) {
    margin-left:0;
    text-align: center;
  }
`

const Quote = styled.h1`
  font-family: 'Be Vietnam Pro', sans-serif;
  letter-spacing: -1px;
  font-size: 2.2rem;
  margin-top: 2rem;

  @media (min-width: 400px) {
    font-size: 2.4rem;
}

  @media (min-width: 700px) {
    margin-top: 6rem;
    padding: 0;
    font-size: 3rem;
}
`

const Content = styled.p`
  font-size: 1rem;
  font-weight:bold;
  width:80%;
  line-height: 1.6;

  @media (min-width: 400px) {
    font-size: 1.2rem;
}

  @media (min-width: 700px) {
    padding: 1rem;
    width: 100%;
  }
`

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`

const ActionButton = styled.button`
  min-width: 9rem;
  height: 50px;
  margin-top: 1rem;
  font-size: 1rem;
  font-weight: 700;
  cursor: pointer;
  border-radius: 5px;
  font-family: 'Gowun Dodum', sans-serif;
  color: white;
  border: none;
  background-color: ${(props) => props.color};

  @media (min-width: 700px) {
    width: 160px;
    font-size: 19px;
  }
  
  &:first-child {
    margin-right: 1rem;
  }

  &:hover {
    color: white;
    background-color: #5569d9;
  }
`

const longQuote = "You deserve to live the live" + < br ></br> + "you want to live"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/*
        <a
          className="App-link"
          href="https://reactjs.org"
        >
        </a> */}
        <GreetingContainer>
          <Quote>
            You deserve<br></br> to live the live<br></br> you want to live.
          </Quote>
          <Content>{shortText}</Content>
          <ButtonContainer>
            <Link to="/programs"><ActionButton color="#3f51b5">프로그램 보기</ActionButton></Link>
            <Link to="/reviews"><ActionButton color="#818181">리뷰 보기</ActionButton></Link>
          </ButtonContainer>
        </GreetingContainer>
      </header>
      <Footer />
    </div>
  );
}

export default App;
