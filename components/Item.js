import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: '#ccc',
    borderColor: 'black',
    borderWidth: 1,
  },
});

const Item = (props) => {
  const { id, title, onDelete } = props;
  return (
    <TouchableOpacity onPress={() => { onDelete(id); }}>
      <View key={id} style={styles.listItem}>
        <Text>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

Item.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  onDelete: PropTypes.func,
};

Item.defaultProps = {
  id: '',
  title: '',
  onDelete: () => {},
};

export default Item;
