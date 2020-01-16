import React, { Component } from 'react';
import { Avatar, Button, Card, Title, Paragraph, Label } from "react-native-paper";
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { theme } from "../core/theme";


const styles = StyleSheet.create({
    container: {
        // width: '100%',
        elevation: 4,
        margin: 10
    },
    title: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        padding: 8,
        justifyContent: 'space-between'
    },
    titleElement: {
        display: 'flex',
        flexDirection: 'row'
    },
    name: {
        color: theme.colors.primary
    },
    label: {
        color: 'grey',
        textTransform: 'capitalize'
    },
    itenerary: {
        marginTop: 10,
        marginBottom: 10,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
    informations: {
        marginLeft: 20,
    },
    direction: {
        display: 'flex',
        flexDirection: 'row',
        margin: 2
    },
    icon: {
        color: theme.colors.primary
    },
    actions: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 4
    },
    go: {
        marginLeft: 'auto'
    }
});


export default class Ride extends Component {

    constructor(props) {
        super(props)
        this.when = this.props.when ? this.props.when : '';
        this.distance = this.props.distance ? this.props.distance : '';
        this.from = this.props.from ? this.props.from : '';
        this.where = this.props.where ? this.props.where : '';
        this.time = this.props.time ? this.props.time : '';
    }

    render() {
        return (
            <Card style={styles.container}>
                <View style={styles.title}>
                    <Text style={[styles.titleElement, theme.highlightedText]}>{this.when}</Text>
                    <View style={styles.titleElement}>
                        <Text style={styles.label}>Dist : </Text>
                        <Text style={[styles.titleElement, theme.highlightedText]}> {this.distance} km</Text>
                    </View>
                    <Text style={[styles.titleElement, styles.name]}>Ride</Text>
                </View>
                <Card.Content style={styles.itenerary}>
                    <Avatar.Image size={64} source={require('../assets/images/itenerary.png')} />
                    <View style={styles.informations}>
                        <View style={styles.direction}>
                            <Text style={styles.label}>From : </Text>
                            <Text style={[styles.titleElement, theme.highlightedText]}> {this.from}</Text>
                        </View>
                        <View style={styles.direction}>
                            <Text style={styles.label}>Where : </Text>
                            <Text style={[styles.titleElement, theme.highlightedText]}> {this.where}</Text>
                        </View>
                    </View>
                </Card.Content>
                <View style={styles.actions}>
                    <Button theme={theme} icon="clock-outline">
                    </Button>
                    <Text>
                        {this.time}
                    </Text>
                    <TouchableOpacity style={styles.go}>
                        <Button theme={theme} style={theme.button} icon="arrow-right" >
                        </Button>
                    </TouchableOpacity>
                </View>
            </Card>
        );
    }
}

