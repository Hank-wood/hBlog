'use strict';
/**
 * model
 */
export default class extends think.model.base {
    //取出顶级分类
    readTopClass(){
        return this.limit().where({path: 0}).select();
    }
    //取出指定子集分类
    readChildClass(c){
        return this.limit().where({path:c}).select();
    }
    //取出指定id数据
    readId(id){
        return this.where({id:id}).find();
    }
}