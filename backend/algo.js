let input = "helloworld";
let output = "";

const lengthOfString = input.length;
console.log("length of string", lengthOfString);

const numberOfSegments = 6;

const lengthOfSegment = Math.floor(lengthOfString / numberOfSegments);
console.log("length of segment", lengthOfSegment);

const remainder = lengthOfString % numberOfSegments;
console.log("length of remainder", remainder);

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

console.log(output);
