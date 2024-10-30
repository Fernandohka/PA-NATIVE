import { useState, useEffect } from "react";
import { Text, View, TextInput, SafeAreaView, StyleSheet, TouchableOpacity } from "react-native";
import { Link, router } from "expo-router";
import { FIREBASE_AUTH } from "@/firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";


export default function Login(){
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')

    const auth = FIREBASE_AUTH;

    useEffect(() => {
        console.log(auth.currentUser)
    }, [auth.currentUser]);

    useEffect(() => {
        console.log(email, pass)
    }, [email, pass]);

    const signIn = () => {
        signInWithEmailAndPassword(auth, email, pass)
        .then((dadosUsuario) => {
            console.log(dadosUsuario);
            if (email == "admin@adm.adm" && pass == "adm1234") {
                router.push('/(tabs)')
            }
            else {
                router.push('/(loja)')
            }
        }).catch((err) => {
            alert(err.message);
        });
    }

    return(
        <>
            <SafeAreaView style={styles.tela}>
                <View style={styles.container}>
                    <Text style={styles.textTitulo}>Log in to continue</Text>
                    <View style={styles.inputConteiner}>
                        <Text style={styles.text}>Work email or username</Text>
                        <TextInput
                            style={styles.input}
                            onChangeText={setEmail}
                            value={email}
                            placeholder="Insira seu E-mail"
                            keyboardType="email-address"
                            />
                    </View>
                    <View style={styles.inputConteiner}>
                        <Text style={styles.text}>Password</Text>
                        <TextInput
                            style={styles.input}
                            onChangeText={setPass}
                            value={pass}
                            placeholder="Insira sua senha"
                            keyboardType="numeric"
                            secureTextEntry={true}
                            />
                    </View>
                    <View style={styles.loginButton}>
                        <TouchableOpacity  onPress={signIn}>
                            <Text style={styles.loginText}>Log in</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.containerAzul}>
                        <Text style={styles.textAzul}>Forgot password?</Text>
                        <Text>●</Text>
                        <Link href={'/register'} style={styles.textAzul} >
                            Create an account
                        </Link>
                    </View>
                </View>
            </SafeAreaView>
        </>
    )
}

const styles = StyleSheet.create({
    tela: {
        flex: 1,
        backgroundColor: '#f7f7fd'
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 50,
        borderColor: '#e7e9f2',
        borderRadius: 5,
        borderWidth: 1,
        margin: 20,
        backgroundColor: '#ffffff'
    },
    input: {
        paddingHorizontal: 10,
        paddingVertical: 8,
        borderColor: '#c6c8d6',
        borderRadius: 5,
        borderWidth: 1,
        fontSize: 15
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
    textTitulo: {
        color: '#202222',
        textAlign: "center",
        fontWeight: "bold",
        fontSize: 18
    },
    text: {
        color: '#4e4c66',
        fontWeight: "bold",
        marginBottom: 5,
    },
    inputConteiner: {
        paddingVertical: 10
    },
    loginButton: {
        backgroundColor: '#008cff',
        borderRadius: 6,
        padding: 10,
        marginVertical: 8,
    },
    loginText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 15,
        fontWeight: "bold",
    },
    containerAzul: {
        display: "flex",
        flexDirection: "row",
        gap: 10,
        justifyContent: 'center',
        paddingVertical: 5,
    },
    textAzul: {
        color: '#008cff',
        fontWeight: "700",
        fontSize: 15,
    }

});