import { StyleSheet, Text, View } from "react-native"

interface ICard {
    nome: String, 
    valor: number, 
    descricao: String, 
    estoque: number, 
    tamanho: number
}

export const Card = ({nome, valor, descricao, estoque, tamanho}: ICard) => {
    return(
        <>
            <Text>{nome}</Text>
            <Text>{descricao}</Text>
            <Text>{tamanho}</Text>
            <Text>{valor}</Text>
            <Text>{estoque}</Text>
        </>
    )
}

const style = StyleSheet.create({
    
})