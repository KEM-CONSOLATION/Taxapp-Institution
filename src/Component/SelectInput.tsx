import React from "react";
import {
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  SelectChangeEvent,
  Box,
} from "@mui/material";

interface SelectInputProps {
  name: string;
  label: string;
  options: { value: string; label: string }[];
  value: string;
  onChange: (event: SelectChangeEvent<string>, child: React.ReactNode) => void;
  placeholder?: string;
}

const SelectInput: React.FC<SelectInputProps> = ({
  name,
  label,
  options,
  value,
  onChange,
  placeholder,
}) => {
  return (
    <Box sx={{ width: "124px", px: "16px" }}>
      <FormControl variant="outlined" fullWidth>
        <InputLabel>{label}</InputLabel>
        <Select value={value} onChange={onChange} label={label} name={name}>
          {placeholder && <MenuItem value="">{placeholder}</MenuItem>}
          {options.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default SelectInput;
