let Mobile=function ()
{
    this.batteryStatus=Math.floor(Math.random()*100);
    this.editingMessage=[];
    this.receivingBox=[];
    this.sentMessage=[];
    this.checkOnOff=function ()
    {
        return this.Status;
    }
    this.status=function(Statuss)
    {
        this.batteryStatus--;
        this.Status=Statuss;
    }
    this.charge=function ()
    {
        if(this.batteryStatus===0)
        {
            alert("Charge");
        }else alert("Still in use");
        this.batteryStatus--;
    }
    this.createMessage=function ()
    {
        let message=prompt("Enter a message:");
        this.editingMessage.push(message);
        this.batteryStatus--;
        return message;
    }
    this.receiveMessage=function (message)
    {
        this.receivingBox.push(message);
        this.batteryStatus--;
    }
    this.sendMessage=function (message)
    {
        this.sentMessage.push(message);
        this.batteryStatus--;
    }
    this.checkReceivingBox=function ()
    {
        this.batteryStatus--;
        if(this.receivingBox.length===0)
            return "Không có gì trong hộp thư đến";
        else return this.receivingBox;
    }
    this.checkSentMessage=function ()
    {
        this.batteryStatus--;
        return this.sentMessage;
    }
    this.alerting=function ()
    {
        if(this.Status==="ON")
            alert("Các chức năng có thể hoạt động")
        else alert("Hãy bật điện thoại lên !!");
    }
}
let nokia=new Mobile();
let iphone=new Mobile();
alert(nokia.batteryStatus);
alert(iphone.batteryStatus);
nokia.status("OFF");
alert(nokia.checkOnOff());
nokia.alerting();
nokia.charge();
let messages=nokia.createMessage();
nokia.sendMessage(messages);
iphone.receiveMessage(messages);
alert(iphone.checkReceivingBox());
alert(nokia.checkSentMessage());

