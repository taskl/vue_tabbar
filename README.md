# vue_03

tabbar有bug点击分类颜色不一样，在Maintabbar.vue文件上改：
      <tabbarltem path="/category" activeColor="deepPink">
        <img  slot="item-icon" src="../assets/img/tabbar/category.svg" alt=""/>
        <img  slot="item-icon-active" src="../assets/img/tabbar/category_active.svg"/>
        <div slot="item-text">分类</div>
      </tabbarltem>

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


可以先创vue项目，然后再日期src文件夹
