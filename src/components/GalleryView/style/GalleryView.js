import styled from 'styled-components';

export const GalleryContainer = styled.div`
  width: 50%;
  height: calc(100vh - 80px);
  padding: 40px 60px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
`

export const GalleryImage = styled.img`
  width: 150px;
  height: 150px;
`