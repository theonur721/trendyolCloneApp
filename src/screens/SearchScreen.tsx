import React from 'react';
import {View, Text} from 'react-native';

type Props = RouteType<'Search'>;
const SearchScreen: React.FC<Props> = ({navigation, route}) => {
  return (
    <View>
      <Text>SearchScreen</Text>
    </View>
  );
};

export default SearchScreen;
