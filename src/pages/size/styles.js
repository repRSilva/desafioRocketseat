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
    margin-left: 40px;
`;

export const ContainerCard = styled.FlatList.attrs({
    numColumns: 2,
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
    margin: 15px 15px;
    flex:1;
    justify-content: center;
    align-items: center;
`;

export const Img = styled.Image`
    border-radius: 10px;
`;

export const CardTitle = styled.Text`
    font-size: 18px;
    font-weight: 500;
    color: #000;
    margin-top: 10px;
`;

export const CardValue = styled.Text`
    font-size: 18px;
    font-weight: 500;
    color: #0005;
    margin-top: 5px;
`;