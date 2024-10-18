import { StyleSheet, Text, View } from "react-native"
import { Image } from "expo-image"

export const Item = ({nome, data, idade, image}: {nome: string, idade: string, data: string, image: string}) => {
    return(
        <>
            <View style={styles.itemList}>
                <Text style={styles.text}>{nome}</Text>
                <Text style={styles.text}>{idade}</Text>
                <Text style={styles.text}>{data}</Text>
                <Image source={image} style={styles.imageStyle}></Image>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    itemList: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "#4168a4d4",
        margin: 10,
        height: 80,
        paddingHorizontal: 10
    },
    imageStyle: {
        width: 30,
        height: 30,
    },
    text: {
        fontFamily: "Anton"
    }
})