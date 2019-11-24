TypeScript React "useCallback" to Avoid Children Components Unnecessary Calculation Demo
========================================================================================

看到一些文章说`useCallback`可以用来防止一些不必要的重复计算以提高性能，比如：

```
const onClick = () => {
  // some expensive calculation
}
```

当所在的component的某个state改变的时候，onClick会重新生成，进行昂贵计算（存疑：后面解释）。

此时可以使用`useCallback`来提高性能，比如：

```
const onClick = useCallback(() => {
  // some expensive calculation
}, [dep1]);
```

这样只有当`dep1`变化的时候，才会重新生成onClick对应的callback函数。

这里提到的“性能问题”我无法理解。因为`onClick`是一个函数，它重新生成的时候，函数内部的代码并不会执行，
所以里面所谓的“expensive calculation”并不会多余执行。

我对此的理解是，如果这个`onClick`传给了child component，而child component又把它当作了某些hook的dependency（比如`useEffect`)，
此时才可能有问题：

如果没有使用`useCallback`，每次生成的onClick的指向的function都不相同，可能会导致child component中的hook重复不必要的执行。

（见代码）

解决办法就是使用`useCallback`，通过dependencies来确定只有当需要的时候，才让onClick指向新生成的函数引用。

但即使在这种情况，`onClick`里面的所谓`expensive calculation`也不是问题的关键，因为它并没有被重要不必要的执行。

所以应该避免的是，由于onClick引用的变化，导致child component那边的hook中的expensive code重复不必要的执行。

```
npm install
npm run demo
```
