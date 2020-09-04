import styled from 'styled-components/native';

export const Container = styled.View`
  padding: 0 15px;
  height: ${({ multiline }) => multiline ? '100px' : '45px'};
  background: #fff;
  flex-direction: row;
  align-items:center;
  border-radius: 10px;
`;

export const Text = styled.TextInput.attrs({
  placeholderTextColor: '#000',
})`
  flex:1;
  font-size: 15px;
  margin-left:10px;
  color:#000;
`;