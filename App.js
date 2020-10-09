import * as React from 'react';
import { Text, SafeAreaView, StyleSheet, ImageBackground, StatusBar, View } from 'react-native';
import Constants from 'expo-constants';
import { Col, Row, Grid } from "react-native-easy-grid";
import ImgGrid from './ImgGrid';
import ImgGridHorizontal from './ImgGridHorizontal';
import Data from './data';


// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <Grid>
        <Row size={1}>
          <ImgGridHorizontal dataSource={Data} />
        </Row>
        <Row size={3}>
          <ImgGrid dataSource={Data} />
        </Row>
      </Grid>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
