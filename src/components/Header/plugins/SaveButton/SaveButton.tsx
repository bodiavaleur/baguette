import React from 'react';
import SaveIcon from '~assets/icons/check.svg';
import ActionIcon from '~components/ActionIcon';

interface SaveButtonProps {
  onSave: () => void;
}

const SaveButton: React.FC<SaveButtonProps> = ({onSave}) => {
  return <ActionIcon icon={SaveIcon} onPress={onSave} />;
};

export default SaveButton;
