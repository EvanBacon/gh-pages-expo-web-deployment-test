import * as React from 'react';
import { AppRegistry, View } from 'react-native';

const RootComponent = props => <View exp={{}} {...props} />;
AppRegistry.registerComponent('main', () => RootComponent);

const rootTag =
  document.getElementById('root') || document.getElementById('main');
AppRegistry.runApplication('main', { rootTag });
