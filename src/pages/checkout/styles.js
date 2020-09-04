import styled from 'styled-components/native';
import img from '../../images/header-background.png';
import Input from '../../components/input';

export const Background = styled.ImageBackground.attrs({
    source: img,
    resizeMode: 'cover',
})`
    height: 180px;
`;

export const ContainerHeader = styled.View`
    flex-direction: row;
    justify-content: space-between;
    padding: 0 20px;
    margin-top: 20px;
`;

export const ContainerInfoHeader = styled.View`
    flex-direction: row;
`;

export const Container = styled.SafeAreaView`
    padding: 0 20px;
    flex:1;
`;

export const HeaderLabel = styled.Text`
    font-size: 20px;
    color: #fff;
    font-weight: bold;
    margin-left: 40px;
`;

export const FormContainer = styled.View`
    flex:1;
    padding: 0 16px;
    margin-top: -80px;
`;

export const FormInput = styled(Input)`
    margin-top:10px;
`;

export const ContainerRow = styled.View`
    flex-direction: row;
`;

export const Actions = styled.View`
    padding: 0 16px;
    flex-direction: row;
    justify-content: flex-end;
    align-items:center;
    height: 100px;
`;

export const Button = styled.TouchableOpacity`
    background: #e5293e;
    border-radius: 50px;
    flex-direction: row;
    padding: 10px 30px;
    align-items: center;
`;

export const TextButton = styled.Text`
    color: #fff;
    font-size: 18px;
    font-weight: bold;
    margin-right: 20px;
`;