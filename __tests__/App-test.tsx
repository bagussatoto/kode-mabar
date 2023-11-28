/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../src/App';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import babelConfig from '../babel.config';
import { AppRegistry } from 'react-native';

it('renders correctly', () => {
    renderer.create(<App />);
    babelConfig(AppRegistry)
});


config {
    console.testing{'react-vision'}
    import AppRegistry from " "
    
}
