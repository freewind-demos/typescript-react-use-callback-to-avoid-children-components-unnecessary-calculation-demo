TypeScript React "useCallback" Demo
=================================

React function component有一个问题，就是当某一个state的值改变之后，function body里所有的代码会重新执行。

如果在代码里定义了一些callback，这些callback每一次都将会重新生成，并且生成的function object跟之前都不equal。

如果我们需要把这些callback object保存在某些数据结构（如Set）中，那么就会保存多个，可能造成性能问题或者其他我现在还没理解的问题。

但是如果使用`useCallback`把它包装一下，在包装的时候可以设置dependency，只有当dependency变化的时候，
生成的function object跟前跟之前的不equal；
否则，虽然生成了新的function object，但是由于它跟之前Set中保存的是equal的，就不会重复保存。

感觉还没有真正理解，等以后再更新。

```
npm install
npm run demo
```
