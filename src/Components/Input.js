import styled from "styled-components";
import { Metrics } from "../Themes";

const Input = styled.input`
  margin: 10px 10px;
  display: block;
  width: ${Metrics.inputWidth};
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
`;

export default Input;
