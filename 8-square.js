const arg = process.argv[2];

if (arg === undefined || isNaN(arg) || arg.trim() === "") {
  console.log("Missing size");
} else {
  const size = parseInt(arg);
  if (isNaN(size) || size <= 0) {
    // Do nothing for invalid or non-positive numbers
  } else {
    for (let i = 0; i < size; i++) {
      let row = "";
      for (let j = 0; j < size; j++) {
        row += "X";
      }
      console.log(row);
    }
  }
}