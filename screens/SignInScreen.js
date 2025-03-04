import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useAuth } from '../context/AuthContext';

const SignInScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();

  const handleLogin = () => {
    if (email && password) { // Kiểm tra dữ liệu đầu vào
      const userData = { email, password };
      login(userData);
    } else {
      console.log('Please enter email and password');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign In</Text> {/* Tiêu đề bình thường */}
      
      {/* Nhãn và trường nhập email */}
      <Text style={styles.label}>Email ID</Text>
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        placeholder="Enter your email here!"
        keyboardType="email-address"
        autoCapitalize="none"
      />

      {/* Nhãn, trường nhập mật khẩu, và "Forgot password?" bên dưới */}
      <Text style={styles.label}>Password</Text>
      <TextInput
        style={styles.input}
        value={password}
        onChangeText={setPassword}
        placeholder="Enter your password here!"
        secureTextEntry
      />
      <TouchableOpacity 
        style={styles.forgotButton}
        onPress={() => console.log("Navigate to Forgot Password")}
      >
        <Text style={styles.forgotText}>Forgot password?</Text>
      </TouchableOpacity>

      {/* Nút "Sign in" trong ô màu vàng với chữ trắng */}
      <TouchableOpacity style={styles.signInBox} onPress={handleLogin}>
        <Text style={styles.signInText}>Sign in</Text>
      </TouchableOpacity>
      
      <Text style={styles.orText}>Or sign in with</Text>

      {/* Box cho Google và Facebook */}
      <View style={styles.socialBoxContainer}>
        <TouchableOpacity style={styles.socialBoxGoogle} onPress={() => console.log("Sign in with Google")}>
          <Text style={styles.socialBoxText}>Google</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialBoxFacebook} onPress={() => console.log("Sign in with Facebook")}>
          <Text style={styles.socialBoxText}>Facebook</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.signUpContainer}>
        <Text style={styles.signUpPrefix}>Not yet a member?</Text>
        <TouchableOpacity onPress={() => console.log("Navigate to Sign Up")}>
          <Text style={styles.signUpLink}>Sign Up</Text>
        </TouchableOpacity>
      </View>
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
  title: { // Style cho tiêu đề
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    margin: 10,
    alignSelf: 'flex-start',
    marginLeft: '10%',
    color: '#333',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 5, // Giảm marginBottom để "Forgot password?" gần hơn với input
    padding: 8,
    width: '80%',
    borderRadius: 4,
  },
  forgotButton: {
    alignSelf: 'flex-end', // Căn phải cho "Forgot password?"
    marginRight: '10%',
    marginBottom: 12, // Khoảng cách dưới để đồng nhất với layout
  },
  forgotText: {
    color: '#FFA500', // Màu cam cho "Forgot password?"
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 10,
  },
  signInBox: {
    backgroundColor: '#FFA500', // Màu vàng cho ô "Sign in"
    padding: 10,
    borderRadius: 5,
    marginVertical: 12, // Khoảng cách trên và dưới
    width: '80%',
    alignItems: 'center',
  },
  signInText: {
    color: 'white', // Chữ trắng trong ô
    fontSize: 18,
    fontWeight: 'bold',
  },
  orText: {
    marginVertical: 12,
    color: 'gray',
  },
  socialBoxContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '80%',
    marginVertical: 12,
  },
  socialBoxGoogle: {
    backgroundColor: '#DB4437', // Màu Google
    padding: 10,
    borderRadius: 5,
    width: '45%',
    alignItems: 'center',
  },
  socialBoxFacebook: {
    backgroundColor: '#4267B2', // Màu Facebook
    padding: 10,
    borderRadius: 5,
    width: '45%',
    alignItems: 'center',
  },
  socialBoxText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  signUpContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 12,
  },
  signUpPrefix: {
    color: 'gray',
    fontSize: 14,
  },
  signUpLink: {
    color: '#FFA500', // Màu vàng cho "Sign Up"
    fontSize: 14,
    marginLeft: 5,
  },
});

export default SignInScreen;