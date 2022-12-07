import {View} from 'native-base';
import React, {useMemo} from 'react';
import {StyleSheet, Text} from 'react-native';
import {SIZE} from 'src/utils';

const WaterMark = ({
  bg = 'rgba(0, 0, 0, 0,)',
  text = 'WaterMark',
  width = 160,
  height = 100,
  rotateZ = -45,
  textColor = 'rgba(0,0,0,0.2)',
  fontSize = 20,
  textStyle = {},
  children,
}) => {
  const renderMark = useMemo(() => {
    const items = [];
    const textIsArray =
      typeof text === 'object' && Array.isArray(text) ? true : false;
    for (
      let i = 0;
      i < parseInt(SIZE.width / width) * parseInt(SIZE.height / height);
      i++
    ) {
      const item = (
        <View
          key={`watermarkItem${i}`}
          style={[
            styles.watermarkItem,
            {
              width: width,
              height: height,
              transform: [{rotate: `${rotateZ}deg`}],
            },
          ]}>
          <Text
            style={[
              styles.watermarkText,
              {color: textColor, fontSize: fontSize},
              {...textStyle},
            ]}>
            {textIsArray ? text[i % text.length] : text}
          </Text>
        </View>
      );
      items.push(item);
    }
    return items;
  }, [width, height, rotateZ, text, textColor, fontSize, textStyle]);

  return (
    <View style={[styles.container, {backgroundColor: bg, overflow: 'hidden'}]}>
      <View style={styles.watermarkContainer}>{renderMark}</View>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  watermarkContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
    alignContent: 'center',
  },
  watermarkItem: {
    backgroundColor: 'rgba(0,0,0,0)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  watermarkText: {
    letterSpacing: 2,
    textAlign: 'center',
    lineHeight: 30,
  },
});

export default WaterMark;
