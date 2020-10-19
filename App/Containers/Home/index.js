import React, {useState} from 'react';
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
  DatePicker,
  List,
  //  Button
} from '@ant-design/react-native';

const listData = [
  {
    key: 1,
    title: 'Todo 1',
  },
  {
    key: 2,
    title: 'Todo 1',
  },
  {
    key: 3,
    title: 'Todo 1',
  },
  {
    key: 4,
    title: 'Todo 1',
  },
];
function HomeScreen() {
  const [formTotoData, setFormTotoData] = useState({});
  const renderListItem = (data) => {
    if (data.length > 0)
      return data.map((ele) => <List.Item key={ele.key}>{ele.tite}</List.Item>);
    return 'Empty';
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
                      style={{height: 40}}
                      placeholder="Enter title"
                      onChangeText={(text) =>
                        setFormTotoData({...formTotoData, title: text})
                      }
                    />
                  </Flex.Item>
                  <Flex.Item style={{paddingLeft: 4, paddingRight: 4}}>
                    <Text>Deadline</Text>
                    <DatePicker
                      mode="date"
                      defaultDate={new Date()}
                      format="YYYY-MM-DD"
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
            <List renderHeader={'basic'}>{renderListItem(listData)}</List>
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
    borderBottomColor: '#000000',
  },
});

HomeScreen.propTypes = {};

export default HomeScreen;
