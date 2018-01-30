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

interface DateTimeTextProps {
  value: moment.MomentInput;
  format?: string;
  style?: any
}

export default function FormattedDate({value, format, style}: DateTimeTextProps) {
  const formattedDate = moment(value).format(format || DEFAULT_FORMAT);
  return (
    <Text style={style}>
      {formattedDate}
    </Text>  
  );
};
