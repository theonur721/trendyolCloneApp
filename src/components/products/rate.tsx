import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {COLORS} from '../../theme/colors';

type RatingProps = {
  rating: {
    rate: number;
    count: number;
    size: 'small' | 'medium' | 'large';
  };
  showCount?: boolean;
};

const Rate: React.FC<RatingProps> = ({rating, showCount = false}) => {
  if (!rating || typeof rating.rate !== 'number') {
    return <Text style={styles.rate}>not point</Text>;
  }

  const {rate, count, size} = rating;
  const starSize = size === 'small' ? 15 : size === 'medium' ? 20 : 24;

  const fullStar = Math.floor(rate);
  const halfStar = rate % 1 >= 0.5;
  const emptyStar = 5 - fullStar - (halfStar ? 1 : 0);

  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Text style={[styles.rate, {fontSize: starSize}]}>{rate} </Text>
        {Array.from({length: fullStar}).map((_, index) => (
          <Icon key={index} name="star" size={starSize} color={COLORS.ORANGE} />
        ))}
        {halfStar && (
          <Icon name="star-half" size={starSize} color={COLORS.ORANGE} />
        )}
        {Array.from({length: emptyStar}).map((_, index) => (
          <Icon
            key={`empty-${index}`}
            name="star-outline"
            size={starSize}
            color={COLORS.ORANGE}
          />
        ))}
      </View>

      {showCount && count != null && (
        <Text style={styles.count}>
          | {count} review{count > 1 ? 's' : ''} |
        </Text>
      )}
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
    fontWeight: 'bold',
  },
  count: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 5,
    color: COLORS.BLACK,
  },
});

export default Rate;
