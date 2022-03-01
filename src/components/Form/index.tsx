import React, { useState } from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  KeyboardAvoidingView,
  TextInput,
} from 'react-native';
import { Feather } from '@expo/vector-icons';
import MaskInput, { Masks } from 'react-native-mask-input';

import FormImg from '../../assets/declaracao.png';
import { theme } from '../../../global/theme';
import { IconInput } from '../IconInput';
import { Separator } from '../Separator';
import { styles, customInputstyles } from './styles';
import { PdfButton } from '../PdfButton';
import { htmlContent } from '../../utils/document';

export const Form = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [adress, setAdress] = useState('');
  const [uf, setUF] = useState('');
  const [city, setCity] = useState('');
  const [date, setDate] = useState('');
  const [htmlContentGenerated, setHtmlContentGenerated] = useState('');

  const getHtml = () => {
    const pdf = htmlContent(name, adress, email, uf, city, date);
    return pdf;
  };

  return (
    <KeyboardAvoidingView
      contentContainerStyle={styles.container}
      behavior={'position'}
      enabled
    >
      <Image style={styles.image} source={FormImg} />
      <Text style={styles.title}>
        Preencha os dados do formulário corretamente
      </Text>
      <IconInput
        value={name}
        name="user"
        placeholder="Nome"
        size={24}
        color={theme.colors.highlight}
        autoCapitalize={'words'}
        autoCompleteType={'name'}
        autoCorrect={false}
        onChangeText={setName}
      />
      <Separator />
      <IconInput
        value={email}
        name="mail"
        placeholder="E-mail"
        size={24}
        color={theme.colors.highlight}
        keyboardType={'email-address'}
        autoCompleteType={'email'}
        autoCapitalize={'none'}
        onChangeText={setEmail}
      />
      <Separator />
      <IconInput
        value={adress}
        name="map"
        placeholder="Endereço"
        size={24}
        color={theme.colors.highlight}
        autoCompleteType={'street-address'}
        autoCorrect={false}
        onChangeText={setAdress}
      />
      <Separator />
      <View style={customInputstyles.container}>
        <Feather
          name={'globe'}
          size={24}
          color={theme.colors.highlight}
          style={customInputstyles.icon}
        />
        <TextInput
          value={uf}
          placeholder="UF"
          maxLength={2}
          style={[
            customInputstyles.input,
            {
              width: 40,
              borderRightWidth: 1,
              borderRightColor: theme.colors.highlight,
            },
          ]}
          autoCapitalize={'characters'}
          onChangeText={setUF}
        />
        <TextInput
          value={city}
          placeholder="Cidade"
          style={customInputstyles.input}
          onChangeText={setCity}
        />
      </View>
      <Separator />
      <View style={customInputstyles.container}>
        <Feather
          name={'calendar'}
          size={24}
          color={theme.colors.highlight}
          style={customInputstyles.icon}
        />
        <MaskInput
          value={date}
          placeholder="Data"
          keyboardType={'number-pad'}
          style={customInputstyles.input}
          maxLength={10}
          mask={Masks.DATE_DDMMYYYY}
          onChangeText={(masked) => setDate(masked)}
        />
      </View>
      <Separator />
      <View>
        <PdfButton htmlContent={`${getHtml()}`} />
      </View>
    </KeyboardAvoidingView>
  );
};
