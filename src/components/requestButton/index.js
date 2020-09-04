import React from 'react';

import { TouchableWithoutFeedback } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Button, Label } from './styles';

export default function RequestButton({ onPress, focused }) {
    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <Button colors={
                focused
                    ? ['#fff', '#ccc']
                    : ['#00fc6c', '#00ac4a']}
                start={[1, 0.2]}
            >
                <MaterialCommunityIcons name="cart-plus" size={25} color={focused ? '#000' : '#fff'} />

                <Label focused={focused}>Comprar</Label>
            </Button>
        </TouchableWithoutFeedback >

    )
}