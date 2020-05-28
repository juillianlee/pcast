import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },

  bgLogin: {
    width: '100%',
    flex: 1,
    resizeMode: 'cover',
  },

  linearGradient: {
    flex: 1,
    borderBottomRightRadius: 24,
    paddingTop: 51,
    paddingLeft: 32,
    paddingRight: 34,
  },
  textLogo: {
    fontSize: 24,
    fontWeight: '500',
    color: '#fff',
    marginTop: 53,
  },

  content: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    paddingRight: 32,
    paddingBottom: 53,
  },

  containerTextInputEmail: {
    marginTop: 72,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#09121C',
    paddingLeft: 20,
    height: 58,
    borderWidth: 1,
    borderRadius: 16,
    borderBottomRightRadius: 0,
    borderColor: 'rgba(255, 255, 255, 0.15)',
  },

  textInputEmail: {
    height: 40,
    color: '#898F97',
    paddingLeft: 24,
    fontSize: 14,
    width: '100%',
  },

  containerTextInputPassword: {
    marginTop: 16,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#09121C',
    paddingLeft: 20,
    height: 58,
    borderWidth: 1,
    borderRadius: 16,
    borderBottomRightRadius: 0,
    borderColor: 'rgba(255, 255, 255, 0.15)',
  },

  textInputPassword: {
    height: 40,
    color: '#898F97',
    paddingLeft: 24,
    fontSize: 14,
    width: '100%',
  },

  textForgotPassword: {
    fontSize: 14,
    marginTop: 16,
    textAlign: 'center',
    textDecorationLine: 'underline',
    color: '#898F97',
  },

  containerButtonLogin: {
    backgroundColor: '#3369FF',
    borderRadius: 99,
    height: 51,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
    shadowColor: '#3369FF',
    shadowOpacity: 0.7,
    shadowRadius: 12.95,
    elevation: 18,
    width: 276,
  },

  buttonText: {
    fontSize: 18,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
  },

  buttonLoginFacebook: {
    backgroundColor: '#2B5D95',
    borderRadius: 99,
    height: 51,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 38,
    width: 276,
  },

  buttonRegisterNewAccount: {
    backgroundColor: '#FF334B',
    borderRadius: 99,
    height: 51,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 16,
    width: 276,
  },
});
