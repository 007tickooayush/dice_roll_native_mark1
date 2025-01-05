import React, { PropsWithChildren, useState } from 'react';
import {
	ImageSourcePropType,
	Pressable,
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

	const performDiceRollRandom = () => {
		let randomNum = Math.floor(Math.random() * 6) + 1;
		switch (randomNum) {
			case 1:
				setDiceImage(DiceOne);
				break;
			case 2:
				setDiceImage(DiceTwo);
				break;
			case 3:
				setDiceImage(DiceThr);
				break;
			case 4:
				setDiceImage(DiceFor);
				break;
			case 5:
				setDiceImage(DiceFiv);
				break;
			case 6:
				setDiceImage(DiceSix);
				break;
			default:
				setDiceImage(DiceOne);
				break;
		}
	};

	return (
		<View style={styles.container}>
			<StatusBar backgroundColor={bgColor}/>
			<Dice imageUrl={diceImage} />
			<Pressable
				style={styles.rollBtnText}
				onPress={performDiceRollRandom}
			>
				<Text>
					Roll the Dice
				</Text>
			</Pressable>
		</View>
	);
}

export default App;
