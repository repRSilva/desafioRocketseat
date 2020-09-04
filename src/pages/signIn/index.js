import React from 'react';
import { Wrapper, Background, Container, FormInput, SubmitButton, Img, Label } from '../../components/background';
import img from '../../images/logo.png'

export default function SignIn({ navigation }) {
    return (
        <Background>
            <Wrapper colors={['#0005', '#000']}>
                <Container>
                    <Img source={img} />

                    <FormInput
                        placeholder="Seu e-mail"
                        value={{}}
                        onChangeText={() => { }}
                        autoCapitalize="none"
                        autoCorrect={false}
                        underlineColorAndroid="transparent"
                        keyboardType="email-address"
                        returnKeyType="next"
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
                        Entrar
                    </SubmitButton>
                    <Label onPress={() => navigation.navigate('SignUp')}>Criar conta gratuita</Label>

                </Container>
            </Wrapper>
        </Background>
    );
}