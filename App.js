import React, { useState } from 'react';
import { View, Text, SafeAreaView, StyleSheet, TextInput, Button, FlatList, Touchable, TouchableOpacity } from 'react-native';

const Calculator = () => {
  const [text, setText] = useState('');
  const [history, setHistory] = useState([]);

  const my_eval = (t) => {
    let result = "Loi";
    try {
      result = eval(t);
    } catch (error) {
    }
    return result;
  };

  const handleEnterPress = () => {
    const result = my_eval(text);
    const newHistoryItem = { expression: text, result: result };
    setHistory([...history, newHistoryItem]);
    setText('');
  };

  const handleClearHistory = () => {
    setHistory([]);
  };

  const nhapvaoinput = (item) => {
    setText(item.expression);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ padding: 10, flex: 1 }}>
        <TextInput
          style={{ height: 50, fontSize: 20, opacity: 0.3 }}
          placeholder='Nhập phép tính vào'
          onChangeText={newText => setText(newText)}
          value={text}
        />
        <Button title="Enter" onPress={handleEnterPress} />
        <Text style={{ fontSize: 50, color: 'red' }}>{my_eval(text)}</Text>

        <Text style={{ fontSize: 24, marginTop: 20 }}>History:</Text>
        <FlatList
          data={history}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={()=> nhapvaoinput(item)}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10 }}>
              <Text>{item.expression}</Text>
              <Text>{item.result}</Text>
            </View>
            </TouchableOpacity>
          )}
        />
        <Button title="Clear History" onPress={handleClearHistory} />
      </View>
    </SafeAreaView>
  );
};

export default Calculator;
