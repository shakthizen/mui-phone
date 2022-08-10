import { Stack } from "@mui/material";
import React from "react";
import { TOnChangeReturn } from "./types";

type Props = {
  onChange?: (value: TOnChangeReturn) => void;
};

const MuiPhone = ({ onChange = () => null }: Props) => {
  return <Stack>Hello World</Stack>;
};

export default MuiPhone;
