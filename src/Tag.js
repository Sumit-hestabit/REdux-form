import styled from "styled-components";

export default (props) => {
  return (
        <TagStyle onClick={props.onClick} className={props.selected ? 'selected' : ''} style={{background: props.bgColor, color: props.textColor,'border-color': props.borderColor}}> 
            {props.title}
            {props.icon}
        </TagStyle>      
  );
}
const TagStyle = styled.div`
    padding: 0px 30px;
    color: ${props => props.theme.colors.textColor};
    font-size: 14px;
    font-weight: 500;
    letter-spacing: 0px;
    line-height: 38px;
    text-align: center;
    border-radius:25px;
    height:40px;
    border:1px solid transparent;
    background-color:${props => props.theme.colors.primaryColor};
    outline:none;
    display:inline-block;
    margin-right:15px;
    &:focus{
        box-shadow:none;
    }
    &:hover{
        background-color:${props => props.theme.colors.primaryColor};
        color: ${props => props.theme.colors.textColor};
    }
`;