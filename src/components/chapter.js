import React from "react"

import { COLORS } from "../styles/constants"

const Content = (props) => (
  <div style={{ padding: "1rem 1rem", textAlign: "left" }}>

    <content
      style={{
        display: "grid",
        alignItems: "center",
        justifyContent: "left",
        gridTemplateColumns: "repeat(auto-fit, minmax(240px, 340px))",
      }}
    >
      <div>
        {props.soundcloud}
      </div>
      <div style={{ padding:"1rem" }}>
        <h1>
            {props.title}
        </h1>
        <p>
            {props.description}
        </p>
      </div>
    </content>
  </div>
)

export default Content
