import {StyleSheet} from 'react-native';
import colors from '../../../../assets/colors';
import {CAROUSEL_WIDTH} from './Carousel';

export const CAROUSEL_DOT_WIDTH = 19;

const styles = StyleSheet.create({
  container: {},
  flatList: {},
  dotsContainter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'absolute',
    bottom: 20,
    left: 20,
  },
  dot: {
    width: CAROUSEL_DOT_WIDTH,
    borderWidth: 2,
    borderColor: colors.yellowishGrey,
    borderRadius: 2,
  },
  activeDot: {borderColor: colors.primaryDarkYellow},
  renderItem: {
    width: CAROUSEL_WIDTH,
    backgroundColor: colors.primaryDarkYellow,
    borderRadius: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 26,
    paddingHorizontal: 22,
  },
  carouselItemText: {
    fontSize: 22,
    lineHeight: 24,
    color: colors.white,
  },
  separator: {width: 20},
  contentStyle: {
    paddingHorizontal: 20,
  },
});

export default styles;
