'use strict';

import Base from './base.js';

export default class extends Base {
	* indexAction(){
		let model   	= this.model('home_category');
		//首页顶级分类
		let category 	= yield model.readTopClass();
		let cPath  		= this.http.get("type");
		let ids 		= this.http.get("id");
		let orderArticle = this.orderArticle(category);

		switch(cPath){
			case 'list':
				let selectList = yield model.readChildClass(ids);
				let title  = yield model.readId(ids);
				this.assign({
					'allCategory' : category,
					'indexList': selectList,
					'type' : 'list',
					'title' : title.name,
					'markId' : ids
				});
				this.display();
			break;
			default:
				let indexList   = [];
				for(let i = 0; i < category.length; i ++){
					let id = category[i].id;
					let overData = yield model.readChildClass(id);
					indexList.push(overData);
				}
				this.assign({
					'allCategory' : category,
					'indexList' : indexList,
					'type' : 'all',
					'title' : 'The latest blog',
					'markId' : ids
				});
				return this.display();
		}
	}

	* detialAction(){
		let ids 	= this.http.get("id");
		let fatherId = this.http.get("path");
		let model 	= this.model('home_category'); 
		let cModel  = this.model('home_content');
		let tsUrl = this.http.url;
		//获取顶级分类
		let category= yield model.readTopClass();
		//获取当前文章单条
		let resObj  = yield model.readId(ids);
		//文章多条
		let detialData = [];
		let detialList = yield model.readChildClass(fatherId);
		let listLength = detialList.length;
		for(let i = 0; i < listLength; i ++){
			detialData.push(detialList[i]);
			let parentId = detialList[i].id;
			let detialChild = yield model.readChildClass(parentId);
			detialData[i].parents = [];
			detialData[i].parents = detialChild;
		}
		//顶级分类排序
		let orderArticle = this.orderArticle(category);
		//获取文章详情
		let cContent = yield cModel.readIdContent(ids);
		this.assign({
			'title' : resObj.name,
			'allCategory' : orderArticle,
			'listLength' : listLength,
			'leftData' : detialData,
			'content' : cContent.content,
			'markId' : ids,
			'url' : tsUrl
		});
		return this.display();
	}

	//数组内对象带有order字段的数组进行排序
	orderArticle(arr){
		for(let i = 0; i < arr.length-1; i++){
			for(let j = i+1; j < arr.length; j++){
				if(arr[i].orders>arr[j].orders){
					let temp = arr[i];
					arr[i] = arr[j];
					arr[j] = temp;
				}
			}
		}
		return arr;
	}
}