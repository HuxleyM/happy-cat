/**
 * I dislike having to test runner but was running into issues with enzyme
 */

import React from "react";
import { mount, shallow } from "enzyme";
import { render, queryByAttribute } from '@testing-library/react';
import Details from "./Details";
import PasswordFields from "./PasswordFields/PasswordFields";
import { UserContext } from "../../../../../Context/userContext";

xdescribe("Details component ", () => {



  it("should", () => {

    const context = {user:{}}
    const div = document.createElement("div");
    const dom = ReactDOM.render(
      <UserContext.Provider value={context}>
        <Details />
      </UserContext.Provider>,
      div
    );
    const emailFields = getById('#email')
    console.log(emailFields)
  });

  it("Should check that emails match else triggers an error", () => {
    // console.dir(wrapper)
    // const emailField = wrapper.find('#email')
    // emailField.instance().value = "testing"
    // const input = wrapper.find('input')
    // console.log('heya', input)
    // // expect(wrapper.contains('#email')).toEqual(true)
    // console.log(emailField, wrapper.text())
    // emailField.simulate("change");
    // expect(setAnswers).toHaveBeenCalledWith("Test");
    // const emailRetypeField = wrapper.find('#emailRetype')
    // expect(wrapper.text().includes('do not match')).toEqual(true)
  });

  describe("#isDisabled", () => {
    it("disabled button should be disabled if not all fields are filled out", () => {});
    it("disabled button should be disabled if all fields filled but there is an error", () => {});

    it("disabled button should be enables if all fields filled and no errors", () => {});
  });

  describe("user returns to check values", () => {
    it("should display previously submitted answers", () => {});

    it("A user should be able to edit answers", () => {});
  });
});
