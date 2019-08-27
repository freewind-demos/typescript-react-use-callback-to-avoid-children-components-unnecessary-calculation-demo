TypeScript React "useCallback" Demo
=================================

React function component有一个问题，就是当某一个state的值改变之后，function body里所有的代码会重新执行。

如果在代码里定义了一些callback，这些callback每一次都将会重新生成，很多时候是不必要的。

可以使用`useCallback`，来设置一些dependency，只有当dependency改变的时候，才生成新的callback。

需要注意的是：在`useCallback`中引用的值可能是旧值，有时候这正是我们需要的，但有时候这是问题，需要仔细检查。

```
npm install
npm run demo
```
