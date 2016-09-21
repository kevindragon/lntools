// Compiled by ClojureScript 1.9.229 {}
goog.provide('tools.core');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('reagent.core');
goog.require('tools.events');
goog.require('tools.subs');
goog.require('tools.route');
goog.require('tools.views');
cljs.core.enable_console_print_BANG_.call(null);
if(typeof tools.core.app_element !== 'undefined'){
} else {
tools.core.app_element = document.getElementById("app");
}
if(typeof tools.core._init_ !== 'undefined'){
} else {
tools.core._init_ = re_frame.core.dispatch_sync.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"initialize","initialize",609952913)], null));
}
tools.core.main = (function tools$core$main(){
return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tools.views.layout], null),tools.core.app_element);
});
goog.exportSymbol('tools.core.main', tools.core.main);

//# sourceMappingURL=core.js.map?rel=1474466734625