import React from 'react';
import { Background, Container, ContainerHeader, HeaderLabel, ContainerCard, Card, Img, CardTitle } from './styles';
import { TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons'
import img1 from '../../images/pizzas/1.png';
import img2 from '../../images/pizzas/2.png';
import img3 from '../../images/pizzas/3.png';
import img4 from '../../images/pizzas/4.png';
import img5 from '../../images/pizzas/5.png';
import img6 from '../../images/pizzas/6.png';

export default function Flavor({ navigation }) {

    const itens = [
        {
            img: img1,
            title: 'Portuguesa',
        },
        {
            img: img2,
            title: 'Calabresa',
        },
        {
            img: img3,
            title: 'Americana',
        },
        {
            img: img4,
            title: 'Marguerita',
        },
        {
            img: img5,
            title: 'Brócolis',
        },
        {
            img: img6,
            title: '4 Queijos',
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
                        <HeaderLabel>Escolha o sabor</HeaderLabel>
                    </ContainerHeader>
                </Container>
            </Background>

            <Container>
                <ContainerCard
                    data={itens}
                    keyExtractor={(item) => item.title}
                    renderItem={({ item }) => (
                        <Card onPress={() => navigation.navigate('Size')}>
                            <Img source={item.img} />
                            <CardTitle>{item.title}</CardTitle>
                        </Card>
                    )} />
            </Container>
        </>
    );
}