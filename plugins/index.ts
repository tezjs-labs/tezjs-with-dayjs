// import dayjs from 'dayjs/locale/es';

import dayjs from "dayjs";

// Locales
import "dayjs/locale/pt"; // load on demand
import localeDe from "dayjs/locale/de"; // With a custom alias for the locale object

// Plugins
import advancedFormat from "dayjs/plugin/advancedFormat";  // load on demand
import localizedFormat from "dayjs/plugin/localizedFormat";
import relativeTime from "dayjs/plugin/relativeTime";
import calendar from "dayjs/plugin/calendar";

export default function(vue:any){

    vue.config.globalProperties.$dayjs = dayjs
    vue.config.globalProperties.$localeDe = localeDe

    vue.config.globalProperties.$advancedFormat = advancedFormat
    vue.config.globalProperties.$localizedFormat = localizedFormat
    vue.config.globalProperties.$relativeTime = relativeTime
    vue.config.globalProperties.$calendar = calendar

    vue.use(vue.config.globalProperties,'$dayjs', {});
    vue.use(vue.config.globalProperties,'$localeDe', {});
    vue.use(vue.config.globalProperties,'$advancedFormat', {});
    vue.use(vue.config.globalProperties,'$localizedFormat', {});
    vue.use(vue.config.globalProperties,'$relativeTime', {});
    vue.use(vue.config.globalProperties,'$calendar', {});

    // Load plugins
    dayjs.extend(advancedFormat); // use plugin
    dayjs.extend(localizedFormat); // use plugin
    dayjs.extend(relativeTime); // use plugin
    dayjs.extend(calendar); // use plugin

}

