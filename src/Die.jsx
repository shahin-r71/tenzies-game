// import React from "react";
import PropTypes from "prop-types";
export default function Die(props) {
  const styles = {
    backgroundColor: props.isHeld ? "#7DA8CC" : "white",
  };
  let points = [];
  for (let i = 0; i < props.value; i++) {
    points.push(
      <span
        key={i}
        className={`circle ${props.value == 1 ? "one" : ""}`}
      ></span>
    );
  }
  // console.log(points);
  return (
    <div className="die-face" style={styles} onClick={props.holdDice}>
      {points}
    </div>
  );
}
Die.propTypes = {
  value: PropTypes.number,
  isHeld: PropTypes.bool,
  holdDice: PropTypes.func
};
