import React from 'react';
import {
  ActivityIndicator,
  StyleProp,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import {theme} from '~config/theme';
import {ButtonVariants} from '~types/buttons';
import {regular, action} from './variants';
import Blur from '~components/Blur';

const styles = {regular, action};

interface ButtonProps {
  title: string;
  onPress: () => void;
  variant?: ButtonVariants;
  style?: StyleProp<ViewStyle>;
  loading?: boolean;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  style,
  title,
  variant = 'regular',
  onPress,
  loading,
  disabled,
}) => {
  const isDisabled = loading || disabled;
  const buttonStyle = styles[variant];

  const containerStyle = [
    buttonStyle.container,
    isDisabled ? buttonStyle.disabled : null,
    style,
  ];
  return (
    <TouchableOpacity onPress={onPress} disabled={isDisabled}>
      <View style={containerStyle}>
        {loading ? (
          <ActivityIndicator color={theme.colors.white} />
        ) : (
          <Text style={buttonStyle.title}>{title}</Text>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default Button;
