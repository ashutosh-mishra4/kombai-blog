const getDefaultColorMode = (): "dark" | "light" => {
  if (typeof window === "undefined") {
    return "dark";
  }

  const mql = window.matchMedia("(prefers-color-scheme: light)");
  const hasMediaQueryPreference = typeof mql.matches !== "undefined";
  if (hasMediaQueryPreference) {
    return mql.matches ? "light" : "dark";
  }

  return "dark";
};

export default getDefaultColorMode;
