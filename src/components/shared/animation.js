export function getAnimatedFrom(path) {
  if (path === "/") {
    return {
      position: "absolute",
      opacity: 0
    };
  } else if (path === "/pcn") {
    return {
      position: "absolute",
      opacity: 0
    };
  } else {
    return {
      position: "absolute",
      opacity: 0
    };
  }
}

export function getAnimatedEnter(path) {
  if (path === "/events") {
    const eventAnim = [{ opacity: 1 }, { marginLeft: "0%" }];
    return eventAnim;
  } else {
    const an = [{ opacity: 1 }, { marginLeft: "0%" }];
    return an;
  }
}

export function getAnimatedTo(path) {
  if (path === "/") {
    return {
      opacity: 0
    };
  } else if (path === "/pcn") {
    return {
      opacity: 0
    };
  } else {
    return {
      opacity: 0
    };
  }
}
