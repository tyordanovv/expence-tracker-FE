import { View, Pressable, ScrollView } from 'react-native';

import { AddTransaction } from '../components/AddTransaction';

export const AddTransactionScreen: React.FC = () => {

  return (
    <View>
      {/* Close Button */}
      <Pressable
        style={{
          alignSelf: 'center',
          marginTop: 15,
          borderRadius: 30,
          backgroundColor: '#29304e',
          width: 60,
          height: 5,
        }}
      ></Pressable>
      <ScrollView contentContainerStyle={{ alignItems: 'center' }}>
        <AddTransaction />
      </ScrollView>
    </View>
  );
};
