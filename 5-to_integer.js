const arg = process.argv[2];

if (arg === undefined || isNaN(arg) || arg.trim() === "") {
  console.log("Not a number");
} else {
  const num = parseInt(arg);
  if (isNaN(num)) {
    console.log("Not a number");
  } else {
    console.log("My number: " + num);
  }
}