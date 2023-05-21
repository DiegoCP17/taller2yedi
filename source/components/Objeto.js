<<<<<<< HEAD
import * as React from 'react';
import * as RN from 'react-native';
import { deleteDoc, doc, updateDoc } from 'firebase/firestore';
import {AntDesign} from '@expo/vector-icons';
import { baseDatos } from '../config/firebase';
=======
import * as React from "react";
import * as RN from "react-native";
import { deleteDoc, doc, updateDoc } from "firebase/firestore";
import { AntDesign } from "@expo/vector-icons";
import { baseDatos } from "../config/firebase";
>>>>>>> diego

export default function Objeto({
  id,
  imagen,
  nombre,
  descripcion,
  precio,
  vendido,
}) {
<<<<<<< HEAD

  const editar = () => {
    const docRef = doc(baseDatos, 'objetos', id);
    updateDoc(docRef, {
        vendido: true,
=======
  const editar = () => {
    const docRef = doc(baseDatos, "objetos", id);
    updateDoc(docRef, {
      vendido: true,
>>>>>>> diego
    });
  };

  const eliminar = () => {
<<<<<<< HEAD
    const docRef = doc(baseDatos, 'objetos', id);
    deleteDoc(docRef);
  };

  return(
    <RN.View style={styles.objetoContainer}>
      <RN.View style={styles.conEliminar}>
        <RN.Text style={styles.imagen}>{imagen}</RN.Text>
        <AntDesign onPress={eliminar} name='delete' size={25}/>            
      </RN.View>      
=======
    const docRef = doc(baseDatos, "objetos", id);
    deleteDoc(docRef);
  };

  return (
    <RN.ScrollView contentContainerStyle={styles.objetoContainer}>
      <RN.View style={styles.conEliminar}>
        <RN.Text style={styles.imagen}>
          {imagen}
          <AntDesign
            style={styles.botoneliminar}
            onPress={eliminar}
            name="closecircle"
            size={25}
          />
        </RN.Text>
      </RN.View>
>>>>>>> diego
      <RN.Text style={styles.nombre}>{nombre}</RN.Text>
      <RN.Text style={styles.descripcion}>{descripcion}</RN.Text>
      <RN.Text style={styles.precio}>${precio}</RN.Text>
      {vendido ? (
        <RN.TouchableOpacity style={styles.button}>
<<<<<<< HEAD
          <RN.Text style={styles.button}>Cargado</RN.Text>
        </RN.TouchableOpacity>
      ) : (
        <RN.TouchableOpacity 
          style={styles.button}
          onPress={editar}>
          <RN.Text style={styles.button}>Cargar</RN.Text>
        </RN.TouchableOpacity>
      )}      
    </RN.View>
=======
          <RN.Text style={styles.button}>Comprado!!</RN.Text>
        </RN.TouchableOpacity>
      ) : (
        <RN.TouchableOpacity style={styles.button} onPress={editar}>
          <RN.Text style={styles.button}>Comprar ?</RN.Text>
        </RN.TouchableOpacity>
      )}
    </RN.ScrollView>
>>>>>>> diego
  );
}

const styles = RN.StyleSheet.create({
  objetoContainer: {
<<<<<<< HEAD
    flex: 1,
    backgroundColor: 'green',
    alignItems: 'center',
  },
  nombre: {
    fontSize: 34,
    fontWeight: '700',
  },
  descripcion: {
    fontSize: 20,
    fontWeight: '700',
  },
  imagen:{
    fontSize:100,
    borderWidth:1,
    borderColor: '#ddd',
    borderRadius: 10,
    padding: 10,
    marginVertical: 6,
  },
  inputContainer: {
    width: '90%',
    padding: 13,
    marginVertical: 6,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 6,
  },
  conEliminar:{
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  button:{
    borderRadius: 10,
    color: '#f0f',
    backgroundColor: '#ddd'
=======
    flexGrow: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    paddingVertical: 10,
  },
  nombre: {
    fontSize: 34,
    fontWeight: "700",
  },
  descripcion: {
    fontSize: 20,
    fontWeight: "700",
  },
  imagen: {
    fontSize: 100,
    borderWidth: 1,
    borderColor: "#FF1B00",
    shadowColor: "#FF1B00",
    elevation: 8,
    borderRadius: 10,
    padding: 10,
    marginVertical: 6,
    position: "relative",
  },
  inputContainer: {
    width: "90%",
    padding: 13,
    marginVertical: 6,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 6,
  },
  conEliminar: {
    flexDirection: "row",
    justifyContent: "space-between",
    position: "relative",
    marginTop: 10,
  },
  button: {
    borderRadius: 5,
    color: "#FF1B00",
    backgroundColor: "#A49796",
    fontWeight: "bold",
    width: 70,
    textAlign: "center",
    justifyContent: "center",
    marginTop: 10,
  },
  botoneliminar: {
    color: "#FF1B00",
    position: "absolute",
    top: 0,
    right: 0,
>>>>>>> diego
  },
});
