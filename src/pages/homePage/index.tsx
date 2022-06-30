import {
  Main,
  TitleRegular,
  ContainerTitleRegular,
  TitleSpan,
  ImgIconStar,
  TitleMain,
  OptionsList,
  ContainerSoftwares,
  SocialIcons,
  ContainerFigures,
  Figures,
  LayoutFigures,
} from "./styles";

import { SketchIcon, FigmaIcon, PngIcon, BlenderIcon } from "@assets/index";
import {
  AtomFig,
  DocumentFig,
  HatFig,
  MicroFig,
  TrophyFig,
  GlobalFig,
} from "@assets/figures/index";
import starIcon from "@assets/starIcon.png";

export default function HomePage() {
  return (
    <Main>
      <section style={{ marginLeft: 0, width: "580px" }}>
        <ContainerTitleRegular>
          <ImgIconStar src={starIcon} alt="star icon" />
          <TitleRegular>Spectrum UI</TitleRegular>
        </ContainerTitleRegular>

        <div>
          <TitleSpan>FREE FULL PACK</TitleSpan>

          <TitleMain>Education 3D Icon Set</TitleMain>
        </div>

        <OptionsList>
          <li>20 Premium 3D icons</li>
          <li>Changeable Colors</li>
        </OptionsList>

        <ContainerSoftwares>
          <SocialIcons>
            <li>
              <img src={BlenderIcon} alt="blender icon" />
            </li>
            <li>
              <img src={FigmaIcon} alt="figma icon" />
            </li>
            <li>
              <img src={SketchIcon} alt="sketch icon" />
            </li>
            <li>
              <img src={PngIcon} alt="letters PNG icon" />
            </li>
          </SocialIcons>
        </ContainerSoftwares>
      </section>
      <section>
        <ContainerFigures>
          <Figures
            width="90px"
            height="90px"
            src={AtomFig}
            alt="figure of an atom"
          />
          <Figures
            width="170px"
            height="170px"
            src={MicroFig}
            alt="figure of a microscope"
          />
          <Figures
            width="250px"
            height="250px"
            src={GlobalFig}
            alt="figure of miniature of the planet earth"
          />

          <LayoutFigures>
            <Figures
              width="160px"
              height="160px"
              src={HatFig}
              alt="figure of a graduation hat"
            />

            <Figures
              width="376px"
              height="420px"
              src={TrophyFig}
              alt="figure of a trophy"
            />

            <Figures
              width="80px"
              height="80px"
              src={DocumentFig}
              alt="figure of a document"
            />
          </LayoutFigures>
        </ContainerFigures>
      </section>
    </Main>
  );
}
