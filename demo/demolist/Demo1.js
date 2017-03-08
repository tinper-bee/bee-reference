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
