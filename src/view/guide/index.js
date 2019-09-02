import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'
// import request from './../../tools/request'
import './index.scss'
import imgURL from './../../assets/images/banner.png'
import newdownload from './../../assets/images/newdownload.png'
import newregister from './../../assets/images/newregister.png'
import newopenaccount from './../../assets/images/newopenaccount.png'
import newtransaction from './../../assets/images/newtransaction.png'
import newtd from './../../assets/images/newtd.png'
import company from './../../assets/images/company.png'

@inject('loadingStore')
@observer

class Guide extends Component {
  constructor () {
    super()
    this.state = {
    }
  }

  componentDidMount () {
    // 测试ajax
    // this.sendRequest()
    setTimeout(() => {
      this.props.loadingStore.toggleLoadingStatus(false)
    }, 500)
  }

  render () {
    return (
      <div className="guide">
        <div className="newdownload">
          <img src={newdownload} />
        </div>
        <div className="imgwrap">
          <img src={newregister} />
        </div>
        <div className="imgwrap">
          <img src={newtransaction} />
        </div>
        <div className="imgwrap">
          <img src={newopenaccount} />
        </div>
        <div className="imgwrap">
          <img src={newtd} />
        </div>
        <div className="tip">
          <span>-&nbsp;&nbsp;&nbsp;市场有风险，投资需谨慎&nbsp;&nbsp;&nbsp;-</span>
        </div>
      </div>
    )
  }
}
export default Guide
