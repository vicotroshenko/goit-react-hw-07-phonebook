import styled from 'styled-components';

export const Label = styled.label`

`

export const Submit = styled.button`
		margin-top: 10px;
`

export const Form = styled.form`
		border: 1px solid black;
		padding: 30px;
		width: 100%;
		max-width: 400px;
		border-radius: 20px;
		box-sizing: border-box;
		border: 3px solid black;
		& label {
			display: block;
			width: 100%;
			margin: 0 auto;
			margin-top: 15px;
			
			& input {
				display: block;
				width: 100%;
				margin-top: 5px;
				padding: 5px;
				font-size: 22px;
				border-radius: 10px;
				border: 3px solid black;
				outline: none;
				background-color: rgba(76, 151, 255, 0.4);
				box-sizing: border-box;
				&:hover {
					border: 3px solid rgba(255, 195, 0, 0.9);
				}
				&:focus {
					border: 2px solid rgba(255, 195, 0, 0.9);
				}
			}
		}
	& button {
		margin-top: 10px;
		border: 1px solid black;
		background-color: rgba(76, 151, 255, 0.4);
		border-radius: 10px;
		padding: 10px 10px;
		&:hover {
			border: 1px solid rgba(255, 195, 0, 0.9);
		}
		&:focus {
			border: 1px solid rgba(255, 195, 0, 0.9);
		}
		&:active {
			border: 1px solid rgba(255, 195, 0, 0);
		}
	}
`