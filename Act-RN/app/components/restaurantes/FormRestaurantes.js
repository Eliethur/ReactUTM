import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Input, Button } from "react-native-elements";
import { isEmpty } from "lodash";
import firebase from 'firebase/compat/app';
import Toast from 'react-native-toast-message';

export default function FormRegistro() {
    const [datos, setDatos] = useState(valoresDefault);
    const onSubmit = () => {
        if (isEmpty(datos.nombre) || isEmpty(datos.direccion) || isEmpty(datos.descripcion)) {
            Toast.show({
                type: 'error',
                text1: 'Error',
                text2: 'Los campos no pueden estar vacíos'
            });
        } else {
            console.log(datos);
            firebase.database().ref('/restaurantes').push(datos);
        }
    };
    const onChange = (e, type) => {
        setDatos({ ...datos, [type]: e.nativeEvent.text });
    }
    return (
        <View style={style.formContainer}>
            <Input
                placeholder="Nombre del Restaurante"
                containerStyle={style.inputForm}
                onChange={(e) => onChange(e, "nombre")}
            />
            <Input
                placeholder="Dirección"
                containerStyle={style.inputForm}
                onChange={(e) => onChange(e, "direccion")}
            />
            <Input
                placeholder="Descripción"
                containerStyle={style.inputForm}
                inputContainerStyle={style.textArea}
                multiline={true}
                onChange={(e) => onChange(e, "descripcion")}
            />
            <Button
                title="Registrar Restaurante"
                containerStyle={style.btnContainer}
                buttonStyle={style.btn}
                onPress={() => onSubmit()}
            />
            <Toast ref={(ref) => Toast.setRef(ref)} />
        </View>
    );
}

function valoresDefault() {
    return {
        nombre: "",
        direccion: "",
        descripcion: "",
    };
}

const style = StyleSheet.create({
    formContainer: {
        flex: 1,
        alignItems: 'center',
        marginTop: 10
    },
    inputForm: {
        width: "100%",
        marginTop: 20
    },
    btnContainer: {
        marginTop: 20,
        width: "100%"
    },
    btn: {
        backgroundColor: "#996632"
    },
    textArea: {
        height: 100,
        width: "100%",
        padding: 0,
        margin: 0,
    }
});
