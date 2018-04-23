/**
 * @license
 * Copyright (c) 2014, 2018, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";define(["ojs/ojcore","knockout","ojs/ojmodel"],function(t,o){t.KnockoutUtils=function(){},t.KnockoutUtils.internalObjectProperty="oj._internalObj",t.KnockoutUtils.underUpdateProp="oj._underUpdate",t.KnockoutUtils.collUpdatingProp="oj.collectionUpdating",t.KnockoutUtils.subscriptionProp="oj.collectionSubscription",t.KnockoutUtils.updatingCollectionFunc="oj.collectionUpdatingFunc",t.KnockoutUtils.map=function(n,e,i){var l,r,c,u,s,a,p,d,U,k,K,f;function v(o){return function(e){l[t.KnockoutUtils.underUpdateProp]||n.set(o,e)}}if(n instanceof t.Collection){var P,b=new Array(n._getLength());if(l=i?o.observableArray(b):b,t.KnockoutUtils._storeOriginalObject(l,n),i)for(r=0;r<n._modelIndices.length;r++)P=n._modelIndices[r],l()[P]=t.KnockoutUtils.map(n._atInternal(P,null,!0,!1),e);else for(r=0;r<n._modelIndices.length;r++)P=n._modelIndices[r],l[P]=t.KnockoutUtils.map(n._atInternal(P,null,!0,!1),e);c=function(o){var e;try{if(!l[t.KnockoutUtils.underUpdateProp]){for(l[t.KnockoutUtils.collUpdatingProp]=!0,e=0;e<o.length;e++){var i=o[e].index,r=t.KnockoutUtils._getModel(o[e].value),c=o[e].status;"added"===c?i>=n.length-1?n.add(r):n.add(r,{at:i}):"deleted"===c&&n._removeInternal(r,i)}n.comparator&&(l[t.KnockoutUtils.underUpdateProp]=!0,l.sort(function(o,e){return t.KnockoutUtils._callSort(o,e,n.comparator,n,this)}),l[t.KnockoutUtils.underUpdateProp]=!1)}}catch(t){throw t}finally{l[t.KnockoutUtils.collUpdatingProp]=!1}},i&&l.subscribe&&(l[t.KnockoutUtils.updatingCollectionFunc]=c,l[t.KnockoutUtils.subscriptionProp]=l.subscribe(c,null,"arrayChange")),u=function(o,n,e){var i;try{if(l[t.KnockoutUtils.collUpdatingProp])return;n instanceof t.Collection&&(l[t.KnockoutUtils.underUpdateProp]=!0,i=e.index,l.splice(i,1))}catch(t){throw t}finally{l[t.KnockoutUtils.underUpdateProp]=!1}},s=function(o,n,i){var r,c;try{if(l[t.KnockoutUtils.collUpdatingProp])return;if(n instanceof t.Collection&&(l[t.KnockoutUtils.underUpdateProp]=!0,void 0!==(r=n._localIndexOf(o))&&r>-1))if(c=t.KnockoutUtils.map(o,e),i.fillIn){for(var u=Array.isArray(l)?l.length:l().length;u<r;u++)l.splice(u,0,t.KnockoutUtils.map(n._atInternal(u,null,!0,!1),e));l.splice(r,1,c)}else l.splice(r,0,c)}catch(t){throw t}finally{l[t.KnockoutUtils.underUpdateProp]=!1}},K=function(n,e){try{if(l[t.KnockoutUtils.collUpdatingProp])return;n instanceof t.Collection&&(l[t.KnockoutUtils.underUpdateProp]=!0,o.isObservable(l)?(l[t.KnockoutUtils.subscriptionProp]&&l[t.KnockoutUtils.subscriptionProp].dispose(),l.removeAll(),l[t.KnockoutUtils.updatingCollectionFunc]&&l.subscribe(l[t.KnockoutUtils.updatingCollectionFunc],null,"arrayChange")):l=[])}catch(t){throw t}finally{l[t.KnockoutUtils.underUpdateProp]=!1}},f=function(o,e){try{if(l[t.KnockoutUtils.collUpdatingProp])return;o instanceof t.Collection&&(l[t.KnockoutUtils.underUpdateProp]=!0,l.sort(function(e,i){return t.KnockoutUtils._callSort(e,i,n.comparator,o,this)}))}catch(t){throw t}finally{l[t.KnockoutUtils.underUpdateProp]=!1}},n.OnInternal(t.Events.EventType.ADD,s,void 0,void 0,!0),n.OnInternal(t.Events.EventType.REMOVE,u,void 0,void 0,!0),n.OnInternal(t.Events.EventType.RESET,K,void 0,void 0,!0),n.OnInternal(t.Events.EventType.SORT,f,void 0,void 0,!0)}else{if(void 0===n)return;for(p in l={},p=null,a=n.attributes)a.hasOwnProperty(p)&&(d=o.observable(n.get(p)),l[p]=d,(U=v(p))._prop=p,d.subscribe&&d.subscribe(U));k=function(o,n){var e,i;try{for(i in l[t.KnockoutUtils.underUpdateProp]=!0,e=o.changedAttributes())e.hasOwnProperty(i)&&l[i](o.get(i))}catch(t){throw t}finally{l[t.KnockoutUtils.underUpdateProp]=!1}},n.OnInternal(t.Events.EventType.CHANGE,k,void 0,void 0,!0),t.KnockoutUtils._storeOriginalObject(l,n),e&&e(l)}return l},t.KnockoutUtils._getModel=function(o){return o instanceof t.Model?o:o.hasOwnProperty(t.KnockoutUtils.internalObjectProperty)?o[t.KnockoutUtils.internalObjectProperty]:o},t.KnockoutUtils._callSort=function(o,n,e,i,l){return t.Collection.SortFunc(t.KnockoutUtils._getModel(o),t.KnockoutUtils._getModel(n),e,i,l)},t.KnockoutUtils._storeOriginalObject=function(o,n){Object.defineProperty(o,t.KnockoutUtils.internalObjectProperty,{value:n,enumerable:!1})}});