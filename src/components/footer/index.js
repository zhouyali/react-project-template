import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import our from '../../assets/images/our.png'
import './index.scss'
export default class Footer extends Component {
  constructor () {
    super()
    this.state = {
      // 选中项项卡index
      activeIndex: 0
    }
  }

  render () {
    return (
      <div className="footer">
        <div className="footercontent clearfix">
          <div className="fl">
            <div className="tab">
                联系我们
            </div>
            <p>公司地址:北京市朝阳区霄云路26号鹏润大厦9层</p>
            <p>客服邮箱:finance-service@gomefinance.com.cn</p>
            <h6>4008-133-233</h6>
            <p>咨询时间:工作日09:00—18:00</p>
          </div>
          <div className="fr">
            <div className="tab last">
                了解我们
            </div>
            <img src={our}/>
            <span className="follow">打开手机扫一扫,关注我们</span><br/>
            <span className="spanlink">用户协议</span>
          </div>
          <div className="fr middle">
            <div className="tab">
                友情链接
            </div>
            <span className="spanlink">国美在线</span><br/>
            <span className="spanlink">国美金融</span><br/>
            <span className="spanlink">京东店铺</span><br/>
            <span className="spanlink">拼多多店铺</span>
          </div>

        </div>
        <p className="remark">Copyright @ 2013-2018 国美黄金销售（北京）有限公司 版权所有 京ICP备18011385号-1</p>
      </div>
    )
  }
}
