if(curr){
    res.unshift(curr.val);
    stack.push(curr);
    curr = curr.right;
}else{
    let node = stack.pop();
    curr = node.left;
}


if(curr){
    stack.push(curr);
    curr = curr.left;
}else{
    let node = stack.pop();
    res.push(node.val);
    curr = node.right;
}


if(curr){
    res.push(curr.val);
    stack.push(curr);
    curr = curr.left;
}else{
    let node = stack.pop();
    curr = node.right;
}