import React, { Component } from 'react';
import { View, Text } from 'react-native';

// FUNCTIONAL
import { SimpleCamera } from '@knod/expo-simple-camera';

// PRESENTATIONAL
import { FlexButton } from '@knod/flex-button';


const SomeComponent = function ({ onChoose, resetKey }) {

    const resetExample = function () {
        onChoose( resetKey );
    }

    return (
        <View style={[ styles.choices, {alignItems: 'center'} ]}>

            <Text style={{ flex: 1 }}>This can be whatever component you want.</Text>
            
            <FlexButton onPress={resetExample} extraStyles={ styles.button }>
                Reset this example
            </FlexButton>

        </View>
    );

};  // End <SomeComponent>


class IncludesCameraOption extends Component {
    state = { next: null }

    onCamera = ( evnt ) => { this.onChoose( 'camera' ) };

    onOther = ( evnt ) => { this.onChoose( 'other' ) }

    onChoose = ( choice ) => {
        this.props.onChoose( choice );
    }

    render () {
        return (
            <View style={styles.choices}>
                <FlexButton onPress={this.onCamera} extraStyles={styles.button}>
                    Button for camera (placeholder)
                </FlexButton>
                <FlexButton onPress={this.onOther} extraStyles={styles.button}>
                    Button for Other Screen (placeholder)
                </FlexButton>
            </View>
        );
    }  // End render()
};  // End <IncludesCameraOption>


class PreCamera extends Component {

    state = { stage: 'IncludesCameraOption' }

    onCancelCamera = () => { this.onChoose( 'SomeComponent' ); }

    onChoose = ( choice ) => {
        this.setState({ stage: choice });
    }

    render () {
        var stage = this.state.stage;

        if ( stage === 'IncludesCameraOption' ) {
            return (
                <View style={styles.manager}>
                    <IncludesCameraOption onChoose={this.onChoose} />
                </View>
            );
        } else if ( stage === 'camera' ) {
            return (<SimpleCamera onCancel={this.onCancelCamera} onStop={this.onCancel} />);
        } else if ( stage === 'SomeComponent' || stage === 'other' ) {
            return <SomeComponent onChoose={this.onChoose} resetKey={'IncludesCameraOption'} />;
        } else {
            return null;
        }
    }
};  // End <PreCamera>


var styles = {
    manager: {
        flex: 1,
        alignContent: 'center',
        justifyContent: 'center',
    },
    choices: {
        flex: 1,
        alignContent: 'center',
        justifyContent: 'center',
        // Margin around outer edges
        padding: 20,
    },
    // Make the buttons not take up the whole screen
    // Big enough for landscape, not too big for portrait
    button: { margin: 5, flex: 0.2 }
};  // end styles


export {
    PreCamera,
    IncludesCameraOption,
    SomeComponent,
}
