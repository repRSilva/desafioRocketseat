import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
  height:45px;
  background:#f53b57;
  align-items:center;
  justify-content:center;
  border-radius: 10px;
`;

export const Text = styled.Text`
  color:#FFF;
  font-weight:bold;
  font-size: 16px;
`;
