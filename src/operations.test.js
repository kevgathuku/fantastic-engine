import {
  removeLocationHash,
  setLocationHash,
  windowRedirect
} from "./operations";

describe("setLocationHash", () => {
  it("setLocationHash() should add the given hash to window.location", () => {
    const newHash = "#kamikaze";

    setLocationHash(newHash);

    expect(window.location.hash).toEqual(newHash);
  });
});

describe("removeLocationHash", () => {
  const defaultHash = "#home";
  beforeEach(() => {
    // ensure we have a hash to begin with for each test
    // this is a global and may change between tests
    window.location.hash = defaultHash;
  });

  it("removeLocationHash() should remove the hash from window.location", () => {
    expect(window.location.hash).toEqual(defaultHash);

    removeLocationHash();

    expect(window.location.hash).toEqual("");
  });
});

describe("windowRedirect", () => {
  beforeEach(() => {
    window.location.assign = jest.fn();
  });

  it("redirects to a new website", () => {
    const redirectURL = "https://kevgathuku.me";
    windowRedirect(redirectURL);

    expect(window.location.assign).toHaveBeenCalledWith(redirectURL);
  });
});
