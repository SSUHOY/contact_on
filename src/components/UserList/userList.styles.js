import styled from "styled-components";

export const UserCard = styled.div`
  width: 350px;
  display: flex;
  height: 100%;
  background: #212121;
  padding: 8px;
  border-radius: 12px;
  text-align: center;
  box-shadow: 0 1px 14px 1px rgba(0, 0, 0, 2);
  &:hover {
    transition: transform 0.2s;
    transform: scale(1.03);
    will-change: transform;
    box-shadow: 0 1px 15px 0px rgba(135, 116, 225, 0.8);
  }
`;

export const UserImageBlock = styled.div`
  width: 128px;
  border-radius: 100%;
  border: 2px solid #6e749c;
  height: 128px;
  margin-right: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const UserImg = styled.img`
  height: 128px;
  width: 128px;
  border-radius: 100%;
`;

export const UserInformation = styled.div`
  text-align: left;
  color: #fafafa;
`;

export const UserName = styled.h3`
  color: #fafafa;
  font-size: 16px;
`;
export const UserAge = styled.p`
  color: #fafafa;
`;
export const UserCity = styled.p`
  color: #fafafa;
`;

export const UserDescription = styled.div`
  padding: 5px;
  width: 186px;
  height: 100px;
  overflow: auto;
  border: 1px solid gray;
  margin-bottom: 8px;
  p {
    white-space: wrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;
