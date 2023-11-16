const handler = async (event, context) => {
  console.log("Hello From Lambda");
  console.log(process);
};

module.exports = { handler };
