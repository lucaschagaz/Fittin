import {View, Text, Dimensions} from 'react-native';
import React from 'react';

import Calender from 'react-native-calendar-strip';

export const StipCalendar = () => {
  const dias = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'];

  const {width} = Dimensions.get('screen');

  return (
    <>
      <View
        style={{
          width: width,
          height: 20,
          flexDirection: 'row',
        }}>
        {dias.map(dia => (
          <View
            style={{
              width: width / 7,
              height: '100%',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text style={{fontSize: 18, fontWeight: 'bold'}}>{dia}</Text>
          </View>
        ))}
      </View>
      <Calender
        style={{width: width, height: 40}}
        dateNameStyle={{fontSize: 17}}
        showDayName={false}
        showMonth={false}
        rightSelector={[]}
        leftSelector={[]}
      />
    </>
  );
};
