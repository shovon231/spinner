let interval = 0;
let strings = [
  "\r|   ",
  "\r/   ",
  "\r-   ",
  "\r\\   ",
  "\r|   ",
  "\r/   ",
  "\r-   ",
  "\r\\   ",
  "\r|   \n",
];

for (const str of strings) {
  setTimeout(() => {
    process.stdout.write(str);
  }, interval);
  interval += 200;
}
