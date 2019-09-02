import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import './index.scss'
export default class Topbar extends Component {
  constructor () {
    super()
    this.state = {
      // 选中项项卡index
      activeIndex: 2
    }
    this.navList = [
      {
        name: 'APP下载',
        href: ''
      },
      {
        name: '新手引导',
        href: '/guide'
      },
      {
        name: '首页',
        href: '/'
      }
    ]
  }

  componentWillMount () {

  }

  /**
     * 切换选项卡
     * @param {Number} index
     */
  toggleNav (index) {
    if (index === this.state.activeIndex) {
      return
    }
    this.setState({
      activeIndex: index
    })
  }

  render () {
    const { activeIndex } = this.state
    console.log(activeIndex)
    return (
      <div className="wrap">
        <div className="content-wrap">
          <div className="content clearfix">
            <div className="fl">
              <div className='logo fl'></div>
              <div className='price fl'>当前金价：
                <span>325.5
                  <span>元/克</span>
                </span>
              </div>
              <div className="refresh fl"></div>
            </div>
            <div className="fr">
              {this.navList.map((item, index) => {
                return (
                  <div
                    key = {index}
                    onClick={this.toggleNav.bind(this, index)}
                    className={index === activeIndex ? 'active fr tab' : 'fr tab'}>

                    {index !== 0 ? (<Link to={item.href}>{item.name}</Link>) : <span className="download">{item.name}</span>}
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    )
  }
}
