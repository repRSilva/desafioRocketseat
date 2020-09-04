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
    flex:1;
`;

export const CardBody = styled.View`
     flex:1;
     justify-content:space-around;
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

export const CardValue = styled.Text`
    font-size: 18px;
    font-weight: bold;
    color: #001;
    margin-top: 5px;
`;