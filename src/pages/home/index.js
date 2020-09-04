import React from 'react';
import { Entypo, SimpleLineIcons, Ionicons } from '@expo/vector-icons';
import { Background, Container, ContainerHeader, HeaderLabel, ContainerCard, Card, CardBody, CardImage, Img, CardInfo, CardInfoTitle, CardInfoDetails, CardInfoTime, InfoTime } from './styles';
import { TouchableOpacity } from 'react-native'
import img1 from '../../images/card/pizza.jpg';
import img2 from '../../images/card/massa.jpg';
import img3 from '../../images/card/calzone.jpg';
import img4 from '../../images/card/bebida_nao_alcoolica.jpg';
import img5 from '../../images/card/bebida_alcoolica.jpg';

export default function Home({ navigation }) {

    const itens = [
        {
            img: img1,
            title: 'Pizzas',
            details: 'Mais de 50 sabores de pizza em até 4 tamanhos diferentes de fome.',
            time: '30 mins',
        },
        {
            img: img2,
            title: 'Massas',
            details: '10 tipos de massas com diferentes molhos para te satisfazer.',
            time: '25 mins',
        },
        {
            img: img3,
            title: 'Calzones',
            details: 'Calzones super recheados com mais de 50 sabores diferentes.',
            time: '15 mins',
        },
        {
            img: img4,
            title: 'Bebidas não-alcóolicas',
            details: 'Refrigerantes, sucos, chá gelado, energéticos e água.',
            time: '5 mins',
        },
        {
            img: img5,
            title: 'Bebidas alcóolicas',
            details: 'Cervejas artesanais, vinhos e destilados.',
            time: '5 mins',
        }
    ]
    return (
        <>
            <Background>
                <Container>
                    <ContainerHeader>
                        <Entypo name="back-in-time" size={24} color='#fff' />
                        <HeaderLabel>Pizzaria Don Juan</HeaderLabel>
                        <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
                            <SimpleLineIcons name="handbag" size={24} color="#fff" />
                        </TouchableOpacity>
                    </ContainerHeader>
                </Container>
            </Background>

            <Container>
                <ContainerCard>
                    {itens.map(item => (
                        <Card onPress={() => navigation.navigate('Flavor')}>
                            <CardBody>
                                <CardImage>
                                    <Img source={item.img} />
                                </CardImage>
                                <CardInfo>
                                    <CardInfoTitle>{item.title}</CardInfoTitle>
                                    <CardInfoDetails>
                                        {item.details}
                                    </CardInfoDetails>
                                    <CardInfoTime>
                                        <Ionicons name="md-alarm" size={14} color="#0008" />
                                        <InfoTime>{item.time}</InfoTime>
                                    </CardInfoTime>
                                </CardInfo>
                            </CardBody>
                        </Card>
                    ))}
                </ContainerCard>
            </Container>
        </>
    )
}