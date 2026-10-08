import * as Yup from 'yup';

export const editProfileSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Họ tên phải có ít nhất 2 ký tự')
    .max(50, 'Họ tên không được vượt quá 50 ký tự')
    .required('Vui lòng nhập họ và tên'),
  title: Yup.string()
    .min(2, 'Chức danh quá ngắn')
    .required('Vui lòng nhập chức danh / nghề nghiệp'),
  email: Yup.string()
    .email('Địa chỉ Email không hợp lệ')
    .required('Vui lòng nhập địa chỉ Email'),
  phone: Yup.string()
    .matches(/^[0-9\s+]{9,12}$/, 'Số điện thoại không hợp lệ (từ 9 - 12 chữ số)')
    .required('Vui lòng nhập số điện thoại'),
  avatar: Yup.string()
    .url('Link URL ảnh đại diện không hợp lệ')
    .required('Vui lòng nhập URL ảnh đại diện'),
  bio: Yup.string()
    .max(250, 'Tiểu sử không vượt quá 250 ký tự')
    .required('Vui lòng nhập tiểu sử ngắn'),
});
