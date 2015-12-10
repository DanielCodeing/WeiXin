
class ScrollText extends eui.Group{

    private data: Array<any>;
    private count: number;
    private count1: number;
    public constructor(str){
        this.data=new Array<any>();
        this.data = str.begin;
        super();     
    }
    
    /**override*/  
    public createChildren(): void {
        super.createChildren();
        this.initPanel();
    }
        
    // 初始化面板
    public initPanel():void
    {
        this.count=110;
        this.count1=0;
        EventManage.addEvent(this,this,egret.Event.ENTER_FRAME,this.gogo);
    }
    private gogo(): void
    {
        if(++this.count == 120) {
            if(this.count1 >= this.data.length) {
                EventManage.removeEvent(this,this,egret.Event.ENTER_FRAME,this.gogo);
                this.dispatchEvent(new lcp.LEvent("txtscrollcomplete",this));
            }
            else {
                this.createTxt(this.data[this.count1].say,this.count1);
            }  
            this.count = 0;
            ++this.count1;
        }
    }
    private createTxt(str,i): void {
        var txtF = new eui.Label();
        txtF.fontFamily = "微软雅黑";
        txtF.cacheAsBitmap = true;
//        txtF.strokeColor = 0x1B1F28;
//        txtF.stroke = 1;
        txtF.textColor=0xFFFFFF;
        txtF.width = 360;
        txtF.size = 20;
        txtF.text = str;
        txtF.textAlign=egret.HorizontalAlign.LEFT;
        txtF.x = 0;
        txtF.y = 30 * i;
        this.addChild(txtF);
//        txtF.alpha = 0;
//        egret.Tween.get(txtF).to({ alpha: 1 },1000).call(function() 
//        {
//            egret.Tween.removeTweens(txtF);
//        });
    }
}

