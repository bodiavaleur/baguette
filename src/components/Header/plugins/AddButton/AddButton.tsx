import React from 'react';
import ActionIcon from '~components/ActionIcon';
import PlusIcon from '~assets/icons/plus.svg';

interface AddButtonProps {
  onAdd: () => void;
}

const AddButton: React.FC<AddButtonProps> = ({onAdd}) => {
  return <ActionIcon icon={PlusIcon} onPress={onAdd} />;
};

export default AddButton;
