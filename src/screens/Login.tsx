import React, {useEffect} from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import {View, Text, SafeAreaView} from 'react-native';
import Input from '../components/ui/input';
import Button from '../components/ui/button';
import {defaultScreenStyle} from '../styles/defaultScreenStyle';
import {COLORS} from '../theme/colors';
import {Formik} from 'formik';
import {LoginForm} from '../models/ui/loginForm';
import {useDispatch, useSelector} from 'react-redux';
import {userLogin} from '../store/actions/authActions';
import {AppDispatch, RootState} from '../store';
import {useNavigation} from '@react-navigation/native';

const Login: React.FC = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch<AppDispatch>();
  const {isLogin, pending} = useSelector((state: RootState) => state.auth);
  const initialValues: LoginForm = {
    username: 'mor_2314',
    password: '83r5^_',
  };

  useEffect(() => {
    if (isLogin) {
      navigation.goBack();
    }
  }, [isLogin]);

  return (
    <SafeAreaView style={defaultScreenStyle.safeAreaContainer}>
      <ScrollView>
        <Formik
          initialValues={initialValues}
          onSubmit={values => dispatch(userLogin(values))}>
          {({handleChange, handleBlur, handleSubmit, values}) => (
            <View style={styles.container}>
              <Input
                onChangeText={handleChange('username')}
                onBlur={handleBlur('username')}
                value={values.username}
                title="Username"
              />
              <Input
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                secureTextEntry
                value={values.password}
                title="Password"
              />
              <Text style={styles.forgotPass}>Forgot my password?</Text>
              <Button disabled={pending} onPress={handleSubmit} title="Login" />
            </View>
          )}
        </Formik>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, margin: 10},
  forgotPass: {
    fontSize: 16,
    color: COLORS.ORANGE,
    marginTop: 5,
    marginBottom: 40,
    textAlign: 'right',
  },
});

export default Login;
