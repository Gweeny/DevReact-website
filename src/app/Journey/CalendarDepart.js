import React, { Component } from "react";
import Calendar from "react-calendar";
import Styles from "./style.module.css";

export let dateCheckin = "";
export let dateCheckout = "";

class CalendarDepartComponent extends Component {
  state = {
    date: undefined,
  };

  onChange = (date) => this.setState({ date });

  render() {
    const dateUpdate = this.state.date;
    const date = dateUpdate ? dateUpdate.toLocaleDateString() : "Select a date";

    console.log(date);
    dateCheckin = date;
    return (
      <div
        className={Styles.calendarInside}
        style={{ width: 350, marginLeft: 220 }}
      >
        <Calendar
          onChange={this.onChange}
          value={this.state.date}
          showNeighboringMonth={false}
          showNavigation={true}
          showActiveStartDate={false}
          tileNow={false}
          className={Styles.calendar}
        />
      </div>
    );
  }
}

export default CalendarDepartComponent;
