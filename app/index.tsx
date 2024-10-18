import { useState } from "react";
import { Text, View, TextInput, SafeAreaView, StyleSheet, TouchableOpacity } from "react-native";
import { Link, router } from "expo-router";


export default function Login(){
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    const [count, setCount] = useState(0);

    console.log(email, pass)
    console.log(typeof email, typeof pass)

    const onPress = () => {
        router.push('/(tabs)')
    }

    return(
        <>
            <SafeAreaView>
                <Text>Login</Text>
                <Text>E-mail</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={setEmail}
                    value={email}
                    placeholder="Insira seu E-mail"
                    keyboardType="email-address"
                />
                <TextInput
                    style={styles.input}
                    onChangeText={setPass}
                    value={pass}
                    placeholder="Insira sua senha"
                    keyboardType="numeric"
                    secureTextEntry={true}
                />
                <View style={styles.container}>
                    <View style={styles.countContainer}>
                        <Text>Count: {count}</Text>
                    </View>
                    <TouchableOpacity style={styles.button} onPress={() => {setCount(count + 1)}}>
                        <Text>Press Here</Text>
                    </TouchableOpacity>
                    <Link href={'/register'} >
                        Cadastrar novo Usuario!
                    </Link>
                </View>
            </SafeAreaView>
        </>
    )
}

const styles = StyleSheet.create({
    input: {
        paddingHorizontal: 10,
        paddingVertical: 3,
        backgroundColor: "#090909",
        color: 'white'
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 10,
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#DDDDDD',
        padding: 10,
    },
        countContainer: {
        alignItems: 'center',
        padding: 10,
    },

});