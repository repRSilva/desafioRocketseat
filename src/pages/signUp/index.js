import React from 'react';
import { Wrapper, Background, Container, FormInput, SubmitButton, Img, Label } from '../../components/background';
import img from '../../images/logo.png'

export default function SignUp({ navigation }) {
    return (
        <Background>
            <Wrapper colors={['#0005', '#000']}>
                <Container>
                    <Img source={img} />

                    <FormInput
                        placeholder="Nome completo"
                        value={{}}
                        onChangeText={() => { }}
                        autoCapitalize="none"
                        autoCorrect={false}
                        underlineColorAndroid="transparent"
                        returnKeyType="next"
                        onSubmitEditing={() => { }}
                    />
                    <FormInput
                        placeholder="Seu e-mail"
                        value={{}}
                        onChangeText={() => { }}
                        autoCapitalize="none"
                        autoCorrect={false}
                        underlineColorAndroid="transparent"
                        returnKeyType="next"
                        keyboardType="email-address"
                        onSubmitEditing={() => { }}
                    />
                    <FormInput
                        placeholder="Senha secreta"
                        value={{}}
                        onChangeText={() => { }}
                        autoCapitalize="none"
                        autoCorrect={false}
                        underlineColorAndroid="transparent"
                        returnKeyType="send"
                        onSubmitEditing={() => navigation.navigate('Home')}
                    />

                    <SubmitButton loading={false} onPress={() => navigation.navigate('Home')} >
                        Criar conta
                    </SubmitButton>
                    <Label onPress={() => navigation.navigate('SignIn')}>Já tenho login</Label>

                </Container>
            </Wrapper>
        </Background>
    )
}