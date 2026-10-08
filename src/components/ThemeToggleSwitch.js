import React from 'react';
import { View, Text, Switch, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '../context/ThemeContext';

export const ThemeToggleSwitch = () => {
  const { isDarkMode, toggleTheme, theme } = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: theme.surface, borderColor: theme.surfaceBorder }]}>
      <View style={styles.leftContent}>
        <View style={[styles.iconCircle, { backgroundColor: isDarkMode ? '#312E81' : '#FEF3C7' }]}>
          <Ionicons
            name={isDarkMode ? 'moon' : 'sunny'}
            size={22}
            color={isDarkMode ? '#818CF8' : '#F59E0B'}
          />
        </View>
        <View style={styles.textContainer}>
          <Text style={[styles.title, { color: theme.textPrimary }]}>Giao diện Tối (Dark Mode)</Text>
          <Text style={[styles.subtitle, { color: theme.textSecondary }]}>
            {isDarkMode ? 'Đang bật Chế độ Tối' : 'Đang bật Chế độ Sáng'}
          </Text>
        </View>
      </View>

      <Switch
        trackColor={{ false: '#CBD5E1', true: theme.primary }}
        thumbColor={isDarkMode ? '#FFFFFF' : '#FFFFFF'}
        ios_backgroundColor="#CBD5E1"
        onValueChange={toggleTheme}
        value={isDarkMode}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    borderRadius: 16,
    borderWidth: 1,
    marginVertical: 8,
  },
  leftContent: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  iconCircle: {
    width: 42,
    height: 42,
    borderRadius: 21,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 14,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
  },
  subtitle: {
    fontSize: 12,
    marginTop: 2,
  },
});
