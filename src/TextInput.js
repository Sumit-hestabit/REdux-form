import React from 'react'
import styled from "styled-components";


const TextInput = ({input,icon, label, type, placeholder, meta: { touched, error }}) => {
	return <StyleInput>
				<label>{label}</label>
				<div className="input-field">
					{(!error && input.value) && <span class="check-icon"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M13.854 3.646a.5.5 0 010 .708l-7 7a.5.5 0 01-.708 0l-3.5-3.5a.5.5 0 11.708-.708L6.5 10.293l6.646-6.647a.5.5 0 01.708 0z" clip-rule="evenodd"></path></svg></span> }
					<input {...input} placeholder={placeholder} className="text-input" type={type} />
					{icon}
				</div>
				{touched && (error && {error})}
			</StyleInput>
}

export default TextInput


const StyleInput = styled.div`
	margin-bottom: 16px;
	.text-input{
		padding: 8px 16px;
		height: 49px;
		width: 100%;
		border: 1px solid rgb(238, 236, 236);
		border-radius: 28px;
		background-color: rgb(255, 255, 255);
		color: rgb(33, 33, 33);
		font-size: 14px;
		letter-spacing: 0px;
		line-height: 28px;
		background-clip: padding-box;
		font-weight:400;
		display:block;
		padding-right:60px;
		&::placeholder {
			color: #b9b8b8;
			opacity: 1;
		}
		@media only screen and (max-width: 1500px){
			padding: 14px 16px;
			height: 40px;
		}
	
	}
	.input-field{
		position:relative;
		.check-icon {
			position: absolute;
			top: 50%;
			right: 20px;
			transform: translateY(-50%);
			-webkit-transform: translateY(-50%);
			-moz-transform: translateY(-50%);
			svg{
				fill: #2ec4b6;
				width: 20px;
				height: 20px;
			}
		}
		svg {
			position: absolute;
			right: 15px;
			top: calc(50% - 9px);
			width: 18px;
			height: 18px;
			color: #ababab;
		}
	}
	label{
		color: rgb(33, 33, 33);
		font-size: 14px;
		letter-spacing: 0px;
		line-height: 20px;
		margin-bottom: 10px;
		font-weight:500;
		text-transform:capitalize;
	}
	
`;