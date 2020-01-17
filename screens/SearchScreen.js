import React, { memo } from "react";
import { ScrollView, StyleSheet, View, TouchableOpacity, Text, Button } from 'react-native';
import Background from "../components/Background";
import InputPlaces from "../components/InputPlaces";
import Ride from "../components/Ride";
import { Paragraph, FAB, Card } from "react-native-paper";
import { theme } from "../core/theme";
import DateTimePicker from '@react-native-community/datetimepicker';

const styles = StyleSheet.create({
  cardContainer: {
    width: '100%',
  },
  cardTitle: {
    width: '100%',
  },
  cardContent: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  scrollView: {
    width: '100%',
  },
  ride: {
    margin: 10
  },
  places: {
    width: '100%',
    margin: 10
  },
  parameters: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    margin: 10,
    padding: 20,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: 'rgb(218, 225, 231)',
    // position: 'relative'
  },
  dateTime: {
    flex: 1,
    display: 'flex',
    flexDirection: "row",
    justifyContent: 'space-between',
    fontSize: 20,
    // position: 'relative'
  },
  passengers: {
    flex: 1,
    marginLeft: 'auto'
  },

  searchButton: {
    // position: 'relative',
    elevation: 1,
    width: 100
  },
});

export default class SearchScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      date: new Date(),
      showDatePicker: false,
      showTimePicker: false,
      passengers: 1,
      showResult: false,
      latitude: undefined,
      longitude: undefined
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

  setDate(date) {
    if (date) {
      this.setState({
        showDatePicker: false,
        showTimePicker: false,
        date
      });
    } else {
      this.setState({
        showDatePicker: false,
        showTimePicker: false
      });
    }
  }

  valueChanged(value) {
    // Truncate value to 2 decimal places and cast as Number.
    const nextValue = Number(value.toFixed(2));
    this.setState({ passengers: nextValue });
  }

  handleSearchChange(value) {
  }

  search() {
    this.setState({ showResult: true });
  }

  showDatePicker = () => {
    this.setState({ showDatePicker: true })
  }

  showTimePicker = () => {
    this.setState({ showTimePicker: true })
  }

  render() {
    return (
      <Background>
        <Card style={styles.cardContainer}>
          <Card.Title style={styles.cardTitle} title=" Where do you want to go ?" />
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
                  <Text>{this.formatDate(this.state.date)}
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => this.showTimePicker()}>
                  <Text>{this.formatTime(this.state.date)}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
            {this.state.showDatePicker
              &&
              <DateTimePicker value={this.state.date}
                is24Hour={true}
                display="default"
                onChange={(event, date) => this.setDate(date)}>
              </DateTimePicker>
            }
            {this.state.showTimePicker
              &&
              <DateTimePicker value={this.state.date}
                mode="time"
                is24Hour={true}
                display="clock"
                onChange={(event, date) => this.setDate(date)}>
              </DateTimePicker>
            }
            <FAB
              style={styles.searchButton}
              icon="magnify"
              label="Search"
              theme={theme}
              onPress={() => this.search()}
            />
          </Card.Content>
        </Card>
        {
          this.state.showResult
          &&
          <ScrollView style={styles.scrollView}>
            <Ride style={styles.ride} when="Monday" distance="33" from="Auckland" where="Tekapo" time="11:00"></Ride>
            <Ride style={styles.ride} when="Tuesday" distance="47" from="Christchurch" where="Akaroa" time="10:00"></Ride>
            <Ride style={styles.ride} when="Friday" distance="39" from="Christchurch" where="Keenston" time="7:30"></Ride>
            <Ride style={styles.ride} when="Friday" distance="39" from="Christchurch" where="Keenston" time="7:30"></Ride>
            <Ride style={styles.ride} when="Friday" distance="39" from="Christchurch" where="Keenston" time="7:30"></Ride>
            <Ride style={styles.ride} when="Friday" distance="39" from="Christchurch" where="Keenston" time="7:30"></Ride>
            <Ride style={styles.ride} when="Friday" distance="39" from="Christchurch" where="Keenston" time="7:30"></Ride>
          </ScrollView>
        }
      </Background>
    );
  }
}
