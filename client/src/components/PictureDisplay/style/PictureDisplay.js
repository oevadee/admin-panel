import styled from "styled-components";

export const PictureContainer = styled.div`
  flex: 1;
  width: 50%;
  height: calc(100vh - 80px);
  padding: 40px 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Image = styled.img`
  width: 378px;
  height: 504px;
  object-fit: cover;
  border-radius: 3px;
`;
