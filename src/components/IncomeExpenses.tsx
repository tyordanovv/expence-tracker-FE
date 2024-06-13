import React, { useContext } from 'react';
import { View, Text, StyleSheet, Platform, TextStyle } from 'react-native';
import { Fonts } from '../styles';

import { GlobalContext } from '../context/GlobalState';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons';

export const IncomeExpenses: React.FC = () => {
  const { state } = useContext(GlobalContext);
  const { transactions } = state;

  const income = transactions
    .filter((transaction) => transaction.type === 'income')
    .map((transaction) => transaction.value)
    .reduce((total, value) => (total += value), 0)
    .toFixed(2);

  const expenses = transactions
    .filter((transaction) => transaction.type === 'expense')
    .map((transaction) => transaction.value)
    .reduce((total, value) => (total += value), 0)
    .toFixed(2);

  return (
    <View style={styles.container}>
      <View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            columnGap: 3,
          }}
        >
          <FontAwesomeIcon icon={faArrowUp} color='#2ecc71' />
          <Text style={styles.incomeLabel}>Income</Text>
        </View>
        <Text style={[styles.money, styles.moneyPlus]}>+ €{income}</Text>
      </View>
      <View>
        <View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              columnGap: 3,
            }}
          >
            <FontAwesomeIcon icon={faArrowDown} color='#c0392b' />
            <Text style={styles.expenseLabel}>Expense</Text>
          </View>
        </View>
        <Text style={[styles.money, styles.moneyMinus]}>- €{expenses}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
  },
  money: {
    ...Fonts.poppinsSemiBold[Platform.OS],
    fontSize: 16,
    letterSpacing: 1,
    marginTop: 5,
    marginHorizontal: 0,
  } as TextStyle,
  incomeLabel: {
    ...Fonts.poppinsMedium[Platform.OS],
    fontSize: 16,
    textTransform: 'uppercase',
    color: 'white',
  } as TextStyle,
  moneyPlus: {
    color: 'white',
  },
  expenseLabel: {
    ...Fonts.poppinsMedium[Platform.OS],
    fontSize: 16,
    textTransform: 'uppercase',
    color: 'white',
  } as TextStyle,
  moneyMinus: {
    color: 'white',
  },
});
