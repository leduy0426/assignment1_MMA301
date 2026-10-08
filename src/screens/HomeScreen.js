import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { useTheme } from '../context/ThemeContext';
import { useUser } from '../context/UserContext';
import { ProfileCard } from '../components/ProfileCard';
import { CustomButton } from '../components/CustomButton';

export const HomeScreen = ({ navigation }) => {
  const { theme } = useTheme();
  const { userProfile } = useUser();

  return (
    <ScrollView style={[styles.container, { backgroundColor: theme.background }]}>
      {/* Banner Chào Mừng */}
      <View style={[styles.banner, { backgroundColor: theme.primary }]}>
        <Text style={styles.greetingText}>Xin chào 👋</Text>
        <Text style={styles.userName}>{userProfile.name}</Text>
        <Text style={styles.subGreeting}>Chào mừng bạn quay trở lại ứng dụng Profile!</Text>
      </View>

      <View style={styles.content}>
        <Text style={[styles.sectionTitle, { color: theme.textPrimary }]}>Hồ sơ cá nhân</Text>
        
        {/* Thẻ thông tin rút gọn */}
        <ProfileCard user={userProfile} />

        {/* Lối tắt nhanh */}
        <Text style={[styles.sectionTitle, { color: theme.textPrimary, marginTop: 16 }]}>
          Thao tác nhanh
        </Text>

        <View style={styles.actionGrid}>
          <CustomButton
            title="Xem Chi Tiết Profile"
            icon="person"
            onPress={() => navigation.navigate('Profile')}
          />
          <CustomButton
            title="Chỉnh Sửa Profile"
            icon="create"
            variant="outline"
            onPress={() => navigation.navigate('EditProfile')}
          />
          <CustomButton
            title="Cài Đặt & Theme"
            icon="settings"
            variant="secondary"
            onPress={() => navigation.navigate('Settings')}
          />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  banner: {
    padding: 24,
    borderBottomLeftRadius: 28,
    borderBottomRightRadius: 28,
  },
  greetingText: {
    color: '#EEF2FF',
    fontSize: 16,
    fontWeight: '500',
  },
  userName: {
    color: '#FFFFFF',
    fontSize: 26,
    fontWeight: '800',
    marginVertical: 4,
  },
  subGreeting: {
    color: '#E0E7FF',
    fontSize: 13,
  },
  content: {
    padding: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 8,
  },
  actionGrid: {
    gap: 8,
    marginTop: 4,
  },
});
