const arg = process.argv[2];

if (arg === undefined || isNaN(arg) || arg.trim() === "") {
  console.log("Missing number of occurrences");
} else {
  const num = parseInt(arg);
  if (isNaN(num) || num <= 0) {
    // Do nothing for invalid or non-positive numbers
  } else {
    for (let i = 0; i < num; i++) {
      console.log("C is fun");
    }
  }
}