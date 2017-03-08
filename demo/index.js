
import { Con, Row, Col } from 'bee-layout';
import { Panel } from 'bee-panel';
import Button from 'bee-button';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Reference from '../src';
import { FormControl, Modal, Label, Tree, Table, FormGroup, Icon, Popconfirm } from 'tinper-bee';
import Tabs, { TabPane } from 'rc-tabs';
import TabContent from 'rc-tabs/lib/TabContent';
import ScrollableInkTabBar from 'rc-tabs/lib/ScrollableInkTabBar';

const CARET = <i className="uf uf-arrow-down"></i>;

const CARETUP = <i className="uf uf-arrow-up"></i>;


/**
*
* @title 这是标题
* @description 这是描述
*
*/

const TreeNode = Tree.TreeNode;

const staticdata = {
    "1001A11000000000SVW0": [
    {
      "planpriority": "",
      "pk_org": "0001A110000000000BSR",
      "refcode": "PM201604050020",
      "pk_group": "0001A110000000000BSR",
      "refname": "市场拓展费",
      "pk_eps": "null",
      "pk_workcalendar": "",
      "refpk": "1001A11000000000SXPP",
      "project_sh_name": "",
      "planmodel": "",
      "refjoin": "null"
    },
    {
      "planpriority": "",
      "pk_org": "0001A110000000000BSR",
      "refcode": "PM201604050021",
      "pk_group": "0001A110000000000BSR",
      "refname": "零星客户",
      "pk_eps": "null",
      "pk_workcalendar": "",
      "refpk": "1001A11000000000SXPS",
      "project_sh_name": "",
      "planmodel": "",
      "refjoin": "null"
    }
  ],
  "1001A11000000000SVX6": [
    {
      "planpriority": "",
      "pk_org": "0001A110000000000BSR",
      "refcode": "PM201604050020",
      "pk_group": "0001A110000000000BSR",
      "refname": "市场拓展费2",
      "pk_eps": "null",
      "pk_workcalendar": "",
      "refpk": "1001A11000000000SXPP",
      "project_sh_name": "",
      "planmodel": "",
      "refjoin": "null"
    },
    {
      "planpriority": "",
      "pk_org": "0001A110000000000BSR",
      "refcode": "PM201604050021",
      "pk_group": "0001A110000000000BSR",
      "refname": "零星客户2",
      "pk_eps": "null",
      "pk_workcalendar": "",
      "refpk": "1001A11000000000SXPS",
      "project_sh_name": "",
      "planmodel": "",
      "refjoin": "null"
    }
],
"1001A11000000000SVD6": [
  {
    "planpriority": "",
    "pk_org": "0001A110000000000BSR",
    "refcode": "PM201604050020",
    "pk_group": "0001A110000000000BSR",
    "refname": "市场拓展费3",
    "pk_eps": "null",
    "pk_workcalendar": "",
    "refpk": "1001A11000000000SXPP",
    "project_sh_name": "",
    "planmodel": "",
    "refjoin": "null"
  },
  {
    "planpriority": "",
    "pk_org": "0001A110000000000BSR",
    "refcode": "PM201604050021",
    "pk_group": "0001A110000000000BSR",
    "refname": "零星客户3",
    "pk_eps": "null",
    "pk_workcalendar": "",
    "refpk": "1001A11000000000SXPS",
    "project_sh_name": "",
    "planmodel": "",
    "refjoin": "null"
  }
]
};

const treeData = [
    {
      "id": "1001A11000000000SMAB",
      "name": "规费及其他",
      "pid": "null",
      "refpk": "1001A11000000000SMAB",
      "children": [
          {
            "id": "1001A11000000000SVW0",
            "name": "内部规费",
            "pid": "1001A11000000000SMAB",
            "refpk": "1001A11000000000SVW0"
          },
          {
            "id": "1001A11000000000SVX6",
            "name": "外部规费",
            "pid": "1001A11000000000SMAB",
            "refpk": "1001A11000000000SVX6"
          }
      ]
    },
    {
      "id": "1001A11000000000SVJY",
      "name": "业务招待费",
      "pid": "null",
      "refpk": "1001A11000000000SVJY",
      "children": [
          {
            "id": "1001A11000000000SVD6",
            "name": "宣传品",
            "pid": "1001A11000000000SVD5",
            "refpk": "1001A11000000000SVD6"
          },
          {
            "id": "1001A11000000000SVD7",
            "name": "随附品",
            "pid": "1001A11000000000SVD5",
            "refpk": "1001A11000000000SVD7"
          }
      ]
    },
    {
      "id": "1001A11000000000SVRZ",
      "name": "费用类",
      "pid": "1001A11000000000SVJY",
      "refpk": "1001A11000000000SVRZ"
    },
    {
      "id": "1001A11000000000SVS0",
      "name": "业务用酒",
      "pid": "1001A11000000000SVJY",
      "refpk": "1001A11000000000SVS0"
    },

    {
      "id": "1001A11000000000SVS4",
      "name": "工薪类",
      "pid": "1001A11000000000SVJZ",
      "refpk": "1001A11000000000SVS4",
      "children": [
          {
            "id": "1001A11000000000SVJZ",
            "name": "工资及附加",
            "pid": "null",
            "refpk": "1001A11000000000SVJZ"
          },
          {
            "id": "1001A11000000000SVBN",
            "name": "工资代扣项",
            "pid": "1001A11000000000SMAB",
            "refpk": "1001A11000000000SVBN"
          }
      ]
    },
    {
      "id": "1001A11000000000SVS5",
      "name": "社保类",
      "pid": "1001A11000000000SVJZ",
      "refpk": "1001A11000000000SVS5",
      "children": [
          {
            "id": "1001A11000000000SVS7",
            "name": "代扣代缴",
            "pid": "1001A11000000000SVJZ",
            "refpk": "1001A11000000000SVS7"
          },
      ]
    },
    {
      "id": "1001A11000000000SVD5",
      "name": "低值易耗品项目",
      "pid": "null",
      "refpk": "1001A11000000000SVD5"
    },
    {
      "id": "1001A11000000000SVK0",
      "name": "生产成本项目",
      "pid": "null",
      "refpk": "1001A11000000000SVK0"
    },
    {
      "id": "1001A11000000000SVK2",
      "name": "工程项目",
      "pid": "null",
      "refpk": "1001A11000000000SVK2"
    },
    {
      "id": "1001A11000000000SVK7",
      "name": "工程合同",
      "pid": "null",
      "refpk": "1001A11000000000SVK7"
    }
  ]

