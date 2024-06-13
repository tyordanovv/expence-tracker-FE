import React, { useContext, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TextStyle,
  Platform,
} from 'react-native';
import { Fonts, Typography } from '../styles';
import { Transaction } from './Transaction';

import { GlobalContext } from '../context/GlobalState';

export const TransactionList: React.FC = () => {
  const { state, setTransactions } = useContext(GlobalContext);
  const { transactions } = state;

  useEffect(() => {
    async function fetchTransactions() {
      try {
        const response = await fetch('http://10.0.2.2:3010/transactions');
        const data = await response.json();
        setTransactions(data);
      } catch (error) {
        console.error('Error fetching transactions :', error);
      }
    }

    fetchTransactions();
  }, []);

  return (
    <View style={styles.container}>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginTop: 30,
        }}
      >
        <Text style={styles.transactionsLabel}>Transactions</Text>
        <Text style={styles.viewAllLabel}>View All</Text>
      </View>
      {transactions.length === 0 ? (
        <View style={styles.emptyListContainer}>
          <Text style={styles.emptyListText}>
            You have not added any transactions yet.
          </Text>
        </View>
      ) : (
        <View>
          <FlatList
            style={styles.flatListContainer}
            contentContainerStyle={{ rowGap: 10 }}
            data={transactions}
            renderItem={({ item: transaction }) => (
              <Transaction transaction={transaction} />
            )}
          ></FlatList>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: 350,
    marginBottom: 40,
  },
  flatListContainer: {
    marginTop: 25,
    height: 290,
    width: 350,
  },
  transactionsLabel: {
    ...Fonts.poppinsMedium[Platform.OS],
    fontSize: 20,
  } as TextStyle,
  emptyListContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    paddingVertical: 40,
  },
  viewAllLabel: {
    ...Fonts.poppinsLight[Platform.OS],
    fontSize: 16,
    color: 'gray',
  } as TextStyle,
  emptyListText: {
    ...Fonts.poppinsLight[Platform.OS],
  } as TextStyle,
});
