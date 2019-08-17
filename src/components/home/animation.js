export function getAnimatedFrom(path) {
  if (path === "/") {
    return {
      position: "absolute",
      opacity: 0,
      marginLeft: "-110%"
    };
  }

  else if (path === "/pcn") {
    return {
      position: "absolute",
      opacity: 0,
      marginLeft: "110%"
    };
  }

  else {
    return {
      position: "absolute",
      opacity: 0,
      marginLeft: "100%"
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
      marginLeft: "110%"
    };
  }

  else if (path === "/pcn") {
    return {
      marginLeft: "-110%"
    };
  }
  else {
    return {
      opacity: 0
    };
  }
}

