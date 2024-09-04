import React from "react";

function useTraversalTree() {
  function insertNode(tree, folderId, isFolder, item) {
    if (tree.id === folderId && tree.isFolder) {
      tree.items.unshift({
        id: Date.now(),
        name: item,
        items: [],
        isFolder,
      });
      return tree;
    }
    let newTree = tree.items.map((childs) =>
      insertNode(childs, folderId, isFolder, item)
    );
    return {
      ...tree,
      items: [...newTree],
    };
  }
  return { insertNode };
}

export default useTraversalTree;
