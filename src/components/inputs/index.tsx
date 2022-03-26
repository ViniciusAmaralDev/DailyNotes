import React from "react";
import { Input, Text } from "./styles";
import { Control, Controller, FieldError } from "react-hook-form";

type InputProps = {
  secondary?: any;
  placeholder?: string;
  placeholderTextColor?: string;
  error?: FieldError;
  size?: number;
};

type ControlProps = InputProps & {
  control: Control<any>;
  name: string;
};

export const TextInput = ({ name, control, error, ...rest }: ControlProps) => (
  <>
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value } }) => (
        <Input value={value} onChangeText={onChange} {...rest} />
      )}
    />

    {error && <Text>{error.message}</Text>}
  </>
);
