import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {COLORS} from '../../theme/colors';

type RatingProps = {
  rating?: {
    rate: number;
  };
};

const Rate: React.FC<RatingProps> = ({rating = {rate: 0}}) => {
  if (!rating || typeof rating.rate !== 'number') {
    return <Text style={styles.rate}>not point</Text>;
  }

  const fullStar = Math.floor(rating.rate);
  const halfStar = rating.rate % 1 >= 0.5;
  const emptyStar = 5 - fullStar - (halfStar ? 1 : 0);

  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Text style={styles.rate}>{rating.rate} </Text>
        {Array.from({length: fullStar}).map((_, index) => (
          <Icon key={index} name="star" size={24} color={COLORS.ORANGE} />
        ))}
        {halfStar && <Icon name="star-half" size={24} color={COLORS.ORANGE} />}
        {Array.from({length: emptyStar}).map((_, index) => (
          <Icon
            key={`empty-${index}`}
            name="star-outline"
            size={24}
            color={COLORS.ORANGE}
          />
        ))}
      </View>
      <View>
        <Text style={styles.count}>| {rating.count} | review</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 5,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  rate: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  count: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 5,
  },
});

export default Rate;
