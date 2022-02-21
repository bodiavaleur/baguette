import React, {useMemo} from 'react';
import {
  ActivityIndicator,
  Image,
  StyleProp,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import styles from './styles';
import {theme} from '~config/theme';

interface AvatarProps {
  style?: StyleProp<ViewStyle>;
  size?: number;
  label?: string;
  src?: string;
  loading?: boolean;
  onPress?: () => void;
}

const Avatar: React.FC<AvatarProps> = ({
  style,
  size = 36,
  label,
  src,
  loading,
  onPress,
}) => {
  const labelSymbol = label?.charAt(0) ?? '';

  const containerStyle = useMemo(
    () => [styles.container, {width: size, height: size, fontSize: 32}, style],
    [style, size],
  );

  const placeholderTextStyle = useMemo(
    () => [styles.placeholderText, {fontSize: size / 3}],
    [size],
  );

  const avatar = (
    <>
      {loading && (
        <View style={styles.overlay}>
          <ActivityIndicator color={theme.colors.text} />
        </View>
      )}

      {src ? (
        <Image style={styles.image} source={{uri: src}} />
      ) : (
        <View style={styles.placeholder}>
          <Text style={placeholderTextStyle}>{labelSymbol}</Text>
        </View>
      )}
    </>
  );

  return onPress ? (
    <TouchableOpacity style={containerStyle} onPress={onPress}>
      {avatar}
    </TouchableOpacity>
  ) : (
    <View style={containerStyle}>{avatar}</View>
  );
};

export default Avatar;
