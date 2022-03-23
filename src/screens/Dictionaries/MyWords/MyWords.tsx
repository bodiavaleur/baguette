import React, {useMemo} from 'react';
import Layout from '~containers/Layout';
import Header from '~components/Header';
import BackButton from '~components/Header/plugins/BackButton';
import MyWordsList from '~components/MyWordsList';

const MyWords: React.FC = () => {
  const screenHeader = useMemo(() => <Header left={<BackButton />} />, []);

  return (
    <Layout withoutPaddings customHeader={screenHeader}>
      <MyWordsList />
    </Layout>
  );
};

export default MyWords;
