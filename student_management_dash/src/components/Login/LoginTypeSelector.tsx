"use client";

import {
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";

export type LoginType =
  | "admin"
  | "student";

interface LoginTypeSelectorProps {
  loginType: LoginType;

  onChange: (
    value: LoginType
  ) => void;
}

export default function LoginTypeSelector({
  loginType,
  onChange,
}: LoginTypeSelectorProps) {
  return (
    <FormControl sx={{ mb: 2 }}>
      <FormLabel>
        Login As
      </FormLabel>

      <RadioGroup
        row
        value={loginType}
        onChange={(e) =>
          onChange(
            e.target.value as LoginType
          )
        }
      >
        <FormControlLabel
          value="admin"
          control={<Radio />}
          label="Admin"
        />

        <FormControlLabel
          value="student"
          control={<Radio />}
          label="Student"
        />
      </RadioGroup>
    </FormControl>
  );
}