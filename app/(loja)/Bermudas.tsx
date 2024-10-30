import { Image, Platform } from "react-native";

import React, { useEffect, useState } from "react";
import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View, FlatList } from "react-native";
import { FIRESTORE_DB } from "@/firebaseConfig";
import { collection, addDoc, deleteDoc, doc, onSnapshot, updateDoc } from "firebase/firestore";



export default function Bermudas() {

  return (
    <>
      <Text>Bermudas</Text>
    </>
  );
}

const styles = StyleSheet.create({
  
});