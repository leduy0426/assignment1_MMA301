import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '../context/ThemeContext';

export const CustomInput = ({
  label,
  iconName,
  value,
  onChangeText,
  onBlur,
  error,
  touched,
  placeholder,
  multiline = false,
  numberOfLines = 1,
  keyboardType = 'default',
}) => {
  const { theme } = useTheme();
  const hasError = touched && error;

  return (
    <View style={styles.container}>
      {label && <Text style={[styles.label, { color: theme.textPrimary }]}>{label}</Text>}
      
      <View
        style={[
          styles.inputWrapper,
          {
            backgroundColor: theme.inputBg,
            borderColor: hasError ? theme.error : theme.inputBorder,
          },
          multiline && { alignItems: 'flex-start', paddingTop: 12 },
        ]}
      >
        {iconName && (
          <Ionicons
            name={iconName}
            size={20}
            color={hasError ? theme.error : theme.textMuted}
            style={styles.icon}
          />
        )}

        <TextInput
          style={[
            styles.input,
            { color: theme.textPrimary },
            multiline && { height: numberOfLines * 22, textAlignVertical: 'top' },
          ]}
          value={value}
          onChangeText={onChangeText}
          onBlur={onBlur}
          placeholder={placeholder}
          placeholderTextColor={theme.textMuted}
          multiline={multiline}
          numberOfLines={numberOfLines}
          keyboardType={keyboardType}
        />
      </View>

      {hasError && <Text style={[styles.errorText, { color: theme.error }]}>{error}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 6,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 14,
    paddingHorizontal: 14,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 15,
    paddingVertical: 12,
  },
  errorText: {
    fontSize: 12,
    marginTop: 4,
    marginLeft: 4,
  },
});
