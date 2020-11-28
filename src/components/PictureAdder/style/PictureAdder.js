import styled from "styled-components";

export const AdderContainer = styled.div`
  width: 50%;
  height: calc(100vh - 80px);
  padding: 40px 60px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const AddSection = styled.div`
  width: 378px;
  height: 504px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

export const Header = styled.h1`
  font-size: 3.5rem;
  font-weight: bold;
`;

export const ImageSelector = styled.div`
  cursor: pointer;
  width: 189px;
  height: 252px;
  flex: 1;
  background-color: rgba(65, 90, 119, 0.05);
  border: solid 1px rgba(65, 90, 119, 0.2);
  border-radius: 3px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease-in;

  &:hover {
    background-color: rgba(65, 90, 119, 0.2);
    border: solid 1px rgba(65, 90, 119, 0.2);
  }
`;

export const SubmitButton = styled.button`
  width: 100%;
  height: 60px;
  border-radius: 15px;
  background-color: #ccc;
  color: rgb(65, 90, 119);
  transition: all 0.2s ease-in;
  font-size: 1rem;
  text-transform: uppercase;
  letter-spacing: 2px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: #eee;
  }
`;
