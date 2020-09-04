import React from 'react';
import { Ionicons, Feather } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';
import { Background, Container, ContainerHeader, ContainerInfoHeader, HeaderLabel, ContainerCard, Card, CardBody, CardImage, Img, CardInfo, CardInfoDetails, CardInfoTitle, CardInfoValue, CardItens, Actions, Button, TextButton } from './styles';
import img1 from '../../images/pizzas/1.png';
import img2 from '../../images/pizzas/2.png';
import img3 from '../../images/coca.jpg';

export default function Cart({ navigation }) {

    const itens = [
        {
            img: img1,
            title: 'Pizza Calabresa',
            details: 'Média',
            value: '42,00'
        },
        {
            img: img2,
            title: 'Pizza 4 Queijos',
            details: 'Pequena',
            value: '29,00'
        },
        {
            img: img3,
            title: 'Coca Cola',
            details: 'Lata 300ml',
            value: '6,00'
        },
    ]

    return (
        <>
            <Background>
                <Container>
                    <ContainerHeader>
                        <ContainerInfoHeader>
                            <TouchableOpacity onPress={() => navigation.goBack()}>
                                <Ionicons name="ios-arrow-back" size={24} color='#fff' />
                            </TouchableOpacity>
                            <HeaderLabel>Carrinho</HeaderLabel>
                        </ContainerInfoHeader>
                        <HeaderLabel>R$ 107,00</HeaderLabel>
                    </ContainerHeader>
                </Container>
            </Background>

            <Container>
                <ContainerCard>
                    {itens.map(item => (
                        <Card>
                            <CardBody>
                                <CardItens>
                                    <CardImage>
                                        <Img source={item.img} />
                                    </CardImage>
                                    <CardInfo>
                                        <CardInfoTitle>{item.title}</CardInfoTitle>
                                        <CardInfoDetails>{item.details}</CardInfoDetails>
                                        <CardInfoValue>R$ {item.value}</CardInfoValue>
                                    </CardInfo>
                                </CardItens>
                                <TouchableOpacity>
                                    <Feather name="trash-2" size={24} color="#e5293e" />
                                </TouchableOpacity>

                            </CardBody>
                        </Card>
                    ))}
                </ContainerCard>

                <Actions>
                    <Button onPress={() => navigation.navigate('Checkout')}>
                        <TextButton>REALIZAR PEDIDO</TextButton>
                        <Ionicons name="ios-arrow-forward" size={24} color='#fff' />
                    </Button>
                </Actions>

            </Container>
        </>
    )
}