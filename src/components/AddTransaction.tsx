import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';
import React, { useState, useContext } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Platform,
  TextStyle,
  Pressable,
} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import { Fonts } from '../styles';

import { GlobalContext } from '../context/GlobalState';

import { useNavigation } from '@react-navigation/native';

export const AddTransaction: React.FC = () => {
  const [transactionNote, setTransactionNote] = useState('');
  const [transactionValue, setTransactionValue] = useState('');
  const [transactionType, setTransactionType] = useState('expense');

  const { addTransaction } = useContext(GlobalContext);
  const navigation = useNavigation();

  const handleSubmit = async () => {
    const newTransaction = {
      id: uuidv4(),
      type: transactionType.toLowerCase(),
      value: parseFloat(transactionValue.replace(/,/g, '.')),
      note: transactionNote,
    };
    addTransaction(newTransaction);
    //@ts-ignore
    navigation.navigate('main');
  };

  const isFormValid = transactionNote.trim() !== '' && transactionValue.trim() !== '';

  return (
    <View style={styles.container}>
      <Text style={styles.addTransactionLabel}>Add new transaction</Text>
      {/* Picker Input Group */}
      <View style={{ marginTop: 20 }}>
        <View>
          <Text style={styles.transactionFieldLabel}>Transaction Type</Text>
          <RNPickerSelect
            style={{
              inputWeb: styles.transactionFieldTextInput,
              inputIOS: styles.transactionFieldTextInput,
              inputAndroid: styles.transactionFieldTextInput,
            }}
            placeholder={{}}
            value={transactionType}
            onValueChange={(value: string) => setTransactionType(value)}
            items={[
              { label: 'Expense', value: 'expense' },
              { label: 'Income', value: 'income' },
            ]}
          ></RNPickerSelect>
        </View>
        <View>
          <Text style={styles.transactionFieldLabel}>
            Transaction Category (Disabled)
          </Text>
          <RNPickerSelect
            style={{
              inputWeb: styles.transactionFieldTextInput,
              inputIOS: styles.transactionFieldTextInput,
              inputAndroid: styles.transactionFieldTextInput,
            }}
            disabled={true}
            placeholder={{}}
            value={transactionType}
            onValueChange={(value: string) => setTransactionType(value)}
            items={[{ label: 'Shopping', value: 'shopping' }]}
          ></RNPickerSelect>
        </View>
        <View>
          <Text style={styles.transactionFieldLabel}>
            Transaction Currency (Disabled)
          </Text>
          <RNPickerSelect
            style={{
              inputWeb: styles.transactionFieldTextInput,
              inputIOS: styles.transactionFieldTextInput,
              inputAndroid: styles.transactionFieldTextInput,
            }}
            disabled={true}
            placeholder={{}}
            value={transactionType}
            onValueChange={(value: string) => setTransactionType(value)}
            items={[{ label: 'EURO', value: 'euro' }]}
          ></RNPickerSelect>
        </View>
      </View>

      {/* Text Input Group */}
      <View style={{ marginTop: 40 }}>
        <View>
          <Text style={styles.transactionFieldLabel}>Transaction Value</Text>
          <TextInput
            keyboardType='numeric'
            style={styles.transactionFieldTextInput}
            placeholder='€1000,00'
            onChangeText={setTransactionValue}
            value={transactionValue}
          />
        </View>
        <View>
          <Text style={styles.transactionFieldLabel}>Transaction Note</Text>
          <TextInput
            style={styles.transactionFieldTextInput}
            placeholder='Groceries'
            onChangeText={setTransactionNote}
            value={transactionNote}
          />
        </View>
      </View>

      <Pressable
        style={[styles.button, !isFormValid && styles.buttonDisabled]}
        onPress={handleSubmit}
        disabled={!isFormValid}
      >
        <Text style={styles.buttonText}>Add transaction</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 350,
  },
  addTransactionLabel: {
    marginTop: 60,
    fontSize: 24,
    ...Fonts.poppinsSemiBold[Platform.OS],
  } as TextStyle,
  transactionFieldLabel: {
    marginTop: 10,
    marginHorizontal: 0,
    fontSize: 16,
    ...Fonts.poppinsMedium[Platform.OS],
  } as TextStyle,
  transactionFieldTextInput: {
    marginTop: 10,
    marginHorizontal: 0,
    fontSize: 14,
    ...Fonts.poppinsLight[Platform.OS],
    borderWidth: 1,
    borderRadius: 40,
    borderColor: '#dedede',
    backgroundColor: 'white',
    paddingVertical: 10,
    paddingLeft: 15,
  } as TextStyle,

  button: {
    marginTop: 60,
    paddingVertical: 5,
    borderRadius: 40,
    backgroundColor: '#29304e',
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
  },
  buttonDisabled: {
    backgroundColor: '#a9a9a9',
  },
  buttonText: {
    fontSize: 16,
    ...Fonts.poppinsSemiBold[Platform.OS],
    color: 'white',
  } as TextStyle,
});
