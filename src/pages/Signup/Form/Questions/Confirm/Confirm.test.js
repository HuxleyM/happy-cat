import React from "react";
import { mount } from "enzyme";
import Confirm from "./Confirm";
import { UserContext } from "../../../../../Context/userContext";

describe("Confirm component", () => {
    const context = {
        user: {
          userDetails: {
            userName: "kipo",
            password: "theW0nder!",
            email: "kipo@wondbe.com",
          },
          userPreference: { gifRate: 4, allowDogs: "sometimes" },
        },
      };
      const wrapper = mount(
        <UserContext.Provider value={context}>
          <Confirm />
        </UserContext.Provider>
      );

  it("should render a users inputed data", () => {
    const wrapperText = wrapper.text()
    expect(wrapperText.includes('kipo')).toEqual(true)
    expect(wrapperText.includes('4')).toEqual(true)
    expect(wrapperText.includes('sometimes')).toEqual(true)
    expect(wrapperText.includes('kipo@wondbe.com')).toEqual(true)
    expect(wrapperText.includes('theW0nder!')).toEqual(true)
  });

  it('should match snapshot', ()=>{
    expect(wrapper).toMatchSnapshot();
  })
});
