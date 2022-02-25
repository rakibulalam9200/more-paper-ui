import React from 'react';

import {Text, View,StyleSheet } from 'react-native';
import { List,ProgressBar, Colors, RadioButton,Searchbar,Button,Snackbar} from 'react-native-paper';
const ListAndRadio = () => {
    const [value, setValue] = React.useState('first');
    const [searchQuery, setSearchQuery] = React.useState('');
    const [visible, setVisible] = React.useState(false);

    const onToggleSnackBar = () => setVisible(!visible);

    const onDismissSnackBar = () => setVisible(false);
    const onChangeSearch = query => setSearchQuery(query);
    return (
        <View>
            <Text style={{textAlign:'center',fontSize:18,fontWeight:'bold',}}>
                This is List and Radio
            </Text>
            <List.AccordionGroup>
                <List.Accordion title="Accordion 1" id="1">
                    <List.Item title="Item 1" />
                </List.Accordion>
                <List.Accordion title="Accordion 2" id="2">
                    <List.Item title="Item 2" />
                </List.Accordion>
                <View>
                    <Text>
                        List.Accordion can be wrapped because implementation uses React.Context.
                    </Text>
                    <List.Accordion title="Accordion 3" id="3">
                        <List.Item title="Item 3" />
                    </List.Accordion>
                </View>
            </List.AccordionGroup>
            <ProgressBar progress={0.5} color={Colors.red800} />

            <RadioButton.Group onValueChange={newValue => setValue(newValue)} value={value}>
                <View>
                    <Text>First</Text>
                    <RadioButton value="first" />
                </View>
                <View>
                    <Text>Second</Text>
                    <RadioButton value="second" />
                </View>
            </RadioButton.Group>

            <Searchbar
                placeholder="Search"
                onChangeText={onChangeSearch}
                value={searchQuery}
            />

            <View>
                <Button onPress={onToggleSnackBar}>{visible ? 'Hide' : 'Show'}</Button>
                <Snackbar
                    visible={visible}
                    onDismiss={onDismissSnackBar}
                    action={{
                        label: 'Undo',
                        onPress: () => {
                            // Do something
                        },
                    }}>
                    Hey there! I'm a Snackbar.
                </Snackbar>
            </View>
        </View>

    );
};

const styles=StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'space-between',
    }
})

export default ListAndRadio;
