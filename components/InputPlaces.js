import React from "react";
import PropTypes from 'prop-types';
import {
    StyleSheet,
    View,
    Text,
    TouchableHighlight,
    ActivityIndicator,
    Keyboard,
    TextInput
} from "react-native";
import _ from 'lodash';
import { theme } from "../core/theme";
import { Icon } from 'react-native-elements'

const mapsAPI = {
    key: 'AIzaSyDMitTOHGO50ihG_2JYdy4eAEC6bmWjLDQ'
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        display: 'flex',
    },
    autocompleteContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        position: 'relative',
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: theme.colors.primary,
        backgroundColor: "rgb(237, 237, 237)",
        borderRadius: 16
    },
    addressInput: {
        paddingLeft: 10,
        flex: 1,
        height: 54,
    },
    searchIcon: {
        color: theme.colors.primary,
    },
    predictionsContainer: {
        zIndex: 2,
        elevation: 20,
        width: '100%',
        position: 'absolute',
        top: 58,
        backgroundColor: theme.colors.primary,
        borderRadius: 16
    },
    suggestions: {
        width: '100%',
        borderWidth: 0
    },
    suggestion: {
        width: '100%',
        padding: 10,
        borderWidth: 0,
        color: 'white'
    },
    loader: {
        position: 'absolute',
        right: 30
    }
});

export default class InputPlaces extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            error: "",
            address: "",
            predictions: [],
            latitude: undefined,
            longitude: undefined,
            isOnLoad: false
        }

        this.onChangeAddressDebounce = _.debounce(this.onChangeAddress, 200);
    }

    componentDidMount() {
        //Get current location and set initial region to this
        navigator.geolocation.getCurrentPosition(
            position => {
                this.setState({
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude
                });
            },
            error => this.setState({ error: error.message }),
            { enableHighAccuracy: true, maximumAge: 2000, timeout: 20000 }
        );
    }

    pressedPrediction(prediction) {
        Keyboard.dismiss();
        this.setState({
            predictions: [],
            address: prediction.description
        });
        Keyboard;
    }

    async onChangeAddress(address) {
        const apiUrl = `https://maps.googleapis.com/maps/api/place/autocomplete/json?key=${mapsAPI.key}&input=${address}&location=${
            this.state.latitude
            },${this.state.longitude}&radius=2000`;
        try {
            const result = await fetch(apiUrl);
            const json = await result.json();
            this.setState({ predictions: json.predictions, isOnLoad: false })
        } catch (err) {
            console.log(err);
        }
    }

    onClearInputText() {
        this.setState({
            predictions: [],
            address: ''
        });
    }

    render() {
        const predictions = this.state.predictions.map(
            prediction => (
                <TouchableHighlight
                    id="test"
                    style={styles.suggestions}
                    key={prediction.id}
                    onPress={() => this.pressedPrediction(prediction)}
                >
                    <Text style={styles.suggestion}>
                        {prediction.description}
                    </Text>
                </TouchableHighlight>
            )
        );
        return (
            <View style={styles.container}>
                <View style={styles.autocompleteContainer}>
                    <ActivityIndicator style={styles.loader} animating={this.state.isOnLoad} size="small" color={theme.colors.primary} />
                    <TextInput
                        placeholder={this.props.placeholder}
                        value={this.state.address}
                        onChangeText={address => {
                            this.setState({ address, isOnLoad: true });
                            this.onChangeAddressDebounce(address);
                        }}
                        style={styles.addressInput}
                    />
                    <Icon style={styles.searchIcon}
                        name="cancel" size={25}
                        color={theme.colors.primary}
                        onPress={() => this.onClearInputText()} />
                </View>
                <View style={styles.predictionsContainer}>
                    {predictions}
                </View>
            </View>
        );
    }
}

InputPlaces.propTypes = {
    onSelectedValue: PropTypes.func
};