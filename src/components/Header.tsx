import { View, Text, StyleSheet, Platform, TextStyle } from 'react-native';
import { Fonts } from '../styles';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faUser, faBell } from '@fortawesome/free-regular-svg-icons';

interface User {
  firstName: string;
  lastName: string;
}

const user: User = { firstName: 'Tihomir', lastName: 'Yordanov' }
;

const getCurrentHour = () => {
  return new Date().getHours();
};

export const Header: React.FC = () => {
  const { firstName, lastName } = user;
  const currentHour = getCurrentHour();

  const formattedName = `${firstName} ${lastName}`;
  const greeting =
    currentHour < 12
      ? 'Good morning!'
      : currentHour < 18
      ? 'Good afternoon!'
      : 'Good evening!';

  return (
    <View style={styles.container}>
      <View style={styles.iconBox}>
        <FontAwesomeIcon icon={faUser} size={22} />
      </View>
      <View style={{ marginRight: 60 }}>
        <Text style={styles.greeting}>{greeting} 👋🏻</Text>
        <Text style={styles.name}>{formattedName}</Text>
      </View>
      <View style={styles.iconBox}>
        <FontAwesomeIcon icon={faBell} size={22} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 350,
  },
  iconBox: {
    height: 50,
    width: 50,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0ecf4',
  },
  greeting: {
    fontSize: 16,
    color: 'gray',
    ...Fonts.poppinsMedium[Platform.OS],
  } as TextStyle,
  name: {
    fontSize: 18,
    ...Fonts.poppinsMedium[Platform.OS],
  } as TextStyle,
});
