
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
    leaf1: [
      { a: '令狐冲', b: '男', c: 41, key: '1' },
      { a: '杨过', b: '男', c: 67, key: '2' },
      { a: '郭靖', b: '男', c: 25, key: '3' },
  ],
  leaf2: [
    { a: '孙尚香', b: '男', c: 41, key: '1' },
    { a: '刘备', b: '男', c: 67, key: '2' },
    { a: '曹操', b: '男', c: 25, key: '3' },
    ],
    leaf3: [
      { a: '卢俊义', b: '男', c: 41, key: '1' },
      { a: '孙二娘', b: '男', c: 67, key: '2' },
      { a: '武大郎', b: '男', c: 25, key: '3' },
    ]
}

class Demo1 extends Component {
    constructor(props){
        super(props);
        this.state = {
            show: false,
            data: staticdata.leaf1,
            commonData: [],
            selectValue: "",
            inputValue: ""
        };
        this.commonColumns = [
          { title: '用户名', dataIndex: 'a', key: 'a', width: 100 },
          { id: '123', title: '性别', dataIndex: 'b', key: 'b', width: 100 },
          { title: '年龄', dataIndex: 'c', key: 'c', width: 200 },
          {
            title: '操作', dataIndex: '', key: 'd', render: this.renderAdd.bind(this),
          },
        ];
        this.columns = [
          { title: '用户名', dataIndex: 'a', key: 'a', width: 100 },
          { id: '123', title: '性别', dataIndex: 'b', key: 'b', width: 100 },
          { title: '年龄', dataIndex: 'c', key: 'c', width: 200 },
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
        this.onSelect = this.onSelect.bind(this);
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
    onSelect(selectedKeys, info) {
        console.log(/leaf/.test(selectedKeys[0]));
        if(/leaf/.test(selectedKeys[0])){
            this.setState({
                data: staticdata[selectedKeys[0]]
            });
        }
    }
    onDataSelect (record, index) {
        this.setState({
            selectValue: record.a
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
                           <Col md={3}>
                           <Tree
                              onSelect={this.onSelect}
                            >
                              <TreeNode title="parent 1" key="0-0">
                                <TreeNode title="parent 1-0" key="0-0-0">
                                  <TreeNode title="leaf1" key="leaf1" />
                                  <TreeNode title="leaf2" key="leaf2" />
                                </TreeNode>
                                <TreeNode title="parent 1-1" key="0-0-1">
                                  <TreeNode title={<span style={{ color: '#08c' }}>sss</span>} key="leaf3" />
                                </TreeNode>
                              </TreeNode>
                            </Tree>
                           </Col>
                           <Col md={8}>
                               <Table
                               onRowClick = { this.onDataSelect }
                               columns={this.commonColumns}
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
var DemoArray = [{"example":<Demo1 />,"title":" 这是标题","code":"/**\n*\n* @title 这是标题\n* @description 这是描述\n*\n*/\n\nconst TreeNode = Tree.TreeNode;\n\nconst staticdata = {\n    leaf1: [\n      { a: '令狐冲', b: '男', c: 41, key: '1' },\n      { a: '杨过', b: '男', c: 67, key: '2' },\n      { a: '郭靖', b: '男', c: 25, key: '3' },\n  ],\n  leaf2: [\n    { a: '孙尚香', b: '男', c: 41, key: '1' },\n    { a: '刘备', b: '男', c: 67, key: '2' },\n    { a: '曹操', b: '男', c: 25, key: '3' },\n    ],\n    leaf3: [\n      { a: '卢俊义', b: '男', c: 41, key: '1' },\n      { a: '孙二娘', b: '男', c: 67, key: '2' },\n      { a: '武大郎', b: '男', c: 25, key: '3' },\n    ]\n}\n\nclass Demo1 extends Component {\n    constructor(props){\n        super(props);\n        this.state = {\n            show: false,\n            data: staticdata.leaf1,\n            commonData: [],\n            selectValue: \"\",\n            inputValue: \"\"\n        };\n        this.commonColumns = [\n          { title: '用户名', dataIndex: 'a', key: 'a', width: 100 },\n          { id: '123', title: '性别', dataIndex: 'b', key: 'b', width: 100 },\n          { title: '年龄', dataIndex: 'c', key: 'c', width: 200 },\n          {\n            title: '操作', dataIndex: '', key: 'd', render: this.renderAdd.bind(this),\n          },\n        ];\n        this.columns = [\n          { title: '用户名', dataIndex: 'a', key: 'a', width: 100 },\n          { id: '123', title: '性别', dataIndex: 'b', key: 'b', width: 100 },\n          { title: '年龄', dataIndex: 'c', key: 'c', width: 200 },\n          {\n            title: '操作', dataIndex: '', key: 'd', render: this.renderDelete.bind(this),\n          },\n        ];\n        this.renderAdd = this.renderAdd.bind(this);\n        this.renderDelete = this.renderDelete.bind(this);\n        this.handleFocus = this.handleFocus.bind(this);\n        this.handleDelete = this.handleDelete.bind(this);\n        this.handleAdd = this.handleAdd.bind(this);\n        this.close = this.close.bind(this);\n        this.onSelect = this.onSelect.bind(this);\n        this.onDataSelect = this.onDataSelect.bind(this);\n        this.ensure = this.ensure.bind(this);\n    }\n    renderAdd (text, record, index) {\n        return <span style={{ cursor: 'pointer' }} onClick={this.handleAdd(record)}><Icon type=\"uf-plus\"></Icon>添加到常用</span>;\n    }\n    renderDelete (text, record, index) {\n         return <Popconfirm content=\"确认删除?\" onClose={this.handleDelete(index)}>\n            <span>\n            <Icon type=\"uf-del\"></Icon>\n            删除\n            </span>\n          </Popconfirm>;\n    }\n    onSelect(selectedKeys, info) {\n        console.log(/leaf/.test(selectedKeys[0]));\n        if(/leaf/.test(selectedKeys[0])){\n            this.setState({\n                data: staticdata[selectedKeys[0]]\n            });\n        }\n    }\n    onDataSelect (record, index) {\n        this.setState({\n            selectValue: record.a\n        })\n    }\n    handleAdd (record) {\n        const self = this;\n        return function () {\n            let data = self.state.commonData;\n            data.push(record);\n            self.setState({\n                commonData: data\n            })\n        }\n    }\n    handleDelete (index) {\n        const self = this;\n        return function () {\n            let data = self.state.commonData;\n            data.splice(index, 1);\n            self.setState({\n                commonData: data\n            });\n        }\n    }\n    handleFocus () {\n        this.setState({\n            show: true\n        })\n    }\n    close () {\n        this.setState({\n            show: false\n        })\n    }\n    ensure () {\n        this.setState({\n            inputValue: this.state.selectValue,\n            show: false\n        })\n    }\n    render () {\n        const { data, commonData } = this.state;\n        console.log(data);\n        return (\n            <Row>\n                <Col md={10} mdOffset={1}>\n                    <FormGroup>\n                        <Label>参照例子</Label>\n                        <FormControl\n                        value={this.state.inputValue}\n                        onClick={this.handleFocus}\n                        />\n                    </FormGroup>\n                </Col>\n                <Modal show={ this.state.show } size='xlg' onHide={ this.close }>\n                   <Modal.Header closeButton>\n                       <Modal.Title > 我来组成头部 </Modal.Title>\n                   </Modal.Header >\n                   <Modal.Body >\n                   <Tabs\n                     defaultActiveKey=\"2\"\n                     renderTabBar={()=><ScrollableInkTabBar />}\n                     renderTabContent={()=><TabContent />}\n                   >\n                   <TabPane tab=\"常用\" key=\"1\">\n                       <Table\n                       onRowClick = { this.onDataSelect }\n                       columns={this.columns}\n                       data={commonData}\n                       />\n                   </TabPane>\n\n                   <TabPane tab=\"参照\" key=\"2\">\n                       <div>\n                           <Col md={3}>\n                           <Tree\n                              onSelect={this.onSelect}\n                            >\n                              <TreeNode title=\"parent 1\" key=\"0-0\">\n                                <TreeNode title=\"parent 1-0\" key=\"0-0-0\">\n                                  <TreeNode title=\"leaf1\" key=\"leaf1\" />\n                                  <TreeNode title=\"leaf2\" key=\"leaf2\" />\n                                </TreeNode>\n                                <TreeNode title=\"parent 1-1\" key=\"0-0-1\">\n                                  <TreeNode title={<span style={{ color: '#08c' }}>sss</span>} key=\"leaf3\" />\n                                </TreeNode>\n                              </TreeNode>\n                            </Tree>\n                           </Col>\n                           <Col md={8}>\n                               <Table\n                               onRowClick = { this.onDataSelect }\n                               columns={this.commonColumns}\n                               data={data}\n                               />\n                           </Col>\n                       </div>\n                   </TabPane>\n                   </Tabs>\n\n                   </Modal.Body>\n                   <Modal.Footer>\n                        <Button onClick={ this.ensure } colors=\"primary\" style={{ marginRight: 50 }}> 确认 </Button>\n                       <Button onClick={ this.close }> 关闭 </Button>\n                   </Modal.Footer>\n               </Modal>\n            </Row>\n            )\n    }\n}\n","desc":" 这是描述"}]


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
