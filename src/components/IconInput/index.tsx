import { Feather } from '@expo/vector-icons';
import React from 'react';
import { TextInput, TextInputProps, View } from 'react-native';

import { FeatherProps } from '../../utils/featherProps';
import { styles } from './styles';

type Props = TextInputProps & {
  name: FeatherProps;
  size?: number;
  color?: string;
  placeholder: string;
};

export const IconInput = ({
  placeholder,
  name,
  size,
  color,
  ...rest
}: Props) => {
  return (
    <View style={styles.container}>
      <Feather name={name} size={size} color={color} style={styles.icon} />
      <TextInput placeholder={placeholder} {...rest} style={styles.input} />
    </View>
  );
};
