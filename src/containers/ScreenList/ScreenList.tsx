import React, {useMemo} from 'react';
import {FlatList, FlatListProps} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {theme} from '~config/theme';

const ScreenList: React.FC<FlatListProps<any>> = props => {
  const insets = useSafeAreaInsets();

  const safeAreaStyle = useMemo(
    () => ({
      paddingBottom: insets.bottom,
      paddingHorizontal: theme.spacing.medium,
    }),
    [insets],
  );

  return <FlatList contentContainerStyle={safeAreaStyle} {...props} />;
};

export default ScreenList;
