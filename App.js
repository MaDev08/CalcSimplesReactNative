
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default function App() {
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const [result, setResult] = useState(null);

  const handleOperation = (operation) => {
    const num1 = parseFloat(input1);
    const num2 = parseFloat(input2);

    if (isNaN(num1) || (isNaN(num2) && operation !== 'sqrt')) {
      setResult('Erro');
      return;
    }

    let res;
    switch (operation) {
      case 'adição':
        res = num1 + num2;
        break;
      case 'subtração':
        res = num1 - num2;
        break;
      case 'multiplicação':
        res = num1 * num2;
        break;
      case 'divisão':
        res = num1 / num2;
        break;
      case 'potenciação':
        res = Math.pow(num1, num2);
        break;
      case 'raíz_quadrada':
        res = Math.sqrt(num1);
        break;
      default:
        res = 0;
    }
    setResult(res);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calculadora</Text>

      <TextInput
        style={styles.input}
        keyboardType="numeric"
        placeholder="Digite o primeiro número"
        value={input1}
        onChangeText={(text) => setInput1(text)}
      />
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        placeholder="Digite o segundo número"
        value={input2}
        onChangeText={(text) => setInput2(text)}
      />

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleOperation('adição')}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleOperation('subtração')}>
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleOperation('multiplicação')}>
          <Text style={styles.buttonText}>*</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleOperation('divisão')}>
          <Text style={styles.buttonText}>/</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleOperation('potenciação')}>
          <Text style={styles.buttonText}>^</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleOperation('raíz_quadrada')}>
          <Text style={styles.buttonText}>√</Text>
        </TouchableOpacity>
      </View>

      {result !== null && (
        <Text style={styles.result}>Resultado: {result}</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: 'bold',
  },
  input: {
    height: 40,
    width: '80%',
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 10,
    borderRadius: 5,
    backgroundColor: '#fff',
  },
  buttonContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    width: '80%',
  },
  button: {
    backgroundColor: '#007BFF',
    padding: 15,
    margin: 5,
    borderRadius: 5,
    width: '30%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  result: {
    marginTop: 20,
    fontSize: 20,
    fontWeight: 'bold',
  },
});
