import styled from '@emotion/styled'

const Button = styled.span`
  display: flex;
  flex-direction: row;
  font-weight: 600;
  text-transform: uppercase;
  border: 1px solid #d1d1d1;
  padding: 10px;
  margin: 5px 10px;
  text-align: center;
  border-radius: 7px;
  background-color: ${(props) => (props.bgColor ? '#DA552F' : 'white')};
  color: ${(props) => (props.bgColor ? 'white' : '#000')};

  &:hover {
    cursor: pointer;
    text-decoration: none;
  }
`

export default Button
