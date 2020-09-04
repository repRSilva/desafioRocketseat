import React from 'react';
import { Background, Container, ContainerHeader, HeaderLabel, ContainerCard, Card, Img, CardTitle, CardValue } from './styles';
import { TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons'
import imgP from '../../images/tamanhos/tamanho-p.png';
import imgM from '../../images/tamanhos/tamanho-m.png';
import imgG from '../../images/tamanhos/tamanho-g.png';
import imgGG from '../../images/tamanhos/tamanho-gg.png';

export default function Size({ navigation }) {

    const itens = [
        {
            img: imgGG,
            title: 'Gigante',
            value: '76,00'
        },
        {
            img: imgG,
            title: 'Grande',
            value: '59,00'
        },
        {
            img: imgM,
            title: 'Média',
            value: '42,00'
        },
        {
            img: imgP,
            title: 'Pequena',
            value: '29,00'
        },
    ];

    return (
        <>
            <Background>
                <Container>
                    <ContainerHeader>
                        <TouchableOpacity onPress={() => navigation.goBack()}>
                            <Ionicons name="ios-arrow-back" size={24} color='#fff' />
                        </TouchableOpacity>
                        <HeaderLabel>Escolha o tamanho</HeaderLabel>
                    </ContainerHeader>
                </Container>
            </Background>

            <Container>
                <ContainerCard
                    data={itens}
                    keyExtractor={(item) => item.title}
                    renderItem={({ item }) => (
                        <Card onPress={() => navigation.navigate('Cart')}>
                            <Img source={item.img} />
                            <CardTitle>{item.title}</CardTitle>
                            <CardValue>R$ {item.value}</CardValue>
                        </Card>
                    )} />
            </Container>
        </>
    );
}