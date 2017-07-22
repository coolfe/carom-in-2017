import React, { PropTypes } from 'react';
import { Router, browserHistory, Link } from 'react-router';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import fetch from 'isomorphic-fetch';
import { message } from 'antd';

import Cookie from 'react-cookie';
import { DatePicker, Popover, Select } from 'antd';

import ECTeam from '../../../components/ECTeam';
import NoContent from '../../../components/NoContent';
import ErrorMessage from '../../../components/Error';
import { default as mapDispatchToProps } from '../../../actions/index';

import ReactEcharts from 'echarts-for-react';
//import './index.less';


var url = 'https://my.workec.com/ecapp/ec/get'
var url = 'http://static.workec.com/ecapp/ec/get'

class ViewMessage extends React.Component {

    componentWillMount() {
        this.props.fetchECTeamMessage(1);
    }

    componentDidUpdate() {
        //滚动到当前窗口，需要异步处理一下
        var needShowIndex = this.props.ecteamData.needShowIndex;
        if (needShowIndex) {
            setTimeout(function () {
                if (this.props.ecteamData.curpage == 1) {
                    window.scrollTo(0, 20000);
                } else {
                    this.refs["item_" + needShowIndex].scrollIntoView();
                }
                this.props.resetShowIndex();
            }.bind(this), 200);
        }
    }

    componentDidMount() {
        this.props.bindScrollGetMore(function () {
            var state = this.props.ecteamData;
            if (state.end == 1 || state.loading) {
                return;
            }
            this.props.fetchECTeamMessage(state.curpage + 1)
        }.bind(this));
    }

    render() {
        var state = this.props.ecteamData;
        var loading = <div className="ecTeam-box ecTeam-box-sno">
            <div className="more-btn loading">
                <div>正在加载中...</div>
            </div>
        </div>

        var hasMore = <div className="ecTeam-box ecTeam-box-sno">
            <div className="more-btn">
                <a href="javascript:;"
                    onClick={() => this.props.fetchECTeamMessage(state.curpage + 1)}>查看更多消息</a>
            </div>
        </div>

        var noMessage = <div className="ecTeam-box ecTeam-box-sno">
            <NoContent />
        </div>

        //首屏出错
        if (state.emptyError) {
            return <ErrorMessage />
        }

        //没有消息
        if (state.list.length == 0 && state.end == 1) {
            return noMessage
        }

        return <div>
            {
                state.loading ?
                    loading//正在加载更多消息
                    :
                    state.end == 1
                        ?
                        ""//没有更多
                        :
                        hasMore//有更多消息
            }

            {
                state.list && state.list.map((item, index) => {
                    return (<div data-index={index} ref={"item_" + index}><ECTeam data={item} userid={state.userid} /></div>)
                })
            }
        </div>

    }
}


const mapStateToProps = (state) => {
    return {
        ecteamData: state.ecteamData
    }
};

ViewMessage.contextTypes = {
    // shareData: PropTypes.object.isRequired,
    //history: PropTypes.object.isRequired,
    //store: PropTypes.object.isRequired
};


export default connect(mapStateToProps, mapDispatchToProps)(ViewMessage);
