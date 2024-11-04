import { StyleSheet, Text, View } from "react-native"
import { calculateNewMassToMatchDuration } from "react-native-reanimated/lib/typescript/reanimated2/animation/springUtils"
import { blue } from "react-native-reanimated/lib/typescript/reanimated2/Colors"
import { FullWindowOverlay } from "react-native-screens"

interface ICard {
    nome: string, 
    valor: number, 
    estoque: number, 
    tamanho: number
}

export const Card = ({nome, valor, estoque, tamanho}: ICard) => {
    return(
        <>
            <View style={styles.container}>
                <Text>{nome}</Text>
                <Text>Tamanho: {tamanho}</Text>
                <Text>R${valor}</Text>
                <Text>Estoque: {estoque}</Text>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        borderRadius: 10,
        borderWidth: 2,
        margin: 10,
        padding: 5,
        alignItems: "center",
        width: "45%"
    }
})