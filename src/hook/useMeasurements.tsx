import React, {useState} from 'react';
import {Pin, PinBox} from '../Pages/UserData/styles';

export default function useMeasurements(
  initalValue: number,
  finishValue: number,
) {
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
              height: measurements == data ? 80 : 40,
              backgroundColor: '#001eff',
            }}
          />
        </PinBox>
      );
    } else {
      return (
        <PinBox key={data} onPress={() => setMeasurements(data)}>
          <Pin
            style={{
              height: measurements == data ? 80 : 25,
              backgroundColor: '#001eff',
            }}
          />
        </PinBox>
      );
    }
  };

  return {renderPin, renderMeasurement, value, setMeasurements, measurements};
}
