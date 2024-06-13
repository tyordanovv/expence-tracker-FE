import React, { useContext } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Platform,
  TextStyle,
  Pressable,
} from 'react-native';
import { Fonts } from '../styles';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faX } from '@fortawesome/free-solid-svg-icons';

import { ITransaction } from '../types';

import { GlobalContext } from '../context/GlobalState';

export const Transaction: React.FC<{ transaction: ITransaction }> = ({
  transaction,
}) => {
  const { deleteTransaction } = useContext(GlobalContext);

  const transactionSign = transaction.type === 'expense' ? '- ' : '+ ';
  const transactionStyle =
    transaction.type === 'expense'
      ? styles.transactionMinus
      : styles.transactionPlus;

  return (
    <View style={styles.listItem}>
      <Text style={styles.transactionNote}>{transaction.note}</Text>
      <Text style={[styles.transactionValue, transactionStyle]}>
        {transactionSign}
        €{transaction.value}
      </Text>
      <Pressable
        style={styles.deleteButton}
        onPress={() => deleteTransaction(transaction.id)}
      >
        {/* <Text style={styles.deleteButtonText}>X</Text> */}
        <FontAwesomeIcon
          icon={faX}
          size={14}
          style={{ marginTop: 2, marginRight: 5 }}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  listItem: {
    backgroundColor: '#f0ecf4',
    borderRadius: 30,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    paddingRight: 30,
    paddingLeft: 20,
  },
  transactionNote: {
    marginTop: 3,
    fontSize: 15,
    ...Fonts.poppinsMedium[Platform.OS],
  } as TextStyle,
  transactionValue: {
    ...Fonts.poppinsSemiBold[Platform.OS],
    fontSize: 17,
    marginTop: 5,
    marginHorizontal: 0,
  } as TextStyle,
  transactionPlus: {
    color: '#2ecc71',
  },
  transactionMinus: {
    color: '#c0392b',
  },
  deleteButton: {
    position: 'absolute',
    right: 0,
    paddingTop: 2,
    paddingHorizontal: 5,
  },
  deleteButtonText: {
    ...Fonts.poppinsLight[Platform.OS],
  } as TextStyle,
});
