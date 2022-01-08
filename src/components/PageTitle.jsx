import styled from 'styled-components'

const Wrapper = styled.div` 
  width: 100%;
  height: 300px;
  padding-top: 180px;
  display: inline-block;
  background-color: ${props => props.color ? props.color : "#f0f0f0"};
  color: ${props => props.isProgram ? '#fff' : '#363636'};
  text-align: center;
  margin-top: -3px;

  @media (min-width: 700px) {
    font-size: 3rem;
    margin-bottom: -5px;
    min-height: 300px;
    padding-top: 220px;
  }
`

const TitleP = styled.p`
  font-family: 'Be Vietnam Pro', sans-serif;
  font-weight: bold;
  font-size: 2.5rem;

  @media (min-width: 700px) {
    margin:0;
    font-size: 2.8rem;
    margin-bottom: -5px;
  }
`

function PageTitle({ color, children, isProgram }) {
  return (
    <Wrapper color={color} isProgram={isProgram}>
      <TitleP>{children}</TitleP>
    </Wrapper>
  )
}
export default PageTitle 