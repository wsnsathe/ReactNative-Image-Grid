import React from 'react';
import { View, FlatList, Image, StyleSheet, Text } from 'react-native';

export default function ImgGrid(props) {
  return (
    <View style={{flex:1}}>
      <FlatList
        data={props.dataSource}
        renderItem={({ item }) => (
          <View style={styles.imageContainerStyle}>
            <Image
              style={styles.imageStyle}
              source={{
                uri: item.image,
              }}
            />
            <Text style={{ fontWeight: 'bold' }}>
              {item.header}
            </Text>
            <Text>
              {item.caption}
            </Text>
          </View>
        )}
        //Setting the number of column
        numColumns={2}
        showsVerticalScrollIndicator={false}
        scrollEnabled={true}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  imageContainerStyle: {
    flex: 1,
    flexDirection: 'column',
    margin: 10,
    backgroundColor: '#dedede',
    // padding:10,
  },
  imageStyle: {
    height: 120,
    width: '100%',
  },
});