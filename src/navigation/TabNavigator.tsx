import { View, StyleSheet, Pressable } from 'react-native';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {
  faHome,
  faCreditCard,
  faCalendarDays,
  faPiggyBank,
  faCircle,
  faPlus,
} from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { HomeScreen } from '../screens/HomeScreen';
import { AccountsScreen } from '../screens/AccountsScreen';
import { SubscriptionsScreen } from '../screens/SubscriptionsScreen';
import { BudgetingScreen } from '../screens/BudgetingScreen';
import { AddTransactionScreen } from '../screens/AddTransactionScreen';

const Tab = createBottomTabNavigator();

library.add(
  faHome,
  faCreditCard,
  faCalendarDays,
  faPiggyBank,
  faCircle,
  faPlus
);

//@ts-ignore
const CustomTabBarButton = ({ onPress }) => {
  return (
    <Pressable onPress={onPress}>
      <View
        style={{
          position: 'relative',
          justifyContent: 'center',
          alignItems: 'center',
          width: 60,
          height: 60,
        }}
      >
        <FontAwesomeIcon icon='circle' color='#ff7f41' size={70} />
        <FontAwesomeIcon
          icon='plus'
          color='white'
          size={40}
          style={{ position: 'absolute', zIndex: 1 }}
        />
      </View>
    </Pressable>
  );
};

export const TabNavigator: React.FC = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          position: 'absolute',
          bottom: 40,
          left: 20,
          right: 20,
          elevation: 0,
          backgroundColor: '#29304e',
          borderRadius: 30,
          height: 60,
        },

        tabBarActiveTintColor: '#ff7f41',
        tabBarInactiveTintColor: '#f0ecf4',
      }}
    >
      <Tab.Screen
        name='Home'
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => {
            return (
              <FontAwesomeIcon
                icon='home'
                color={color}
                size={size}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name='Accounts'
        component={AccountsScreen}
        options={{
          tabBarIcon: ({ color, size }) => {
            return (
              <FontAwesomeIcon
                icon='credit-card'
                color={color}
                size={size}
              />
            );
          },
        }}
      />
      {/* Custom Tab Bar Button */}
      <Tab.Screen
        name='Transaction'
        /* Pass in a blank component as the base (this never gets shown) */
        component={AddTransactionScreen}
        options={{
          //@ts-ignore
          tabBarButton: (props) => <CustomTabBarButton {...props} />,
          tabBarStyle: { display: 'none' },
        }}
        listeners={({ navigation }) => ({
          tabPress: (e) => {
            e.preventDefault();
            navigation.navigate('transaction');
          },
        })}
      />
      <Tab.Screen
        name='Subscriptions'
        component={SubscriptionsScreen}
        options={{
          tabBarIcon: ({ color, size }) => {
            return (
              <FontAwesomeIcon
                icon='calendar-days'
                color={color}
                size={size}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name='Budgeting'
        component={BudgetingScreen}
        options={{
          tabBarIcon: ({ color, size }) => {
            return (
              <FontAwesomeIcon
                icon='piggy-bank'
                color={color}
                size={size}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#29304e',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.2,
    shadowRadius: 3.5,
    elevation: 5,
  },
});
