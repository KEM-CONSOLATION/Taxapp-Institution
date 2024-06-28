import React, { useEffect, useState } from "react";
import { useFormContext, FieldError } from "react-hook-form";
import { TextField, IconButton, InputAdornment } from "@mui/material";
import { RiEyeFill, RiEyeOffFill } from "react-icons/ri";

interface TextInputProps {
  name: string;
  label: string;
  type?: "text" | "password";
  placeholder?: string;
}

const TextInput: React.FC<TextInputProps> = ({
  name,
  label,
  type = "text",
  placeholder = "",
}) => {
  const {
    register,
    formState: { errors },
    setValue,
    watch,
  } = useFormContext();

  const errorMessage = (errors[name] as FieldError)?.message;
  const value = watch(name);
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    setValue(name, value || "");
  }, [setValue, name, value]);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="relative">
      <TextField
        variant="outlined"
        type={type === "password" ? (showPassword ? "text" : "password") : type}
        label={label}
        placeholder={placeholder}
        fullWidth
        {...register(name)}
        error={!!errorMessage}
        helperText={errorMessage}
        InputLabelProps={{
          sx: {
            fontFamily: "Poppins, sans-serif",
            fontWeight: 400,
            fontSize: "14px",
            color: value !== "" ? "#414141" : "#414141",
            "&.Mui-focused": {
              color: "#A0A0A0",
            },
            "&.MuiFormLabel-root.Mui-error": {
              color: "#FF0000",
            },
            "&.MuiInputLabel-shrink": {
              transform: "translate(14px, -6px) scale(0.75)",
              backgroundColor: "#ffffff",
              padding: "0 4px",
            },
          },
        }}
        InputProps={{
          sx: {
            fontFamily: "Poppins, sans-serif",
            fontWeight: 400,
            fontSize: "14px",
            color: "#000000",
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: "#414141",
              },
              "&:hover fieldset": {
                borderColor: "#414141",
              },
              "&.Mui-focused fieldset": {
                borderColor: "#414141",
              },
            },
          },
          endAdornment:
            type === "password" ? (
              <InputAdornment position="end">
                <IconButton onClick={togglePasswordVisibility} edge="end">
                  {showPassword ? <RiEyeOffFill /> : <RiEyeFill />}
                </IconButton>
              </InputAdornment>
            ) : null,
        }}
      />
    </div>
  );
};

export default TextInput;
