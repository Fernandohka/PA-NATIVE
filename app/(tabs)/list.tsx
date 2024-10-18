import { FlatList, SafeAreaView, StatusBar, StyleSheet, Text } from "react-native";
import DATA from "@/constants/data.json"
import { Item } from "@/components/item";

export default function List() {
    return (
        <>
            <Text style={styles.center}>Lista</Text>
            <SafeAreaView style={styles.container}>
                <FlatList
                    style={styles.back}
                    data={DATA}
                    renderItem={({ item }) => <Item nome={item.nome} idade={item.idade} data={item.data} image={item.imagem} />}
                    keyExtractor={item => item.id}
                />
            </SafeAreaView>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
    },
    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 32,
    },
    back: {
        paddingHorizontal: 20,
    },
    center: {
        display: "flex",
        justifyContent: "center",
        width: "100%",
        paddingVertical: 25,
        shadowColor: "black",
        shadowOpacity: 0.2,
        shadowOffset: {width: 0, height: 0},
        shadowRadius: 15,
    }
});
