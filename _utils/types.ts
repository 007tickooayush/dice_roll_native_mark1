import { PropsWithChildren } from "react";
import { ImageSourcePropType } from "react-native";

/**
 * - Kept the Props for handling the type of Image which is passed as a Prop separately
 * - So that the component will have a definite type of Component to be passed as a Prop
 * 
 * 
 * The ImageSourcePropType takes only Images which are imported and used directly as a module, making it known for the component that
 * the passed prop is an Image's source itself, and can immediately be used as the prop of <Image /> component
 * 
 * The Image can be imported as a module if the module types are declared in the index.d.ts file in the root of the project
 * 
 * @param imageUrl - The Image Source to be passed as a prop 
 */
export type DiceProps = PropsWithChildren<{
	imageUrl: ImageSourcePropType
}>;