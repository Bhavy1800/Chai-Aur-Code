function customRender(personalReactelement, container) {
  //   const domElement = document.createElement(personalReactelement.type);
  //   domElement.innerHTML = personalReactelement.Children;
  //   domElement.setAttribute("href", personalReactelement.props.href);
  //   domElement.setAttribute("target", personalReactelement.props.target);
  //   container.appendChild(domElement);

  const domElement = document.createElement(personalReactelement.type);
  domElement.innerHTML = personalReactelement.Children;

  for (const prop in personalReactelement.props) {
    if (personalReactelement === "children") continue;
    domElement.setAttribute(prop, personalReactelement.props[prop]);
  }
  container.appendChild(domElement);
}
const personalReactelement = {
  type: "a",
  props: {
    href: "https://www.google.com",
    target: "_blank",
  },
  Children: "Click me to visit google",
};

const mainContainer = document.querySelector("#root");

customRender(personalReactelement, mainContainer);
