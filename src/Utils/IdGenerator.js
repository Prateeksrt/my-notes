export const nextId = (itemList) => Math.max(...mapToIds(itemList).concat(0)) + 1;

const mapToIds = (itemList) => itemList.map(item => parseInt(item.id));
