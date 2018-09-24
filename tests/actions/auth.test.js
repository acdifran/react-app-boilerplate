import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import { login, logout } from "../../src/actions/auth";

const createMockStore = configureMockStore([thunk]);

test("should set up login action object", () => {
  const uid = "aaiof8y8ashd98a";
  const action = login(uid);
  expect(action).toEqual({
    type: "LOGIN",
    uid
  });
});

test("should set up logout action object", () => {
  const action = logout();
  expect(action).toEqual({
    type: "LOGOUT"
  });
});
