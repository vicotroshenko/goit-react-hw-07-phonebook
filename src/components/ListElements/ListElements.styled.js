import styled from 'styled-components';

export const Item = styled.li`
	width: 100%;
	min-width: 400px;
  display: flex;
  flex-direction: row;
	align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
  border: 3px solid #4C97FF;
  border-radius: 10px;
  margin-bottom: 10px;
  transition: all 200ms linear;
	font-weight: 700;
  color: #4C97FF;
	box-sizing: border-box;
  &:hover {
		border: 3px solid blue;
		transform: scaleY(1.1);
		color: blue;
	}
	&:hover button {
		outline: 2px solid blue;
	}
	&:hover span {
		color: black;
	}
`;
