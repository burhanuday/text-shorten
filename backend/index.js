const express = require("express");
var cors = require("cors");

const app = express();

app.use(cors());

app.use(express.static("dist"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => res.send("Hello World!"));

app.post("/api/shorten", (req, res) => {
  let input = req.body.input;
  let output = "";

  const lengthOfString = input.length;
  const numberOfSegments = 6;
  const lengthOfSegment = Math.floor(lengthOfString / numberOfSegments);
  const remainder = lengthOfString % numberOfSegments;
  const primeNumber = 19;

  const calculateSegmentSum = (segment, lengthOfSegment) => {
    console.log("calculate segment sum for");
    let segmentSum = 0;
    for (let j = 0; j < lengthOfSegment; j++) {
      segmentSum += segment.charCodeAt(j);
    }

    console.log("segment sum is", segmentSum);

    return segmentSum;
  };

  for (let i = 0; i < numberOfSegments; i++) {
    let segment = input.substring(
      0 + lengthOfSegment * i,
      Math.min(lengthOfSegment + lengthOfSegment * i, lengthOfString)
    );

    segmentSum = calculateSegmentSum(segment, lengthOfSegment);

    segmentSum = Math.ceil(segmentSum % primeNumber);

    if (segmentSum <= 48) {
      segmentSum += 48;
    }
    let resultantChar = String.fromCharCode(segmentSum);
    output += resultantChar;
  }

  if (remainder) {
    let remainderString = input.substring(
      lengthOfString - remainder,
      lengthOfString
    );

    let remainderSum = calculateSegmentSum(remainderString, remainder);
    remainderSum = Math.ceil(remainderSum % primeNumber);

    if (remainderSum <= 48) {
      remainderSum += 48;
    }
    let resultantChar = String.fromCharCode(remainderSum);
    output += resultantChar;
  }

  return res.send(JSON.stringify(output));
});

app.listen(process.env.PORT || 8080, () =>
  console.log(`Listening on port ${process.env.PORT || 8080}!`)
);
