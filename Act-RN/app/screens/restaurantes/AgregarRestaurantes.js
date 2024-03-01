import React from "react";
import { View, Text, Image, ScrollView, StyleSheet } from "react-native";
import { Button } from "react-native-elements";
import FormRestaurantes from '../../components/restaurantes/FormRestaurantes'
import { useNavigation } from "@react-navigation/native";

export default function AgregarRestaurante() {
    const navegacion = useNavigation();
    return (
        <ScrollView centerContent={true} style={styles.body}>
            <View style={styles.formulario}>
                <FormRestaurantes/>
            </View>
            
                <Text
                    style={styles.parrafo}
                    onPress={() => navegacion.navigate("registro")}
                >
                </Text>
                
        </ScrollView>)
        
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