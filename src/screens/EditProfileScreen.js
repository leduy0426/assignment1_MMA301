import React from 'react';
import { View, Text, ScrollView, Alert, StyleSheet } from 'react-native';
import { Formik } from 'formik';
import { useTheme } from '../context/ThemeContext';
import { useUser } from '../context/UserContext';
import { editProfileSchema } from '../utils/validationSchema';
import { CustomInput } from '../components/CustomInput';
import { CustomButton } from '../components/CustomButton';

export const EditProfileScreen = ({ navigation }) => {
  const { theme } = useTheme();
  const { userProfile, updateProfile } = useUser();

  const handleSave = (values) => {
    updateProfile(values);
    Alert.alert('Thành công 🎉', 'Hồ sơ cá nhân của bạn đã được cập nhật!', [
      { text: 'OK', onPress: () => navigation.goBack() },
    ]);
  };

  return (
    <ScrollView style={[styles.container, { backgroundColor: theme.background }]}>
      <View style={styles.content}>
        <Text style={[styles.headerTitle, { color: theme.textPrimary }]}>Cập Nhật Hồ Sơ</Text>
        <Text style={[styles.headerSub, { color: theme.textSecondary }]}>
          Thay đổi thông tin bên dưới và nhấn Lưu để cập nhật.
        </Text>

        <Formik
          initialValues={{
            name: userProfile.name,
            title: userProfile.title,
            email: userProfile.email,
            phone: userProfile.phone,
            avatar: userProfile.avatar,
            bio: userProfile.bio,
          }}
          validationSchema={editProfileSchema}
          onSubmit={handleSave}
        >
          {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
            <View style={styles.form}>
              <CustomInput
                label="Họ và Tên"
                iconName="person-outline"
                placeholder="Nhập họ và tên..."
                value={values.name}
                onChangeText={handleChange('name')}
                onBlur={handleBlur('name')}
                error={errors.name}
                touched={touched.name}
              />

              <CustomInput
                label="Chức danh / Nghề nghiệp"
                iconName="briefcase-outline"
                placeholder="Ví dụ: Fullstack Mobile Developer"
                value={values.title}
                onChangeText={handleChange('title')}
                onBlur={handleBlur('title')}
                error={errors.title}
                touched={touched.title}
              />

              <CustomInput
                label="Địa chỉ Email"
                iconName="mail-outline"
                placeholder="Nhập email..."
                keyboardType="email-address"
                value={values.email}
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                error={errors.email}
                touched={touched.email}
              />

              <CustomInput
                label="Số Điện Thoại"
                iconName="call-outline"
                placeholder="Nhập số điện thoại..."
                keyboardType="phone-pad"
                value={values.phone}
                onChangeText={handleChange('phone')}
                onBlur={handleBlur('phone')}
                error={errors.phone}
                touched={touched.phone}
              />

              <CustomInput
                label="Link URL Ảnh Đại Diện (Avatar)"
                iconName="image-outline"
                placeholder="Paste URL ảnh đại diện..."
                value={values.avatar}
                onChangeText={handleChange('avatar')}
                onBlur={handleBlur('avatar')}
                error={errors.avatar}
                touched={touched.avatar}
              />

              <CustomInput
                label="Tiểu Sử Bằng Một Vài Dòng"
                iconName="document-text-outline"
                placeholder="Viết một đoạn tiểu sử ngắn về bạn..."
                multiline
                numberOfLines={3}
                value={values.bio}
                onChangeText={handleChange('bio')}
                onBlur={handleBlur('bio')}
                error={errors.bio}
                touched={touched.bio}
              />

              <View style={styles.buttonRow}>
                <CustomButton
                  title="Lưu Thay Đổi"
                  icon="checkmark-circle-outline"
                  onPress={handleSubmit}
                  style={{ flex: 1, marginRight: 6 }}
                />
                <CustomButton
                  title="Hủy"
                  variant="secondary"
                  onPress={() => navigation.goBack()}
                  style={{ flex: 1, marginLeft: 6 }}
                />
              </View>
            </View>
          )}
        </Formik>
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
  headerTitle: {
    fontSize: 22,
    fontWeight: '800',
    marginTop: 8,
  },
  headerSub: {
    fontSize: 14,
    marginBottom: 20,
    marginTop: 4,
  },
  form: {
    marginTop: 4,
  },
  buttonRow: {
    flexDirection: 'row',
    marginTop: 12,
    marginBottom: 24,
  },
});
