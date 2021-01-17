import React, { PureComponent } from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import { Text, Surface } from 'react-native-paper';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#323232',
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
  },
  surface: {
    padding: 15,
    elevation: 3,
  },
  text: {
    color: '#FFF',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default class Home extends PureComponent {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Surface style={styles.surface}>
          <Text style={styles.text}>
            Edite src/screens/Home/index.js para começar a trabalhar no seu app!
          </Text>
        </Surface>
      </SafeAreaView>
    );
  }
}
