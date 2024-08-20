import { ArrowDownward, ArrowUpward } from "@mui/icons-material";
import { Typography } from "@mui/material";
import Icon from "../../components/Icon";
import AccessToButton from "../../components/permissions-components/AccessToButton";
import TableButton from "../../components/table-components/TableButton";
import TableContentRounded from "../../components/table-components/TableContentRounded";
let index = 1;
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
    isTrash = false,
    accessTo = [],
    email = null,
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

    const renderedAccessTo = <AccessToButton contentArray={accessTo} />;
    console.log(renderedAccessTo);
    const sNo = index++;
    const renderedStatus = (
        <Typography color={status == "Active" ? "#188918" : "#D91313"} fontSize={13} fontWeight={500} >
            {status}
        </Typography>
    );

    const trash = isTrash && <TableButton buttonType="delete" />;

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
        renderedAccessTo,
        email,
        name,
        mobileNumber,
        renderedStatus,
    };
}

export { createData };
