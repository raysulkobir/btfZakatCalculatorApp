// src/features/auth/screens/LoginScreen.tsx
import Input from '@/ui/components/Input';
import { Colors } from '@/ui/theme/colors';
import Fonts from '@/ui/theme/fonts';
import { images } from '@/utils/images';
import { getActionFromState } from '@react-navigation/native';
import React from 'react';
import { ScrollView, StatusBar, StyleSheet, Text, TouchableWithoutFeedback, View, KeyboardAvoidingView, Keyboard, Image, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { getProportionalFontSize } from '@/ui/theme/typography';
import CommonButton from '@/ui/components/CommonButton';
import { useNavigation } from '@react-navigation/native';


type Props = {
  // add navigation type later if you use React Navigation
  navigation?: any;
};

const LoginScreen: React.FC<Props> = () => {
  const [email, setEmail] = React.useState('');
  const [pwd, setPwd] = React.useState('');
  const navigation = useNavigation();


  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="white"
        translucent={false}
      />

      <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <ScrollView
            contentContainerStyle={styles.container}
            keyboardShouldPersistTaps="handled"
          >
            <Image style={styles.logo} source={images.logo} />
            <View style={styles.mainView}>
              <Text style={styles.welcomeText}>Welcome</Text>
              <Text style={styles.loginText}>Place login to continue</Text>

              <Input
                // label="Email"
                placeholder="you@example.com"
                value={email}
                onChangeText={setEmail}
                containerStyle={styles.fieldContainer}
                inputWrapperStyle={styles.inputWrapper}
                inputStyle={styles.input}
                // helperText="We’ll never share your email."
              />

              <Input
                // label="Password"
                placeholder="Password"
                value={pwd}
                onChangeText={setPwd}
                isPassword
                containerStyle={styles.fieldContainer}
                inputWrapperStyle={styles.inputWrapper}
                inputStyle={styles.input}
                // errorText={pwd.length < 6 ? 'Password is too short' : undefined}
              />

              <TouchableOpacity style={styles.forgetPass}>
                <Text style={styles.forgetPassText}>Forgot Your Password</Text>
              </TouchableOpacity>
 
              <CommonButton
                title="Login"
                variant="primary"
                onPress={() => { navigation.navigate('Home')}}
                loading={false}
                disabled={false}
                fullWidth={false}
                style={styles.button}
                textStyle={styles.buttonText}
              />

              <CommonButton
                title="Sign Up"
                variant="primary"
                onPress={() => {}}
                loading={false}
                disabled={false}
                fullWidth={false}
                style={styles.signupButton}
                textStyle={styles.buttonText}
                backgroundColor={Colors.white}
                textColor={Colors.black}
                hoverBackgroundColor={Colors.primary}   // hover → web/desktop
                hoverTextColor={Colors.white}
                hoverBorderColor={Colors.primary}
                pressedBackgroundColor={Colors.primary} // pressed → all platforms
                pressedTextColor={Colors.white}
                pressedBorderColor={Colors.primary}
              />
            </View>
          </ScrollView>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    alignItems: 'center', 
    backgroundColor: Colors.white,
  },
  logo:{
    alignSelf: 'center',
    marginTop: 20
  },
  mainView:{
    // marginHorizontal: 20,
    margin:20,
    alignItems: 'center',
  },
  welcomeText: {
    color: Colors.black,
    fontFamily: Fonts.font_700,
    fontSize: 24,
    marginVertical: 10
  },
  loginText: {
    color: Colors.grey,
    fontSize: getProportionalFontSize(16),
    marginVertical: 10
  },
  fieldContainer: {
    marginVertical: 10,
  },
  inputWrapper: {
    borderRadius: 12,
    borderWidth: 1,
    borderColor: Colors.border_grey,
    backgroundColor: Colors.white,
    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },
    elevation: 2,
    width: "100%"
  },
  input: {
    paddingVertical: 12,
  },
  forgetPass: {
    alignSelf: 'flex-start',
  },
  forgetPassText:{
    color: Colors.black,
    fontSize: getProportionalFontSize(14),
    fontFamily: Fonts.font_400,
    marginVertical: 10,
    textDecorationLine: 'underline',
  
  },
  button:{
    marginTop: 20,
  },
  buttonText:{
    width: "100%"
  },
  signupButton: {
    alignSelf: 'center',
    marginTop: 20,
    borderRadius: 8,
    borderBlockColor: Colors.primary,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  continueView:{
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },
  orView: {
    flex: 1,
    height: 1,
    backgroundColor: Colors.border_grey,
  },
  orText: {
    marginHorizontal: 10,
    color: Colors.grey,
    fontSize: getProportionalFontSize(14),
  },

});
