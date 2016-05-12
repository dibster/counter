/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import {Container, Header, Content, Footer, Title, Text, Button,Icon} from 'native-base';

import React, {
  AppRegistry,
  Component
} from 'react-native';

class abc extends Component {
  render() {
    return (
      <Container>
          <Header>
              <Title>Counter</Title>
          </Header>

          <Content>

          <Text>Hello dave
          </Text>

          <Button style={{width: 140}}>
          <Icon size={20} color={'#343'} name={'ios-home'} />
          Start
          </Button>
  </Content>

          <Footer>
              <Title>Join</Title>
          </Footer>
      </Container>
    );
  }
}


AppRegistry.registerComponent('abc', () => abc);
