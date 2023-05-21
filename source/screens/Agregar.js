// Importamos los módulos necesarios.
import * as React from "react";
import * as RN from "react-native";
import { baseDatos } from "../config/firebase";
import { collection, addDoc } from "firebase/firestore";
import { useNavigation } from "@react-navigation/native";

// Creamos el componente Agregar.
export default function Agregar() {
  const navigation = useNavigation();

  // Definimos el estado inicial de newObjeto y su actualización.
  const [newObjeto, setNewObjeto] = React.useState({
    imagen: "🛒",
    nombre: "",
    descripcion: "",
    precio: 0,
    vendido: false,
    creadoEn: new Date(),
  });

  // Definimos la función enviar que se encargará de guardar el objeto en Firestore.
  const enviar = async () => {
    await addDoc(collection(baseDatos, "objetos"), newObjeto);
    navigation.goBack();
  };

  // Renderizamos la pantalla de Agregar.
  return (
    <RN.View style={styles.container}>
<<<<<<< HEAD
      <RN.Text style={styles.title}>Agregar objeto</RN.Text>
=======
      <RN.Text style={styles.title}>Agregar Producto</RN.Text>
>>>>>>> diego
      <RN.Text style={styles.imagen}>🛒</RN.Text>
      <RN.TextInput
        style={styles.inputContainer}
        placeholder="Nombre"
        onChangeText={(text) => setNewObjeto({ ...newObjeto, nombre: text })}
      />
      <RN.TextInput
        style={styles.inputContainer}
        placeholder="Descripción"
        onChangeText={(text) =>
          setNewObjeto({ ...newObjeto, descripcion: text })
        }
      />
      <RN.TextInput
        style={styles.inputContainer}
        placeholder="$ Precio"
        keyboardType="number-pad"
        onChangeText={(text) => setNewObjeto({ ...newObjeto, precio: text })}
      />
<<<<<<< HEAD
      <RN.Button title="Guardar" onPress={enviar} />
      <RN.Text>{JSON.stringify(newObjeto)}</RN.Text>
=======

      <RN.Button title="Guardar" onPress={enviar} />

      {/* <RN.Text>{JSON.stringify(newObjeto)}</RN.Text> */}
>>>>>>> diego
    </RN.View>
  );
}

// Definimos los estilos para la pantalla de Agregar.
const styles = RN.StyleSheet.create({
  container: {
    flex: 1,
<<<<<<< HEAD
    backgroundColor: "green",
=======
    backgroundColor: "#FFF",
>>>>>>> diego
    alignItems: "center",
  },
  title: {
    fontSize: 34,
    fontWeight: "700",
  },
  imagen: {
<<<<<<< HEAD
    fontSize: 100,
    borderWidth: 1,
    borderColor: "#ddd",
=======
    fontSize: 70,
    borderWidth: 1,
    borderColor: "#FF1B00",
>>>>>>> diego
    borderRadius: 10,
    padding: 10,
    marginVertical: 6,
  },
  inputContainer: {
    width: "90%",
    padding: 13,
    marginVertical: 6,
    borderWidth: 1,
<<<<<<< HEAD
    borderColor: "#ddd",
=======
    borderColor: "#19D8E7",
>>>>>>> diego
    borderRadius: 6,
  },
});
