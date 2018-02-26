export class TestSet {

    private _setVal : string =  'set初始值';

    noset(){
        return '这是没set的方法'
    }

    get  getv(){
        return this._setVal
    }

    set set(name: any) {
        this._setVal = name +'set后面加的内容'; 
    }


}
