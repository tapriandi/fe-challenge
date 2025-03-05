import React, {FC} from 'react';
import {FlatList} from 'react-native';
import {Chip} from '../../Atoms';
import {styles} from './styles';

interface Props {
  data: string[];
  selectedCategory: string | null;
  setSelectedCategory: (e: string) => void;
}

const TabCategory: FC<Props> = ({
  data,
  selectedCategory,
  setSelectedCategory,
}) => {
  return (
    <>
      <FlatList
        horizontal
        data={data}
        keyExtractor={item => item}
        contentContainerStyle={styles.categoryList}
        showsHorizontalScrollIndicator={false}
        renderItem={({item}) => (
          <Chip
            text={item}
            isActive={selectedCategory === item}
            border
            onPress={() => setSelectedCategory(item)}
          />
        )}
      />
    </>
  );
};

export default TabCategory;
