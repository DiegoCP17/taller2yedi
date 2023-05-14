// Importamos las funciones necesarias desde la biblioteca de react-navigation.
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

// Importamos los componentes de pantalla que se utilizarán en la navegación.
import Home from "../screens/Home";
import Agregar from "../screens/Agregar";

// Creamos una instancia del StackNavigator con los componentes de pantalla definidos.
const Stack = createNativeStackNavigator();

function Mystack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Inicio" component={Home} />
      <Stack.Screen
        name="Agregar"
        component={Agregar}
        options={{ presentation: "card" }}
      />
    </Stack.Navigator>
  );
}

// Exportamos un componente que contenga el NavigationContainer y nuestro StackNavigator.
export default function Navigation() {
  return (
    <NavigationContainer>
      <Mystack />
    </NavigationContainer>
  );
}
