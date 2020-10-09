import React from 'react';
import { View, FlatList, Image, StyleSheet, Text, Dimensions } from 'react-native';
import { Grid, Row, Col } from 'react-native-easy-grid';

export default function ImgGrid(props) {
  return (
    <View>
      <FlatList
        data={props.dataSource}
        renderItem={({ item }) => (
          <View style={{ width: Dimensions.get('screen').width, height: 150 }}>
            <Grid>
              <Col size={1} style={{margin:10}}>
                <Image
                  style={styles.imageStyle}
                  source={{
                    uri: item.image,
                  }}
                />
              </Col>
              <Col size={1} style={{margin:10}}>
                <Text style={{ fontWeight: 'bold' }}>
                  {item.header}
                </Text>
              </Col>
            </Grid>
          </View>
        )}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        scrollEnabled={true}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  imageContainerStyle: {
    flex: 1,
    backgroundColor: '#dedede',
  },
  imageStyle: {
    flex: 1
  },
});