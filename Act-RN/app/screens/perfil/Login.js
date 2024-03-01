import React from "react";
import { View, Text, Image, ScrollView, StyleSheet } from "react-native";
import { Button } from "react-native-elements";
import FormLogin from "../../components/perfil/FormLogin";
import { useNavigation } from "@react-navigation/native";

export default function Login() {
    const navegacion = useNavigation();
    return (
        <ScrollView centerContent={true} style={styles.body}>
            <Image
                source={require("../../../assets/img/login.jpg")}
                resizeMode="cover"
                style={styles.imagen}
            />
            <View style={styles.formulario}>
                <FormLogin/>
            </View>
            <Text style={styles.titulo}>¿No tienes cuenta?
                <Text
                    style={styles.parrafo}
                    onPress={() => navegacion.navigate("registrar")}
                >
                    Registrate
                </Text>
            </Text>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    body: {
        marginLeft: 30,
        marginRight: 30,
    },
    imagen:{
        width:"100",
        height:300,
        marginTop: 10
    },
    titulo: {
        marginTop: 13,
        fontSize: 17,
        marginBottom: 10,
        textAlign: "center",
    },
    parrafo: {
        marginLeft:"5px",
        color:"red",
        textAlign: "justify",
        marginBottom: 20,
    },
});
