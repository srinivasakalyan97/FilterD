import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'filterz';
  employees = [{
    "Name": "Manirul Monir",
    "City": "Sylhet",
    "Country": "Bangladesh"
  }, {
    "Name": "Arup",
    "City": "Sylhet",
    "Country": "Bangladesh"
  }, {
    "Name": "Person 1",
    "City": "Dhaka",
    "Country": "Bangladesh"
  }, {
    "Name": "Person 2",
    "City": "Dhaka",
    "Country": "Bangladesh"
  }, {
    "Name": "Munim Munna",
    "City": "Narshingdi",
    "Country": "Bangladesh"
  }, {
    "Name": "Mahfuz Ahmed",
    "City": "Narshingdi",
    "Country": "Bangladesh"
  }, {
    "Name": "Tawkir Ahmed",
    "City": "Gazipur",
    "Country": "Bangladesh"
  }, {
    "Name": "Alfreds 2",
    "City": "Berlin",
    "Country": "Germany"
  }, {
    "Name": "Alfreds Futterkiste",
    "City": "Berlin",
    "Country": "Germany"
  }, {
    "Name": "Blauer See Delikatessen",
    "City": "Mannheim",
    "Country": "Germany"
  }, {
    "Name": "Blondel père et fils",
    "City": "Strasbourg",
    "Country": "France"
  }, {
    "Name": "Bon app'",
    "City": "Marseille",
    "Country": "France"
  }, {
    "Name": "Centro comercial Moctezuma",
    "City": "México D.F.",
    "Country": "France"
  }];
  XLfilters = { list: [], dict: {}, results: [], all:[] };
  
  markAll(field, b) {
      this.XLfilters.dict[field].list.forEach((x) => {x.checked=b;});
    }

  clearAll = function(field) {
    this.XLfilters.dict[field].searchText='';
    this.XLfilters.dict[field].list.forEach((x) => {x.checked=true;});
    }

  XLfiltrate = function() {
    	var i,j,k,selected,blocks,filter,option, data=this.XLfilters.all,filters=this.XLfilters.list;
      this.XLfilters.results=[];
      for (j=0; j<filters.length; j++) {
      	filter=filters[j];
        filter.regex = filter.searchText.length?new RegExp(filter.searchText, 'i'):false;
        for(k=0,selected=0;k<filter.list.length;k++){
        	if(!filter.list[k].checked)selected++;
          filter.list[k].visible=false;
          filter.list[k].match=filter.regex?filter.list[k].title.match(filter.regex):true;
        }
        filter.isActive=filter.searchText.length>0||selected>0;
      }
      for (i=0; i<data.length; i++){
        blocks={allows:[],rejects:[],mismatch:false};
      	for (j=0; j<filters.length; j++) {
          filter=filters[j]; option=filter.dict[data[i][filter.field]];
          (option.checked?blocks.allows:blocks.rejects).push(option);
          if(filter.regex && !option.match) blocks.mismatch=true;
      	}
        if(blocks.rejects.length==1) blocks.rejects[0].visible=true;
        else if(blocks.rejects.length==0&&!blocks.mismatch){
          this.XLfilters.results.push(data[i]);
        	blocks.allows.forEach((x)=>{x.visible=true});
        }
      }
      for (j=0; j<filters.length; j++) {
      	filter=filters[j];filter.options=[];
        for(k=0;k<filter.list.length;k++){
          if(filter.list[k].visible && filter.list[k].match) filter.options.push(filter.list[k]);
        }
      }
    }

    createXLfilters(arr, fields) {
      this.XLfilters.all = arr;
      for (var j=0; j<fields.length; j++) this.XLfilters.list.push(this.XLfilters.dict[fields[j]]={list:[],dict:{},field:fields[j],searchText:"",active:false,options:[]});
      for (var i=0,z; i<arr.length; i++) for (j=0; j<fields.length; j++) {
      z=this.XLfilters.dict[fields[j]];
      z.dict[arr[i][fields[j]]] || z.list.push(z.dict[arr[i][fields[j]]]={title:arr[i][fields[j]],checked:true, visible:false,match:false});
    }
    }

    changeFunction(event){
      this.XLfiltrate()
    }

ngOnInit(){
  this.createXLfilters(this.employees, ['Country','City']);
  this.XLfiltrate()
}

}