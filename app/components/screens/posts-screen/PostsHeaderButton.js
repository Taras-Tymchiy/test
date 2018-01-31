// @flow
import * as React from 'react';
import SimpleButton from '../../atoms/SimpleButton';
import StyledHOC from '../../HOCs/StyledHOC';
import { SPACING_M } from '../../styles/constants';

export default function PostsHeaderButton({navigation}: any) {
    return (
        <SimpleButton 
            style={{ marginRight: SPACING_M }}
            onPress={()=> {navigation.navigate('Settings')}} 
            title="Settings"
        />
    );
}