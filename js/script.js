// Data provided by Hmwe Kyu
// prettier-ignore
var Data = {
  met: [0,10,20,30,40,50,60,70,80,90,100,110,120,130,140,150,160,170,180,190,200,210,220,230,240,250,260,270,280,290,300,310,320,330,340,350,360,370,380,390,400,410,420,430,440,450,460,470,480,490,500,510],
  diabetes: [1,0.980,0.961,0.921,0.882,0.834,0.786,0.737,0.736,0.735,0.734,0.733,0.732,0.731,0.730,0.729,0.728,0.727,0.726,0.725,0.723,0.722,0.721,0.720,0.719,0.718,0.717,0.716,0.715,0.714,0.713,0.712,0.711,0.710,0.708,0.707,0.706,0.705,0.704,0.703,0.702,0.701,0.700,0.699,0.698,0.697,0.696,0.695,0.693,0.692,0.691,0.690],
  stroke: [1,0.910,0.819,0.802,0.785,0.784,0.783,0.782,0.780,0.777,0.774,0.771,0.768,0.765,0.762,0.759,0.756,0.753,0.750,0.747,0.744,0.741,0.738,0.735,0.732,0.729,0.727,0.724,0.721,0.718,0.715,0.712,0.709,0.706,0.703,0.700,0.697,0.694,0.691,0.688,0.685,0.682,0.679,0.676,0.674,0.671,0.668,0.665,0.662,0.659,0.656,0.653],
  ihd: [1,0.909,0.819,0.807,0.796,0.776,0.756,0.736,0.736,0.735,0.734,0.734,0.733,0.733,0.732,0.731,0.731,0.730,0.730,0.729,0.728,0.728,0.727,0.727,0.726,0.725,0.725,0.724,0.724,0.723,0.722,0.722,0.721,0.721,0.720,0.720,0.719,0.718,0.718,0.717,0.717,0.716,0.715,0.715,0.714,0.714,0.713,0.712,0.712,0.711,0.711,0.710],
  breastCancer: [1,0.987,0.974,0.960,0.957,0.953,0.949,0.946,0.942,0.939,0.935,0.931,0.928,0.924,0.920,0.917,0.912,0.908,0.904,0.900,0.895,0.891,0.887,0.883,0.878,0.874,0.872,0.870,0.867,0.865,0.863,0.861,0.859,0.856,0.854,0.852,0.850,0.847,0.845,0.843,0.841,0.838,0.836,0.834,0.832,0.830,0.827,0.825,0.823,0.821,0.818,0.816],
  colonCancer: [1,0.978,0.956,0.933,0.883,0.833,0.831,0.829,0.827,0.825,0.824,0.822,0.820,0.818,0.816,0.815,0.813,0.811,0.809,0.807,0.805,0.804,0.802,0.800,0.798,0.796,0.795,0.793,0.791,0.789,0.787,0.786,0.784,0.782,0.780,0.778,0.776,0.775,0.773,0.771,0.769,0.767,0.766,0.764,0.762,0.760,0.758,0.757,0.755,0.753,0.751,0.749]
};

var Colors = {
  black: "rgba(0, 0, 0, 0.8)",
  faintGrey: "rgba(100, 100, 100, 0.1)",
  white: "rgba(255, 255, 255, 1)",
  // From: https://learnui.design/tools/data-color-picker.html
  line1: "#003f5c",
  line2: "#58508d",
  line3: "#bc5090",
  line4: "#ff6361",
  line5: "#ffa600",
};

//  Media queries
var isMobile = window.matchMedia("(max-width: 575.98px)").matches;

// Chart config
Chart.defaults.global.defaultFontColor = Colors.black;
Chart.defaults.global.defaultFontSize = isMobile ? 12 : 16;
Chart.defaults.global.legend.labels.boxWidth = isMobile ? 10 : 20;
Chart.defaults.global.legend.labels.padding = 20;
Chart.Legend.prototype.afterFit = function () {
  // From: https://stackoverflow.com/a/55411810
  this.height = this.height + 8;
};

