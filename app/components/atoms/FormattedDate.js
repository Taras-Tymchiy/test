// @flow
import * as React from 'react';
import {
    Platform,
    StyleSheet,
    Text
  } from 'react-native';
import moment from 'moment';
import { Post } from '../../entities/Post';

const DEFAULT_FORMAT = 'DD/MM/YYYY HH:mm';
const DEFAULT_INPUT_FORMAT = 'ddd MMM DD HH:mm:ss Z YYYY';

export interface FormattedDateProps {
  value: moment.MomentInput;
  format?: string;
  inputFormat?: string;
  style?: any
}

export default function FormattedDate({value, format, inputFormat, style}: FormattedDateProps) {
  const formattedDate = moment(value, inputFormat || DEFAULT_INPUT_FORMAT)
                       .local()
                       .format(format || DEFAULT_FORMAT);
  return (
    <Text style={style}>
      {formattedDate}
    </Text>  
  );
};
