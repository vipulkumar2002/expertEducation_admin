(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[148],{2105:function(e,t,a){"use strict";a.r(t);var n=a(76),r=a.n(n),i=a(127),l=a(13),c=a(14),o=a(16),s=a(15),u=a(0),m=a.n(u),d=a(1272),g=a(1273),f=a(1274),p=a(184),h=a(1277),v=a(787),w=a(789),E=a(786),S=a(785),z=a(796),N=a(177),b=a(178),y=a(812),C=(a(1035),a(446)),P=a(269),k=a(21),A=(a(810),a(793),function(e){Object(o.a)(a,e);var t=Object(s.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={rowData:[],paginationPageSize:20,currenPageSize:"",getPageSize:"",defaultColDef:{sortable:!0,editable:!0,resizable:!0,suppressMenu:!0},columnDefs:[{headerName:"S.No",valueGetter:"node.rowIndex + 1",field:"sortorder",width:100,filter:!0},{headerName:"Image",field:"icon",filter:!0,width:120,cellRendererFramework:function(e){return m.a.createElement("div",{className:"d-flex align-items-center cursor-pointer"},m.a.createElement("img",{className:"rounded-circle mr-50",src:e.data.icon,alt:"user avatar",height:"40",width:"40"}))}},{headerName:"Category Name",field:"catName",filter:"agSetColumnFilter",width:250,cellRendererFramework:function(e){return m.a.createElement("div",{className:"d-flex align-items-center cursor-pointer"},m.a.createElement("div",{className:"ml-2"},m.a.createElement("span",null,e.data.catName)))}},{headerName:"Actions",field:"transactions",width:150,cellRendererFramework:function(t){return m.a.createElement("div",{className:"actions cursor-pointer"},m.a.createElement(C.a,{size:20,color:"red",onClick:function(){var a=e.gridApi.getSelectedRows();e.runthisfunction(t.data._id),e.gridApi.updateRowData({remove:a})}}))}}]},e.onGridReady=function(t){e.gridApi=t.api,e.gridColumnApi=t.columnApi,e.setState({currenPageSize:e.gridApi.paginationGetCurrentPage()+1,getPageSize:e.gridApi.paginationGetPageSize(),totalPages:e.gridApi.paginationGetTotalPages()})},e.updateSearchQuery=function(t){e.gridApi.setQuickFilter(t)},e.filterSize=function(t){e.gridApi&&(e.gridApi.paginationSetPageSize(Number(t)),e.setState({currenPageSize:t,getPageSize:t}))},e}return Object(c.a)(a,[{key:"componentDidMount",value:function(){var e=Object(i.a)(r.a.mark((function e(){var t=this;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N.a.get("/allCat").then((function(e){var a=e.data.data;t.setState({rowData:a})}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"runthisfunction",value:function(){var e=Object(i.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t),e.next=3,N.a.get("/deleteCat/".concat(t)).then((function(e){console.log(e)}));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.state,a=t.rowData,n=t.columnDefs,r=t.defaultColDef;return m.a.createElement(d.a,{className:"app-user-list"},m.a.createElement(g.a,{sm:"12"}),m.a.createElement(g.a,{sm:"12"},m.a.createElement(f.a,null,m.a.createElement(d.a,{className:"m-2"},m.a.createElement(g.a,null,m.a.createElement("h1",{"col-sm-6":!0,className:"float-left"},"Category List")),m.a.createElement(g.a,null,m.a.createElement(p.a,{className:" btn btn-danger float-right",onClick:function(){return k.a.push("/app/category/addCategory")}},"Add Category"))),m.a.createElement(h.a,null,null===this.state.rowData?null:m.a.createElement("div",{className:"ag-theme-material w-100 my-2 ag-grid-table"},m.a.createElement("div",{className:"d-flex flex-wrap justify-content-between align-items-center"},m.a.createElement("div",{className:"mb-1"},m.a.createElement(v.a,{className:"p-1 ag-dropdown"},m.a.createElement(w.a,{tag:"div"},this.gridApi?this.state.currenPageSize:""*this.state.getPageSize-(this.state.getPageSize-1)," ","-"," ",this.state.rowData.length-this.state.currenPageSize*this.state.getPageSize>0?this.state.currenPageSize*this.state.getPageSize:this.state.rowData.length," ","of ",this.state.rowData.length,m.a.createElement(P.a,{className:"ml-50",size:15})),m.a.createElement(E.a,{right:!0},m.a.createElement(S.a,{tag:"div",onClick:function(){return e.filterSize(20)}},"20"),m.a.createElement(S.a,{tag:"div",onClick:function(){return e.filterSize(50)}},"50"),m.a.createElement(S.a,{tag:"div",onClick:function(){return e.filterSize(100)}},"100"),m.a.createElement(S.a,{tag:"div",onClick:function(){return e.filterSize(134)}},"134")))),m.a.createElement("div",{className:"d-flex flex-wrap justify-content-between mb-1"},m.a.createElement("div",{className:"table-input mr-1"},m.a.createElement(z.a,{placeholder:"search...",onChange:function(t){return e.updateSearchQuery(t.target.value)},value:this.state.value})),m.a.createElement("div",{className:"export-btn"},m.a.createElement(p.a.Ripple,{color:"primary",onClick:function(){return e.gridApi.exportDataAsCsv()}},"Export as CSV")))),m.a.createElement(b.a.Consumer,null,(function(t){return m.a.createElement(y.AgGridReact,{gridOptions:{},rowSelection:"multiple",defaultColDef:r,columnDefs:n,rowData:a,onGridReady:e.onGridReady,colResizeDefault:"shift",animateRows:!0,floatingFilter:!1,pagination:!0,paginationPageSize:e.state.paginationPageSize,pivotPanelShow:"always",enableRtl:"rtl"===t.state.direction})})))))))}}]),a}(m.a.Component));t.default=A},793:function(e,t,a){}}]);
//# sourceMappingURL=148.9f5168ba.chunk.js.map