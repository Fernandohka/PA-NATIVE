import { FIRESTORE_DB } from "@/firebaseConfig"
import { addDoc, collection } from "firebase/firestore"
import { useState } from "react"
import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native"
import { calculateNewMassToMatchDuration } from "react-native-reanimated/lib/typescript/reanimated2/animation/springUtils"
import { blue } from "react-native-reanimated/lib/typescript/reanimated2/Colors"
import { FullWindowOverlay } from "react-native-screens"

interface IAdicionarProduto {
    produto: string
}

export const AdicionarProduto = ({produto}: IAdicionarProduto) => {
    const [newNome, setNewNome] = useState("");
    const [newValor, setNewValor] = useState("");
    const [newEstoque, setNewEstoque] = useState("");
    const [newTamanho, setNewTamanho] = useState("");
  
    const addProduto = async () => {
      if (newNome == "" || newValor == "" || newEstoque == "" || newTamanho == "" || !Number.isInteger(parseInt(newEstoque)) || !Number.isInteger(parseInt(newTamanho)) || Number.isNaN(parseFloat(newValor))) {
        console.log("erroooooo");
        return;
      }

      await addDoc(collection(FIRESTORE_DB, produto), { nome: newNome, valor: parseFloat(newValor), estoque: parseInt(newEstoque), tamanho: parseInt(newTamanho) });
      setNewNome("");
      setNewValor("");
      setNewEstoque("");
      setNewTamanho("");
    };


    return(
        <>
            <Text>Cadastro de {produto}</Text>
            <TextInput
                style={styles.input}
                placeholder="Nome"
                value={newNome}
                onChangeText={setNewNome}
            />
            <TextInput
                style={styles.input}
                placeholder="Valor"
                value={newValor}
                onChangeText={setNewValor}
            />
            <TextInput
                style={styles.input}
                placeholder="Estoque"
                value={newEstoque}
                onChangeText={setNewEstoque}
            />
            <TextInput
                style={styles.input}
                placeholder="Tamanho"
                value={newTamanho}
                onChangeText={setNewTamanho}
            />
            <TouchableOpacity style={styles.button} onPress={addProduto}>
                <Text style={styles.buttonText}>Adicionar</Text>
            </TouchableOpacity>
        </>
    )
}

const styles = StyleSheet.create({
    container: {

    },
    input: {
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 4,
        height: 40,
        paddingHorizontal: 10,
        marginBottom: 10,
    },
    button: {
      backgroundColor: "#4b6beb",
      height: 40,
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 5,
    },
    buttonText: {
      color: "#fff",
    },
})