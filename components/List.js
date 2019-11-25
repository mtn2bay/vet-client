import React, { useState } from 'react';
import { View, FlatList, Button } from 'react-native';

import Item from './Item';
import Input from './Input';

const List = () => {
  const [items, setItems] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);

  const addHandler = (enteredItem) => {
    setItems((currentItems) => [
      ...currentItems,
      { id: Math.random().toString(), value: enteredItem },
    ]);
    setIsAddMode(false);
  };

  const removeHandler = (itemId) => {
    setItems((currentItems) => currentItems.filter((item) => item.id !== itemId));
  };

  const cancelModel = () => {
    setIsAddMode(false);
  };

  return (
    <View>
      <Button title="Add New Item" onPress={() => setIsAddMode(true)} />
      <Input visible={isAddMode} onAddItem={addHandler} onCancel={cancelModel} />
      <FlatList
        keyExtractor={(item) => item.id}
        data={items}
        renderItem={(itemData) => (
          <Item
            id={itemData.item.id}
            title={itemData.item.value}
            onDelete={removeHandler}
          />
        )}
      />
    </View>
  );
};

export default List;
