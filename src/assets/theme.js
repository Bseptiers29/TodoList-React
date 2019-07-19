const theme = {
  global: {
    colors: {
      brand: "#212121",
      border: {
        dark: "#ebebeb",
        light: "#444444"
      },
      background: "#607d8b",
      placeholder: "rgba(235, 235, 235, 0.5)",
      control: {
        dark: "#DEDEDE",
        light: "#212121"
      },
      "accent-1": "#e67373",
      "accent-2": "#804040",
      "accent-3": "#e6cfcf",
      "accent-4": "#bf3030",
      "neutral-1": "#5cb85c",
      "neutral-2": "#408040",
      "neutral-3": "#cfe6cf",
      "neutral-4": "#30bf30",
      "neutral-5": "#undefined"
    },
    elevation: {
      none: "none",
      xsmall: "0px 1px 2px rgba(235, 235, 235, 0.5)",
      small: "0px 2px 4px rgba(235, 235, 235, 0.5)",
      medium: "0px 3px 8px rgba(235, 235, 235, 0.5)",
      large: "0px 6px 12px rgba(235, 235, 235, 0.5)",
      xlarge: "0px 8px 16px rgba(235, 235, 235, 0.5)"
    },
    drop: {
      background: "rgb(101, 131, 146)",
      shadow: "0px 3px 8px rgba(235, 235, 235, 0.5)",
      border: {
        radius: "2px"
      }
    },
    input: {
      border: {
        radius: "4px"
      }
    },
    font: {
      family: "'Oswald', sans-serif",
      face:
        "/* cyrillic-ext */\n@font-face {\n  font-family: 'Oswald';\n  font-style: normal;\n  font-weight: 400;\n  src: url(https://fonts.gstatic.com/s/oswald/v23/TK3_WkUHHAIjg75cFRf3bXL8LICs1_FvsUtiZTaR.woff2) format('woff2');\n  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;\n}\n/* cyrillic */\n@font-face {\n  font-family: 'Oswald';\n  font-style: normal;\n  font-weight: 400;\n  src: url(https://fonts.gstatic.com/s/oswald/v23/TK3_WkUHHAIjg75cFRf3bXL8LICs1_FvsUJiZTaR.woff2) format('woff2');\n  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;\n}\n/* vietnamese */\n@font-face {\n  font-family: 'Oswald';\n  font-style: normal;\n  font-weight: 400;\n  src: url(https://fonts.gstatic.com/s/oswald/v23/TK3_WkUHHAIjg75cFRf3bXL8LICs1_FvsUliZTaR.woff2) format('woff2');\n  unicode-range: U+0102-0103, U+0110-0111, U+1EA0-1EF9, U+20AB;\n}\n/* latin-ext */\n@font-face {\n  font-family: 'Oswald';\n  font-style: normal;\n  font-weight: 400;\n  src: url(https://fonts.gstatic.com/s/oswald/v23/TK3_WkUHHAIjg75cFRf3bXL8LICs1_FvsUhiZTaR.woff2) format('woff2');\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n}\n/* latin */\n@font-face {\n  font-family: 'Oswald';\n  font-style: normal;\n  font-weight: 400;\n  src: url(https://fonts.gstatic.com/s/oswald/v23/TK3_WkUHHAIjg75cFRf3bXL8LICs1_FvsUZiZQ.woff2) format('woff2');\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\n"
    }
  },
  layer: {
    background: "#607d8b",
    overlay: {
      background: "rgba(235, 235, 235, 0.5)"
    },
    border: {
      radius: "4px"
    }
  },
  checkBox: {
    border: {
      color: {
        dark: "#ebebeb",
        light: "#444444"
      }
    },
    check: {
      radius: "4px"
    },
    toggle: {
      radius: "2px"
    }
  },
  anchor: {
    color: {
      dark: "#DEDEDE",
      light: "#212121"
    }
  },
  heading: {
    font: false
  },
  radioButton: {
    border: {
      color: {
        dark: "#ebebeb",
        light: "#444444"
      }
    }
  },
  button: {
    border: {
      radius: "4px"
    }
  }
};
export default theme;
