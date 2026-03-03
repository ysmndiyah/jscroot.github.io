export function createNode(tag, classname, content) {
  const element = document.createElement(tag);
  if (classname) element.className = classname;
  if (content) element.innerHTML = content;
  return element;
}

export function appendChildElement(parentID, childElement) {
  const parent = document.getElementById(parentID);
  if (parent) {
    parent.appendChild(childElement);
  } else {
    console.error(`Element dengan ID ${parentID} tidak ditemukan.`);
  }
}

export function removeElement(id) {
  const element = document.getElementById(id);
  if (element) element.remove();
}
