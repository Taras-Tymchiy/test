// @flow
import { Text } from 'react-native';
import StyledHOC from '../HOCs/StyledHOC';
import { textMuted, textRegular, textPrimary, textSecondary, textHeader } from '../styles/mixins';

export const TextRegular = StyledHOC(Text, textRegular);
export const TextMuted = StyledHOC(Text, textMuted);
export const TextPrimary = StyledHOC(Text, textPrimary);
export const TextSecondary = StyledHOC(Text, textSecondary);
export const TextHeader = StyledHOC(Text, textHeader);
