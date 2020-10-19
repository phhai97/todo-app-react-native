import React, {useState, useReducer} from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  ScrollView,
  Button,
  TextInput,
  StyleSheet,
} from 'react-native';
import {
  Provider,
  Card,
  Flex,
  WingBlank,
  //  DatePicker,
  List,
  //  Button
} from '@ant-design/react-native';

const initialState = {data: []};

function reducer(state, action) {
  switch (action.type) {
    case 'ADD': {
      let newArrData = [...state.data];
      newArrData.push(action.payload);
      return {data: newArrData};
    }
    case 'UPDATE': {
      let newArrData = [...state.data];
      let indexItem = newArrData.findIndex(
        (ele) => ele.key === action.payload.key,
      );
      newArrData[indexItem] = {
        ...newArrData[indexItem],
        ...action.payload.data,
      };
      return {data: newArrData};
    }
    case 'REMOVE':
      {
        let newArrData = [...state.data];
        let indexItem = newArrData.findIndex(
          (ele) => ele.key === action.payload.key,
        );
        newArrData.splice(indexItem, 1);
      }
      return {data: newArrData};
    default:
      throw new Error();
  }
}
function HomeScreen() {
  const [formTotoData, setFormTotoData] = useState({});
  const [state, dispatch] = useReducer(reducer, initialState);

  const renderListItem = (data) => {
    if (data.length > 0)
      return data.map((ele) => (
        <List.Item key={ele.key}>
          {ele.tite}
          <Flex>
            <Flex.Item style={styles.paddingElement}>
              <Button title="Edit" />
            </Flex.Item>
            <Flex.Item style={styles.paddingElement}>
              <Button title="Remove" />
            </Flex.Item>
          </Flex>
        </List.Item>
      ));
    return (
      <View style={{padding: 20}}>
        <Text style={{textAlign: 'center'}}>Emty Data</Text>
      </View>
    );
  };

  return (
    <Provider>
      <ScrollView style={styles.container}>
        <Text style={styles.title}>- Todo App -</Text>
        <Card>
          <Card.Header title="General" />
          <Card.Body>
            <View>
              <WingBlank style={{marginBottom: 5}}>
                <Flex>
                  <Flex.Item style={{paddingLeft: 4, paddingRight: 4}}>
                    <Text>Title</Text>
                    <TextInput
                      key={1}
                      style={styles.inputStyle}
                      placeholder="Enter title"
                      onChangeText={(text) =>
                        setFormTotoData({...formTotoData, title: text})
                      }
                    />
                  </Flex.Item>
                </Flex>
              </WingBlank>
            </View>
          </Card.Body>
          <Card.Footer
            content={
              <Flex>
                <Flex.Item style={styles.paddingElement}>
                  <Button title="Add new" />
                </Flex.Item>
                <Flex.Item style={styles.paddingElement}>
                  <Button title="Save" />
                </Flex.Item>
                <Flex.Item style={styles.paddingElement}>
                  <Button title="Clear" />
                </Flex.Item>
              </Flex>
            }
          />
        </Card>
        <Card style={{marginTop: 15}}>
          <Card.Header title="List to do" />
          <Card.Body>
            <List>{renderListItem(state)}</List>
          </Card.Body>
        </Card>
      </ScrollView>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 15,
  },
  title: {
    fontSize: 30,
    textAlign: 'center',
  },
  paddingElement: {
    paddingLeft: 4,
    paddingRight: 4,
  },
  inputStyle: {
    color: '#555555',
    paddingRight: 10,
    paddingLeft: 10,
    paddingTop: 5,
    height: 40,
    width:'100%',
    borderColor: '#6E5BAA',
    borderWidth: 1,
    borderRadius: 5,
    alignSelf: 'center',
    backgroundColor: '#ffffff',
  },
});

HomeScreen.propTypes = {};

export default HomeScreen;
