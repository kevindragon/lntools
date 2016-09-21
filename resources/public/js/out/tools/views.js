// Compiled by ClojureScript 1.9.229 {}
goog.provide('tools.views');
goog.require('cljs.core');
goog.require('re_frame.core');
cljs.core.enable_console_print_BANG_.call(null);
tools.views.navigation_child = (function tools$views$navigation_child(children,hide){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.sub","ul.sub",1851457767),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(function (){var and__25039__auto__ = hide;
if(cljs.core.truth_(and__25039__auto__)){
return "hide";
} else {
return and__25039__auto__;
}
})()], null),(function (){var iter__25832__auto__ = (function tools$views$navigation_child_$_iter__37153(s__37154){
return (new cljs.core.LazySeq(null,(function (){
var s__37154__$1 = s__37154;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__37154__$1);
if(temp__4657__auto__){
var s__37154__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__37154__$2)){
var c__25830__auto__ = cljs.core.chunk_first.call(null,s__37154__$2);
var size__25831__auto__ = cljs.core.count.call(null,c__25830__auto__);
var b__37156 = cljs.core.chunk_buffer.call(null,size__25831__auto__);
if((function (){var i__37155 = (0);
while(true){
if((i__37155 < size__25831__auto__)){
var vec__37163 = cljs.core._nth.call(null,c__25830__auto__,i__37155);
var idx = cljs.core.nth.call(null,vec__37163,(0),null);
var item = cljs.core.nth.call(null,vec__37163,(1),null);
cljs.core.chunk_append.call(null,b__37156,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),new cljs.core.Keyword(null,"href","href",-793805698).cljs$core$IFn$_invoke$arity$1(item)], null),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(item)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),idx], null)));

var G__37169 = (i__37155 + (1));
i__37155 = G__37169;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37156),tools$views$navigation_child_$_iter__37153.call(null,cljs.core.chunk_rest.call(null,s__37154__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37156),null);
}
} else {
var vec__37166 = cljs.core.first.call(null,s__37154__$2);
var idx = cljs.core.nth.call(null,vec__37166,(0),null);
var item = cljs.core.nth.call(null,vec__37166,(1),null);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),new cljs.core.Keyword(null,"href","href",-793805698).cljs$core$IFn$_invoke$arity$1(item)], null),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(item)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),idx], null)),tools$views$navigation_child_$_iter__37153.call(null,cljs.core.rest.call(null,s__37154__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__25832__auto__.call(null,cljs.core.map_indexed.call(null,cljs.core.vector,children));
})()], null);
});
tools.views.navigation_top = (function tools$views$navigation_top(index,nav){
var name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(nav);
var hide = new cljs.core.Keyword(null,"hide?","hide?",-988635670).cljs$core$IFn$_invoke$arity$1(nav);
var href = new cljs.core.Keyword(null,"href","href",-793805698).cljs$core$IFn$_invoke$arity$1(nav);
var children = new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(nav);
var fold_fn = ((function (name,hide,href,children){
return (function (index__$1,bool){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"display-nav","display-nav",-1772822880),index__$1,bool], null));
});})(name,hide,href,children))
;
if(cljs.core.truth_(cljs.core.not_empty.call(null,href))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),href], null),name], null)], null);
} else {
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.fold","span.fold",-1420191154),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (name,hide,href,children,fold_fn){
return (function (_){
return fold_fn.call(null,index,cljs.core.not.call(null,hide));
});})(name,hide,href,children,fold_fn))
], null),(cljs.core.truth_(hide)?"- ":"+ ")], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),name], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [tools.views.navigation_child,children,hide], null)], null);
}
});
tools.views.navigation = (function tools$views$navigation(){
var navs = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nav","nav",719540477)], null));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.nav","div.nav",-1805454552),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"#/"], null),"Home"], null)], null),(function (){var iter__25832__auto__ = ((function (navs){
return (function tools$views$navigation_$_iter__37186(s__37187){
return (new cljs.core.LazySeq(null,((function (navs){
return (function (){
var s__37187__$1 = s__37187;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__37187__$1);
if(temp__4657__auto__){
var s__37187__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__37187__$2)){
var c__25830__auto__ = cljs.core.chunk_first.call(null,s__37187__$2);
var size__25831__auto__ = cljs.core.count.call(null,c__25830__auto__);
var b__37189 = cljs.core.chunk_buffer.call(null,size__25831__auto__);
if((function (){var i__37188 = (0);
while(true){
if((i__37188 < size__25831__auto__)){
var vec__37196 = cljs.core._nth.call(null,c__25830__auto__,i__37188);
var index = cljs.core.nth.call(null,vec__37196,(0),null);
var nav = cljs.core.nth.call(null,vec__37196,(1),null);
cljs.core.chunk_append.call(null,b__37189,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [tools.views.navigation_top,index,nav], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),index], null)));

var G__37202 = (i__37188 + (1));
i__37188 = G__37202;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37189),tools$views$navigation_$_iter__37186.call(null,cljs.core.chunk_rest.call(null,s__37187__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37189),null);
}
} else {
var vec__37199 = cljs.core.first.call(null,s__37187__$2);
var index = cljs.core.nth.call(null,vec__37199,(0),null);
var nav = cljs.core.nth.call(null,vec__37199,(1),null);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [tools.views.navigation_top,index,nav], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),index], null)),tools$views$navigation_$_iter__37186.call(null,cljs.core.rest.call(null,s__37187__$2)));
}
} else {
return null;
}
break;
}
});})(navs))
,null,null));
});})(navs))
;
return iter__25832__auto__.call(null,cljs.core.map_indexed.call(null,cljs.core.vector,cljs.core.deref.call(null,navs)));
})(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"#/sign-out"], null),"Sign out"], null)], null)], null)], null);
});
tools.views.home_page = (function tools$views$home_page(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Home page"], null);
});
tools.views.layout = (function tools$views$layout(){
var route = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"route","route",329891309)], null));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.container","div.container",72419955),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tools.views.navigation], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.playground","div.playground",-439477354),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tools.views.home_page], null)], null)], null);
});

//# sourceMappingURL=views.js.map?rel=1474466734528