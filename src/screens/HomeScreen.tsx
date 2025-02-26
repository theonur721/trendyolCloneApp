import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import {getRequest} from '../service/verbs';
import {PRODUCT_URLS} from '../service/urls';

const HomeScreen: React.FC<Props> = ({navigation, route}) => {
  useEffect(() => {
    getRequest({}, PRODUCT_URLS.ALL_PRODUCTS)
      .then(data => console.log(data.data))
      .catch(error => console.log(error));
  }, []);
  return (
    <View>
      <Text>HomeScreen</Text>
    </View>
  );
};

export default HomeScreen;
