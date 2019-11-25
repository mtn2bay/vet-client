import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  View,
  TextInput,
  Button,
  StyleSheet,
  Modal,
} from 'react-native';

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: '80%',
    borderColor: 'black',
    borderWidth: 1,
    padding: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
  },
  button: {
    width: '30%',
  },
});

const Input = (props) => {
  const [enteredItem, setEnteredItem] = useState('');
  const { visible, onCancel } = props;

  const inputHandler = (enteredText) => {
    setEnteredItem(enteredText);
  };

  const addHandler = () => {
    props.onAddItem(enteredItem);
    setEnteredItem('');
  };

  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Enter Item"
          style={styles.input}
          onChangeText={inputHandler}
          value={enteredItem}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="ADD" onPress={addHandler} />
          </View>
          <View style={styles.button}>
            <Button title="Cancel" color="red" onPress={onCancel} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

Input.propTypes = {
  visible: PropTypes.bool,
  onAddItem: PropTypes.func,
  onCancel: PropTypes.func,
};

Input.defaultProps = {
  visible: false,
  onAddItem: () => {},
  onCancel: () => {},
};

export default Input;
