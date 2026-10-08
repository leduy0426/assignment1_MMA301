import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '../context/ThemeContext';
import { ThemeToggleSwitch } from '../components/ThemeToggleSwitch';

export const SettingsScreen = () => {
  const { theme } = useTheme();

  return (
    <ScrollView style={[styles.container, { backgroundColor: theme.background }]}>
      <View style={styles.content}>
        <Text style={[styles.sectionHeader, { color: theme.textPrimary }]}>Giao Diện & Chế Độ</Text>
        <ThemeToggleSwitch />

        <Text style={[styles.sectionHeader, { color: theme.textPrimary, marginTop: 24 }]}>
          Thông Tin Môn Học & Ứng Dụng
        </Text>

        <View style={[styles.infoCard, { backgroundColor: theme.surface, borderColor: theme.surfaceBorder }]}>
          <View style={styles.itemRow}>
            <Text style={[styles.itemLabel, { color: theme.textSecondary }]}>Môn học:</Text>
            <Text style={[styles.itemValue, { color: theme.textPrimary }]}>MMA301 - React Native</Text>
          </View>
          <View style={styles.divider} />
          <View style={styles.itemRow}>
            <Text style={[styles.itemLabel, { color: theme.textSecondary }]}>Bài tập:</Text>
            <Text style={[styles.itemValue, { color: theme.textPrimary }]}>Assignment 1</Text>
          </View>
          <View style={styles.divider} />
          <View style={styles.itemRow}>
            <Text style={[styles.itemLabel, { color: theme.textSecondary }]}>Phiên bản App:</Text>
            <Text style={[styles.itemValue, { color: theme.textPrimary }]}>v1.0.0 Pro</Text>
          </View>
        </View>

        <View style={styles.footerNote}>
          <Ionicons name="sparkles" size={18} color={theme.primary} />
          <Text style={[styles.footerText, { color: theme.textMuted }]}>
            Giao diện được tối ưu chuẩn UI/UX di động theo kiến trúc Expo React Native.
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    padding: 16,
  },
  sectionHeader: {
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 10,
  },
  infoCard: {
    borderRadius: 16,
    borderWidth: 1,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  itemRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
  },
  itemLabel: {
    fontSize: 14,
  },
  itemValue: {
    fontSize: 14,
    fontWeight: '600',
  },
  divider: {
    height: 1,
    backgroundColor: '#E2E8F0',
  },
  footerNote: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 32,
    gap: 8,
    paddingHorizontal: 16,
  },
  footerText: {
    fontSize: 12,
    textAlign: 'center',
    flex: 1,
  },
});
