const app = require("../app");

test("addNewEmployeeOrCreateSection should callback data", () => {
  const data = jest.fn();
  expect(data).toHaveBeenCalled();
});
