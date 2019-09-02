import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'
// import request from './../../tools/request'
import './index.scss'

@inject('loadingStore')
@observer

class Detail extends Component {
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
      <div className="detail">
        <div className="content">
          2.2 国美平台经营者是指经营国美平台的各法律主体，您可随时查看国美平台各网站首页底部公示的证照信息以确定与您履约的主体。本协议项下，国美平台经营者可能根据国美平台的业务调整而发生变更，变更后的国美平台经营者与您共同履行本协议并向您提供服务，国美平台经营者的变更不会影响您本协议项下的权益。国美平台经营者还有可能因为提供新的国美平台服务而新增，如您使用新增的国美平台服务，视为您同意新增的国美平台经营者与您共同履行本协议。发生争议时，您可根据您具体使用的服务及对您权益产生影响的具体行为对象确定与您履约的主体及争议相对方。
        </div>
      </div>
    )
  }
}
export default Detail
