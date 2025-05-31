import { TextInput, type TextInputProps } from "react-native";

import { styles } from "./styles";

type Props = TextInputProps;

export function Input({ ...rest }: Props) {
  return (
    <TextInput
      style={styles.container}
      placeholderTextColor="#74798B"
      {...rest}
    />
  );
}
