import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import styles from './button.style';


const Button = (props) =>{
 return(
  
  <TouchableOpacity
    style={props.disabled ?  styles.textButtonDisabled:styles.onPress }
    onPress={() => props.onPress()}
    disabled={props.disabled}
    >
    <Text style={styles.textButton}>{props.label}</Text>
  </TouchableOpacity>
);};
export default Button;
