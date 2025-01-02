import { View, Text, Image } from 'react-native'
import React from 'react'
import { DiceProps } from '../_utils/types';
import { styles } from '../_utils/styles';

const Dice = ({ imageUrl }: DiceProps) : JSX.Element => {
    return (
        <View>
            <Image source={imageUrl} style={styles.diceImage} />
        </View>
    )
}

export default Dice;