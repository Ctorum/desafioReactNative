import React, { useState } from 'react';
import { Text, TouchableOpacity, ActivityIndicator } from 'react-native';
import * as Print from 'expo-print';
import { shareAsync } from 'expo-sharing';

import { styles } from './styles';
import { theme } from '../../../global/theme';

type Props = {
  htmlContent: string;
};

export const PdfButton = ({ htmlContent, ...rest }: Props) => {
  const [loading, setLoading] = useState(false);

  const createAndSharePDF = async (html: string) => {
    setLoading(true);
    const { uri } = await Print.printToFileAsync({
      html,
    });
    await shareAsync(uri, { UTI: '.pdf', mimeType: 'application/pdf' });
    setLoading(false);
  };
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={() => {
        createAndSharePDF(htmlContent);
      }}
      disabled={loading ? true : false}
    >
      {!loading ? (
        <Text style={styles.buttonText}>Compartilhar PDF</Text>
      ) : (
        <ActivityIndicator size="small" color={theme.colors.background} />
      )}
    </TouchableOpacity>
  );
};
