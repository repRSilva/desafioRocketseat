import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { Container, Text } from './styles';

function Input({ style, ...rest }, ref) {
    return (
        <Container style={style}>
            <Text {...rest} ref={ref} />
        </Container>
    );
}

Input.propTypes = {
    icon: PropTypes.string,
    style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

Input.defaultProps = {
    icon: null,
    style: {},
};

export default forwardRef(Input);