import { Typography } from "@mui/material";
import AccessToButton from "../../components/permissions-components/AccessToButton";
import { FlexBox } from "../../components/styled-components/styledComponents";
import { ArrowUpward, ArrowDownward } from "@mui/icons-material";
import TableContentRounded from "../../components/table-components/TableContentRounded";
import Icon from "../../components/Icon";
import TableButton from "../../components/table-components/TableButton";

function createData({
    personID = "---",
    company = "---",
    plateNo = "",
    model = "---",
    type = "",
    violation = [],
    inTime = "",
    outTime = "",
    action = null,
    trash = false,
    accessTo = [],
    email = "",
    name = "",
    mobileNumber = "",
    status = "",
} = {}) {
    const renderedPlateNo = plateNo ? (
        <TableContentRounded bgColor="#EAECEE" content={plateNo} />
    ) : (
        <TableContentRounded
            bgColor="#EE3939"
            content="Unrecognized"
            textColor="white"
        />
    );

    const renderedViolationContent = violation.map((v, i) => (
        <Icon key={i} src={v} />
    ));
    const renderedViolation = (
        <TableContentRounded
            bgColor="#FFB300"
            textColor="#3D2500"
            content={renderedViolationContent}
        />
    );

    const inTimeContent = [
        inTime,
        <ArrowDownward fontSize="small" key="inTimeIcon" />,
    ];

    const renderedInTime = (
        <TableContentRounded
            bgColor="#EAECEE"
            content={inTimeContent.map((item, index) => (
                <span key={index}>{item}</span>
            ))}
        />
    );

    const outTimeContent = [
        outTime,
        <ArrowUpward fontSize="small" key="outTimeIcon" />,
    ];
    const renderedOutTime = (
        <TableContentRounded
            bgColor="#EAECEE"
            content={outTimeContent.map((item, index) => (
                <span key={index}>{item}</span>
            ))}
        />
    );

    const rederedAccessTo = <AccessToButton contentArray={accessTo} />;
    const sNo = index++;
    const renderedStatus = (
        <Typography color={status == "Active" ? "#188918" : "#D91313"}>
            {status}
        </Typography>
    );

    const trash = trash && <TableButton buttonType="delete" />;

    return {
        sNo,
        personID,
        company,
        renderedPlateNo,
        model,
        type,
        renderedViolation,
        renderedInTime,
        renderedOutTime,
        trash,
        action,
        rederedAccessTo,
        email,
        name,
        mobileNumber,
        renderedStatus,
    };
}

export { createData };
