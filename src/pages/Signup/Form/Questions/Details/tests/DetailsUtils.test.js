import * as utils from "../Details";

describe("Details form components utils", () => {
  describe("#checkFieldsMatch", () => {
    it("it will return false if fields do not match", () => {
      jest.spyOn(document, "getElementById").mockImplementation((val) => {
        if (val === "email") return { value: "test1@gmail.com" };
        if (val === "emailRetype") return { value: "test@gmail.com" };
      });

      expect(
        utils.checkFieldsMatch({ first: "email", second: "emailRetype" })
      ).toEqual(false);
    });

    it("it will return true if fields match", () => {
      jest.spyOn(document, "getElementById").mockImplementation((val) => {
        if (val === "password") return { value: "secret1!" };
        if (val === "passwordRetype") return { value: "secret1!" };
      });

      expect(
        utils.checkFieldsMatch({ first: "password", second: "passwordRetype" })
      ).toEqual(true);
    });
  });

  describe("#validPassword", () => {
    it("should return false if it not valid password", () => {
      jest.spyOn(document, "getElementById").mockImplementation((val) => {
        if (val === "password") return { value: "secret" };
      });
      expect(utils.validPassword()).toEqual(false);
    });

    it("should return true if is valid", () => {
      jest.spyOn(document, "getElementById").mockImplementation((val) => {
        if (val === "password") return { value: "secret1!2" };
      });
      expect(utils.validPassword()).toEqual(true);
    });
  });

  describe("#validEmail", () => {
    it("should return false if it not valid email", () => {
      jest.spyOn(document, "getElementById").mockImplementation((val) => {
        if (val === "email") return { value: "secr@et" };
      });
      expect(utils.validEmail()).toEqual(false);
    });

    it("should return true if is valid", () => {
      jest.spyOn(document, "getElementById").mockImplementation((val) => {
        if (val === "email") return { value: "hux@gmail.com" };
      });
      expect(utils.validEmail()).toEqual(true);
    });
  });

  describe("#collectUserDetails", () => {
    it("Returns an object made up of user details", () => {
      jest.spyOn(document, "getElementById").mockImplementation((val) => {
        if (val === "email") return { value: "hux@gmail.com" };
        if (val === "userName") return { value: "jasonAndtheArgonuauts" };
        if (val === "password") return { value: "unique1!" };
      });

      expect(utils.collectUserDetails()).toEqual({
        email: "hux@gmail.com",
        userName: "jasonAndtheArgonuauts",
        password: "unique1!",
      });
    });
  });
});
