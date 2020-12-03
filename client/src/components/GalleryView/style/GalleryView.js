import styled from "styled-components";

export const GalleryContainer = styled.div`
  flex: 1;
  width: 50%;
  height: calc(100vh - 80px);
  padding: 40px 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const GallerySection = styled.div`
  height: 550px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  overflow-y: scroll;
  /* Hide scrollbar for Chrome, Safari and Opera */
  &::-webkit-scrollbar {
    display: none;
  }

  /* Hide scrollbar for IE, Edge and Firefox */
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
`;

export const GalleryImage = styled.img`
  width: 150px;
  height: 150px;
  margin: 10px 20px;
`;
