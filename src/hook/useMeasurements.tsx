import React, {useState} from 'react';
import {Pin, PinBox} from '../Pages/UserData/styles';

export const useMeasurements = (initalValue: number, finishValue: number) => {
  const [measurements, setMeasurements] = useState<number>(initalValue);
  const [value, setValue] = useState<number[]>();

  const renderMeasurement = () => {
    const num = [];
    for (let i = initalValue; i <= finishValue; i++) {
      num.push(i);
    }

    setValue(num);
  };

  const renderPin = (data: number) => {
    if (data % 5 === 0) {
      return (
        <PinBox key={data} onPress={() => setMeasurements(data)}>
          <Pin
            style={{
              height: measurements === data ? 85 : 45,
              backgroundColor: measurements === data ? '#001eff' : '#999',
            }}
          />
        </PinBox>
      );
    } else {
      return (
        <PinBox key={data} onPress={() => setMeasurements(data)}>
          <Pin
            style={{
              height: measurements === data ? 85 : 25,
              backgroundColor: measurements === data ? '#001eff' : '#999',
            }}
          />
        </PinBox>
      );
    }
  };

  return {renderPin, renderMeasurement, value, setMeasurements, measurements};
};
