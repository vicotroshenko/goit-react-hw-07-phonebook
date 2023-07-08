import styled from 'styled-components';

export const List = styled.ul`
		list-style-type: none;
		width: 100%;
		max-width: 400px;
		box-sizing: border-box;
		padding: 0;
		& li {
			
			& span {
				display: inline-block;
				margin-left: 7px;
				margin-right: 7px;
			}
			& button {
				padding: 5px 10px;
				border-radius: 8px;
				border: 1px solid blue;
				background-color: transparent;
				box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 8px;
				transition: all 200ms linear;
				&:hover {
					font-weight: 700;
					color: blue;
				}
				&:focus {
					font-weight: 700;
					color: blue;
				}
				&:active {
					font-weight: 700;
					color: red;
				}
			}
		}
`