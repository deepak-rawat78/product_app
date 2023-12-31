import {
  View,
  FlatList,
  NativeSyntheticEvent,
  NativeScrollEvent,
  Image,
  StyleProp,
  ViewStyle,
  Text,
} from 'react-native';
import React, {useState} from 'react';
import styles from './Carousel.styles';
import {foodImagePlaceholder} from '../../../../assets/icons';

export const CAROUSEL_WIDTH = 0;

const ItemSeparatorComponent = () => <View style={styles.separator} />;

const Carousel = ({
  data,
  containerStyle,
}: {
  data: string[];
  containerStyle?: StyleProp<ViewStyle>;
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const onScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const totalWidth = event.nativeEvent.layoutMeasurement.width;
    const xPosition = event.nativeEvent.contentOffset.x;
    const newIndex = Math.round(xPosition / totalWidth);

    if (newIndex !== currentIndex) {
      setCurrentIndex(newIndex);
    }
  };

  const keyExtractor = (item: string) => String(item);

  const renderItem = ({item}: {item: string}) => {
    return (
      <View style={styles.renderItem}>
        <Image source={foodImagePlaceholder} />
        <Text style={styles.carouselItemText}>{item}</Text>
      </View>
    );
  };

  return (
    <View style={[styles.container, containerStyle]}>
      <FlatList
        horizontal={true}
        data={data}
        renderItem={renderItem}
        snapToInterval={CAROUSEL_WIDTH}
        pagingEnabled={true}
        style={styles.flatList}
        onScroll={onScroll}
        keyExtractor={keyExtractor}
        showsHorizontalScrollIndicator={false}
        ItemSeparatorComponent={ItemSeparatorComponent}
        contentContainerStyle={styles.contentStyle}
      />
    </View>
  );
};

export default Carousel;
