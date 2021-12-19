import {useEffect} from 'react';
import {SliceStatusItem} from '~types/statuses';
import {Alert} from 'react-native';

export function useStatusAlert(status: SliceStatusItem, title?: string) {
  useEffect(() => {
    if (status.error) {
      Alert.alert(`${title ?? ''}`, `${status.error}`);
    }
  }, [status]);
}
