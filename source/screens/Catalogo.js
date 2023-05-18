// Importamos los módulos necesarios.
import * as React from "react";
import * as RN from "react-native";
import { useNavigation } from "@react-navigation/native";
import { baseDatos } from "../config/firebase";
import { collection, addDoc } from "firebase/firestore";

// Creamos el componente Catalogo.
export default function Catalogo() {
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

  // Función para manejar el clic en el botón "Agregar" de la tarjeta.
  const handleAgregar = (producto) => {
    navigation.navigate("Agregar", { producto });
  };

  // Renderizamos la pantalla de Catalogo.
  return (
    <RN.View style={styles.container}>
      <RN.ScrollView contentContainerStyle={styles.contentContainer}>
        <RN.Text style={styles.title}>Catálogo de Productos</RN.Text>

        {/* Aquí puedes agregar las tarjetas (Card) de los productos */}
        <Card
          imagen="🛒"
          nombre="Producto 1"
          descripcion="Descripción del producto 1"
          precio={10}
          onPress={() =>
            handleAgregar({
              imagen: "🛒",
              nombre: "Producto 1",
              descripcion: "Descripción del producto 1",
              precio: 10,
              vendido: false,
              creadoEn: new Date(),
            })
          }
        />

        <Card
          imagen="🛒"
          nombre="Producto 2"
          descripcion="Descripción del producto 2"
          precio={20}
          onPress={() =>
            handleAgregar({
              imagen: "🛒",
              nombre: "Producto 2",
              descripcion: "Descripción del producto 2",
              precio: 20,
              vendido: false,
              creadoEn: new Date(),
            })
          }
        />

        {/* ... Agregar más tarjetas de productos según sea necesario ... */}
      </RN.ScrollView>
    </RN.View>
  );
}

// Componente Tarjeta (Card) para mostrar un producto en el catálogo.
function Card({ imagen, nombre, descripcion, precio, onPress }) {
  return (
    <RN.TouchableOpacity style={styles.cardContainer} onPress={onPress}>
      <RN.Text style={styles.imagen}>{imagen}</RN.Text>
      <RN.Text style={styles.cardTitle}>{nombre}</RN.Text>
      <RN.Text style={styles.cardDescription}>{descripcion}</RN.Text>
      <RN.Text style={styles.cardPrice}>${precio}</RN.Text>
      <RN.Button title="Agregar" onPress={onPress} />
    </RN.TouchableOpacity>
  );
}

// Definimos los estilos para la pantalla de Catalogo.
const styles = RN.StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
  },
  contentContainer: {
    padding: 20,
  },
  title: {
    fontSize: 34,
    fontWeight: "700",
    marginBottom: 20,
  },
  cardContainer: {
    borderWidth: 1,
    borderColor: "#19D8E7",
    borderRadius: 6,
    padding: 10,
    marginBottom: 10,
  },
  imagen: {
    fontSize: 70,
    marginBottom: 10,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  cardDescription: {
    marginBottom: 5,
  },
  cardPrice: {
    fontWeight: "bold",
    marginTop: 5,
  },
});
