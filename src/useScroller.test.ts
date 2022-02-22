import { useScroller } from "./useScroller";

test("Should scrollTo a position", () => {
  const spy = jest.spyOn(window, "scrollTo").mockImplementation();

  const scroll = useScroller({ x: 20, y: 0 });
  if (!scroll) throw "Invalid window object";

  scroll();

  expect(spy).toBeCalledWith({
    left: 20,
    top: 0,
    behaviour: "auto",
  });

  spy.mockRestore();
});
