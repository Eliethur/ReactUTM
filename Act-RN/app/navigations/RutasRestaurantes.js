import React from "react"
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Restaurantes from "../screens/restaurantes/Restaurantes";
import AgregarRestaurante from "../screens/restaurantes/AgregarRestaurantes";
const Stack = createNativeStackNavigator();

export default function RutasRestaurantes() {

    return (
        <Stack.Navigator>
            <Stack.Screen
                name="restaurante"
                component={Restaurantes}
                
            />

            <Stack.Screen
                name="registro"
                component={AgregarRestaurante}
                options={{ title: "Registrar" }}
            />
        </Stack.Navigator>
    );
}