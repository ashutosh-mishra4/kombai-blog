import React from "react";

import { fireEvent } from "@testing-library/dom";

import { ThemeSwitcher } from "@/components/ThemeSwitcher";
import { testUtils } from "@/utils";

describe("ThemeSwitcher", () => {
  test("renders correctly", () => {
    const tree = testUtils.createSnapshotsRenderer(<ThemeSwitcher />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test("light theme is set correctly", () => {
    window.localStorage.setItem(
      "diesel:theme-atom",
      JSON.stringify({ mode: "light" }),
    );

    const { getByTitle } = testUtils.renderWithCoilProvider(<ThemeSwitcher />);

    window.localStorage.removeItem("diesel:theme-atom");

    expect(getByTitle("light")).not.toBeNull();
  });

  test("dark theme is set correctly", () => {
    const { getByTitle } = testUtils.renderWithCoilProvider(<ThemeSwitcher />);

    expect(getByTitle("dark")).not.toBeNull();
  });

  test("theme switching works correctly", () => {
    const { getByTitle, getByRole } = testUtils.renderWithCoilProvider(
      <ThemeSwitcher />,
    );

    expect(getByTitle("dark")).not.toBeNull();

    const button = getByRole("button");

    fireEvent.click(button);

    expect(getByTitle("light")).not.toBeNull();
  });
});
