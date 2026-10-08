import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '../context/ThemeContext';
import { useUser } from '../context/UserContext';
import { ProfileCard } from '../components/ProfileCard';
import { CustomButton } from '../components/CustomButton';

export const ProfileScreen = ({ navigation }) => {
  const { theme } = useTheme();
  const { userProfile } = useUser();

  return (
    <ScrollView style={[styles.container, { backgroundColor: theme.background }]}>
      <View style={styles.content}>
        {/* Profile Card */}
        <ProfileCard user={userProfile} />

        {/* Thông tin liên hệ */}
        <View style={[styles.infoSection, { backgroundColor: theme.surface, borderColor: theme.surfaceBorder }]}>
          <Text style={[styles.sectionHeader, { color: theme.textPrimary }]}>Thông Tin Liên Hệ</Text>
          
          <View style={styles.infoRow}>
            <Ionicons name="mail" size={20} color={theme.primary} />
            <Text style={[styles.infoText, { color: theme.textSecondary }]}>{userProfile.email}</Text>
          </View>

          <View style={styles.infoRow}>
            <Ionicons name="call" size={20} color={theme.primary} />
            <Text style={[styles.infoText, { color: theme.textSecondary }]}>{userProfile.phone}</Text>
          </View>

          <View style={styles.infoRow}>
            <Ionicons name="location" size={20} color={theme.primary} />
            <Text style={[styles.infoText, { color: theme.textSecondary }]}>{userProfile.location}</Text>
          </View>
        </View>

        {/* Kỹ năng */}
        <View style={[styles.infoSection, { backgroundColor: theme.surface, borderColor: theme.surfaceBorder }]}>
          <Text style={[styles.sectionHeader, { color: theme.textPrimary }]}>Kỹ Năng Nổi Bật</Text>
          <View style={styles.tagContainer}>
            {userProfile.skills.map((skill, index) => (
              <View key={index} style={[styles.tag, { backgroundColor: theme.primaryLight }]}>
                <Text style={[styles.tagText, { color: theme.primary }]}>{skill}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* Nút tác vụ */}
        <CustomButton
          title="Chỉnh Sửa Hồ Sơ"
          icon="create-outline"
          onPress={() => navigation.navigate('EditProfile')}
        />
        <CustomButton
          title="Cài Đặt Ứng Dụng"
          icon="options-outline"
          variant="secondary"
          onPress={() => navigation.navigate('Settings')}
        />
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
  infoSection: {
    padding: 18,
    borderRadius: 20,
    borderWidth: 1,
    marginBottom: 16,
  },
  sectionHeader: {
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 12,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 6,
  },
  infoText: {
    fontSize: 15,
    marginLeft: 12,
  },
  tagContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  tag: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 12,
  },
  tagText: {
    fontSize: 13,
    fontWeight: '600',
  },
});
