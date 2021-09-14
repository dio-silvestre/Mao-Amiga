import { useState, useEffect } from "react";
import { useAuth } from "../../providers/Auth";
import { Redirect } from "react-router-dom";
import {
  Container,
  MainContainer,
  HeaderContainer,
  CalendarContainer,
} from "./styles";
import SideBar from "../../components/Sidebar";

import Calendar from "../../components/Calendar";
import HeaderMobile from "../../components/HeaderMobile";
import MenuMobile from "../../components/MenuMobile";

const Dashboard = () => {
  useEffect(() => {
    handleUserType();
  }, []);
  const { myData, isLogged } = useAuth();

  const [userType, setUserType] = useState("");

  const handleUserType = () => {
    if (myData.user_type === "voluntary") {
      setUserType("Voluntário");
    }
    setUserType("Instituição");
  };

  if (!isLogged) {
    return <Redirect to="/login" />;
  }

  return (
    <Container>
      <HeaderMobile />
      <MenuMobile />
      <SideBar />
      <MainContainer>
        <HeaderContainer>
          <div>
            <h2> Seja bem vindo (a) , </h2>
            <h1> {userType} !</h1>
          </div>

          <input
            type="text"
            className="searchBar"
            placeholder="Pesquisar por ação"
          />
        </HeaderContainer>
        <CalendarContainer>
          <Calendar />
        </CalendarContainer>
      </MainContainer>
    </Container>
  );
};

export default Dashboard;
