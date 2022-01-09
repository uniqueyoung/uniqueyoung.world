
import React, { useState, useEffect } from "react"
import styled from 'styled-components'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import '../utils/icon';


const FooterContainer = styled.footer`
  font-family: 'Be Vietnam Pro', sans-serif;
  min-height: 150px;
  padding: 1.5rem;
  bottom: 0;
  color: #f3f3f3;
  background-color: #424242;
  display: flex;
  flex-direction: column;
  text-align: left;

  @media (min-width: 700px) {
    flex-direction: row;
    justify-content: space-between;
    padding: 3rem 10%;
  }
`

// p default margin 1rem
const FooterItemTitle = styled.p`
  font-weight: 600;
  font-size: 1rem;
  font-family: 'Be Vietnam Pro', sans-serif;

  @media (min-width: 400px) {
    font-size: 1.2rem;  
  }
`
const LinkContainer = styled.div`
  display: flex;
  flex-direction: column;
`
const FooterRight = styled.div`
  margin: 2rem 0;

  @media (min-width: 700px) {
    margin:0;
    min-width: 30%;
  }
`

const FooterItem = styled.a`
  font-size: 1rem;
  margin-bottom: 0.4rem;
  
  @media (min-width: 400px) {
    font-size: 1.2rem;
  }

`

// mobile view first string
const blogPostMap = [
  {
    type: '세미나',
    title: '[비전공자 개발자] 세미나 2차 안내',
    id: '222611598526'
  },
  {
    type: '해외취업',
    title: '왜 해외취업인가?',
    id: '222610304829'
  },
  {
    type: '디지털노마드',
    title: '스페인 알리칸테 Alicante 1편',
    id: '222602675809'
  },
  {
    type: '해외취업',
    title: '영국 아마존 인터뷰 후기',
    id: '222600572825'
  },
  {
    type: '신변잡기',
    title: '꾸준함의 힘 (Feat. 100일 코딩챌린지)',
    id: '222604284611'
  },
]


const FooterItemLink = ({ id, title, type }) => {
  return <FooterItem href={`https://blog.naver.com/jamonytomate/${id}`} target="_blank" rel="noopener noreferrer"><strong>{type ? `[${type}]` : null}</strong> {title}</FooterItem>
}

function Footer() {
  // TODO move to /hooks, this will be used in many places
  const [width, setWidth] = useState(window.innerWidth);

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }

  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    }
  }, []);

  const isMobile = width <= 768;

  return (
    <FooterContainer>
      <div>
        <FooterItemTitle>QUICK LINK</FooterItemTitle>
        <LinkContainer>
          {isMobile ? blogPostMap.slice(0, 3).map((post) => <FooterItemLink {...post} />) : blogPostMap.map((post) => <FooterItemLink {...post} />)}
        </LinkContainer>
      </div>
      <FooterRight >
        <FooterItemTitle>CONTACT ME</FooterItemTitle>
        <FooterItemTitle>모든 문의사항은 이메일을 이용해주세요.</FooterItemTitle>
        <LinkContainer>
          <FooterItem><FontAwesomeIcon icon={"envelope-square"} fontSize={"36px"} />&nbsp;&nbsp;uniqueyoung.world@gmail.com</FooterItem>
          <FooterItem href="https://www.linkedin.com/in/heather-yun-3796528a" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={['fab', 'linkedin-in']} fontSize={"36px"} />&nbsp;&nbsp;Linkedin</FooterItem>
          <FooterItem href='https://blog.naver.com/jamonytomate' target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={'home'} fontSize={"306x"} />&nbsp;&nbsp;Blog </FooterItem>
        </LinkContainer>
      </FooterRight>
    </FooterContainer>
  )
}

export default Footer