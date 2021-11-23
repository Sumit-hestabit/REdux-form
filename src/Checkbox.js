import React from 'react'
import styled from "styled-components";
import { Link } from 'react-router-dom';

const Checkbox = ({input, label, link, linkText, meta: { touched, error }}) => {
	return <StyleCheckbox>
				<label>
					<input {...input} type='checkbox' />
					<span>{label} 
						{link && <Link to={link} target="_blank"> {linkText}</Link> }
					</span>
				</label><br/>
				{touched && (error && {error})}
		</StyleCheckbox>
}

export default Checkbox


const StyleCheckbox = styled.div`
	margin-bottom:10px;
	input{
		display:none;
		& ~ span{
			padding: 0 0 0 35px;
			color: #333;
			font-size: 12px;
			letter-spacing: 0;
			line-height: 16px;
			position:relative;
			&:before{
				position:absolute;
				left:0;
				top	: -2px;
				content:'';
				width:22px;
				height:22px;
				background-color: #fff;
				border-radius: 50%;
				border: 1px solid #999;
			}
			a{
				color:rgba(69, 246, 166,0.87);
			}
		}
		&:checked{
			& ~ span{
				&:before{
					background:#0dd575;
					border-color:#0dd575;
				}
				&:after{
					content: "";
					height: 6px;
					width: 10px;
					border-left: 1px solid #ffffff;
					border-bottom: 1px solid #ffffff;
					-webkit-transform: translate(-50%,-50%) rotate( 
				-45deg);
					-ms-transform: translate(-50%,-50%) rotate( -45deg);
					transform: translate(-50%,-50%) rotate( 
				-45deg);
					left: 11px;
					top: 8px;
					position: absolute;
				}
			}
		}
	}
`;