class Demo1 extends Component {
    constructor(props){
        super(props);
        this.state = {
            show: false,
            data: staticdata["1001A11000000000SVW0"],
            commonData: [],
            selectValue: "",
            inputValue: ""
        };
        this.commonColumns = [
          { title: '项目编码', dataIndex: 'refcode', key: 'refcode' },
          { title: '项目名称', dataIndex: 'refname', key: 'refname' },
          { title: '项目简称', dataIndex: 'pk_eps', key: 'pk_eps', render: this.changeHeight.bind(this)},
          {
            title: '操作', dataIndex: '', key: 'd', render: this.renderDelete.bind(this),
          },

        ];
        this.columns = [
            { title: '项目编码', dataIndex: 'refcode', key: 'refcode' },
            { title: '项目名称', dataIndex: 'refname', key: 'refname' },
            { title: '项目简称', dataIndex: 'pk_eps', key: 'pk_eps'},
            {
              title: '操作', dataIndex: '', key: 'd', render: this.renderAdd.bind(this),
            },
        ];
        this.renderAdd = this.renderAdd.bind(this);
        this.renderDelete = this.renderDelete.bind(this);
        this.handleFocus = this.handleFocus.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleAdd = this.handleAdd.bind(this);
        this.close = this.close.bind(this);
        this.onSelect = this.onSelect.bind(this);
        this.onDataSelect = this.onDataSelect.bind(this);
        this.ensure = this.ensure.bind(this);
    }
    changeHeight (text, record, index) {
        return <div style={{ height: 50, lineHeight: 50 }}>{text}</div>
    }
    renderAdd (text, record, index) {
        return <span style={{ cursor: 'pointer' }} onClick={this.handleAdd(record)}><Icon type="uf-plus"></Icon>添加到常用</span>;
    }
    renderDelete (text, record, index) {
         return <Popconfirm content="确认删除?" onClose={this.handleDelete(index)}>
            <span>
            <Icon type="uf-del"></Icon>
            删除
            </span>
          </Popconfirm>;
    }
    onSelect(selectedKeys, info) {
        if(staticdata[selectedKeys[0]]){
            this.setState({
                data: staticdata[selectedKeys[0]]
            });
        }
    }
    onDataSelect (record, index) {
        this.setState({
            selectValue: record.refname
        })
    }
    handleAdd (record) {
        const self = this;
        return function () {
            let data = self.state.commonData;
            data.push(record);
            self.setState({
                commonData: data
            })
        }
    }
    handleDelete (index) {
        const self = this;
        return function () {
            let data = self.state.commonData;
            data.splice(index, 1);
            self.setState({
                commonData: data
            });
        }
    }
    handleFocus () {
        this.setState({
            show: true
        })
    }
    close () {
        this.setState({
            show: false
        })
    }
    ensure () {
        this.setState({
            inputValue: this.state.selectValue,
            show: false
        })
    }
    setClassName (record, index, indent) {
        console.log(record, index);
        console.log(indent);
    }
    render () {
        const { data, commonData } = this.state;
        data.forEach(function (item, index) {
            data.key = index;
        });
        commonData.forEach(function (item, index) {
            commonData.key = index;
        });
        const loop = data => data.map((item) => {
             if (item.children) {
               return (
                 <TreeNode key={item.id} title={<span><Icon type="uf-treefolder"></Icon>{item.name}</span>}>
                   {loop(item.children)}
                 </TreeNode>
               );
             }
             return <TreeNode key={item.id} title={<span><Icon type="uf-box-o-2"></Icon>{item.name}</span>} />;
           });
        return (
            <Row>
                <Col md={10} mdOffset={1}>
                    <FormGroup>
                        <Label>参照例子</Label>
                        <FormControl
                        value={this.state.inputValue}
                        onClick={this.handleFocus}
                        />
                    </FormGroup>
                </Col>
                <Modal show={ this.state.show } size='xlg' onHide={ this.close }>
                   <Modal.Header closeButton>
                       <Modal.Title > 我来组成头部 </Modal.Title>
                   </Modal.Header >
                   <Modal.Body >
                   <Tabs
                     defaultActiveKey="2"
                     renderTabBar={()=><ScrollableInkTabBar />}
                     renderTabContent={()=><TabContent />}
                   >
                   <TabPane tab="常用" key="1">
                       <Table
                       onRowClick = { this.onDataSelect }
                       columns={this.commonColumns}
                       data={commonData}
                       />
                   </TabPane>

                   <TabPane tab="参照" key="2">
                       <div>
                           <Col md={3}>
                           <Tree
                              onSelect={this.onSelect}
                            >
                              {loop(treeData)}
                            </Tree>
                           </Col>
                           <Col md={8}>
                               <Table
                               rowClassName = { this.setClassName }
                               onRowClick = { this.onDataSelect }
                               columns={this.columns}
                               data={data}
                               />
                           </Col>
                       </div>
                   </TabPane>
                   </Tabs>

                   </Modal.Body>
                   <Modal.Footer>
                        <Button onClick={ this.ensure } colors="primary" style={{ marginRight: 50 }}> 确认 </Button>
                       <Button onClick={ this.close }> 关闭 </Button>
                   </Modal.Footer>
               </Modal>
            </Row>
            )
    }
}

