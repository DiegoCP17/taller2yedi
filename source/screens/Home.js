// Importación de las librerías necesarias
import * as React from "react";
import * as RN from "react-native";
import { useNavigation } from "@react-navigation/native";
import { baseDatos } from "../config/firebase";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import Objeto from "../components/Objeto";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

// Creación del componente Home
export default function Home() {
  // Se utiliza la función useNavigation de la librería de navegación para obtener la navegación actual
  const navigation = useNavigation();

  // Se inicializa un array de objetos vacío en el estado de React
  const [objetos, setObjetos] = React.useState([]);

  // useEffect para actualizar la barra de navegación en el montaje inicial
  React.useLayoutEffect(() => {
    // Configuración del botón para agregar un nuevo objeto en la barra de navegación
    navigation.setOptions({
      headerRight: () => (
        <View style={styles.container}>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate("Agregar")}
            >
              <Text style={styles.buttonText}>Agregar</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate("Catalogo")}
            >
              <Text style={styles.buttonText}>Catálogo</Text>
            </TouchableOpacity>
          </View>
        </View>
      ),
    });
  }, []);

  // useEffect para obtener los objetos de la base de datos Firebase
  React.useEffect(() => {
    // Referencia a la colección de objetos en la base de datos
    const collectionRef = collection(baseDatos, "objetos");
    // Consulta de objetos ordenados por fecha de creación descendente
    const q = query(collectionRef, orderBy("creadoEn", "desc"));

    // Suscripción a los cambios en la base de datos y actualización del estado de React con los objetos obtenidos
    const desuscribir = onSnapshot(q, (querySnapshot) => {
      setObjetos(
        querySnapshot.docs.map((doc) => ({
          id: doc.id,
          imagen: doc.data().imagen,
          nombre: doc.data().nombre,
          descripcion: doc.data().descripcion,
          precio: doc.data().precio,
          vendido: doc.data().vendido,
          creadoEn: doc.data().creadoEn,
        }))
      );
    });

    // Función de limpieza que se ejecuta cuando el componente se desmonta para evitar fugas de memoria
    return desuscribir;
  }, []);

  // Renderización de la pantalla principal con la lista de objetos obtenida de la base de datos
  return (
    <View style={styles.container}>
      <RN.Text style={styles.text}>
        Aqui podras ver tu Articulos agregados y podras ver su estado o
        eliminarlo si no lo requieres en tu pedido.
      </RN.Text>
      {objetos.map((objeto) => (
        <Objeto key={objeto.id} {...objeto} />
      ))}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 3,
    marginBottom: 3,
    marginRight: 8,
  },
  button: {
    backgroundColor: "#DE4220",
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 24,
    marginVertical: 8,
    marginHorizontal: 4,
  },
  buttonText: {
    color: "#333333",
    fontSize: 16,
    fontWeight: "bold",
  },

  text: {
    color: "#64332E",
    fontWeight: "bold",
    fontSize: 16,
  },
});
