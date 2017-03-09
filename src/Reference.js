import React, { Component, PropTypes } from 'react';
import {Tree, FormControl} from 'tinper-bee';

const propTypes = {

};

const defaultProps = {

};

class Reference extends Component {
    constructor(props, context){
        super(props);
    }
    render () {
        return (
            <div>参照</div>
        )
    }
}

Reference.propTypes = propTypes;
Reference.defaultProps = defaultProps;

export default Reference;
