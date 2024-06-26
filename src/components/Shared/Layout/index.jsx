import { Layout } from "antd";
import styled from "styled-components";

export const { Header, Content, Footer } = Layout;

export const SharedLayout = styled(Layout)`
  height: 100vh;
  width: 100%;
`;

export const SharedHeader = styled(Header)`
  display: flex;
  justify-content: space-between;
`;

export const UsersUI = styled.div`
  width: 50%;
  height: 50px;
`;
export const UsersEvents = styled.div`
  height: 68px;
  width: 50px;
  display: flex;
  justify-content: space-between;
  color: "white";
`;

export const AddToFriendsEvents = styled.div`
  position: absolute;
  width: 18px;
  top: 7px;
  height: 18px;
  border-radius: 50%;
  background-color: coral;
  color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const MessageInBoxEvents = styled.div`
  position: absolute;
  width: 18px;
  top: 7px;
  height: 18px;
  border-radius: 50%;
  background-color: coral;
  color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FiltersBox = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SearchAndSortContainer = styled.div`
  width: 500px;
  align-items: center;
  background-color: #212121;
  border-radius: 10px;
  padding: 10px;
`;

export const PageContainer = styled.div`
  height: 100vh;
  background-color: #101010;
  display: flex;
  justify-content: center;
`;

export const NoFriendsAlertBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  color: white;
`;

export const FriendsBlock = styled.div`
  display: flex;
  justify-content: space-between;
  width: 300px;
  margin-bottom: 10px;
`;

export const RequestsHandlers = styled.div`
  width: 220px;
  display: flex;
  margin-left: 10px;
  flex-direction: row;
  padding: 10px;
  border-left: 1px solid gray;
  justify-content: space-between;
`;
