import React, { useState, useEffect } from 'react';
import { Text, View, Button } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';

const Scanner = () => {
  const [hasPermission, setHasPermission] = useState<boolean | null>(null);
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    const getBarCodeScannerPermissions = async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    };

    getBarCodeScannerPermissions();
  }, []);

  const handleBarCodeScanned = async ({ type, data }: { type: string; data: string }) => {
    setScanned(true);
    alert(`Bar code with type ${type} and data ${data} has been scanned!`);
    
    // Passando o type escaneado para a função saveData
    await saveData({ type: parseInt(type), data });
  };

  const saveData = async (info: { type: number; data: string }) => {
    const API = "http://172.20.10.2:8000/api/qrcode";
    try {
      const response = await fetch(API, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(info),
      });
      if (!response.ok) {
        throw new Error('Failed to save data');
      }
      alert('Data saved successfully!');
    } catch (error: any) {
      alert(error.message);
    }
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={{ flex: 1 }}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={{ flex: 1 }}
      />
      {scanned && <Button title={'Tap to Scan Again'} onPress={() => setScanned(false)} />}
    </View>
  );
};

export default Scanner;
