import styled from 'styled-components/native';
import img from '../../images/header-background.png';

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

export const ContainerCard = styled.ScrollView.attrs({
    numColumns: 2,
    showsVerticalScrollIndicator: false,
})`
    padding: 0 20px;
    margin-top: -100px;
    flex:1;
`;

export const Card = styled.View`
    background: #fff;
    border-radius: 10px;
    padding: 15px;
    margin-top: 10px;
`;

export const CardBody = styled.View`
     flex:1;
     flex-direction: row;
     align-items: center;
`;

export const CardImage = styled.View`

`;

export const Img = styled.Image`
    border-radius: 10px;
    width: 100px;
    height: 100px;
`;

export const CardInfo = styled.View`
    flex:1;
    margin-left: 10px;
`;

export const CardItens = styled.View`
    flex:1;
    flex-direction: row;
    align-items: center;
`;

export const CardInfoTitle = styled.Text`
    font-size: 18px;
    font-weight: 500;
    color: #000;
`;

export const CardInfoDetails = styled.Text`
    margin-top: 5px;
    font-size: 14px;
    color:#0008;
`;

export const CardInfoValue = styled.Text`
    margin-top: 5px;
    font-size: 14px;
    color:#0008;
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