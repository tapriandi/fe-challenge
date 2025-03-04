import React, {FC} from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import {styles} from './styles';

interface Props {
  headerTitle: string;
}

const Header: FC<Props> = ({headerTitle}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerTitle}>{headerTitle}</Text>
    </View>
  );
};

export default Header;
