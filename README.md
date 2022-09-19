# TezJS with dayjs 
- Day. js is a minimalist JavaScript date library for parsing, validating, manipulating, and formatting dates. It is an alternative library to Moment. js and has a largely compatible API.

- Create a tezjs project

```
npm create tez@latest
```

- Install dayjs with the following command

```
npm install dayjs --save
```

- Now add it as a plugin, make a plugins directory and add index.ts inside it and add the below code


```
/plugins/index.ts

    import "dayjs/locale/pt"; 
    import dayjs from "dayjs";
    import localeDe from "dayjs/locale/de";
    import advancedFormat from "dayjs/plugin/advancedFormat"; 
```

 - Create global properties to use functions globally in the project
 -  To make global property, add the below code to the **index.ts** file

```
/plugins/index.ts

export default function(vue:any){

    vue.config.globalProperties.$dayjs = dayjs
    vue.config.globalProperties.$localeDe = localeDe
    vue.config.globalProperties.$advancedFormat = advancedFormat

    vue.use(vue.config.globalProperties,'$dayjs', {});
    vue.use(vue.config.globalProperties,'$localeDe', {});
    vue.use(vue.config.globalProperties,'$advancedFormat', {});

    dayjs.extend(advancedFormat); // Load plugins 
}
```

- You can use global properties in `dayjs.vue` like

```
var dateTime =  this.$dayjs().locale(this.$localeDe).format();            
```

- It's done with tezjs. Now, you can use it inside your project.
- **Note**: Refer [day.js.org](https://day.js.org/) docs for more details about dayjs.