const tableData = [
    {
      "pk_bankdoc": "",
      "bd_bankaccsub.accnum": "0252001300000156",
      "refname": "贵州银行00156人民币活期户",
      "pid": "null",
      "refpk": "1001A11000000002I336",
      "id": "0252001300000156",
      "pk_currtype": "人民币",
      "isLeaf": "true",
      "acctype": "活期",
      "bd_bankaccbas.pk_bankaccbas": "贵州银行00156",
      "refcode": "0252001300000156",
      "bd_bankaccbas.code": "0252001300000156",
      "bd_bankaccsub.accname": "贵州银行00156",
      "pk_banktype": "贵州银行"
    },
    {
      "pk_bankdoc": "",
      "bd_bankaccsub.accnum": "133024064168",
      "refname": "中国银行64168人民币活期户",
      "pid": "null",
      "refpk": "1001A11000000002I339",
      "id": "133024064168",
      "pk_currtype": "人民币",
      "isLeaf": "true",
      "acctype": "活期",
      "bd_bankaccbas.pk_bankaccbas": "中国银行64168",
      "refcode": "133024064168",
      "bd_bankaccbas.code": "133024064168",
      "bd_bankaccsub.accname": "中国银行64168",
      "pk_banktype": "中国银行"
    },
    {
      "pk_bankdoc": "",
      "bd_bankaccsub.accnum": "2272010001201100090236.",
      "refname": "茅台农商银行90236人民币活期户",
      "pid": "null",
      "refpk": "1001A11000000002I33C",
      "id": "2272010001201100090236.",
      "pk_currtype": "人民币",
      "isLeaf": "true",
      "acctype": "活期",
      "bd_bankaccbas.pk_bankaccbas": "茅台农商银行90236",
      "refcode": "2272010001201100090236.",
      "bd_bankaccbas.code": "2272010001201100090236.",
      "bd_bankaccsub.accname": "茅台农商银行90236",
      "pk_banktype": "茅台农商银行营业部"
    }
];

