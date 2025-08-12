
const hourlyGradients = [
// 0 - midnight - deep violet outside
  "linear-gradient(to right top, #1a0033, #12002a, #0b0021, #060018, #03000f, #03000f, #03000f, #03000f, #060018, #0b0021, #12002a, #1a0033)",
  
  // 1 - 1am - dark indigo outside
  "linear-gradient(to right top, #160033, #12002c, #0c0024, #08001a, #050011, #050011, #050011, #050011, #08001a, #0c0024, #12002c, #160033)",
  
  // 2 - 2am - midnight blue outside
  "linear-gradient(to right top, #001433, #001029, #000c20, #000917, #00060f, #00060f, #00060f, #00060f, #000917, #000c20, #001029, #001433)",
  
  // 3 - 3am - dark teal outside
  "linear-gradient(to right top, #003333, #002c2c, #002424, #001a1a, #001111, #001111, #001111, #001111, #001a1a, #002424, #002c2c, #003333)",
  
  // 4 - 4am - forest green outside
  "linear-gradient(to right top, #003300, #002a00, #002200, #001800, #001000, #001000, #001000, #001000, #001800, #002200, #002a00, #003300)",
  
  // 5 - 5am - olive green outside
  "linear-gradient(to right top, #334400, #2c3800, #243000, #1a2400, #111800, #111800, #111800, #111800, #1a2400, #243000, #2c3800, #334400)",
  
  // 6 - 6am - amber outside
  "linear-gradient(to right top, #332600, #2c2000, #241a00, #1a1200, #110b00, #110b00, #110b00, #110b00, #1a1200, #241a00, #2c2000, #332600)",
  
  // 7 - 7am - rusty orange outside
  "linear-gradient(to right top, #4d1f00, #441b00, #3c1700, #311100, #260b00, #260b00, #260b00, #260b00, #311100, #3c1700, #441b00, #4d1f00)",
  
  // 8 - 8am - deep red outside
  "linear-gradient(to right top, #4d0000, #440000, #3c0000, #310000, #260000, #260000, #260000, #260000, #310000, #3c0000, #440000, #4d0000)",
  
  // 9 - 9am - burgundy outside
  "linear-gradient(to right top, #4d0033, #440029, #3c0020, #310017, #26000f, #26000f, #26000f, #26000f, #310017, #3c0020, #440029, #4d0033)",
  
  // 10 - 10am - purple outside
  "linear-gradient(to right top, #3a0066, #33005d, #2b0054, #22004a, #190041, #190041, #190041, #190041, #22004a, #2b0054, #33005d, #3a0066)",
  
  // 11 - 11am - navy outside
  "linear-gradient(to right top, #00004d, #000044, #00003c, #000031, #000026, #000026, #000026, #000026, #000031, #00003c, #000044, #00004d)",
  
  // 12 - noon - deep cyan outside
  "linear-gradient(to right top, #004d4d, #004444, #003c3c, #003131, #002626, #002626, #002626, #002626, #003131, #003c3c, #004444, #004d4d)",
  
  // 13 - 1pm - dark sea green outside
  "linear-gradient(to right top, #2a4d2a, #244424, #1e3c1e, #153115, #0f260f, #0f260f, #0f260f, #0f260f, #153115, #1e3c1e, #244424, #2a4d2a)",
  
  // 14 - 2pm - muted olive outside
  "linear-gradient(to right top, #4d4d26, #44441f, #3c3c18, #313110, #262609, #262609, #262609, #262609, #313110, #3c3c18, #44441f, #4d4d26)",
  
  // 15 - 3pm - golden brown outside
  "linear-gradient(to right top, #664d00, #5d4400, #543c00, #4a3100, #412600, #412600, #412600, #412600, #4a3100, #543c00, #5d4400, #664d00)",
  
  // 16 - 4pm - burnt orange outside
  "linear-gradient(to right top, #804d00, #744400, #693c00, #5f3100, #542600, #542600, #542600, #542600, #5f3100, #693c00, #744400, #804d00)",
  
  // 17 - 5pm - dark maroon outside
  "linear-gradient(to right top, #4d0026, #440022, #3c001d, #310017, #260011, #260011, #260011, #260011, #310017, #3c001d, #440022, #4d0026)",
  
  // 18 - 6pm - deep plum outside
  "linear-gradient(to right top, #330033, #2c002c, #240024, #1a001a, #110011, #110011, #110011, #110011, #1a001a, #240024, #2c002c, #330033)",
  
  // 19 - 7pm - midnight purple outside
  "linear-gradient(to right top, #260026, #220022, #1d001d, #170017, #110011, #110011, #110011, #110011, #170017, #1d001d, #220022, #260026)",
  
  // 20 - 8pm - dark navy outside
  "linear-gradient(to right top, #000026, #000022, #00001d, #000017, #000011, #000011, #000011, #000011, #000017, #00001d, #000022, #000026)",
  
  // 21 - 9pm - charcoal outside
  "linear-gradient(to right top, #1a1a1a, #161616, #121212, #0e0e0e, #0a0a0a, #0a0a0a, #0a0a0a, #0a0a0a, #0e0e0e, #121212, #161616, #1a1a1a)",
  
  // 22 - 10pm - dark gray outside
  "linear-gradient(to right top, #333333, #2e2e2e, #292929, #232323, #1e1e1e, #1e1e1e, #1e1e1e, #1e1e1e, #232323, #292929, #2e2e2e, #333333)",
  
  // 23 - 11pm - almost black outside
  "linear-gradient(to right top, #0a0a0a, #080808, #060606, #040404, #020202, #020202, #020202, #020202, #040404, #060606, #080808, #0a0a0a)",
];

function setBackgroundBasedOnTime() {
const hour = new Date().getHours();
document.body.style.backgroundImage = hourlyGradients[hour];
}

setBackgroundBasedOnTime();