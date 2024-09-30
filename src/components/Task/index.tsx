import { View, Text, TouchableOpacity } from 'react-native'
import { styles } from './styles'
import Icon from 'react-native-vector-icons/FontAwesome'
import CheckBox from '@react-native-community/checkbox';
import React, { useState } from 'react';

type Props = {
    nameTask: string;
    onRemove: () => void;
}
export function Task({ nameTask, onRemove }: Props) {
    const [isChecked, setIsChecked] = useState(false)

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => setIsChecked(!isChecked)}>
                <Icon
                    style={styles.checkBox}
                    name={isChecked ? 'check-square' : 'square-o'}
                    size={24}
                    color={isChecked ? '#00A9A5' : '#d9d9d9'}
                />
            </TouchableOpacity>

            <Text style={[styles.nameTask, isChecked && {textDecorationLine: 'line-through'}]}>{nameTask}</Text>

            <TouchableOpacity style={styles.buttonRemove} onPress={onRemove}>
                <Text style={styles.buttonText}>
                    <Icon name="trash" size={20} color="#fff" />
                </Text>
            </TouchableOpacity>
        </View>
    )
}