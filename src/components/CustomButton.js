import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '../context/ThemeContext';

export const CustomButton = ({ title, onPress, icon, variant = 'primary', style }) => {
  const { theme } = useTheme();

  const isOutline = variant === 'outline';
  const isSecondary = variant === 'secondary';

  const getBgColor = () => {
    if (isOutline) return 'transparent';
    if (isSecondary) return theme.inputBg;
    return theme.primary;
  };

  const getTextColor = () => {
    if (isOutline) return theme.primary;
    if (isSecondary) return theme.textPrimary;
    return '#FFFFFF';
  };

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      style={[
        styles.button,
        {
          backgroundColor: getBgColor(),
          borderColor: isOutline ? theme.primary : 'transparent',
          borderWidth: isOutline ? 1.5 : 0,
        },
        style,
      ]}
    >
      {icon && <Ionicons name={icon} size={20} color={getTextColor()} style={{ marginRight: 8 }} />}
      <Text style={[styles.text, { color: getTextColor() }]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: 14,
    marginVertical: 6,
  },
  text: {
    fontSize: 16,
    fontWeight: '600',
  },
});
