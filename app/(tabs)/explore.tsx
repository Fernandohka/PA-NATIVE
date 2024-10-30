import { FIRESTORE_DB } from '@/firebaseConfig';
import { addDoc, collection } from 'firebase/firestore';
import { useState } from 'react';
import { StyleSheet, Image, Platform, Alert } from 'react-native';

import { Text } from 'react-native';

export default function TabTwoScreen() {
  const [newNome, setNewNome] = useState("");
  const [newValor, setNewValor] = useState(0);
  const [newDescricao, setNewDescricao] = useState("");
  const [newEstoque, setNewEstoque] = useState(0);
  const [newTamanho, setNewTamanho] = useState(0);

  const addUser = async () => {
    if (newNome === "") {
      Alert.alert("Por favor, insira um nome.");
      return;
    }
    if (newValor == 0) {
      Alert.alert("Por favor, insira um valor.");
      return;
    }
    if (newDescricao === "") {
      Alert.alert("Por favor, insira um descricao.");
      return;
    }
    if (newEstoque == 0) {
      Alert.alert("Por favor, insira um estoque.");
      return;
    }
    if (newTamanho == 0) {
      Alert.alert("Por favor, insira um tamanho.");
      return;
    }
    await addDoc(collection(FIRESTORE_DB, "camisetas"), { nome: newNome, valor: newValor, descricao: newDescricao, estoque: newEstoque, tamanho: newTamanho });
    setNewNome("");
    setNewValor(0);
    setNewDescricao("");
    setNewEstoque(0);
    setNewTamanho(0);
  };

  return (
    <>
      <Text>Segunda Pág</Text>
    </>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
});