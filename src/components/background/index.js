import styled from 'styled-components/native';
import { Platform } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Input from '../../components/input';
import Button from '../../components/button';
import img from '../../images/fundo.jpg';

export const Background = styled.ImageBackground.attrs({
    source: img,
    resizeMode: 'cover',
})`
    flex:1;
    justify-content: center;
`;

export const Wrapper = styled(LinearGradient)`
    flex: 1;
`;

export const Container = styled.KeyboardAvoidingView.attrs({
    enabled: Platform.OS === 'ios',
    behavior: 'padding',
})`
    flex: 1;
    justify-content: center;
    align-items: stretch;
    padding: 30px;
`;

export const FormInput = styled(Input)`
    margin-top: 15px;
`;

export const SubmitButton = styled(Button)`
    margin-top: 20px;
`;

export const Img = styled.Image`
    height: 72px;
    width: 72px;
    align-self: center;
    margin-bottom: 15px;
`;

export const Label = styled.Text`
  font-size: 14px;
  color: #fff;
  font-weight: bold;
  align-self: center;
  margin-top: 25px;
`;