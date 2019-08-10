import React from "react"

import { COLORS } from "../styles/constants"

const Content = () => (
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
        <iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/485754510&color=%23861111&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>
      </div>
      <div style={{ padding:"1rem" }}>
        <h1>Chapter 1</h1>
        <p>This is where we will put the descriptions for the chapters. I assume that Chapter 1 will be something sad and uncomfortable. Also Chapter 2.</p>
      </div>
    </content>
  </div>
)

export default Content
