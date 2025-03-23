import React, {useEffect} from 'react';
import {Text, StyleSheet, View, ScrollView} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch, RootState} from '../store';
import {getUserInfo} from '../store/actions/userActions';
import Avatar from '../components/user/avatar';
import Button from '../components/ui/button';
import {userLogOut} from '../store/actions/authActions';
import {useNavigation} from '@react-navigation/native';
import {AUTHNAVIGATOR} from '../utils/routes';

const ProfileScreen: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const {user} = useSelector((state: RootState) => state.user);
  const {isLogin} = useSelector((state: RootState) => state.auth);
  const navigation = useNavigation();

  useEffect(() => {
    dispatch(getUserInfo({id: 1}));
  }, [dispatch]);

  return (
    <ScrollView style={styles.container}>
      {isLogin ? (
        <>
          <View style={styles.containeravatar}>
            <Avatar
              name={user?.name.firstname}
              surname={user?.name.lastname}
              image={user?.image}
              size={150}
            />
            <Text style={styles.name}>
              {user?.name.firstname} {user?.name.lastname}
            </Text>
            <Text style={styles.email}>{user?.email}</Text>
          </View>
          <View>
            <Button title="Edit Profile" />
            <Button title="Log Out" onPress={() => dispatch(userLogOut())} />
          </View>
        </>
      ) : (
        <View style={styles.loggedcontainer}>
          <Text
            style={{
              fontSize: 24,
              marginHorizontal: 'auto',
              marginVertical: 30,
            }}>
            You are not logged in...
          </Text>
          <Button
            title="Login"
            onPress={() => {
              navigation.navigate(AUTHNAVIGATOR.LOGIN);
            }}
          />
        </View>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  name: {
    fontSize: 30,
    fontWeight: '800',
    marginTop: 15,
  },
  email: {
    fontSize: 20,
    fontWeight: '600',
    marginVertical: 8,
  },
  containeravatar: {
    alignItems: 'center',
    marginTop: 20,
    marginVertical: 20,
  },
  loggedcontainer: {
    marginVertical: 20,
  },
});

export default ProfileScreen;
