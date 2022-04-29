import React, {useMemo} from 'react';
import {FlatListProps} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {theme} from '~config/theme';
import Animated, {Layout} from 'react-native-reanimated';

// TODO: type list item
const ScreenList: React.FC<FlatListProps<any>> = props => {
  const insets = useSafeAreaInsets();

  const safeAreaStyle = useMemo(
    () => ({
      paddingBottom: insets.bottom,
      paddingHorizontal: theme.spacing.medium,
    }),
    [insets],
  );
  return (
    <Animated.FlatList
      layout={Layout}
      contentContainerStyle={safeAreaStyle}
      {...props}
    />
  );
};

export default ScreenList;
