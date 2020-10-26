
// 引入这个库，实现代码分割，让组件按需加载，优化项目性能
import loadable from '@loadable/component'

// import Jsx from './study/jsx'
import Event from './study/event'
import Condition from './study/condition'
import List from './study/list'
import Form from './study/form'
import State from './study/state'
import Combine from './study/combine'
import Life from './study/life'
import Fragment from './study/fragment'
import TestCtx from './study/testctx'
import TestHoc from './study/testhoc'
import TestType from './study/testtype'
import TestHook from './study/hook'

const Home = loadable(()=>import('./home'))
const HomeDetail = loadable(()=>import('./home/detail'))

export default [
  {
    id: 1,
    path: '/jsx',
    component: loadable(()=>import('./study/jsx')),
    text: 'Jsx学习'
  },
  {
    id: 2,
    path: '/event',
    component: Event,
    text: '事件绑定',
  },
  {
    id: 3,
    path: '/con',
    component: Condition,
    text: '条件渲染',
  },
  {
    id: 4,
    path: '/list',
    component: List,
    text: '事件绑定',
  },
  {
    id: 5,
    path: '/form',
    component: Form,
    text: '表单绑定',
  },
  {
    id: 6,
    path: '/state',
    component: State,
    text: '状态提升',
  },
  {
    id: 7,
    path: '/com',
    component: Combine,
    text: '组合继承',
  },
  {
    id: 8,
    path: '/life',
    component: Life,
    text: '生命周期',
  },
  {
    id: 9,
    path: '/fram',
    component: Fragment,
    text: '碎片',
  },
  {
    id: 10,
    path: '/ctx',
    component: TestCtx,
    text: '上下文',
  },
  {
    id: 11,
    path: '/hoc',
    component: TestHoc,
    text: '高阶组件',
  },
  {
    id: 12,
    path: '/type',
    component: TestType,
    text: 'PropTypes',
  },
  {
    id: 13,
    path: '/hook',
    component: TestHook,
    text: 'Hooks',
  },
  {
    id: 14,
    path: '/',
    component: Home,
    text: '我的首页',
    children: [
      {
        id: 1401,
        path: '/home/detail/:id/:name',
        component: HomeDetail,
        text: '详情页',
      }
    ]
  }
]
