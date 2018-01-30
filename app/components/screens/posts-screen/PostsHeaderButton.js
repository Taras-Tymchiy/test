// @flow
import * as React from 'react';
import SimpleButton from '../../atoms/SimpleButton';
import StyledHOC from '../../HOCs/StyledHOC';
import { SPACING_M } from '../../styles/constants';

export default StyledHOC(SimpleButton, { marginRight: SPACING_M })
