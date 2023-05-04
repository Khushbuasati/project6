import React from "react";
import { Stack } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import PaperRoot from "../../UIComponents/paper";
import Title from "../../UIComponents/title";
import SubText from "../../UIComponents/subText";
import ProgressBar from "../../UIComponents/progressBar";

function Card({ details, index }: any) {
  const theme = useTheme();
  return (
    <PaperRoot>
      <Title
        title={details.title}
        style={{ fontWeight: "normal", marginBottom: "0.5rem" }}
      />
      <Stack direction="row" spacing={1} alignItems="baseline">
        <Title title={details.value} style={{ fontSize: "20px" }} />
        <Title
          title={details.value2}
          style={{
            fontWeight: "normal",
            color:
              index < 2
                ? theme.palette.success.main
                : theme.palette.error.light,
          }}
        />
      </Stack>
      <SubText details={details.des} style={{ margin: "0.2rem 0px 0.5rem" }} />
      <ProgressBar
        status={details.progress}
        colorsList={[
          theme.palette.primary.main,
          theme.palette.error.main,
          theme.palette.success.main,
          theme.palette.yellow.main,
        ]}
        index={index}
      />
    </PaperRoot>
  );
}

export default Card;
