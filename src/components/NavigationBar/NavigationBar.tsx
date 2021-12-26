import React, {useEffect, useMemo, useState} from 'react';
import {Alert, Text, View} from 'react-native';
import styles from './styles';
import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import NavigationTab from '~components/NavigationTab/NavigationTab';
import HomeIcon from '~assets/icons/home.svg';
import DictionaryIcon from '~assets/icons/book.svg';
import TrainingIcon from '~assets/icons/bullseye.svg';
import AccountIcon from '~assets/icons/account.svg';
import {DashboardRoutes} from '~navigation/routes';
import TabPlusButton from '~components/TabPlusButton';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Blur from '~components/Blur';
import useToggle from '~hooks/useToggle';
import AddWordModal from '~components/AddWordModal';

const NavigationBar: React.FC<BottomTabBarProps> = ({navigation}) => {
  const [tab, setTab] = useState(DashboardRoutes.Home);
  const [isAddWordModalOpen, toggleAddWordModal] = useToggle();
  const insets = useSafeAreaInsets();

  useEffect(() => {
    navigation.navigate(tab);
  }, [tab]);

  const containerStyle = useMemo(
    () => [styles.container, {paddingBottom: insets.bottom}],
    [insets],
  );

  return (
    <>
      <View style={containerStyle}>
        <View style={styles.navbar}>
          <Blur style={styles.blur} />

          <NavigationTab
            icon={HomeIcon}
            route={DashboardRoutes.Home}
            onSelectTab={setTab}
            isSelected={tab === DashboardRoutes.Home}
          />
          <NavigationTab
            icon={DictionaryIcon}
            route={DashboardRoutes.Dictionary}
            onSelectTab={setTab}
            isSelected={tab === DashboardRoutes.Dictionary}
          />
          <TabPlusButton onPress={toggleAddWordModal} />
          <NavigationTab
            icon={TrainingIcon}
            route={DashboardRoutes.Training}
            onSelectTab={setTab}
            isSelected={tab === DashboardRoutes.Training}
          />
          <NavigationTab
            icon={AccountIcon}
            route={DashboardRoutes.Account}
            onSelectTab={setTab}
            isSelected={tab === DashboardRoutes.Account}
          />
        </View>

        <AddWordModal
          isOpen={isAddWordModalOpen}
          onCancel={toggleAddWordModal}
        />
      </View>
    </>
  );
};

export default NavigationBar;
