import Comparator from "../Comparator";

describe("Comparator", () => {
  it("should compare with default comparator function", () => {
    const comparator = new Comparator();

    expect(comparator.equals(0, 0)).toBe(true);
  });
});
