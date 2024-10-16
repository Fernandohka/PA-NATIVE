import { Image, ImageSourcePropType, StyleSheet, Text, View } from "react-native"

export const Header = ({image} : {image: ImageSourcePropType}) => {
    return(
        <>
            <View style={style.background}>
                <Text style={style.TemQueSerNoText}>Header Exemplos</Text>
                <Image source={image}></Image>
            </View>
        </>
    )
}

const style = StyleSheet.create({
    background: {
        backgroundColor: "#090909",
        display: "flex",
        alignItems: "center",
        paddingHorizontal: 10,
        justifyContent: "center",
        paddingVertical: 30
    },
    TemQueSerNoText: {
        color: "#ffffff",
        fontWeight: "bold",
        fontSize: 30
    }
})