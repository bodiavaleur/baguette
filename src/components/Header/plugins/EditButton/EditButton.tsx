import React from 'react';
import EditIcon from '~assets/icons/edit.svg';
import ActionIcon from '~components/ActionIcon';

interface EditButtonProps {
  onEdit: () => void;
}

const EditButton: React.FC<EditButtonProps> = ({onEdit}) => {
  return <ActionIcon icon={EditIcon} onPress={onEdit} />;
};

export default EditButton;
