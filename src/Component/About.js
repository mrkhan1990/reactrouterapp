import React, { Component } from "react";

class About extends Component {
  constructor() {
    super();
    this.state = {
      missingNum: 0,
      duplicateChar: [],
    };
  }
  componentDidMount() {
    //get the missing value in series
    let arr = [3, 4, 5, 6, 7,  9, 10];
    const missNumber = this.missing(arr);
    //get the duplicate char [A,B]
    let charArrey = ["A", "B", "C", "A", "D", "B"];
    const duplicateChar = this.duplicateCharFn(charArrey);

    this.setState({
      missingNum: missNumber,
      duplicateChar: duplicateChar,
    });
  }

  duplicateCharFn = (arr) => {
    let duplicate = [];
    arr.forEach((val, i) => {
      if (arr.indexOf(val) !== arr.lastIndexOf(val)) {
        console.log("duplicate in", duplicate.indexOf(val));
        if (!duplicate.includes(val)) {
          duplicate.push(val);
        }
      }
    });
    console.log("duplicate", duplicate);
    return duplicate;
  };
  missing = (arr) => {
    //count index 0 to index last
    // let sum = Math.floor((arr.length+1)*(arr.length+2)/2)
    let sum = this.addAllNumber(arr);
    console.log("sum", sum);
    arr.forEach((element) => {
      sum = sum - element;
    });
    console.log(sum);
    return sum;
  };

  addAllNumber(arr) {
    console.log(arr[arr.length - 1]);
    let sum = 0;
    for (let i = arr[0]; i <= arr[arr.length - 1]; i++) {
      console.log("len", sum);
      sum = sum + i;
    }
    return sum;
  }
  render() {
    return (
      <div>
        <div>About Page </div>;
        <div>Missing Number: {this.state.missingNum}</div>
        <div>
          duplicateChar:
          {this.state.duplicateChar.map((val, i) => {
            return <b key={i}>{val}, </b>;
          })}
        </div>
      </div>
    );
  }
}

export default About;
