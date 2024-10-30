import { Image, Platform } from "react-native";

import React, { useEffect, useState } from "react";
import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View, FlatList } from "react-native";
import { FIRESTORE_DB } from "@/firebaseConfig";
import { collection, addDoc, deleteDoc, doc, onSnapshot, updateDoc } from "firebase/firestore";
import { Card } from "@/components/card";



export default function Camisetas() {

  return (
    <>
      <Card nome={'camiseta'} descricao={'É uma camiseta'} estoque={5} tamanho={52} valor={5999.99}></Card>
    </>
  );
}

const styles = StyleSheet.create({
  
});