var config = {
  type: "line",
  data: {
    labels: Data.met,
    datasets: [
      {
        label: "Stroke",
        fill: false,
        data: [],
        borderColor: Colors.line2,
        key: "stroke",
      },
      {
        label: "Heart disease",
        fill: false,
        data: [],
        borderColor: Colors.line3,
        key: "ihd",
      },
      {
        label: "Diabetes",
        fill: false,
        data: [],
        borderColor: Colors.line1,
        key: "diabetes",
      },
      {
        label: "Colon Cancer",
        fill: false,
        data: [],
        borderColor: Colors.line5,
        key: "colonCancer",
      },
      {
        label: "Breast Cancer",
        fill: false,
        data: [],
        borderColor: Colors.line4,
        key: "breastCancer",
      },
    ],
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    elements: {
      point: {
        radius: 0,
      },
    },
    layout: {
      padding: 10,
    },
    scales: {
      xAxes: [
        {
          display: true,
          scaleLabel: {
            display: true,
            labelString: "MET Hours/week",
          },
          gridLines: {
            drawBorder: true,
            lineWidth: 0,
            zeroLineColor: Colors.black,
          },
        },
      ],
      yAxes: [
        {
          display: true,
          gridLines: { drawBorder: true, lineWidth: 0 },
          ticks: {
            suggestedMax: 1,
            suggestedMin: 0.9,
          },
          scaleLabel: {
            display: true,
            labelString: "Relative Risk",
          },
        },
        {
          position: "right",
          ticks: {
            display: false,
          },
          gridLines: {
            drawBorder: true,
            lineWidth: 0,
            drawTicks: false,
            zeroLineColor: Colors.black,
          },
        },
      ],
    },
  },
};

var ctx = document.getElementById("plot").getContext("2d");
plot = new Chart(ctx, config);

// Slider config
var slider = document.getElementById("slider");

noUiSlider.create(slider, {
  start: [0],
  range: {
    min: [0],
    max: [500],
  },
});

// Functions
const pickHex = (color1, color2, weight) => {
  // Adapted from: https://stackoverflow.com/a/30144587
  let p = weight;
  let w = p * 2 - 1;
  let w1 = (w / 1 + 1) / 2;
  let w2 = 1 - w1;
  let rgb = [
    Math.round(color1[0] * w1 + color2[0] * w2),
    Math.round(color1[1] * w1 + color2[1] * w2),
    Math.round(color1[2] * w1 + color2[2] * w2),
  ];
  return `rgb(${rgb[0]},${rgb[1]},${rgb[2]})`;
};

// Note: these values correspond to gradient in slider.css
const red = [236, 90, 67];
const orange = [236, 165, 67];
const green = [50, 174, 87];
const calcSliderColor = (idx) => {
  if (idx < 20) {
    let weight = 1 - idx / 20;
    return pickHex(red, orange, weight);
  }
  let weight = 1 - (idx - 20) / 30;
  return pickHex(orange, green, weight);
};

// Conversion functions
const convertSliderValToIndex = (val) => 1 + val / 10;

const convertMetHoursById = (metHours, id) => {
  // MET values from: https://golf.procon.org/met-values-for-800-activities/
  switch (id) {
    case "met":
      return metHours;
    case "light-exercise":
      // Walking at moderate pace
      return Math.round(metHours / 4);
    case "moderate-exercise":
      // Jogging
      return Math.round(metHours / 7);
    case "vigorous-exercise":
      // Running (10 min mile)
      return Math.round(metHours / 10);
  }
};

const convertRiskToPercDecrease = (risk) => `-${Math.round(100 - risk * 100)}%`;

const updateNumber = (id, idx, val) => {
  document.getElementById(id).style.color = calcSliderColor(idx);
  document.getElementById(id).innerHTML = val;
};

// Event listener
slider.noUiSlider.on("update", (values, handle) => {
  let val = values[handle];
  let idx = convertSliderValToIndex(val);
  let metHours = Math.round(idx - 1) * 10;

  updateNumber("met", idx, convertMetHoursById(metHours, "met"));
  updateNumber(
    "light-exercise",
    idx,
    convertMetHoursById(metHours, "light-exercise")
  );
  updateNumber(
    "moderate-exercise",
    idx,
    convertMetHoursById(metHours, "moderate-exercise")
  );
  updateNumber(
    "vigorous-exercise",
    idx,
    convertMetHoursById(metHours, "vigorous-exercise")
  );

  // Change the data
  for (let i = 0; i < 5; i++) {
    let plotDataset = config.data.datasets[i];
    let name = plotDataset.key;
    let dataSlice = Data[name].slice(0, idx);
    plotDataset.data = dataSlice;
    updateNumber(
      name,
      idx,
      convertRiskToPercDecrease(dataSlice[dataSlice.length - 1])
    );
  }
  plot.update();
});
