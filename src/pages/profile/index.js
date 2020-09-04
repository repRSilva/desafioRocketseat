import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';
import { Background, Container, ContainerHeader, ContainerInfoHeader, HeaderLabel, ContainerCard, Card, CardBody, CardInfoDetails, CardInfoTitle, CardValue } from './styles';

export default function Checkout({ navigation }) {

    const itens = [
        {
            title: '3',
            date: 'Ontem às 17h',
            value: '42,00'
        },
        {
            title: '2',
            date: 'Há uma semana',
            value: '142,00'
        },
        {
            title: '1',
            date: 'Há 2 meses',
            value: '78,00'
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
                            <HeaderLabel>Meus Pedidos</HeaderLabel>
                        </ContainerInfoHeader>
                    </ContainerHeader>
                </Container>
            </Background>

            <Container>
                <ContainerCard>
                    {itens.map(item => (
                        <Card>
                            <CardBody>
                                <CardInfoTitle>Pedido {item.title}</CardInfoTitle>
                                <CardInfoDetails>{item.date}</CardInfoDetails>
                                <CardValue>R$ {item.value}</CardValue>
                            </CardBody>
                        </Card>
                    ))}
                </ContainerCard>
            </Container>
        </>
    )
}