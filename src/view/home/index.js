import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'
// import request from './../../tools/request'
import './index.scss'
import { Carousel } from 'antd'
import imgURL from './../../assets/images/banner.png'
import intru from './../../assets/images/intruduce.png'
import img1 from './../../assets/images/img1.png'
import img2 from './../../assets/images/img2.png'
import img3 from './../../assets/images/img3.png'
import img4 from './../../assets/images/img4.png'
import company from './../../assets/images/company.png'
import jd from './../../assets/images/jd.png'
import gome from './../../assets/images/gome.png'

@inject('loadingStore')
@observer

class Home extends Component {
  constructor () {
    super()
    this.state = {
      visible: false,
      placement: 'left',
      dotPositionSlide: 'right',
      dotPosition: 'bottom',
      newsList: [
        '1TD投资课堂现在开讲！你还在等些什么？你还在等些什么？你还在等些什么？你还在等些什么？文案...',
        '2TD投资课堂现在开讲！你还在等些什么？你还在等些什么？你还在等些什么？你还在等些什么？文案...',
        '3TD投资课堂现在开讲！你还在等些什么？你还在等些什么？你还在等些什么？你还在等些什么？文案...'
      ]
      // slideList: [{
      //   url: imgURL,
      //   type: ''
      // },
      // {
      //   url: imgURL,
      //   type: ''
      // },
      // {
      //   url: imgURL,
      //   type: ''
      // },
      // {
      //   url: imgURL,
      //   type: ''
      // }

      // ]
    }
  }

  componentDidMount () {
    // 测试ajax
    this.sendRequest()
    setTimeout(() => {
      this.props.loadingStore.toggleLoadingStatus(false)
    }, 500)
  }

  async sendRequest () {
    // await request.post('/api', { id: 'ceshi' })
  }

  showDrawer = () => {
    this.setState({
      visible: true
    })
  };

  onClose = () => {
    this.setState({
      visible: false
    })
  };

  render () {
    const { newsList, dotPositionSlide, dotPosition, slideList, visible } = this.state
    return (
      <div className="home">
        <div className="slidewrap">
          <Carousel dotPosition={dotPosition} dots="false" >
            {/* {slideList.map((item, index) => {
              return (
                <div key={index}>
                  <img src={item.url} />
                </div>
              )
            })} */}
            <div >
              <img src={imgURL} />
            </div>
          </Carousel>
          <div className="carouselwrap">
            <span>公告：
            </span>
            <div className="news">
              <Carousel dotPosition={dotPositionSlide} autoplay>
                {newsList.map((item, index) => {
                  return (
                    <div
                      key = {index}>
                      <span>{ item }</span>
                    </div>
                  )
                })}
              </Carousel>
            </div>
          </div>
        </div>
        <div className="intruduce">
          <img src={intru} />
        </div>
        <div className="imgwrap">
          <img src={img1} />
        </div>
        <div className="imgwrap">
          <img src={img2} />
        </div>
        <div className="imgwrap">
          <img src={img3} />
        </div>
        <div className="imgwrap">
          <img src={img4} />
        </div>
        <div className="company">
          <img src={company} />
        </div>

        <div className="leadapp" onClick={this.showDrawer}></div>
        <div className={`appswrap ${visible ? 'show' : 'hide'}`} ref='appswrap'>
          <div className="detailapp clearfix">
            <div className="fl clearfix">
              <div>
                <img src={jd} />
                <span>
                  国美黄金京东旗舰店
                </span>
              </div>
              <div className='gomebox'>
                <img className="gomelogo" src={gome}/>
                <span>
                  国美黄金在线旗舰店
                </span>
              </div>
            </div>
            <div className="fr appload">
              <div onClick={this.onClose}></div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Home
