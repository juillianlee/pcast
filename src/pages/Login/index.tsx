import React, {useState} from 'react';
import {
  ImageBackground,
  View,
  Text,
  Image,
  TextInput,
  Button,
  ActivityIndicator,
  Alert,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';

import axios from 'axios';

import styles from './style';

const Login = () => {
  const title = 'Episodic series of \n digital audio.';
  const logo = require('../../assets/img/logo.png');

  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async () => {
    setLoading(true);
    try {
      const response = await axios.post('http://localhost:3000/login', {
        email,
        password,
      });
      console.log(response.data);
    } catch (ex) {
      const body = ex.response.data;
      const message = body?.message || 'Erro desconhecido';
      Alert.alert(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../assets/img/login-background.png')}
        style={styles.bgLogin}>
        <View style={styles.content}>
          <LinearGradient
            useAngle={true}
            angle={180}
            colors={['rgba(9, 18, 28, 0)', '#09121C', 'rgba(9, 18, 28, 0)']}
            style={styles.linearGradient}>
            <Image source={logo} />
            <Text style={styles.textLogo}>{title}</Text>
            <View style={styles.containerTextInputEmail}>
              <Icon size={16} name="envelope-o" color="#898F97" />
              <TextInput
                autoFocus={true}
                style={styles.textInputEmail}
                placeholderTextColor="#898F97"
                placeholder="E-mail address"
                value={email}
                onChangeText={setEmail}
                autoCapitalize="none"
                autoCompleteType="off"
              />
            </View>
            <View style={styles.containerTextInputPassword}>
              <Icon size={16} name="key" color="#898F97" />
              <TextInput
                autoCapitalize="none"
                secureTextEntry={true}
                style={styles.textInputPassword}
                placeholderTextColor="#898F97"
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
              />
            </View>
            <View style={styles.containerButtonLogin}>
              <ActivityIndicator color="#FFFFFF" animating={loading} />
              <Button title="Login" onPress={handleSubmit} color="#FFFFFF" />
            </View>
            <Text style={styles.textForgotPassword}>Forgot password?</Text>
            <View style={styles.buttonLoginFacebook}>
              <Button
                title="Login with Facebook"
                onPress={() => {}}
                color="#FFFFFF"
              />
            </View>
            <View style={styles.buttonRegisterNewAccount}>
              <Button
                title="Register new account"
                onPress={() => {}}
                color="#FFFFFF"
              />
            </View>
          </LinearGradient>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Login;
