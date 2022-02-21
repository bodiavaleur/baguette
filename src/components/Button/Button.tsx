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
import {ButtonActions, ButtonVariants} from '~types/buttons';
import {regular, action} from './variants';
import Blur from '~components/Blur';
import {titleColors} from './config';

const styles = {regular, action};

interface ButtonProps {
  title: string;
  onPress: () => void;
  variant?: ButtonVariants;
  action?: ButtonActions;
  style?: StyleProp<ViewStyle>;
  loading?: boolean;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  style,
  title,
  variant = 'regular',
  action = 'default',
  onPress,
  loading,
  disabled,
}) => {
  const isDisabled = loading || disabled;
  const buttonStyle = styles[variant];

  const containerStyle = [
    buttonStyle.container,
    isDisabled ? buttonStyle.disabled : null,
  ];

  const titleStyle = [buttonStyle.title, {color: titleColors[action]}];

  return (
    <TouchableOpacity
      style={[containerStyle, style]}
      onPress={onPress}
      disabled={isDisabled}>
      {loading ? (
        <ActivityIndicator color={theme.colors.white} />
      ) : (
        <Text style={titleStyle}>{title}</Text>
      )}
    </TouchableOpacity>
  );
};

export default Button;
