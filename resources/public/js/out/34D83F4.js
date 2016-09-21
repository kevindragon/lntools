goog.provide('figwheel.connect.dev');
goog.require('cljs.core');
goog.require('figwheel.client');
goog.require('figwheel.client.utils');
goog.require('tools.core');
figwheel.client.start.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__35031__delegate = function (x){
if(cljs.core.truth_(tools.core.main)){
return cljs.core.apply.call(null,tools.core.main,x);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: :on-jsload hook 'tools.core/main' is missing");
}
};
var G__35031 = function (var_args){
var x = null;
if (arguments.length > 0) {
var G__35032__i = 0, G__35032__a = new Array(arguments.length -  0);
while (G__35032__i < G__35032__a.length) {G__35032__a[G__35032__i] = arguments[G__35032__i + 0]; ++G__35032__i;}
  x = new cljs.core.IndexedSeq(G__35032__a,0);
} 
return G__35031__delegate.call(this,x);};
G__35031.cljs$lang$maxFixedArity = 0;
G__35031.cljs$lang$applyTo = (function (arglist__35033){
var x = cljs.core.seq(arglist__35033);
return G__35031__delegate(x);
});
G__35031.cljs$core$IFn$_invoke$arity$variadic = G__35031__delegate;
return G__35031;
})()
,new cljs.core.Keyword(null,"build-id","build-id",1642831089),"dev",new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws"], null));
