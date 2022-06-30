import styled from "styled-components";
import { MyTheme } from "@shared/globalStyles/GlobalTheme";

export const Main = styled.main`
  background-color: ${MyTheme.colors.main};
  width: 1200px;
  justify-content: center;
  margin: 0 auto;
  display: flex;
`;

export const ContainerTitleRegular = styled.div`
  display: flex;
  align-items: center;
  height: auto;
  margin-bottom: 50px;
  cursor: pointer;
`;

export const ContainerSoftwares = styled.div`
  width: 25.8rem;
  margin-top: 55px;

  & ul {
    list-style: none;
    padding: 0;
    margin: 0;
    cursor: pointer;
  }
`;

export const TitleMain = styled.h1`
  font-size: 5rem;
  width: 500px;
  margin: 40px 0 0;
`;

export const TitleRegular = styled.h3`
  font-size: 2.6rem;
  font-weight: 500;
`;

export const TitleSpan = styled.span`
  font-size: 2rem;
  color: ${MyTheme.colors.special};
  padding: 22px 36px;
  background-color: ${MyTheme.colors.secondary};
  border-radius: 40px;
  font-weight: bold;
  cursor: pointer;
`;

export const ImgIconStar = styled.img`
  margin-right: 23px;
`;

export const OptionsList = styled.ul`
  & li {
    font-size: 1.8rem;
  }
`;

export const SocialIcons = styled(OptionsList)`
  display: flex;
  align-items: center;
  justify-content: space-between;

  & li {
    padding: 10px;
    background-color: ${MyTheme.colors.secondary};
    height: 88px;
    width: 88px;
    border-radius: 15px;
  }

  & li:nth-child(3),
  & li:nth-child(4) {
    padding-top: 15px;
    padding-left: 15px;
  }
`;

export const ContainerFigures = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 28px;
  justify-content: end;

  & :first-child {
    margin-left: 1.5rem;
  }
`;

export const LayoutFigures = styled.div`
  display: flex;
  align-items: center;
  transform: rotate(10deg);

  & :last-child {
    align-self: end;
    margin-bottom: 20px;
  }
`;

export const Figures = styled.img`
  width: ${(props) => props.width}
  height: ${(props) => props.height}
`;
