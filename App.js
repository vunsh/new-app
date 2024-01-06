import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button,  } from 'react-native';

export default function App() {
  function ButtonPress(){
    console.log("hello")
  }
  return (
    <View style={styles.container}>
      <Text>hello</Text>
      <View style={styles.testButton}>
        <Button onPress={ButtonPress} title="test" ></Button>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  testButton: {
    backgroundColor: '#000',
    padding: 2,
    fontSize: 20,
  }
});
