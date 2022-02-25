import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet,View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { BottomNavigation,Text,} from 'react-native-paper';
import DataTableShow from "./src/screens/DataTableShow";
import DialogText from "./src/screens/DialogText";
import ListAndRadio from "./src/screens/ListAndRadio";

export default function App() {

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'data', title: 'Data Table', icon: 'table-large' },
    { key: 'dialog', title: 'Dialogue', icon: 'blur-radial' },
    { key: 'radio', title: 'ListAndRadio', icon: 'format-list-bulleted' },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    data: DataTableShow,
    dialog: DialogText,
    radio: ListAndRadio,
  });


  return (
      <NavigationContainer>
        <BottomNavigation style={styles.andriodStyle}
            navigationState={{ index, routes }}
            onIndexChange={setIndex}
            renderScene={renderScene}
        />
      </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  andriodStyle:{
    flex: 1,
    backgroundColor: 'lightblue',
    paddingTop: Platform.OS === 'android' ? 40 : 0
  }
});
