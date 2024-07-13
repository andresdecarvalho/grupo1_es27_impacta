import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
  },
  welcome: {
    fontSize: 24,
    fontFamily: theme.fonts.title700,
    fontWeight: 'bold',
    color: theme.colors.primary,
    textAlign: 'center',
    marginVertical: 10,
    marginBottom: 35
  },
  instructions: {
    fontSize: 14,
    fontFamily: theme.fonts.text400,
    color: theme.colors.secondary80,
    textAlign: 'center',
    marginBottom: 20,
  },
  label: {
    fontSize: 14,
    fontFamily: theme.fonts.text400,
    fontWeight: 'bold',
    color: theme.colors.secondary55,
    marginBottom: 5,
  },
  input: {
    height: 50,
    borderColor: theme.colors.secondary90,
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 22,
    marginBottom: 20,
    backgroundColor: theme.colors.secondary90,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: theme.colors.secondary90,
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    backgroundColor: theme.colors.secondary90,
    marginBottom: 20,
  },
  inputPassword: {
    flex: 1,
    height: 50,
    paddingHorizontal: 15,
  },
  sendSignIn: {
    fontSize: 14,
    fontFamily: theme.fonts.text400,
    color: theme.colors.secondary55,
    textAlign: 'center',
    marginBottom: 30,
  },
  sendSignInLink: {
    color: theme.colors.primary,
    fontWeight: 'bold',
  },
  button: {
    height: 50,
    backgroundColor: theme.colors.primary,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonSignUp: {
    height: 50,
    backgroundColor: theme.colors.primary,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
  buttonText: {
    fontSize: 14,
    fontFamily: theme.fonts.text400,
    fontWeight: 'bold',
    color: '#fff',
  },
  orContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  line: {
    height: 1,
    flex: 1,
    backgroundColor: theme.colors.secondary75,
  },
  orText: {
    fontSize: 14,
    fontFamily: theme.fonts.text400,
    color: theme.colors.secondary80,
    marginHorizontal: 10,
  },
  googleButton: {
    height: 50,
    borderColor: theme.colors.secondary90,
    borderWidth: 1,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.secondary90,
    marginBottom: 20,
  },
  googleButtonContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  googleIcon: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  googleButtonText: {
    fontSize: 14,
    fontFamily: theme.fonts.text400,
    fontWeight: 'bold',
  },
  signUpText: {
    fontSize: 14,
    fontFamily: theme.fonts.text400,
    color: theme.colors.secondary80,
    textAlign: 'center',
  },
  signUpLink: {
    color: '#fff',
    fontWeight: 'bold',
  },
  backButton: {
    textAlign: 'left',
    marginBottom: 20,
  },
  backArrowColor: {
    color: theme.colors.secondary55,
  },
  forgotPasswordLink: {
    color: theme.colors.primary,
    fontWeight: 'bold',
  }
});
