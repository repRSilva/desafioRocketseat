import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';
import { Background, Container, ContainerHeader, ContainerInfoHeader, HeaderLabel, FormContainer, ContainerRow, Actions, Button, TextButton, FormInput } from './styles';



export default function Checkout({ navigation }) {
    return (
        <>
            <Background>
                <Container>
                    <ContainerHeader>
                        <ContainerInfoHeader>
                            <TouchableOpacity onPress={() => navigation.goBack()}>
                                <Ionicons name="ios-arrow-back" size={24} color='#fff' />
                            </TouchableOpacity>
                            <HeaderLabel>Realizar Pedido</HeaderLabel>
                        </ContainerInfoHeader>
                        <HeaderLabel>R$ 107,00</HeaderLabel>
                    </ContainerHeader>
                </Container>
            </Background>

            <Container>
                <FormContainer>

                    <FormInput
                        multiline
                        numberOfLines={8}
                        placeholder="Alguma observação?"
                        value={{}}
                        onChangeText={() => { }}
                        autoCapitalize="none"
                        autoCorrect={false}
                        underlineColorAndroid="transparent"
                        returnKeyType="next"
                        onSubmitEditing={() => { }}
                    />

                    <FormInput
                        placeholder="Qual seu CEP?"
                        value={{}}
                        onChangeText={() => { }}
                        autoCapitalize="none"
                        autoCorrect={false}
                        underlineColorAndroid="transparent"
                        keyboardType="number-pad"
                        returnKeyType="next"
                        onSubmitEditing={() => { }}
                    />

                    <FormInput
                        placeholder="Rua"
                        value={{}}
                        onChangeText={() => { }}
                        autoCapitalize="none"
                        autoCorrect={false}
                        underlineColorAndroid="transparent"
                        returnKeyType="next"
                        onSubmitEditing={() => { }}
                    />

                    <FormInput
                        placeholder="Nº"
                        value={{}}
                        onChangeText={() => { }}
                        autoCapitalize="none"
                        autoCorrect={false}
                        underlineColorAndroid="transparent"
                        returnKeyType="next"
                        onSubmitEditing={() => { }}
                    />

                    <FormInput
                        placeholder="Bairro"
                        value={{}}
                        onChangeText={() => { }}
                        autoCapitalize="none"
                        autoCorrect={false}
                        underlineColorAndroid="transparent"
                        returnKeyType="next"
                        onSubmitEditing={() => { }}
                    />

                </FormContainer>
                <Actions>

                    <Button onPress={() => navigation.navigate('Profile')}>
                        <TextButton>FINALIZAR</TextButton>
                        <Ionicons name="ios-arrow-forward" size={24} color='#fff' />
                    </Button>

                </Actions>
            </Container>
        </>
    )
}