class Demo2 extends Component {
    constructor(props){
        super(props);
        this.state = {
            show: false,
            data: tableData,
            commonData: [],
            selectValue: "",
            inputValue: ""
        };
        this.commonColumns = [
          { title: '银行账号', dataIndex: 'id', key: 'id'},
          {  title: '银行户名', dataIndex: 'refname', key: 'refname'},
          { title: '账号编码', dataIndex: 'refpk', key: 'refpk'},
          {
            title: '操作', dataIndex: '', key: 'd', render: this.renderAdd.bind(this),
          },
        ];
        this.columns = [
            { title: '银行账号', dataIndex: 'id', key: 'id'},
            {  title: '银行户名', dataIndex: 'refname', key: 'refname'},
            { title: '账号编码', dataIndex: 'refpk', key: 'refpk'},
          {
            title: '操作', dataIndex: '', key: 'd', render: this.renderDelete.bind(this),
          },
        ];
        this.renderAdd = this.renderAdd.bind(this);
        this.renderDelete = this.renderDelete.bind(this);
        this.handleFocus = this.handleFocus.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleAdd = this.handleAdd.bind(this);
        this.close = this.close.bind(this);
        this.onDataSelect = this.onDataSelect.bind(this);
        this.ensure = this.ensure.bind(this);
    }
    renderAdd (text, record, index) {
        return <span style={{ cursor: 'pointer' }} onClick={this.handleAdd(record)}><Icon type="uf-plus"></Icon>添加到常用</span>;
    }
    renderDelete (text, record, index) {
         return <Popconfirm content="确认删除?" onClose={this.handleDelete(index)}>
            <span>
            <Icon type="uf-del"></Icon>
            删除
            </span>
          </Popconfirm>;
    }
    onDataSelect (record, index) {
        this.setState({
            selectValue: record.refname
        })
    }
    handleAdd (record) {
        const self = this;
        return function () {
            let data = self.state.commonData;
            data.push(record);
            self.setState({
                commonData: data
            })
        }
    }
    handleDelete (index) {
        const self = this;
        return function () {
            let data = self.state.commonData;
            data.splice(index, 1);
            self.setState({
                commonData: data
            });
        }
    }
    handleFocus () {
        this.setState({
            show: true
        })
    }
    close () {
        this.setState({
            show: false
        })
    }
    ensure () {
        this.setState({
            inputValue: this.state.selectValue,
            show: false
        })
    }
    render () {
        const { data, commonData } = this.state;
        console.log(data);
        return (
            <Row>
                <Col md={10} mdOffset={1}>
                    <FormGroup>
                        <Label>参照例子</Label>
                        <FormControl
                        value={this.state.inputValue}
                        onClick={this.handleFocus}
                        />
                    </FormGroup>
                </Col>
                <Modal show={ this.state.show } size='xlg' onHide={ this.close }>
                   <Modal.Header closeButton>
                       <Modal.Title > 我来组成头部 </Modal.Title>
                   </Modal.Header >
                   <Modal.Body >
                   <Tabs
                     defaultActiveKey="2"
                     renderTabBar={()=><ScrollableInkTabBar />}
                     renderTabContent={()=><TabContent />}
                   >
                   <TabPane tab="常用" key="1">
                       <Table
                       onRowClick = { this.onDataSelect }
                       columns={this.columns}
                       data={commonData}
                       />
                   </TabPane>

                   <TabPane tab="参照" key="2">
                       <div>
                               <Table
                               onRowClick = { this.onDataSelect }
                               columns={this.commonColumns}
                               data={data}
                               />
                       </div>
                   </TabPane>
                   </Tabs>

                   </Modal.Body>
                   <Modal.Footer>
                        <Button onClick={ this.ensure } colors="primary" style={{ marginRight: 50 }}> 确认 </Button>
                       <Button onClick={ this.close }> 关闭 </Button>
                   </Modal.Footer>
               </Modal>
            </Row>
            )
    }
}
var DemoArray = [{"example":<Demo1 />,"title":" 这是标题","code":"/**\n*\n* @title 这是标题\n* @description 这是描述\n*\n*/\n\nconst TreeNode = Tree.TreeNode;\n\nconst staticdata = {\n    \"1001A11000000000SVW0\": [\n    {\n      \"planpriority\": \"\",\n      \"pk_org\": \"0001A110000000000BSR\",\n      \"refcode\": \"PM201604050020\",\n      \"pk_group\": \"0001A110000000000BSR\",\n      \"refname\": \"市场拓展费\",\n      \"pk_eps\": \"null\",\n      \"pk_workcalendar\": \"\",\n      \"refpk\": \"1001A11000000000SXPP\",\n      \"project_sh_name\": \"\",\n      \"planmodel\": \"\",\n      \"refjoin\": \"null\"\n    },\n    {\n      \"planpriority\": \"\",\n      \"pk_org\": \"0001A110000000000BSR\",\n      \"refcode\": \"PM201604050021\",\n      \"pk_group\": \"0001A110000000000BSR\",\n      \"refname\": \"零星客户\",\n      \"pk_eps\": \"null\",\n      \"pk_workcalendar\": \"\",\n      \"refpk\": \"1001A11000000000SXPS\",\n      \"project_sh_name\": \"\",\n      \"planmodel\": \"\",\n      \"refjoin\": \"null\"\n    }\n  ],\n  \"1001A11000000000SVX6\": [\n    {\n      \"planpriority\": \"\",\n      \"pk_org\": \"0001A110000000000BSR\",\n      \"refcode\": \"PM201604050020\",\n      \"pk_group\": \"0001A110000000000BSR\",\n      \"refname\": \"市场拓展费2\",\n      \"pk_eps\": \"null\",\n      \"pk_workcalendar\": \"\",\n      \"refpk\": \"1001A11000000000SXPP\",\n      \"project_sh_name\": \"\",\n      \"planmodel\": \"\",\n      \"refjoin\": \"null\"\n    },\n    {\n      \"planpriority\": \"\",\n      \"pk_org\": \"0001A110000000000BSR\",\n      \"refcode\": \"PM201604050021\",\n      \"pk_group\": \"0001A110000000000BSR\",\n      \"refname\": \"零星客户2\",\n      \"pk_eps\": \"null\",\n      \"pk_workcalendar\": \"\",\n      \"refpk\": \"1001A11000000000SXPS\",\n      \"project_sh_name\": \"\",\n      \"planmodel\": \"\",\n      \"refjoin\": \"null\"\n    }\n],\n\"1001A11000000000SVD6\": [\n  {\n    \"planpriority\": \"\",\n    \"pk_org\": \"0001A110000000000BSR\",\n    \"refcode\": \"PM201604050020\",\n    \"pk_group\": \"0001A110000000000BSR\",\n    \"refname\": \"市场拓展费3\",\n    \"pk_eps\": \"null\",\n    \"pk_workcalendar\": \"\",\n    \"refpk\": \"1001A11000000000SXPP\",\n    \"project_sh_name\": \"\",\n    \"planmodel\": \"\",\n    \"refjoin\": \"null\"\n  },\n  {\n    \"planpriority\": \"\",\n    \"pk_org\": \"0001A110000000000BSR\",\n    \"refcode\": \"PM201604050021\",\n    \"pk_group\": \"0001A110000000000BSR\",\n    \"refname\": \"零星客户3\",\n    \"pk_eps\": \"null\",\n    \"pk_workcalendar\": \"\",\n    \"refpk\": \"1001A11000000000SXPS\",\n    \"project_sh_name\": \"\",\n    \"planmodel\": \"\",\n    \"refjoin\": \"null\"\n  }\n]\n};\n\nconst treeData = [\n    {\n      \"id\": \"1001A11000000000SMAB\",\n      \"name\": \"规费及其他\",\n      \"pid\": \"null\",\n      \"refpk\": \"1001A11000000000SMAB\",\n      \"children\": [\n          {\n            \"id\": \"1001A11000000000SVW0\",\n            \"name\": \"内部规费\",\n            \"pid\": \"1001A11000000000SMAB\",\n            \"refpk\": \"1001A11000000000SVW0\"\n          },\n          {\n            \"id\": \"1001A11000000000SVX6\",\n            \"name\": \"外部规费\",\n            \"pid\": \"1001A11000000000SMAB\",\n            \"refpk\": \"1001A11000000000SVX6\"\n          }\n      ]\n    },\n    {\n      \"id\": \"1001A11000000000SVJY\",\n      \"name\": \"业务招待费\",\n      \"pid\": \"null\",\n      \"refpk\": \"1001A11000000000SVJY\",\n      \"children\": [\n          {\n            \"id\": \"1001A11000000000SVD6\",\n            \"name\": \"宣传品\",\n            \"pid\": \"1001A11000000000SVD5\",\n            \"refpk\": \"1001A11000000000SVD6\"\n          },\n          {\n            \"id\": \"1001A11000000000SVD7\",\n            \"name\": \"随附品\",\n            \"pid\": \"1001A11000000000SVD5\",\n            \"refpk\": \"1001A11000000000SVD7\"\n          }\n      ]\n    },\n    {\n      \"id\": \"1001A11000000000SVRZ\",\n      \"name\": \"费用类\",\n      \"pid\": \"1001A11000000000SVJY\",\n      \"refpk\": \"1001A11000000000SVRZ\"\n    },\n    {\n      \"id\": \"1001A11000000000SVS0\",\n      \"name\": \"业务用酒\",\n      \"pid\": \"1001A11000000000SVJY\",\n      \"refpk\": \"1001A11000000000SVS0\"\n    },\n\n    {\n      \"id\": \"1001A11000000000SVS4\",\n      \"name\": \"工薪类\",\n      \"pid\": \"1001A11000000000SVJZ\",\n      \"refpk\": \"1001A11000000000SVS4\",\n      \"children\": [\n          {\n            \"id\": \"1001A11000000000SVJZ\",\n            \"name\": \"工资及附加\",\n            \"pid\": \"null\",\n            \"refpk\": \"1001A11000000000SVJZ\"\n          },\n          {\n            \"id\": \"1001A11000000000SVBN\",\n            \"name\": \"工资代扣项\",\n            \"pid\": \"1001A11000000000SMAB\",\n            \"refpk\": \"1001A11000000000SVBN\"\n          }\n      ]\n    },\n    {\n      \"id\": \"1001A11000000000SVS5\",\n      \"name\": \"社保类\",\n      \"pid\": \"1001A11000000000SVJZ\",\n      \"refpk\": \"1001A11000000000SVS5\",\n      \"children\": [\n          {\n            \"id\": \"1001A11000000000SVS7\",\n            \"name\": \"代扣代缴\",\n            \"pid\": \"1001A11000000000SVJZ\",\n            \"refpk\": \"1001A11000000000SVS7\"\n          },\n      ]\n    },\n    {\n      \"id\": \"1001A11000000000SVD5\",\n      \"name\": \"低值易耗品项目\",\n      \"pid\": \"null\",\n      \"refpk\": \"1001A11000000000SVD5\"\n    },\n    {\n      \"id\": \"1001A11000000000SVK0\",\n      \"name\": \"生产成本项目\",\n      \"pid\": \"null\",\n      \"refpk\": \"1001A11000000000SVK0\"\n    },\n    {\n      \"id\": \"1001A11000000000SVK2\",\n      \"name\": \"工程项目\",\n      \"pid\": \"null\",\n      \"refpk\": \"1001A11000000000SVK2\"\n    },\n    {\n      \"id\": \"1001A11000000000SVK7\",\n      \"name\": \"工程合同\",\n      \"pid\": \"null\",\n      \"refpk\": \"1001A11000000000SVK7\"\n    }\n  ]\n\nclass Demo1 extends Component {\n    constructor(props){\n        super(props);\n        this.state = {\n            show: false,\n            data: staticdata[\"1001A11000000000SVW0\"],\n            commonData: [],\n            selectValue: \"\",\n            inputValue: \"\"\n        };\n        this.commonColumns = [\n          { title: '项目编码', dataIndex: 'refcode', key: 'refcode' },\n          { title: '项目名称', dataIndex: 'refname', key: 'refname' },\n          { title: '项目简称', dataIndex: 'pk_eps', key: 'pk_eps', render: this.changeHeight.bind(this)},\n          {\n            title: '操作', dataIndex: '', key: 'd', render: this.renderDelete.bind(this),\n          },\n\n        ];\n        this.columns = [\n            { title: '项目编码', dataIndex: 'refcode', key: 'refcode' },\n            { title: '项目名称', dataIndex: 'refname', key: 'refname' },\n            { title: '项目简称', dataIndex: 'pk_eps', key: 'pk_eps'},\n            {\n              title: '操作', dataIndex: '', key: 'd', render: this.renderAdd.bind(this),\n            },\n        ];\n        this.renderAdd = this.renderAdd.bind(this);\n        this.renderDelete = this.renderDelete.bind(this);\n        this.handleFocus = this.handleFocus.bind(this);\n        this.handleDelete = this.handleDelete.bind(this);\n        this.handleAdd = this.handleAdd.bind(this);\n        this.close = this.close.bind(this);\n        this.onSelect = this.onSelect.bind(this);\n        this.onDataSelect = this.onDataSelect.bind(this);\n        this.ensure = this.ensure.bind(this);\n    }\n    changeHeight (text, record, index) {\n        return <div style={{ height: 50, lineHeight: 50 }}>{text}</div>\n    }\n    renderAdd (text, record, index) {\n        return <span style={{ cursor: 'pointer' }} onClick={this.handleAdd(record)}><Icon type=\"uf-plus\"></Icon>添加到常用</span>;\n    }\n    renderDelete (text, record, index) {\n         return <Popconfirm content=\"确认删除?\" onClose={this.handleDelete(index)}>\n            <span>\n            <Icon type=\"uf-del\"></Icon>\n            删除\n            </span>\n          </Popconfirm>;\n    }\n    onSelect(selectedKeys, info) {\n        if(staticdata[selectedKeys[0]]){\n            this.setState({\n                data: staticdata[selectedKeys[0]]\n            });\n        }\n    }\n    onDataSelect (record, index) {\n        this.setState({\n            selectValue: record.refname\n        })\n    }\n    handleAdd (record) {\n        const self = this;\n        return function () {\n            let data = self.state.commonData;\n            data.push(record);\n            self.setState({\n                commonData: data\n            })\n        }\n    }\n    handleDelete (index) {\n        const self = this;\n        return function () {\n            let data = self.state.commonData;\n            data.splice(index, 1);\n            self.setState({\n                commonData: data\n            });\n        }\n    }\n    handleFocus () {\n        this.setState({\n            show: true\n        })\n    }\n    close () {\n        this.setState({\n            show: false\n        })\n    }\n    ensure () {\n        this.setState({\n            inputValue: this.state.selectValue,\n            show: false\n        })\n    }\n    setClassName (record, index, indent) {\n        console.log(record, index);\n        console.log(indent);\n    }\n    render () {\n        const { data, commonData } = this.state;\n        data.forEach(function (item, index) {\n            data.key = index;\n        });\n        commonData.forEach(function (item, index) {\n            commonData.key = index;\n        });\n        const loop = data => data.map((item) => {\n             if (item.children) {\n               return (\n                 <TreeNode key={item.id} title={<span><Icon type=\"uf-treefolder\"></Icon>{item.name}</span>}>\n                   {loop(item.children)}\n                 </TreeNode>\n               );\n             }\n             return <TreeNode key={item.id} title={<span><Icon type=\"uf-box-o-2\"></Icon>{item.name}</span>} />;\n           });\n        return (\n            <Row>\n                <Col md={10} mdOffset={1}>\n                    <FormGroup>\n                        <Label>参照例子</Label>\n                        <FormControl\n                        value={this.state.inputValue}\n                        onClick={this.handleFocus}\n                        />\n                    </FormGroup>\n                </Col>\n                <Modal show={ this.state.show } size='xlg' onHide={ this.close }>\n                   <Modal.Header closeButton>\n                       <Modal.Title > 我来组成头部 </Modal.Title>\n                   </Modal.Header >\n                   <Modal.Body >\n                   <Tabs\n                     defaultActiveKey=\"2\"\n                     renderTabBar={()=><ScrollableInkTabBar />}\n                     renderTabContent={()=><TabContent />}\n                   >\n                   <TabPane tab=\"常用\" key=\"1\">\n                       <Table\n                       onRowClick = { this.onDataSelect }\n                       columns={this.commonColumns}\n                       data={commonData}\n                       />\n                   </TabPane>\n\n                   <TabPane tab=\"参照\" key=\"2\">\n                       <div>\n                           <Col md={3}>\n                           <Tree\n                              onSelect={this.onSelect}\n                            >\n                              {loop(treeData)}\n                            </Tree>\n                           </Col>\n                           <Col md={8}>\n                               <Table\n                               rowClassName = { this.setClassName }\n                               onRowClick = { this.onDataSelect }\n                               columns={this.columns}\n                               data={data}\n                               />\n                           </Col>\n                       </div>\n                   </TabPane>\n                   </Tabs>\n\n                   </Modal.Body>\n                   <Modal.Footer>\n                        <Button onClick={ this.ensure } colors=\"primary\" style={{ marginRight: 50 }}> 确认 </Button>\n                       <Button onClick={ this.close }> 关闭 </Button>\n                   </Modal.Footer>\n               </Modal>\n            </Row>\n            )\n    }\n}\n","desc":" 这是描述"},{"example":<Demo2 />,"title":"Demo2","code":"\r\nconst tableData = [\r\n    {\r\n      \"pk_bankdoc\": \"\",\r\n      \"bd_bankaccsub.accnum\": \"0252001300000156\",\r\n      \"refname\": \"贵州银行00156人民币活期户\",\r\n      \"pid\": \"null\",\r\n      \"refpk\": \"1001A11000000002I336\",\r\n      \"id\": \"0252001300000156\",\r\n      \"pk_currtype\": \"人民币\",\r\n      \"isLeaf\": \"true\",\r\n      \"acctype\": \"活期\",\r\n      \"bd_bankaccbas.pk_bankaccbas\": \"贵州银行00156\",\r\n      \"refcode\": \"0252001300000156\",\r\n      \"bd_bankaccbas.code\": \"0252001300000156\",\r\n      \"bd_bankaccsub.accname\": \"贵州银行00156\",\r\n      \"pk_banktype\": \"贵州银行\"\r\n    },\r\n    {\r\n      \"pk_bankdoc\": \"\",\r\n      \"bd_bankaccsub.accnum\": \"133024064168\",\r\n      \"refname\": \"中国银行64168人民币活期户\",\r\n      \"pid\": \"null\",\r\n      \"refpk\": \"1001A11000000002I339\",\r\n      \"id\": \"133024064168\",\r\n      \"pk_currtype\": \"人民币\",\r\n      \"isLeaf\": \"true\",\r\n      \"acctype\": \"活期\",\r\n      \"bd_bankaccbas.pk_bankaccbas\": \"中国银行64168\",\r\n      \"refcode\": \"133024064168\",\r\n      \"bd_bankaccbas.code\": \"133024064168\",\r\n      \"bd_bankaccsub.accname\": \"中国银行64168\",\r\n      \"pk_banktype\": \"中国银行\"\r\n    },\r\n    {\r\n      \"pk_bankdoc\": \"\",\r\n      \"bd_bankaccsub.accnum\": \"2272010001201100090236.\",\r\n      \"refname\": \"茅台农商银行90236人民币活期户\",\r\n      \"pid\": \"null\",\r\n      \"refpk\": \"1001A11000000002I33C\",\r\n      \"id\": \"2272010001201100090236.\",\r\n      \"pk_currtype\": \"人民币\",\r\n      \"isLeaf\": \"true\",\r\n      \"acctype\": \"活期\",\r\n      \"bd_bankaccbas.pk_bankaccbas\": \"茅台农商银行90236\",\r\n      \"refcode\": \"2272010001201100090236.\",\r\n      \"bd_bankaccbas.code\": \"2272010001201100090236.\",\r\n      \"bd_bankaccsub.accname\": \"茅台农商银行90236\",\r\n      \"pk_banktype\": \"茅台农商银行营业部\"\r\n    }\r\n];\r\n\r\nclass Demo2 extends Component {\r\n    constructor(props){\r\n        super(props);\r\n        this.state = {\r\n            show: false,\r\n            data: tableData,\r\n            commonData: [],\r\n            selectValue: \"\",\r\n            inputValue: \"\"\r\n        };\r\n        this.commonColumns = [\r\n          { title: '银行账号', dataIndex: 'id', key: 'id'},\r\n          {  title: '银行户名', dataIndex: 'refname', key: 'refname'},\r\n          { title: '账号编码', dataIndex: 'refpk', key: 'refpk'},\r\n          {\r\n            title: '操作', dataIndex: '', key: 'd', render: this.renderAdd.bind(this),\r\n          },\r\n        ];\r\n        this.columns = [\r\n            { title: '银行账号', dataIndex: 'id', key: 'id'},\r\n            {  title: '银行户名', dataIndex: 'refname', key: 'refname'},\r\n            { title: '账号编码', dataIndex: 'refpk', key: 'refpk'},\r\n          {\r\n            title: '操作', dataIndex: '', key: 'd', render: this.renderDelete.bind(this),\r\n          },\r\n        ];\r\n        this.renderAdd = this.renderAdd.bind(this);\r\n        this.renderDelete = this.renderDelete.bind(this);\r\n        this.handleFocus = this.handleFocus.bind(this);\r\n        this.handleDelete = this.handleDelete.bind(this);\r\n        this.handleAdd = this.handleAdd.bind(this);\r\n        this.close = this.close.bind(this);\r\n        this.onDataSelect = this.onDataSelect.bind(this);\r\n        this.ensure = this.ensure.bind(this);\r\n    }\r\n    renderAdd (text, record, index) {\r\n        return <span style={{ cursor: 'pointer' }} onClick={this.handleAdd(record)}><Icon type=\"uf-plus\"></Icon>添加到常用</span>;\r\n    }\r\n    renderDelete (text, record, index) {\r\n         return <Popconfirm content=\"确认删除?\" onClose={this.handleDelete(index)}>\r\n            <span>\r\n            <Icon type=\"uf-del\"></Icon>\r\n            删除\r\n            </span>\r\n          </Popconfirm>;\r\n    }\r\n    onDataSelect (record, index) {\r\n        this.setState({\r\n            selectValue: record.refname\r\n        })\r\n    }\r\n    handleAdd (record) {\r\n        const self = this;\r\n        return function () {\r\n            let data = self.state.commonData;\r\n            data.push(record);\r\n            self.setState({\r\n                commonData: data\r\n            })\r\n        }\r\n    }\r\n    handleDelete (index) {\r\n        const self = this;\r\n        return function () {\r\n            let data = self.state.commonData;\r\n            data.splice(index, 1);\r\n            self.setState({\r\n                commonData: data\r\n            });\r\n        }\r\n    }\r\n    handleFocus () {\r\n        this.setState({\r\n            show: true\r\n        })\r\n    }\r\n    close () {\r\n        this.setState({\r\n            show: false\r\n        })\r\n    }\r\n    ensure () {\r\n        this.setState({\r\n            inputValue: this.state.selectValue,\r\n            show: false\r\n        })\r\n    }\r\n    render () {\r\n        const { data, commonData } = this.state;\r\n        console.log(data);\r\n        return (\r\n            <Row>\r\n                <Col md={10} mdOffset={1}>\r\n                    <FormGroup>\r\n                        <Label>参照例子</Label>\r\n                        <FormControl\r\n                        value={this.state.inputValue}\r\n                        onClick={this.handleFocus}\r\n                        />\r\n                    </FormGroup>\r\n                </Col>\r\n                <Modal show={ this.state.show } size='xlg' onHide={ this.close }>\r\n                   <Modal.Header closeButton>\r\n                       <Modal.Title > 我来组成头部 </Modal.Title>\r\n                   </Modal.Header >\r\n                   <Modal.Body >\r\n                   <Tabs\r\n                     defaultActiveKey=\"2\"\r\n                     renderTabBar={()=><ScrollableInkTabBar />}\r\n                     renderTabContent={()=><TabContent />}\r\n                   >\r\n                   <TabPane tab=\"常用\" key=\"1\">\r\n                       <Table\r\n                       onRowClick = { this.onDataSelect }\r\n                       columns={this.columns}\r\n                       data={commonData}\r\n                       />\r\n                   </TabPane>\r\n\r\n                   <TabPane tab=\"参照\" key=\"2\">\r\n                       <div>\r\n                               <Table\r\n                               onRowClick = { this.onDataSelect }\r\n                               columns={this.commonColumns}\r\n                               data={data}\r\n                               />\r\n                       </div>\r\n                   </TabPane>\r\n                   </Tabs>\r\n\r\n                   </Modal.Body>\r\n                   <Modal.Footer>\r\n                        <Button onClick={ this.ensure } colors=\"primary\" style={{ marginRight: 50 }}> 确认 </Button>\r\n                       <Button onClick={ this.close }> 关闭 </Button>\r\n                   </Modal.Footer>\r\n               </Modal>\r\n            </Row>\r\n            )\r\n    }\r\n}\r\n","desc":""}]


class Demo extends Component {
    constructor(props){
        super(props);
        this.state = {
            open: false
        }
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        this.setState({ open: !this.state.open })
    }

    render () {
        const { title, example, code, desc  } = this.props;
        let caret = this.state.open ? CARETUP : CARET;
        let text = this.state.open ? "隐藏代码" : "查看代码";

        const footer = (
            <Button shape="block" onClick={ this.handleClick }>
                { caret }
                { text }
            </Button>
        );
        return (
            <Col md={12} >
                <h3>{ title }</h3>
                <p>{ desc }</p>
                <Panel collapsible headerContent expanded={ this.state.open } colors='bordered' header={ example } footer={footer} footerStyle = {{padding: 0}}>
                    <pre><code className="hljs javascript">{ code }</code></pre>
                </Panel>
            </Col>
        )
    }
}

class DemoGroup extends Component {
    constructor(props){
        super(props)
    }
    render () {
        return (
                <Row>
                    {DemoArray.map((child,index) => {

                        return (
                            <Demo example= {child.example} title= {child.title} code= {child.code} desc= {child.desc} key= {index}/>
                        )

                    })}
                </Row>
        )
    }
}

ReactDOM.render(<DemoGroup/>, document.getElementById('tinperBeeDemo'));
