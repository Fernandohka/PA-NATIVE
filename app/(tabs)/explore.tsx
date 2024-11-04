import { AdicionarProduto } from '@/components/adicionar';
import { FIRESTORE_DB } from '@/firebaseConfig';
import { addDoc, collection } from 'firebase/firestore';
import { useState } from 'react';
import { StyleSheet, Image, Platform, Alert } from 'react-native';

import { Text } from 'react-native';

export default function TabTwoScreen() {
  return (
    <>
      <AdicionarProduto produto={"Camisetas"}></AdicionarProduto>
      <AdicionarProduto produto={"Blusas"}></AdicionarProduto>
      <AdicionarProduto produto={"Bermudas"}></AdicionarProduto>
      <AdicionarProduto produto={"Calças"}></AdicionarProduto>
      <AdicionarProduto produto={"Jaquetas de couro"}></AdicionarProduto>
    </>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
});