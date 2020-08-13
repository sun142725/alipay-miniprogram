Page({
  data: {
    userId: ''
  },
  onLoad() {
    let _this = this
    this.webViewContext = my.createWebViewContext('web-view');
    my.getStorage({
      key: 'userId',
      success: (result) => {
        console.log(result.data)
        _this.data.userId = result.data
      },
      fail: () => {
        
      },
      complete: () => {
        
      }
    });
    console.log(this.data.code)
  },
  onmessage(e){
    console.log('收到', e)
    let method = e.detail.method
    let _this = this
    switch(method){
      case 'getUserInfo':
        this.webViewContext.postMessage({
            "success":true,
            "method":"getUserInfo",
            "msgId":e.detail.msgId, // 消息id
            "data":{
              "alipayUserId": _this.data.userId,
              "phone":"18334771358",
            },
            "errorMsg":""
            })
        break;
      case 'getUserReport':
        this.webViewContext.postMessage({
            "success":true,
            "method":"getUserReport",
            "msgId":e.detail.msgId, // 消息id
            "data":{"contentText":"点击查看【用户体检报告】>>","template":"textLink",contentUrl: "https://www.baidu.com"},
            "errorMsg":""
            })
        break;
    }
  }
});
