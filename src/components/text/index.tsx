import React from "react";
import { Title } from "./styles";

export default function Text({ ...args }) {
  return <Title args={args}>{args.value}</Title>;
}
