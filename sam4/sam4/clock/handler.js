import moment from "moment";
const now = moment();

export const clock = async (event) => {
  console.log("clock fungerer");
  const message = now.format();
  const response = {
    statusCode: 200,
    body: JSON.stringify(message),
  };
  return response;
};

// // Test Event Name
// testclock4-2

// Response
// {
//   "errorType": "ReferenceError",
//   "errorMessage": "require is not defined in ES module scope, you can use import instead",
//   "trace": [
//     "ReferenceError: require is not defined in ES module scope, you can use import instead",
//     "    at file:///var/task/handler.mjs:1:16",
//     "    at ModuleJob.run (node:internal/modules/esm/module_job:194:25)"
//   ]
// }

// Function Logs
// 2023-09-08T14:25:36.767Z	undefined	ERROR	Uncaught Exception 	{"errorType":"ReferenceError","errorMessage":"require is not defined in ES module scope, you can use import instead","stack":["ReferenceError: require is not defined in ES module scope, you can use import instead","    at file:///var/task/handler.mjs:1:16","    at ModuleJob.run (node:internal/modules/esm/module_job:194:25)"]}
// 2023-09-08T14:30:41.972Z	undefined	ERROR	Uncaught Exception 	{"errorType":"ReferenceError","errorMessage":"require is not defined in ES module scope, you can use import instead","stack":["ReferenceError: require is not defined in ES module scope, you can use import instead","    at file:///var/task/handler.mjs:1:16","    at ModuleJob.run (node:internal/modules/esm/module_job:194:25)"]}
// START RequestId: 6c3ede46-57af-4232-80f3-2be9f30b0da9 Version: $LATEST
// Unknown application error occurred
