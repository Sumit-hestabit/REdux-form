import styled from "styled-components";

const InputError = (props) => {
  return (
        <InputErrorStyle className="error_show">{props.children}</InputErrorStyle>
  );
}

export default InputError

const InputErrorStyle = styled.span`
    font-size:12px;
    color:#d92020;
`;