function sum(a, b) {
    console.log("in sum funciton==========");
    return a+b;
}

async function main() {
    console.log(" in main function=================================")
    let c= sum(0, 1);
    console.log("0 + 1 =  ", c, "============================================================");
}

(async () => {
  await main();
})().catch(e => {
  console.log(e);
  process.exit(0);
}
);

module.exports = sum;