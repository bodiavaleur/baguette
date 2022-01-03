import React, {useMemo} from 'react';
import {FlatList, FlatListProps} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {BOTTOM_BAR_HEIGHT} from '~config/device';
import {theme} from '~config/theme';

const ScreenList: React.FC<FlatListProps<any>> = props => {
  const insets = useSafeAreaInsets();

  const safeAreaStyle = useMemo(
    () => ({
      paddingBottom: BOTTOM_BAR_HEIGHT + insets.bottom,
      paddingHorizontal: theme.spacing.medium,
    }),
    [insets],
  );

  return <FlatList contentContainerStyle={safeAreaStyle} {...props} />;
};

export default ScreenList;
