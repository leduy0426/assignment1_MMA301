import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '../context/ThemeContext';

export const ProfileCard = ({ user }) => {
  const { theme } = useTheme();

  return (
    <View style={[styles.card, { backgroundColor: theme.surface, borderColor: theme.surfaceBorder, shadowColor: theme.cardShadow }]}>
      <View style={styles.avatarWrapper}>
        <Image source={{ uri: user.avatar }} style={styles.avatar} />
        <View style={styles.onlineBadge} />
      </View>

      <Text style={[styles.name, { color: theme.textPrimary }]}>{user.name}</Text>
      <Text style={[styles.title, { color: theme.primary }]}>{user.title}</Text>

      <View style={styles.locationRow}>
        <Ionicons name="location-sharp" size={14} color={theme.textSecondary} />
        <Text style={[styles.locationText, { color: theme.textSecondary }]}>{user.location}</Text>
      </View>

      <Text style={[styles.bio, { color: theme.textSecondary }]}>{user.bio}</Text>

      {/* Stats sub-card */}
      <View style={[styles.statsContainer, { backgroundColor: theme.inputBg }]}>
        <View style={styles.statBox}>
          <Text style={[styles.statNumber, { color: theme.textPrimary }]}>{user.stats.projects}</Text>
          <Text style={[styles.statLabel, { color: theme.textMuted }]}>Dự án</Text>
        </View>
        <View style={[styles.divider, { backgroundColor: theme.surfaceBorder }]} />
        <View style={styles.statBox}>
          <Text style={[styles.statNumber, { color: theme.textPrimary }]}>{user.stats.followers}</Text>
          <Text style={[styles.statLabel, { color: theme.textMuted }]}>Theo dõi</Text>
        </View>
        <View style={[styles.divider, { backgroundColor: theme.surfaceBorder }]} />
        <View style={styles.statBox}>
          <Text style={[styles.statNumber, { color: theme.textPrimary }]}>{user.stats.rating}</Text>
          <Text style={[styles.statLabel, { color: theme.textMuted }]}>Đánh giá</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 24,
    padding: 20,
    alignItems: 'center',
    borderWidth: 1,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 4,
    marginVertical: 12,
  },
  avatarWrapper: {
    position: 'relative',
    marginBottom: 12,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  onlineBadge: {
    position: 'absolute',
    bottom: 4,
    right: 4,
    width: 16,
    height: 16,
    borderRadius: 8,
    backgroundColor: '#10B981',
    borderWidth: 3,
    borderColor: '#FFFFFF',
  },
  name: {
    fontSize: 22,
    fontWeight: '700',
    marginBottom: 4,
  },
  title: {
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 8,
  },
  locationRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  locationText: {
    fontSize: 13,
    marginLeft: 4,
  },
  bio: {
    fontSize: 14,
    textAlign: 'center',
    lineHeight: 20,
    marginBottom: 16,
  },
  statsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    paddingVertical: 12,
    borderRadius: 16,
    justifyContent: 'space-around',
  },
  statBox: {
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 16,
    fontWeight: '700',
  },
  statLabel: {
    fontSize: 12,
    marginTop: 2,
  },
  divider: {
    width: 1,
    height: 24,
  },
});
