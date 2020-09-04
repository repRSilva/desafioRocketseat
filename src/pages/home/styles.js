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
    align-items: center;
    padding: 0 20px;
    margin-top: 20px;
`;

export const Container = styled.SafeAreaView`
    padding: 0 20px;
    flex:1;
`;

export const HeaderLabel = styled.Text`
    font-size: 20px;
    color: #fff;
    font-weight: bold;
`;

export const ContainerCard = styled.ScrollView.attrs({
    showsVerticalScrollIndicator: false,
})`
    padding: 0 20px;
    margin-top: -100px;
    flex:1;
`;

export const Card = styled.TouchableOpacity`
    background: #fff;
    border-radius: 10px;
    padding: 15px;
    margin-top: 10px;
`;

export const CardBody = styled.View`
     flex:1;
     flex-direction: row;
     align-items:center;
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

export const CardInfoTime = styled.View`
    flex-direction: row;
    margin-top: 5px;
`;

export const InfoTime = styled.Text`
    margin-left: 5px;
    font-size: 12px;
    color:#0008
`;