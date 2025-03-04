import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';

const ForgotPasswordScreen = () => {
  const [email, setEmail] = useState('');

  const handleResetPassword = () => {
    if (email) { // Kiểm tra dữ liệu đầu vào
      console.log('Reset password for:', email);
    } else {
      console.log('Please enter email');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Forgot Password</Text> {/* Thêm tiêu đề bọc trong <Text> */}
      <Text style={styles.instruction}>Enter your email to reset your password</Text> {/* Hướng dẫn */}
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        placeholder="Enter your email here!"
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <Button title="Reset Password" onPress={handleResetPassword} color="#FFA500" /> {/* Màu cam cho nút */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  instruction: {
    fontSize: 16,
    color: 'gray',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    padding: 8,
    width: '80%',
    borderRadius: 4,
  },
});

export default ForgotPasswordScreen;