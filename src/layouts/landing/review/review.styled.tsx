import styled from "styled-components";

export const ReviewSection = styled.div`
  padding-top: 227px;
  color: #051730;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ReviewTitle = styled.h1`
  margin: 0;
  padding-bottom: 5px;
  text-align: center;
  font-size: clamp(22px, 4.3vw, 36px);
  font-weight: bold;
`;

export const ReviewDesc = styled.p`
  max-width: 1031px;
  width: 85%;
  margin: 0;
  font-weight: 500;
  font-size: clamp(12px, 4.3vw, 18px);
  text-align: center;
`;

export const ReviewCard = styled.div`
  background-color: #ffffff;
  padding: 32px 65px;
  border-radius: 30px;
  width: 729px;
  width: 90%;
  margin-top: 70px;
  display: flex;
  flex-direction: column;
  align-items: start;
  @media screen and (max-width: 1024px) {
    width: auto;
  }
`;

export const RCardDesc = styled.p`
  font-weight: normal;
  font-size: clamp(15px, 4.3vw, 20px);
  margin: 10px 0;
`;

export const RCardDescSection = styled.div`
  display: flex;
  justify-content: space-between;
  img {
    max-width: 205px;
    width: 100%;
    margin-bottom: -32px;
  }
`;

export const RCardDescPart = styled.div`
  width: 60%;
`;
