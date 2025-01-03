import React, { PropsWithChildren, useState } from 'react';
import {
	ImageSourcePropType,
	StatusBar,
	Text,
	View,
} from 'react-native';

import DiceOne from '../_assets/One.png';
import DiceTwo from '../_assets/Two.png';
import DiceThr from '../_assets/Three.png';
import DiceFor from '../_assets/Four.png';
import DiceFiv from '../_assets/Five.png';
import DiceSix from '../_assets/Six.png';
import { bgColor, styles } from '../_utils/styles';
import Dice from './Dice';

function App(): React.JSX.Element {
	const [diceImage, setDiceImage] = useState<ImageSourcePropType>(DiceOne);
	return (
		<View style={styles.container}>
			<StatusBar backgroundColor={bgColor}/>
			<Text>This is some text</Text>
			<Dice imageUrl={diceImage} />
		</View>
	);
}

export default App;
