import React from "react";

export default function Alert(props) {
  return (
    <div style={{ height: "50px" }}>
      <div class="alert alert-success" role="alert" style={{ height: "50px" }}>
        <strong>{props.alert}</strong>
      </div>
    </div>
  );
}
