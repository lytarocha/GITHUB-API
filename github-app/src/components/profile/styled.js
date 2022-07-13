import styled from "styled-components";

export const Wrapper = styled.div`
display: flex;
  align-items: flex-start;
`;

export const WrapperInfoUser = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: space-between;
margin: 0 8px;
height: 60%;

  h1 {
    font-size: 32px;
    font-weight: bold;
  }
  h3 {
    font-size: 18px;
    font-weight: bold;
  }
  h4 {
    font-size: 18px;
    font-weight: bold;
   

  }
`;

export const WrapperStatusCount = styled.div`
display: flex;
align-items: center;
div {
  margin: 8px;
  text-align: center;
}
`;
export const WrapperUserGeneric = styled.div`
  display: flex;
  align-items: center;
  margin-top: 8px;
  h3 {
    margin-right: 5px;
  }
  a {
    font-size: 18px;
    color: #C71585;
    font-weight: bold;
  }
`;

export const WrapperImage = styled.img`

border-radius: 50%;
border: 2px solid rgba(144, 157, 171, 0.5);
width: 250px;
margin: 10px;
`;