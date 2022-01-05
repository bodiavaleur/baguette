import React from 'react';
import CloseIcon from '~assets/icons/close.svg';
import ActionIcon from '~components/ActionIcon';

interface CloseButtonProps {
  onClose: () => void;
}

const CloseButton: React.FC<CloseButtonProps> = ({onClose}) => {
  return <ActionIcon icon={CloseIcon} onPress={onClose} />;
};

export default CloseButton;
