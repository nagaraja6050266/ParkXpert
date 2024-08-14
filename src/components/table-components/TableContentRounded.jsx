import { Typography } from "@mui/material";
import { FlexBox } from "../styled-components/styledComponents";

function TableContentRounded({ bgColor, content, textColor }) {
    return (
        <FlexBox
            sx={{
                backgroundColor: bgColor,
                borderRadius: "20px",
                maxHeight: "max-content",
                padding: "2px 5px",
                width: "max-content !important",
                justifyContent: "center !important",
            }}
        >
            {typeof content === "string" || typeof content === "number" ? (
                <Typography fontWeight={500} fontSize={12} color={textColor}>
                    {content}
                </Typography>
            ) : (
                <FlexBox p="0px" gap={.5} justifyContent="space-around">
                    {Array.isArray(content)
                        ? content.map((c, index) => (
                              <FlexBox width="max-content" key={index}>
                                  {c}
                              </FlexBox>
                          ))
                        : content}
                </FlexBox>
            )}
        </FlexBox>
    );
}

export default TableContentRounded;
