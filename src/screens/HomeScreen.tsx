import { StatusBar } from 'expo-status-bar';

// This fixes the modal breaking the SafeAreaView! 👇🏻
import { SafeAreaView } from 'react-native-safe-area-context';
import { View, StyleSheet, Dimensions } from 'react-native';

import { Header } from '../components/Header';
import { Balance } from '../components/Balance';
import { IncomeExpenses } from '../components/IncomeExpenses';
import { TransactionList } from '../components/TransactionList';

export const HomeScreen: React.FC = () => {
  return (
    <>
      <StatusBar />
      <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
        <View style={styles.body}>
          <Header />
          <View style={styles.container}>
            <Balance />
            <IncomeExpenses />
          </View>
          <TransactionList />
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#ffffff',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  container: {
    marginTop: 20,
    paddingVertical: 20,
    paddingHorizontal: 30,
    width: 350,
    height: 200,
    borderRadius: 30,
    backgroundColor: '#29304e',
  },
});
