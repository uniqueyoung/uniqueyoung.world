import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Title = styled.p`
  font-size: 1.5rem;
  margin: 0.5rem 0;
  font-weight: 600;
  
  @media (min-width: 700px) {
    font-size: 2rem;
    margin:1.5rem 0;

  }
`

const ProductCardContainer = styled.div`
  width: 86vw;
  height: 265px;
  line-height: 1.6;
  color: white;
  background-color: ${(props) => props.backgroundColor};
  padding: 1.2rem;
  margin-bottom: 2rem;
  cursor: pointer;
  border-radius: 5px;
  border: 2px solid rgb(255, 255, 255);
  will-change: transform, filter;
  transition-duration: 0.25s;
  filter: drop-shadow(rgba(0, 0, 0, 0.1) 0px 1px 4px);

  &:hover {
    transform: translateY(-10px);
    filter: drop-shadow(rgba(0, 0, 0, 0.05) 0px 11px 4px);
  }

  @media (min-width: 700px) {
    width: 340px;
    height: 340px;
    padding: 2rem;
    margin-bottom: 2.5rem;
  }
`

const Description = styled.p`
  padding-right: 0.5rem;
  font-size: 1.1rem;
`

const ViewMore = styled.p`
  text-align: right;
  margin-top: 1rem;
  font-weight: 600;
  text-decoration: underline;
  text-decoration-style: wavy;
  font-size: 1.1rem;
`

const ProgramCard = (props) => {
  const { color, type, description } = props;
  return (
    <ProductCardContainer backgroundColor={color} >
      <Title>{type}&nbsp;
        {type === '커피챗' ? < FontAwesomeIcon icon={"coffee"} /> : null}
      </Title>
      <Description>{description}</Description>
      <ViewMore>더보기</ViewMore>
    </ProductCardContainer >
  )
}

export default ProgramCard