import React from 'react';
import DictionaryIcon from '~assets/icons/dictionary.svg';
import ActionIcon from '~components/ActionIcon';

interface DictionaryButtonProps {
  onPress: () => void;
}

const DictionaryButton: React.FC<DictionaryButtonProps> = ({onPress}) => {
  return <ActionIcon icon={DictionaryIcon} onPress={onPress} />;
};

export default DictionaryButton;
