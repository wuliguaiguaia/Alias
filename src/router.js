import Vue from "vue";
import Router from "vue-router";

import person from "@/views/person/person";
import portfolio from "@/views/portfolio/portfolio";
import skill from "@/views/skill/skill";
import concat from "@/views/concat/concat";
import blog from "@/views/blog/blog";
import message from "@/views/message/message";

Vue.use(Router);

export default new Router({
    routes:[{
        path:"/",
        redirect:"/person"
    },{
        path:"/person",
        component: person,
        name: "person",
    },{
        path:"/portfolio",
        component: portfolio,
        name:"portfolio"
    },{
        path:"/skill",
        component: skill,
        name:"skill"
    },{
        path:"/message",
        component: message,
        name:"message"
    },{
        path:"/concat",
        component: concat,
        name:"concat"
    },{
        path:"/blog",
        component: blog,
        name:"blog"
    }]
})

