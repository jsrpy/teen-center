import React from 'react';

// show today's students
const attendanceList = (props) => {

  // function to convert date to readable time format
  const convertTime = (stringTime, ID) => {
    // convert time to readable format
    if (stringTime !== undefined) {
      const time = new Date(stringTime);
      let hours = time.getHours();
      // convert hours to 12 hr format
      const suffix = hours >= 12 ? "p" : "a"; 
      hours = ((hours + 11) % 12 + 1);
      // pad minutes with a zero if it's single digit
      const minutes = ("0" + time.getMinutes()).slice(-2);
      return `${hours}:${minutes}${suffix}`
    // time is undefined, so they haven't logged out yet, so show log out link
    } else {
      return <a onClick={() => props.signOut(ID)}>sign out</a> /* eslint-disable-line */
    }
  }

  // format date for top of attendance list
  const readableDay = () => {
    const today = new Date();
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    const formattedDate = {
      day: days[today.getDay()],
      month: months[today.getMonth()],
      date: today.getDate()
    }
    return `${formattedDate.day}, ${formattedDate.month} ${formattedDate.date}`
  }

  // display today's students if there are any
  let currentStudents = [];
  if (props.currentStudents && Object.keys(props.currentStudents).length > 0) {
    for (let studentInfo in props.currentStudents) {
      const student = props.currentStudents[studentInfo];
      currentStudents.push(
        [<tr key={student.id}>
          <td>{student.name}</td>
          <td>{convertTime(student.timeIn)}</td>
          <td>{convertTime(student.timeOut, student.id)}</td>
        </tr>]
      )
    }
  // no students signed in
  } else {
    currentStudents = (
      <tr>
        <td colSpan="3" className="info">No students yet</td>
      </tr>
    )
  }

  return (
    <table>
      <thead>
        <tr>
          <th colSpan="3">
            <span className="heading">{readableDay()}</span>
            <span className="description block">(<a onClick={props.refreshStudentList}>refresh</a> if you don't see your name)</span>{/* eslint-disable-line */}
          </th>
        </tr>
        <tr>
          <th>Name <span className="description">(sorted a-z)</span></th>
          <th>Time In</th>
          <th>Time Out</th>
        </tr>
      </thead>
      <tbody>
        {currentStudents}
      </tbody>
    </table>
  )
};

export default attendanceList;