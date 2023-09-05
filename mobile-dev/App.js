
import { StyleSheet, Text, View } from 'react-native';
import Routes from './routes/index.tsx';
export default function App() {
  return (
    <Routes />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '##F9FBFC',
    alignItems: 'center',
    justifyContent: 'center',
  },

  title: {
      fontSize: 22,
      fontWeight: 'bold',
  },
});
