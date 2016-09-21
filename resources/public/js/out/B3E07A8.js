goog.provide('figwheel.connect.dev');
goog.require('cljs.core');
goog.require('figwheel.client');
goog.require('figwheel.client.utils');
goog.require('tools.core');
figwheel.client.start.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__38277__delegate = function (x){
if(cljs.core.truth_(tools.core.main)){
return cljs.core.apply.call(null,tools.core.main,x);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: :on-jsload hook 'tools.core/main' is missing");
}
};
var G__38277 = function (var_args){
var x = null;
if (arguments.length > 0) {
var G__38278__i = 0, G__38278__a = new Array(arguments.length -  0);
while (G__38278__i < G__38278__a.length) {G__38278__a[G__38278__i] = arguments[G__38278__i + 0]; ++G__38278__i;}
  x = new cljs.core.IndexedSeq(G__38278__a,0);
} 
return G__38277__delegate.call(this,x);};
G__38277.cljs$lang$maxFixedArity = 0;
G__38277.cljs$lang$applyTo = (function (arglist__38279){
var x = cljs.core.seq(arglist__38279);
return G__38277__delegate(x);
});
G__38277.cljs$core$IFn$_invoke$arity$variadic = G__38277__delegate;
return G__38277;
})()
,new cljs.core.Keyword(null,"build-id","build-id",1642831089),"dev",new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws"], null));
