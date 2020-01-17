import React from "react";
import { StyleSheet, View, TouchableOpacity, Text, ActivityIndicator, TextInput } from 'react-native';
import Background from "../components/Background";
import InputPlaces from "../components/InputPlaces";
import { Card, Avatar, FAB } from "react-native-paper";
import { theme } from "../core/theme";


export default class CreateRideScreen extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            date: new Date(),
            showDatePicker: false,
            showTimePicker: false,
            seats: undefined
        }
    }

    formatDate(date) {
        const monthNames = [
            "Jan", "Feb", "Mar",
            "Apr", "May", "Jun", "Jul",
            "Aug", "Sept", "Oct",
            "Nov", "Dec"
        ];

        const day = date.getDate();
        const monthIndex = date.getMonth();
        return day + ', ' + monthNames[monthIndex] + ' ';
    }

    formatTime(date) {
        let hours = date.getHours();
        let minutes = date.getMinutes();
        const ampm = hours >= 12 ? 'pm' : 'am';
        hours = hours % 12;
        hours = hours ? hours : 12; // the hour '0' should be '12'
        minutes = minutes < 10 ? '0' + minutes : minutes;
        const strTime = hours + ':' + minutes + ' ' + ampm;

        return strTime;
    }

    onChanged(text) {
        let newText = '';
        let numbers = '0123456789';

        for (var i = 0; i < text.length; i++) {
            if (numbers.indexOf(text[i]) > -1) {
                newText = newText + text[i];
            }
            else {
                // your call back function
                alert("please enter numbers only");
            }
        }
        if (newText <= 8) {
            this.setState({ seats: newText });
        } else {
            alert("Maximum 8 seats");
        }
    }



    render() {
        return (
            <Background>
                <Card style={styles.cardContainer}>
                    <Card.Title style={styles.cardTitle} title="Where are you going ?" />
                    <Card.Content style={styles.cardContent}>
                        <View style={styles.places}>
                            <InputPlaces placeholder="From" onSelectedValue={this.handleSearchChange} ></InputPlaces>
                        </View>
                        <View style={styles.places}>
                            <InputPlaces placeholder="To" style={styles.places} onSelectedValue={this.handleSearchChange} ></InputPlaces>
                        </View>
                        <View style={styles.parameters}>
                            <View style={styles.dateTime}>
                                <TouchableOpacity
                                    onPress={() => this.showDatePicker()}>
                                    <Card style={styles.cardParameters}>
                                        <View style={styles.cardDateContent}>
                                            <Avatar.Icon size={24} icon="calendar-today" theme={theme} />
                                            <Text>{this.formatDate(this.state.date)}
                                            </Text>
                                        </View>
                                    </Card>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    onPress={() => this.showTimePicker()}>
                                    <Card style={styles.cardParameters}>
                                        <View style={styles.cardDateContent}>
                                            <Avatar.Icon size={24} icon="clock-outline" theme={theme} />
                                            <Text>{this.formatTime(this.state.date)}
                                            </Text>
                                        </View>
                                    </Card>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <Card style={styles.cardParameters, styles.cardSeats}>
                            <TextInput
                                onChangeText={(text) => this.onChanged(text)}
                                placeholder="Number of seats"
                                underlineColorAndroid='transparent'
                                style={styles.TextInputStyle}
                                keyboardType='numeric'
                            />
                        </Card>
                        <FAB
                            style={styles.searchButton}
                            icon="content-save"
                            label="Save"
                            theme={theme}
                            onPress={() => this.saveRide()}
                        />
                    </Card.Content>
                </Card>
            </Background>
        );
    }
}

const styles = StyleSheet.create({
    cardContainer: {
        width: '100%'
    },
    cardTitle: {
        width: '100%',
    },
    cardContent: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    places: {
        width: '100%',
        margin: 10
    },
    cardParameters: {
        margin: 0,
        padding: 0,
        height: 40,
        width: 100,
        borderRadius: 16,
        display: 'flex',
        flexDirection: 'column'
    },
    cardDateContent: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        margin: 10
    },
    parameters: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        margin: 10
    },
    dateTime: {
        flex: 1,
        display: 'flex',
        flexDirection: "row",
        justifyContent: 'space-between',
        fontSize: 20
    },
    cardSeats: {
        margin: 10,
        padding: 10,
        display: 'flex',
        flexDirection: 'row',
        borderRadius: 16
    }
});