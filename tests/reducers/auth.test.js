import authReducer from "../../src/reducers/auth";

test("should set uid for login", () => {
  const uid = "shf8ay8shdfa7u";
  const action = {
    type: "LOGIN",
    uid
  };
  const state = authReducer({}, action);
  expect(state.uid).toBe(uid);
});

test("should set uid to empty object for logout", () => {
  const uid = "shf8ay8shdfa7u";
  const action = {
    type: "LOGOUT"
  };
  const state = authReducer({ uid }, action);
  expect(state).toEqual({});
});
