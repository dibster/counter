/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import {Container, Content, Header, Title, Button, Icon,Text,View} from 'native-base';

import React, {
  AppRegistry,
  Component
} from 'react-native';




export default class nativebasetest extends Component {
  render() {
    return (
        <Container>
                     <Content>
                         // NativeBase default style
                         <Button >
                             Button One
                         </Button>
     ​
                         // Button with icon displayed on the right
                         <Button style={{width: 140}} >
                             Button Two
                             <Icon size={20} color={'#343'} name={'ios-home'} />
                         </Button>
     ​
                         // Button with icon displayed on the left
                         <Button style={{backgroundColor: '#00c497'}} >
                             <Icon size={20} color={"#384850"} name={'ios-home'} />
                             Home
                         </Button>

                         // Icon button without any text
                         <Button style={{backgroundColor: '#343', width: 40}} >
                             <Icon size={20} color={"#00c497"} name={'ios-home'} />
                         </Button>

                         //Transparent button
                         <Button transparent >
                             <Icon size={20} color={"#00c497"} name={'ios-home'} />
                         </Button>
                     </Content>
                 </Container>
    );
  }
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
// });

AppRegistry.registerComponent('nativebasetest', () => nativebasetest);
