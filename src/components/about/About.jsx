import { useContext } from "react";
// MUI
import {
  Box,
  Container,
  Divider,
  Grid2,
  Typography,
  useTheme,
} from "@mui/material";
// THEME
import theme from "../../theme/theme";
// CONTEXT
import { RefContext } from "../../context/RefContext";
import { LanguageContext } from "../../context/LanguageContext";
// COMPONENT
import SkillStack from "./SkillStack";

import AppearingMotion from "../generic/AppearingMotion";

const Instruction = {
  en: "Front-end developer specialized in React but also equiped with Back-end technologies.\n\nWhat I'm aiming for is to make applications that are comfortable to use and re-visit. I keep learning new skills and building new knowledges to keep improving myself and become a creative and inspirational developer with user-friendly UI.\n\nPreviously, I worked at 'JYP Entertainment' which is South Korea multinational entertainment agency as administrative assistance which was in charge of managing artists appearance contracts, data of clothing stock, and accounting expense and sales data communicating between clients and internal relavant teams.\n\nIn 2024, I decided to become a web developer, I'm on my journey to make benefits for world.",
  kr: "꿈을 꾸는 프론트엔트 개발자입니다. 개인 프로젝트를 디자인부터 기능까지 개발하며 가장 중시했던 것은 어플리케이션의 목적과 의미, 직관적인 디자인입니다. 사용자에게 긍정적인 경험과 의미를 주는 어플리케이션을 개발하기 위해 새로운 기술과 지식을 배우고자 노력하며, 끊임없이 창조와 영감의 가치를 되새깁니다.\n\n이전에는 K-POP 산업에서 전산처리, 출연계약, 의상자산 관리 등의 사무 업무를 수행하였으며, 이 경험을 통해 소통능력과 위기 관리 능력을 더욱 발전시킬 수 있었고, 협력의 가치를 배웠습니다. 더불어, IT팀과 같은 사무실을 쓰고 소통을 하며 처음 개발에 대한 관심을 가지기도 하였습니다.\n\n현재 프론트엔트 개발자로서 생산적인 결과를 만들어내고픈 열정이 가득합니다. 영감을 받고 실현하며, 세상의 사람들을 연결하고 긍정적인 영향을 주고 싶습니다.",
};

export default function About() {
  const { palette } = useTheme(theme);
  const { About } = useContext(RefContext);
  const { language } = useContext(LanguageContext);

  return (
    <AppearingMotion>
      <Box
        id="About"
        className="section"
        ref={About}
        sx={{
          width: { xs: "100%", sm: "90%", md: "80%" },
          border: `1px solid ${palette.primary.light}`,
          borderRadius: "1rem",
          textAlign: "left",
          padding: { xs: "0.5rem", lg: "0.5rem 2rem" },
          margin: "7rem auto",
          zIndex: 1,
        }}
      >
        <Typography
          variant="h2"
          sx={{ fontSize: "2rem", fontWeight: "700", padding: "2rem" }}
        >
          About
        </Typography>
        <Divider sx={{ borderColor: palette.secondary.main }} />
        <Typography
          sx={{
            fontSize: { xs: "1rem", sm: "1.1rem" },
            padding: { xs: "2rem 0.5rem", lg: "2rem" },
            // animation: "move-text 10s linear forwards",
            whiteSpace: "pre-line",
          }}
        >
          {Instruction[language]}
        </Typography>
        <Divider sx={{ borderColor: palette.secondary.main }} />
        <SkillStack />
      </Box>
    </AppearingMotion>
  );
}
